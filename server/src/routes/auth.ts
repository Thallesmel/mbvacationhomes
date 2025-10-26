import express from "express";
import prisma from "../prisma.js";
import bcrypt from "bcrypt";
import redis from "../redis.js";
import { signAccess, signRefresh, verifyRefresh } from "../utils/jwt.js";

const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({ where: { email }});
  if (!user) return res.status(401).json({ error: "invalid" });
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) return res.status(401).json({ error: "invalid" });

  const access = signAccess({ sub: user.id, role: user.role });
  const refresh = signRefresh({ sub: user.id });

  await redis.set(`refresh:${user.id}`, refresh, "EX", 30*24*3600);

  res.cookie("rb", refresh, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/auth/refresh",
    maxAge: 30*24*3600*1000
  });

  res.json({ access });
});

// route to refresh access token
router.post("/refresh", async (req, res) => {
  const token = req.cookies.rb;
  if (!token) return res.status(401).json({ error: "no_refresh" });
  try {
    const payload: any = verifyRefresh(token) as any;
    const userId = payload.sub;
    const stored = await redis.get(`refresh:${userId}`);
    if (stored !== token) return res.status(401).json({ error: "invalid_token" });

    const access = signAccess({ sub: userId });
    // optionally rotate refresh: sign new and update redis + cookie
    res.json({ access });
  } catch (err) {
    return res.status(401).json({ error: "invalid" });
  }
});

// logout
router.post("/logout", async (req, res) => {
  const token = req.cookies.rb;
  if (token) {
    try {
      const payload: any = verifyRefresh(token);
      await redis.del(`refresh:${payload.sub}`);
    } catch {}
  }
  res.clearCookie("rb", { path: "/auth/refresh" });
  res.json({ ok: true });
});

export default router;

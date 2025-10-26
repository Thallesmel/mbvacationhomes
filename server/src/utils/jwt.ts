import jwt from "jsonwebtoken";

const ACCESS_EXP = "15m";
const REFRESH_EXP = "30d";

export function signAccess(payload: object) {
  return jwt.sign(payload, process.env.JWT_ACCESS_SECRET as string, { expiresIn: ACCESS_EXP });
}
export function signRefresh(payload: object) {
  return jwt.sign(payload, process.env.JWT_REFRESH_SECRET as string, { expiresIn: REFRESH_EXP });
}
export function verifyAccess(token: string) {
  return jwt.verify(token, process.env.JWT_ACCESS_SECRET as string);
}
export function verifyRefresh(token: string) {
  return jwt.verify(token, process.env.JWT_REFRESH_SECRET as string);
}

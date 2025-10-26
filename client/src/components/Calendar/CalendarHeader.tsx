interface Props {
  selectedDate: string | null;
}

export function CalendarHeader({ selectedDate }: Props) {
  return (
    <div className="text-center mb-6">
      <h2 className="text-2xl font-semibold text-gray-800">
        Verifique a Disponibilidade
      </h2>
      <p className="text-gray-500">
        {selectedDate
          ? `Data selecionada: ${new Date(selectedDate).toLocaleDateString("pt-BR")}`
          : "Selecione uma data para reserva"}
      </p>
    </div>
  );
}

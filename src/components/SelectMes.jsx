function SelectMes({ mesSelecionado, setMesSelecionado }) {
    const meses = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
    ];

    return (
        <select
            value={mesSelecionado}
            onChange={(e) => setMesSelecionado(e.target.value)}
            className="h-10 bg-slate-200 p-2 rounded-md border border-slate-300"
        >
            {meses.map((mes) => (
                <option key={mes} value={mes}>
                    {mes}
                </option>
            ))}
        </select>
    );
}

export default SelectMes;
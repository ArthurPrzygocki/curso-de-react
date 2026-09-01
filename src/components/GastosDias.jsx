import Dia from "./Dia";

function GastosDias({ dias, onDeleteDia }) {

    const diasAgrupados = dias.reduce((acc, gasto) => {
        const diaExistente = acc.find(
            (item) => item.dia === gasto.dia
        );

        if (diaExistente) {
            diaExistente.gastos.push(gasto);
        } else {
            acc.push({
                dia: gasto.dia,
                mes: gasto.mes,
                ano: gasto.ano,
                gastos: [gasto]
            });
        }

        return acc;
    }, []);

    return (
        <div className="flex flex-wrap gap-2 p-6">
            {diasAgrupados.map((dia) => (
                <Dia
                    key={dia.dia}
                    dia={dia}
                    onDeleteDia={onDeleteDia}
                />
            ))}
        </div>
    );
}

export default GastosDias;
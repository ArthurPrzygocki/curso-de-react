import { useSearchParams } from "react-router-dom";
import Dia from "./Dia";

function GastosDias({ dias, onDeleteDia }) {
    const [searchParams] = useSearchParams();
    const mes = searchParams.get("titleMes");

    const diasDoMes = dias.filter((dia) => dia.mes === mes);

    const diasAgrupados = diasDoMes.reduce((acc, gasto) => {
        const diaExistente = acc.find(
            (item) => item.dia === gasto.dia
        );

        if (diaExistente) {
            diaExistente.gastos.push(gasto);
        } else {
            acc.push({
                dia: gasto.dia,
                mes: gasto.mes,
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
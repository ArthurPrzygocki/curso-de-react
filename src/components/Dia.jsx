import { TrashIcon } from "lucide-react";
import Button from "./Button";

function Dia({ dia, onDeleteDia }) {
    return (
        <div className="bg-slate-300 p-4 rounded-lg">
            <p className="font-bold">
                Dia {dia.dia}
            </p>

            {dia.gastos.map((gasto) => (
                <div key={gasto.id} className="mt-2">
                    <p>{gasto.categorias}</p>
                    <p>R$ {gasto.valor}</p>

                    <Button onClick={() => onDeleteDia(gasto.id)}>
                        <TrashIcon />
                    </Button>
                </div>
            ))}
        </div>
    );
}

export default Dia;
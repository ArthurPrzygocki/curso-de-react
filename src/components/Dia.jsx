
import { TrashIcon } from "lucide-react";
import Button from "./Button";

function Dia({ dia, onDeleteDia }) {
    return (
        <div className="w-[20%] rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">

            {/* Cabeçalho do dia */}
            <div className="mb-3">
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    Dia
                </p>

                <p className="text-xl font-bold text-slate-800">
                    {dia.dia}
                </p>
            </div>

            {/* Gastos */}
            <div className="space-y-2">
                {dia.gastos.map((gasto) => (
                    <div
                        key={gasto.id}
                        className="flex w-fit items-center gap-4 rounded-xl bg-slate-50 px-3 py-2"
                    >
                        <div>
                            <p className="font-medium text-slate-700">
                                {gasto.categorias}
                            </p>

                            <p className="text-sm font-semibold text-red-500">
                                R$ {Number(gasto.valor).toFixed(2)}
                            </p>
                        </div>

                        <Button
                            onClick={() => onDeleteDia(gasto.id)}
                            className="p-1.5 text-slate-400 transition hover:text-red-500"
                        >
                            <TrashIcon size={17} />
                        </Button>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Dia;


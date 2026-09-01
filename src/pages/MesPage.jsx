
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import AddDay from "../components/AddDay";
import Total from "../components/Total";
import { useNavigate } from "react-router-dom";
import GastosDias from "../components/GastosDias";
import { ChevronLeftIcon } from "lucide-react";

function MesPage() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const mes = searchParams.get("mes");
    const ano = searchParams.get("ano");

    const [dias, setDias] = useState(
        JSON.parse(localStorage.getItem("dias")) || []
    );

    const diasDoMes = dias.filter(
        (dia) =>
            String(dia.ano) === String(ano) &&
            dia.mes === mes
    );

    function onAddDiaSubmit(dia, categorias, valor) {
        const newDia = {
            id: dias.length + 1,
            dia,
            ano: String(ano),
            mes: mes,
            categorias,
            valor,
        };

        const novosDias = [...dias, newDia];

        setDias(novosDias);
        localStorage.setItem("dias", JSON.stringify(novosDias));
    }

    function onDeleteDia(id) {
        const novosDias = dias.filter((dia) => dia.id !== id);

        setDias(novosDias);
        localStorage.setItem("dias", JSON.stringify(novosDias));
    }

    return (
        <div className="min-h-screen bg-slate-100 p-6">
            <div className="mx-auto max-w-5xl">

                {/* Cabeçalho */}
                <div className="mb-8 flex items-center gap-4">

                    <button
                        onClick={() => navigate(-1)}
                        className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-slate-600 shadow-sm transition hover:bg-slate-50 hover:text-blue-600"
                    >
                        <ChevronLeftIcon size={22} />
                    </button>

                    <div>
                        <h1 className="text-3xl font-bold text-slate-800">
                            {mes}
                        </h1>

                        <p className="text-slate-500">
                            Gastos de {ano}
                        </p>
                    </div>

                </div>

                {/* Gastos */}
                <div className="rounded-2xl bg-white shadow-sm">

                    <div className="border-b border-slate-100 p-6">
                        <h2 className="text-xl font-semibold text-slate-800">
                            Gastos
                        </h2>

                        <p className="mt-1 text-sm text-slate-500">
                            Visualize e gerencie os gastos deste mês.
                        </p>
                    </div>

                    <GastosDias
                        dias={diasDoMes}
                        onDeleteDia={onDeleteDia}
                    />

                    {/* Adicionar dia */}
                    <div className="border-t border-slate-100 p-6">
                        <AddDay
                            onAddDiaSubmit={onAddDiaSubmit}
                        />
                    </div>

                </div>

                {/* Total */}
                <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm">
                    <Total dias={diasDoMes} />
                </div>

            </div>
        </div>
    );
}

export default MesPage;


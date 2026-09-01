
import Meses from "../components/Meses";
import Anos from "../components/Anos";
import Title from "../components/Title";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calculator, ChartColumnDecreasing } from "lucide-react";

function DinheiroPage() {
    const navigate = useNavigate();

    const [anoSelecionado, setAnoSelecionado] = useState(
        localStorage.getItem("anoSelecionado")
    );

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
        "Dezembro"
    ];

    return (
        <div className="min-h-screen bg-slate-100 p-6">
            <div className="mx-auto w-[70%] space-y-6">

                <Title>Gerenciador de Gastos</Title>

                <Anos
                    anoSelecionado={anoSelecionado}
                    setAnoSelecionado={setAnoSelecionado}
                />

                <div className="rounded-2xl bg-white p-6 shadow-sm">

                    <div className="mb-5">
                        <h2 className="text-xl font-semibold text-slate-800">
                            Meses
                        </h2>

                        <p className="text-sm text-slate-500">
                            Selecione um mês para visualizar seus gastos.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {meses.map((mes) => (
                            <Meses
                                key={mes}
                                mes={mes}
                                ano={anoSelecionado}
                            />
                        ))}
                    </div>

                </div>

                {/* Ações */}
                <div className="mt-6 grid gap-4 sm:grid-cols-2">

                    <button
                        onClick={() => navigate("/calculadora")}
                        className="group rounded-2xl bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                    >
                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                            <Calculator />
                        </div>

                        <h2 className="font-semibold text-slate-800">
                            Calculadora
                        </h2>

                        <p className="mt-1 text-sm text-slate-500">
                            Faça cálculos rapidamente.
                        </p>
                    </button>

                    <button
                        onClick={() => navigate("/grafico")}
                        className="group rounded-2xl bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                    >
                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                            <ChartColumnDecreasing />
                        </div>

                        <h2 className="font-semibold text-slate-800">
                            Gráficos
                        </h2>

                        <p className="mt-1 text-sm text-slate-500">
                            Visualize seus gastos através de gráficos.
                        </p>
                    </button>

                </div>

            </div>
        </div>
    );
}

export default DinheiroPage;


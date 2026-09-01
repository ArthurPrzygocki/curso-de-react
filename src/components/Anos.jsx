
function Anos({ anoSelecionado, setAnoSelecionado }) {

    const anos = JSON.parse(localStorage.getItem("anos")) || [];

    function selecionarAno(ano) {
        setAnoSelecionado(ano);
        localStorage.setItem("anoSelecionado", ano);
    }

    return (
        <div className="rounded-2xl bg-white p-6 shadow-sm">

            <div className="mb-5">
                <h2 className="text-xl font-semibold text-slate-800">
                    Ano
                </h2>

                <p className="text-sm text-slate-500">
                    Selecione um ano para visualizar seus gastos.
                </p>
            </div>

            <div className="flex flex-wrap gap-2">
                {anos.map((ano) => (
                    <button
                        key={ano}
                        onClick={() => selecionarAno(ano)}
                        className={`flex w-32 items-center justify-center rounded-xl border px-5 py-2.5 font-medium transition
                            ${
                                String(anoSelecionado) === String(ano)
                                    ? "border-blue-500 bg-blue-500 text-white"
                                    : "border-slate-200 bg-slate-50 text-slate-700 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600"
                            }
                        `}
                    >
                        {ano}
                    </button>
                ))}
            </div>

        </div>
    );
}

export default Anos;
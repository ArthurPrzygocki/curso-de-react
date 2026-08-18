import Meses from "../components/Meses";
import Title from "../components/Title";
import { useNavigate } from "react-router-dom";


function DinheiroPage() {
    const navigate = useNavigate();
    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];    

    return (
        <div className="w-screen h-screen bg-slate-500 justify-center p-6 flex">
            <div className="w-[70%] space-y-4 bg-slate-400"> <Title>Gerenciador de Gastos</Title>
                <div className="flex flex-wrap gap-2 p-6">
                    {meses.map((mes) => (
                        <Meses key={mes} mes={mes} />
                    ))}
                </div>
                <div className="gap-2 p-6 flex">
                    <button onClick={() => navigate("/calculadora")} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Calculadora
                    </button>
                    <button onClick={() => navigate("/grafico")} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Graficos
                    </button>

                </div>
            </div>
        </div>
    );
}

export default DinheiroPage;
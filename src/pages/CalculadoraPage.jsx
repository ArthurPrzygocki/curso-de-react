import Title from "../components/Title";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";


function CalculadoraPage() {
    const [operacao, setOperacao] = useState(localStorage.getItem("operacao") || "");
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem("operacao", operacao);
    }, [operacao]);

    return (
        <div className="w-screen h-screen bg-slate-500 justify-center p-6 flex">
            
            <div className="w-[30%] h-[85%] space-y-4 bg-slate-400 p-6 rounded-md">
                <div className="text-center w-[50%] flex gap-x-[40%]"><button onClick={() => navigate(-1)} className=" text-slate-100"><ChevronLeftIcon /></button><Title>Calculadora</Title></div>
                <div className="flex justify-center">
                    <div className="w-80 bg-slate-200 p-4 rounded-lg space-y-4">

                        {/* Display */}
                        <input
                            type="text"
                            className="w-full bg-white p-4 rounded-md text-right text-2xl"
                            readOnly
                            value={operacao}
                            placeholder="|"
                        />

                        {/* Botões */}
                        <div className="grid grid-cols-4 gap-2">
                            <button onClick={() => setOperacao(operacao + '7')} className="bg-slate-400 p-4 rounded-md">7</button>
                            <button onClick={() => setOperacao(operacao + '8')} className="bg-slate-400 p-4 rounded-md">8</button>
                            <button onClick={() => setOperacao(operacao + '9')} className="bg-slate-400 p-4 rounded-md">9</button>
                            <button onClick={() => setOperacao(operacao + '/')} className="bg-orange-400 p-4 rounded-md">÷</button>

                            <button onClick={() => setOperacao(operacao + '4')} className="bg-slate-400 p-4 rounded-md">4</button>
                            <button onClick={() => setOperacao(operacao + '5')} className="bg-slate-400 p-4 rounded-md">5</button>
                            <button onClick={() => setOperacao(operacao + '6')} className="bg-slate-400 p-4 rounded-md">6</button>
                            <button onClick={() => setOperacao(operacao + '*')} className="bg-orange-400 p-4 rounded-md">x</button>

                            <button onClick={() => setOperacao(operacao + '1')} className="bg-slate-400 p-4 rounded-md">1</button>
                            <button onClick={() => setOperacao(operacao + '2')} className="bg-slate-400 p-4 rounded-md">2</button>
                            <button onClick={() => setOperacao(operacao + '3')} className="bg-slate-400 p-4 rounded-md">3</button>
                            <button onClick={() => setOperacao(operacao + '-')} className="bg-orange-400 p-4 rounded-md">−</button>

                            <button onClick={() => setOperacao(operacao + '0')} className="bg-slate-400 p-4 rounded-md">0</button>
                            <button onClick={() => setOperacao(operacao + '.')} className="bg-slate-400 p-4 rounded-md">.</button>
                            <button onClick={() => setOperacao('')} className="bg-red-400 p-4 rounded-md">C</button>
                            <button onClick={() => setOperacao(operacao + '+')} className="bg-orange-400 p-4 rounded-md">+</button>

                            <button onClick={() => setOperacao(eval(operacao))} className="col-span-4 bg-green-400 p-4 rounded-md">
                                =
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default CalculadoraPage;
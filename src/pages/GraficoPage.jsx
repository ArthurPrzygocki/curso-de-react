import Title from "../components/Title";
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";
import Grafico from "../components/Grafico";

function GraficoPage() {
    const navigate = useNavigate();
    return (
        <div className="w-screen h-screen bg-slate-500 justify-center p-6 flex">
            <div className="w-[100%] h-[100%] space-y-4 bg-slate-400 p-4 rounded-md">
                <button onClick={() => navigate(-1)} className=" text-slate-100"><ChevronLeftIcon /></button>
                <Title>Gráficos</Title>
                <div className="">
                    <Grafico />
                </div>
            </div>
        </div>
    );
}

export default GraficoPage;
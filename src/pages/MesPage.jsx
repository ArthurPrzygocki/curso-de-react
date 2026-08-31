import { useSearchParams } from "react-router-dom";
import Title from "../components/Title";
import { useState } from "react";
import AddDay from "../components/AddDay";
import Total from "../components/Total";
import { useNavigate } from "react-router-dom";
import GastosDias from "../components/GastosDias";
import { ChevronLeftIcon } from "lucide-react";

function MesPage(){
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const mes = searchParams.get("titleMes");
    const [dias, setDias] = useState(JSON.parse(localStorage.getItem("dias")) || []);
    const diasDoMes = dias.filter((dia) => dia.mes === mes);

    function onAddDiaSubmit(dia, categorias, valor) {
        const newDia = {
            id: dias.length + 1,
            dia,
            mes: mes,
            categorias,
            valor,
        };
        setDias([...dias, newDia]);
        localStorage.setItem("dias", JSON.stringify([...dias, newDia]));
    }
    function onDeleteDia(id) {
        const novosDias = dias.filter((dia) => dia.id !== id);

        setDias(novosDias);
        localStorage.setItem("dias", JSON.stringify(novosDias));
}
    
    return(
        <div className="w-screen h-screen bg-slate-500 justify-center p-6 flex">
            <div className="w-[70%] space-y-4 bg-slate-400"> 
                <Title>{mes}</Title>
                <button onClick={() => navigate(-1)} className="absolute left-0 top-0 bottom-0 text-slate-100"><ChevronLeftIcon /></button>
                
                <GastosDias dias={dias} onDeleteDia={onDeleteDia}/>
                <div className="flex flex-wrap gap-2 p-6"><AddDay onAddDiaSubmit={onAddDiaSubmit} /></div>
                <Total dias={diasDoMes} />
            </div>
        </div>
    )
}

export default MesPage

import { useNavigate } from "react-router-dom";

function Meses({ mes, ano }) {
    const navigate = useNavigate();

    function onSeeMesClick() {
        if (!ano) {
            alert("Selecione um ano primeiro.");
            return;
        }

        navigate(`/mes?ano=${ano}&mes=${mes}`);
    }

    return (
        <button
            onClick={onSeeMesClick}
            className="w-32 rounded-xl bg-green-400 p-2 text-center text-white transition hover:bg-green-500"
        >
            {mes}
        </button>
    );
}

export default Meses;
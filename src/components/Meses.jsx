import { useNavigate } from "react-router-dom";

function Meses({ mes }) {
    const navigate = useNavigate();

    function onSeeMesClick() {
        const query = new URLSearchParams();
        query.set("titleMes", mes);

        navigate(`/mes?${query.toString()}`);
    }

    return (
        <button
            onClick={onSeeMesClick}
            className="bg-green-400 text-center w-32 text-white p-2 rounded-md"
        >
            {mes}
        </button>
    );
}

export default Meses;
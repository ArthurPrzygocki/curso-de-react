import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";

function Grafico() {
    const dados = [
        { categoria: "Alimentação", valor: 500 },
        { categoria: "Transporte", valor: 200 },
        { categoria: "Lazer", valor: 150 },
        { categoria: "Contas", valor: 800 },
    ];

    return (
        <BarChart width={600} height={400} data={dados}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="categoria" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="valor" />
        </BarChart>
    );
}

export default Grafico;
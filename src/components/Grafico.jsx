import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

import { useState, useEffect } from "react";

function Grafico() {
    const [dias, setDias] = useState([]);

    useEffect(() => {
        const dados = JSON.parse(localStorage.getItem("dias")) || [];
        setDias(dados);
    }, []);

    const dadosGrafico = dias.reduce((acc, dia) => {
        const categoria = dia.categorias[0];

        const existente = acc.find(
            (item) => item.categoria === categoria
        );

        if (existente) {
            existente.valor += Number(dia.valor);
        } else {
            acc.push({
                categoria: categoria,
                valor: Number(dia.valor),
            });
        }

        return acc;
    }, []);

    return (
        <ResponsiveContainer width="100%" height={400}>
            <BarChart data={dadosGrafico}>
                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="categoria" />

                <YAxis />

                <Tooltip />

                <Bar dataKey="valor" />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default Grafico;
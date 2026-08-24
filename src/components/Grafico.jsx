import {
    BarChart,
    Bar,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

import { useState, useEffect } from "react";
import SelectMes from "./SelectMes";

function Grafico() {
    const [dias, setDias] = useState([]);
    const [mesSelecionado, setMesSelecionado] = useState("Janeiro");

    
    useEffect(() => {
        const dados = JSON.parse(localStorage.getItem("dias")) || [];
        setDias(dados);
    }, []);

    // Filtra os gastos pelo mês selecionado
    const diasDoMes = dias.filter(
        (dia) => dia.mes === mesSelecionado
    );

    // Dados para o gráfico de categorias
    const dadosGraficoCategoria = diasDoMes.reduce((acc, dia) => {
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

    // Dados para o gráfico de gastos por dia
    const dadosGraficoDia = diasDoMes.reduce((acc, dia) => {
        const diaAtual = dia.dia;

        const existente = acc.find(
            (item) => item.dia === diaAtual
        );

        if (existente) {
            existente.valor += Number(dia.valor);
        } else {
            acc.push({
                dia: diaAtual,
                valor: Number(dia.valor),
            });
        }

        return acc;
    }, []);

    return (
        <div className="w-full">

            <SelectMes
                mesSelecionado={mesSelecionado}
                setMesSelecionado={setMesSelecionado}
            />

            <div className="flex gap-6 w-full mt-6">

                {/* Gráfico por categoria */}
                <div className="w-1/2">
                    <h2 className="text-xl font-bold mb-2">
                        Gastos por categoria
                    </h2>

                    <ResponsiveContainer width="100%" height={400}>
                        <BarChart data={dadosGraficoCategoria}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="categoria" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="valor" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className="w-1/2">
                    <h2 className="text-xl font-bold mb-2">
                        Gastos por dia
                    </h2>

                    <ResponsiveContainer width="100%" height={400}>
                        <LineChart data={dadosGraficoDia}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="dia" />
                            <YAxis />
                            <Tooltip />
                            <Line
                                type="monotone"
                                dataKey="valor"
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

            </div>
        </div>
    );
}

export default Grafico;
function Total({ dias }) {
    const total = dias.reduce((soma, dia) => {
        return soma + dia.valor;
    }, 0);

    return (
        <h1>Total: R$ {total.toFixed(2)}</h1>
    );
}

export default Total;
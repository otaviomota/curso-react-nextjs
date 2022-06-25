export default function jsx01() {

    const subtitulo = "Arquivo JSX";

    function gerarLista(final = 10) {
        const lista = [];
        for (let i = 1; i <= final; i++) {
            lista.push(<span>{i}, </span>)
        }

        return lista;
    }

    return (
        <hgroup>
            <h1>Otavio Mota</h1>
            <h2>{subtitulo}</h2>
            <h3>{3 * 4}</h3>

            <div>{gerarLista(25)}</div>
        </hgroup>
    );
}
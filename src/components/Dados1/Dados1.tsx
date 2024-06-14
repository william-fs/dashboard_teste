import './Dados1.css';
import {useState} from 'react';

function Dados1() {

    // Estado das seleções
    const [selectValor1, setSelectValor1] = useState("");
    const [selectValor2, setSelectValor2] = useState("");

    // Valores usados nos campos 
    const valores = [
        {valor: "categoria", conteudo: "Categoria"},
        {valor: "fabricante", conteudo: "Fabricante"},
        {valor: "cor", conteudo: "Cor"},
        {valor: "ano", conteudo: "Ano"},
        {valor: "mes", conteudo: "Mês"}
    ]

    // Funções ao mudar os campos 1 e 2 
    function handleOpt1(info:string) {
        setSelectValor1(info);
    }

    function handleOpt2(info:string) {
        setSelectValor2(info);
    }

    // Filtro dos campos selecionados, caso eles sejam iguais 
    function filtro(valorSelecionado:string) {
        return valores.filter(opt => opt.valor !== valorSelecionado);
    }
    // Atribuição do filtro para fazer o Map e gerar as options 
    const valorFiltrado1 = filtro(selectValor2);
    const valorFiltrado2 = filtro(selectValor1);

    return(
        <div>
            <select>
                <option value="preco">Preço</option>
                <option value="quantidade">Quantidade</option>
            </select>

            <select value={selectValor1} onChange={(e) => handleOpt1(e.target.value)}>
                <option value="nulo1">-</option>
                {
                    valorFiltrado1.map((e, i) => (
                        <option key={"select1"+i} value={e.valor}>{e.conteudo}</option>
                    ))
                }
            </select>

            <select value={selectValor2} onChange={(e) => handleOpt2(e.target.value)}>
                <option value="nulo2">-</option>
                {
                    valorFiltrado2.map((e, i) => (
                        <option key={"select2"+i} value={e.valor}>{e.conteudo}</option>
                    ))
                }
            </select>

        </div>
    )
}
export default Dados1;
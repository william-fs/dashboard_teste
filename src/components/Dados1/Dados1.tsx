import './Dados1.css';
import {useEffect, useState} from 'react';
import TabelaDados1 from './TabelaDados1';

// Valores usados nos campos 
import {valores} from "./TotalSelect";

function Dados1(): React.FC | React.ReactElement {

    // Estado das seleções colocando no select o valor selecionado
    const [selectValor0, setSelectValor0] = useState("nulo0");
    const [selectValor1, setSelectValor1] = useState("nulo1");
    const [selectValor2, setSelectValor2] = useState("nulo2");

    // Funções ao mudar os campos 0, 1 e 2, atribuindo o option no select
    function handleOpt0(info:string) {setSelectValor0(info);}
    function handleOpt1(info:string) {setSelectValor1(info);}
    function handleOpt2(info:string) {setSelectValor2(info);}

    // Filtro dos campos selecionados, caso eles sejam iguais 
    function filtroComparativo(valorSelecionado:string) {
        return valores.filter(opt => opt.valor !== valorSelecionado);
    }

    // Atribuição do filtro para fazer o Map no html e gerar as options sem duplicação
    const valorFiltrado1 = filtroComparativo(selectValor2);
    const valorFiltrado2 = filtroComparativo(selectValor1);

    // Filtro para adicionar o campo Correto de conteúdo na tabela 
    const [contentSelecionado0, setContentSelecionado0] = useState("");
    const [contentSelecionado1, setContentSelecionado1] = useState("");
    const [contentSelecionado2, setContentSelecionado2] = useState("");

    // Filtro para zerar os campos caso valor inicial seja vazio 
    function filterContent0() {
        if(selectValor0 === "nulo0") {setContentSelecionado0("nulo0"); setContentSelecionado1("nulo1"); setContentSelecionado2("nulo2"); setSelectValor1("nulo1"); setSelectValor2("nulo2")}
        if(selectValor0 === "preco") {setContentSelecionado0("Preço");}
        if(selectValor0 === "quantidade") {setContentSelecionado0("Quantidade");}
    }

    useEffect(() => {filterContent0(); return},[selectValor0])

    // Filtro para atribuir o Content correto na exibição da lista ao invés do valor 
    function filterContent1() {
        valores.filter((e) => {
            if(e.valor === selectValor1) {
                setContentSelecionado1(e.conteudo);
            }
        })
    }
    useEffect(() => {filterContent1(); return;},[selectValor1])

    function filterContent2() {
        valores.filter((e) => {
            if(e.valor === selectValor2) {
                setContentSelecionado2(e.conteudo);
            }
        })
    }
    useEffect(() => {filterContent2();},[selectValor2])

    // Condicional Render da tabela 
    const [condicional1, setCondicional1] = useState(false);

    useEffect(() => {
        if(selectValor0 === "nulo0" || selectValor1 === "nulo1") {
            setCondicional1(false);
        } 

        if(selectValor0 !== "nulo0" && selectValor1 !== "nulo1") {
            setCondicional1(true);
        }

    },[selectValor0, selectValor1, contentSelecionado0, contentSelecionado1])

    return(
        <div className='dados1'>

            <div className="camposFonte1">
                <select value={selectValor0} onChange={(e) => handleOpt0(e.target.value)} className="form-select">
                    <option value="nulo0">-</option>
                    <option value="preco">Preço</option>
                    <option value="quantidade">Quantidade</option>
                </select>

                <select value={selectValor1} onChange={(e) => handleOpt1(e.target.value)} className="form-select">
                    <option value="nulo1">-</option>
                    {
                        valorFiltrado1.map((e, i) => (
                            <option key={"select1"+i} value={e.valor}>{e.conteudo}</option>
                        ))
                    }
                </select>

                <select value={selectValor2} onChange={(e) => handleOpt2(e.target.value)} className="form-select">
                    <option value="nulo2">-</option>
                    {
                        valorFiltrado2.map((e, i) => (
                            <option key={"select2"+i} value={e.valor}>{e.conteudo}</option>
                        ))
                    }
                </select>
            </div>

            {condicional1 && (
                <TabelaDados1
                    contentSelecionado0={contentSelecionado0}
                    contentSelecionado1={contentSelecionado1}
                    contentSelecionado2={contentSelecionado2}
                />
            )} 

        </div>
    )
}

export default Dados1;
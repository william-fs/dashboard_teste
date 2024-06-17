import './Dados1.css';
import {useEffect, useState} from 'react';

// Valores usados nos campos 
import {valores} from "./TotalSelect";
// Import Categoria tratadas, preço e quantidade
import {categorias, fabricantes, cores, anos, meses} from "./TotalSelect";
import {somarPrecoCatElet, somarQuantidadeCatElet} from "./TotalSelect";
import {somarPrecoCatMov, somarQuantidadeCatMov} from "./TotalSelect";
import {somarPrecoCatRou, somarQuantidadeCatRou} from "./TotalSelect";
import {somarPrecoCatLiv, somarQuantidadeCatLiv} from "./TotalSelect";
import {somarPrecoCatBel, somarQuantidadeCatBel} from "./TotalSelect";
// Import Fabricantes tratados
import {somarPrecoFabX, somarPrecoFabY, somarPrecoFabZ} from "./TotalSelect";
import {somarQuantidadeFabX, somarQuantidadeFabY, somarQuantidadeFabZ} from "./TotalSelect";
import Tabela2Campos from '../Tabela2Campos/Tabela2Campos';

function Dados1() {

    // Somas totais para usar nos estados de atualização da tabela dinâmica 
    // Categorias 
    const totalPrecoCategoria = [somarPrecoCatElet+somarPrecoCatMov+somarPrecoCatRou+somarPrecoCatLiv+somarPrecoCatBel];
    const categoriaPrecos = [somarPrecoCatElet, somarPrecoCatMov, somarPrecoCatRou, somarPrecoCatLiv, somarPrecoCatBel];
    // Fabricantes 
    const totalPrecoFabricante = [somarPrecoFabX+somarPrecoFabY+somarPrecoFabZ];
    const fabricantePrecos = [somarPrecoFabX, somarPrecoFabY, somarPrecoFabZ];

    useEffect(() => {
        console.log("categoria: " + totalPrecoCategoria);
        console.log(`****`);
        console.log("fabricante " + totalPrecoFabricante);
    },[])

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
    useEffect(() => {
        // Caso tente selecionar fora da ordem da solicitação das infos nos campos select 
        if(selectValor0 === "nulo0") {
            setSelectValor0("nulo0"); 
            setSelectValor1("nulo1"); 
            setSelectValor2("nulo2"); 
            setPrecoSelecionado(false); 
            setPrecoSelecionado3Campos(false); 
            return;}
        if(selectValor1 === "nulo1") {
            setSelectValor2("nulo2"); 
            setPrecoSelecionado(false); 
            setPrecoSelecionado3Campos(false); 
            return;}
        if(selectValor2 === "nulo2") {
            setPrecoSelecionado3Campos(false);
        }
        return;
    },[selectValor0, selectValor1, selectValor2, contentSelecionado0, contentSelecionado1, contentSelecionado2]);

    const [precoSelecionado, setPrecoSelecionado] = useState(false);
    const [precoSelecionado3Campos, setPrecoSelecionado3Campos] = useState(false);

    useEffect(() => {
        // Caso Preço selecionado
        if(selectValor0 === "preco") {
            // 2 CAMPOS 
            if(selectValor1 === "categoria") {
                setPrecoSelecionado(true);
                setCampoDetalhamento1(categorias);
                setCampoDetalhamento1Preco(categoriaPrecos);
                setCampoDetalhamento1Total(totalPrecoCategoria);
                
            }
            if(selectValor1 === "fabricante") {
                setPrecoSelecionado(true);
                setCampoDetalhamento1(fabricantes);
                setCampoDetalhamento1Preco(fabricantePrecos);
                setCampoDetalhamento1Total(totalPrecoFabricante);
                
            }

            // 3 CAMPOS 
            if(selectValor1 === "categoria" && selectValor2 === "fabricante") {
                setPrecoSelecionado(false);
                setPrecoSelecionado(false);
                setPrecoSelecionado3Campos(true);
                
            }
        }
        return;
    },[selectValor0, selectValor1, selectValor2, contentSelecionado0, contentSelecionado1, contentSelecionado2]);

    // Estados para criar de forma dinâmica a tabela com as 2 primeiras informações 
    const [campoDetalhamento1, setCampoDetalhamento1] = useState<string[]>([]);
    const [campoDetalhamento1Preco, setCampoDetalhamento1Preco] = useState<number[]>([]);
    const [campoDetalhamento1Total, setCampoDetalhamento1Total] = useState<number[]>([]);
    

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

            {precoSelecionado && (
                <Tabela2Campos 
                    titleTable={
                        <tr>
                            <td colSpan={2}>{contentSelecionado1}</td>
                        </tr>
                    }
                    contentTable={
                        <>
                            {(campoDetalhamento1).map((e, i) => (
                                <tr key={i}>
                                    <td>{e}</td>
                                    <td>{campoDetalhamento1Preco[i].toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</td>
                                </tr>
                            ))}
                        </>
                    }
                    totalTable={
                        <tr>
                            <td style={{fontWeight:"bold"}}>Total</td>
                            <td style={{fontWeight:"bold"}}>{campoDetalhamento1Total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</td>
                        </tr>
                    }
                />
            )}     

            {precoSelecionado3Campos && (
                <h1>Preço, Categoria e fabricante</h1>
            )}   

        </div>
    )
}

export default Dados1;
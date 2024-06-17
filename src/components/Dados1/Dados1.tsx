import './Dados1.css';
import {useEffect, useState} from 'react';
import Tabela from '../Tabela/Tabela';

// Fonte de dados 
import dados1 from "../../dados/fonte_de_dados_1.json";

// Valores usados nos campos 
import {valores} from "./TotalSelect";

// Import valores de soma/total referente ao primeiro campo:
// Import Categoria tratadas 
import {categorias, fabricantes, cores, anos, meses} from "./TotalSelect";
import {somarPrecoCatElet, somarQuantidadeCatElet} from "./TotalSelect";
import {somarPrecoCatMov, somarQuantidadeCatMov} from "./TotalSelect";
import {somarPrecoCatRou, somarQuantidadeCatRou} from "./TotalSelect";
import {somarPrecoCatLiv, somarQuantidadeCatLiv} from "./TotalSelect";
import {somarPrecoCatBel, somarQuantidadeCatBel} from "./TotalSelect";
// Import Fabricantes tratados
import {somarPrecoFabX, somarPrecoFabY, somarPrecoFabZ} from "./TotalSelect";
import {somarQuantidadeFabX, somarQuantidadeFabY, somarQuantidadeFabZ} from "./TotalSelect";
// Import Cores tratadas 
import {somarPrecoCorVerm, somarPrecoCorAzul, somarPrecoCorVerde, somarPrecoCorPreto, somarPrecoCorBranco, somarPrecoCorCinza} from "./TotalSelect";
import {somarQuantidadeCorVerm, somarQuantidadeCorAzul, somarQuantidadeCorVerde, somarQuantidadeCorPreto, somarQuantidadeCorBranco, somarQuantidadeCorCinza} from "./TotalSelect";
// Import Anos tratados 
import {somarPrecoAno2021, somarPrecoAno2022, somarPrecoAno2023} from "./TotalSelect";
import {somarQuantidadeAno2021, somarQuantidadeAno2022, somarQuantidadeAno2023} from "./TotalSelect";
// Import Meses tratados 
import {somarPrecoMesJan, somarPrecoMesFev, somarPrecoMesMar, somarPrecoMesAbr, somarPrecoMesMai, somarPrecoMesJun, somarPrecoMesJul, somarPrecoMesAgo, somarPrecoMesSet, somarPrecoMesOut} from "./TotalSelect";
import {somarQuantidadeMesJan, somarQuantidadeMesFev, somarQuantidadeMesMar, somarQuantidadeMesAbr, somarQuantidadeMesMai, somarQuantidadeMesJun, somarQuantidadeMesJul, somarQuantidadeMesAgo, somarQuantidadeMesSet, somarQuantidadeMesOut} from "./TotalSelect";

function Dados1() {

    // "Somas totais" para usar nos estados de atualização da tabela dinâmica 
    // Categorias 
    const categoriaPrecos = [somarPrecoCatElet, somarPrecoCatMov, somarPrecoCatRou, somarPrecoCatLiv, somarPrecoCatBel];
    const totalPrecoCategoria = [somarPrecoCatElet+somarPrecoCatMov+somarPrecoCatRou+somarPrecoCatLiv+somarPrecoCatBel];
    // Fabricantes 
    const fabricantePrecos = [somarPrecoFabX, somarPrecoFabY, somarPrecoFabZ];
    const totalPrecoFabricante = [somarPrecoFabX+somarPrecoFabY+somarPrecoFabZ];
    // Cores 
    const corPrecos = [somarPrecoCorVerm, somarPrecoCorAzul, somarPrecoCorVerde, somarPrecoCorPreto, somarPrecoCorBranco, somarPrecoCorCinza];
    const totalPrecoCor = [somarPrecoCorVerm+somarPrecoCorAzul+somarPrecoCorVerde+somarPrecoCorPreto+somarPrecoCorBranco+somarPrecoCorCinza];
    // Anos
    const anoPrecos = [somarPrecoAno2021, somarPrecoAno2022, somarPrecoAno2023];
    const totalPrecoAno = [somarPrecoAno2021+somarPrecoAno2022+somarPrecoAno2023];
    // Meses 
    const mesPrecos = [somarPrecoMesJan, somarPrecoMesFev, somarPrecoMesMar, somarPrecoMesAbr, somarPrecoMesMai, somarPrecoMesJun, somarPrecoMesJul, somarPrecoMesAgo, somarPrecoMesSet, somarPrecoMesOut];
    const totalPrecoMes = [somarPrecoMesJan+somarPrecoMesFev+somarPrecoMesMar+somarPrecoMesAbr+somarPrecoMesMai+somarPrecoMesJun+somarPrecoMesJul+somarPrecoMesAgo+somarPrecoMesSet+somarPrecoMesOut];
    
    // *** NÃO ALTERAR *** 
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

    // ***/ NÃO ALTERAR *** 

    // Condicional Render da tabela 
    useEffect(() => {
        // Caso tente selecionar fora da ordem na solicitação das infos nos campos select 
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
    
    // Regras de seleções Campos 
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
            if(selectValor1 === "cor") {
                setPrecoSelecionado(true);
                setCampoDetalhamento1(cores);
                setCampoDetalhamento1Preco(corPrecos);
                setCampoDetalhamento1Total(totalPrecoCor);
            }
            if(selectValor1 === "ano") {
                setPrecoSelecionado(true);
                setCampoDetalhamento1(anos);
                setCampoDetalhamento1Preco(anoPrecos);
                setCampoDetalhamento1Total(totalPrecoAno);
            }
            if(selectValor1 === "mes") {
                // Obs: Tratamento dos meses de número para texto 
                const mesesStr = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro"];
                const mesesConvertidos = meses.map(numero => mesesStr[numero - 1]);
                setPrecoSelecionado(true);
                setCampoDetalhamento1(mesesConvertidos);
                setCampoDetalhamento1Preco(mesPrecos);
                setCampoDetalhamento1Total(totalPrecoMes);
            }

            // 3 CAMPOS 
            // CATEGORIA 
            if(selectValor1 === "categoria" && selectValor2 === "fabricante") {
                setPrecoSelecionado(false);
                setPrecoSelecionado(false);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(fabricantes)
                setCampoDetalhamento2contet(fabricantes);
            }

            if(selectValor1 === "categoria" && selectValor2 === "cor") {
                setPrecoSelecionado(false);
                setPrecoSelecionado(false);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(cores)
                setCampoDetalhamento2contet(cores);
            }

            if(selectValor1 === "categoria" && selectValor2 === "ano") {
                setPrecoSelecionado(false);
                setPrecoSelecionado(false);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(anos)
                setCampoDetalhamento2contet(anos);
            }

            if(selectValor1 === "categoria" && selectValor2 === "mes") {
                setPrecoSelecionado(false);
                setPrecoSelecionado(false);
                setPrecoSelecionado3Campos(true);
                // Obs: Tratamento dos meses de número para texto 
                const mesesStr = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro"];
                const mesesConvertidos = meses.map(numero => mesesStr[numero - 1]);
                setCampoDetalhamento2title(mesesConvertidos)
                setCampoDetalhamento2contet(meses);
            }

            // FABRICANTE
            if(selectValor1 === "fabricante" && selectValor2 === "categoria") {
                setPrecoSelecionado(false);
                setPrecoSelecionado(false);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(categorias)
                setCampoDetalhamento2contet(categorias);
            }

            if(selectValor1 === "fabricante" && selectValor2 === "cor") {
                setPrecoSelecionado(false);
                setPrecoSelecionado(false);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(cores)
                setCampoDetalhamento2contet(cores);
            }

            if(selectValor1 === "fabricante" && selectValor2 === "ano") {
                setPrecoSelecionado(false);
                setPrecoSelecionado(false);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(anos)
                setCampoDetalhamento2contet(anos);
            }

            if(selectValor1 === "fabricante" && selectValor2 === "mes") {
                setPrecoSelecionado(false);
                setPrecoSelecionado(false);
                setPrecoSelecionado3Campos(true);
                // Obs: Tratamento dos meses de número para texto 
                const mesesStr = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro"];
                const mesesConvertidos = meses.map(numero => mesesStr[numero - 1]);
                setCampoDetalhamento2title(mesesConvertidos)
                setCampoDetalhamento2contet(meses);
            }

            // COR
            if(selectValor1 === "cor" && selectValor2 === "categoria") {
                setPrecoSelecionado(false);
                setPrecoSelecionado(false);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(categorias)
                setCampoDetalhamento2contet(categorias);
            }

            if(selectValor1 === "cor" && selectValor2 === "fabricante") {
                setPrecoSelecionado(false);
                setPrecoSelecionado(false);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(fabricantes)
                setCampoDetalhamento2contet(fabricantes);
            }

            if(selectValor1 === "cor" && selectValor2 === "ano") {
                setPrecoSelecionado(false);
                setPrecoSelecionado(false);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(anos)
                setCampoDetalhamento2contet(anos);
            }

            if(selectValor1 === "cor" && selectValor2 === "mes") {
                setPrecoSelecionado(false);
                setPrecoSelecionado(false);
                setPrecoSelecionado3Campos(true);
                // Obs: Tratamento dos meses de número para texto 
                const mesesStr = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro"];
                const mesesConvertidos = meses.map(numero => mesesStr[numero - 1]);
                setCampoDetalhamento2title(mesesConvertidos)
                setCampoDetalhamento2contet(meses);
            }

            // ANO
            if(selectValor1 === "ano" && selectValor2 === "categoria") {
                setPrecoSelecionado(false);
                setPrecoSelecionado(false);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(categorias)
                setCampoDetalhamento2contet(categorias);
            }

            if(selectValor1 === "ano" && selectValor2 === "fabricante") {
                setPrecoSelecionado(false);
                setPrecoSelecionado(false);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(fabricantes)
                setCampoDetalhamento2contet(fabricantes);
            }

            if(selectValor1 === "ano" && selectValor2 === "cor") {
                setPrecoSelecionado(false);
                setPrecoSelecionado(false);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(cores)
                setCampoDetalhamento2contet(cores);
            }

            if(selectValor1 === "ano" && selectValor2 === "mes") {
                setPrecoSelecionado(false);
                setPrecoSelecionado(false);
                setPrecoSelecionado3Campos(true);
                // Obs: Tratamento dos meses de número para texto 
                const mesesStr = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro"];
                const mesesConvertidos = meses.map(numero => mesesStr[numero - 1]);
                setCampoDetalhamento2title(mesesConvertidos)
                setCampoDetalhamento2contet(meses);
            }

            // MES
            if(selectValor1 === "mes" && selectValor2 === "categoria") {
                setPrecoSelecionado(false);
                setPrecoSelecionado(false);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(categorias)
                setCampoDetalhamento2contet(categorias);
            }

            if(selectValor1 === "mes" && selectValor2 === "fabricante") {
                setPrecoSelecionado(false);
                setPrecoSelecionado(false);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(fabricantes)
                setCampoDetalhamento2contet(fabricantes);
            }

            if(selectValor1 === "mes" && selectValor2 === "cor") {
                setPrecoSelecionado(false);
                setPrecoSelecionado(false);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(cores)
                setCampoDetalhamento2contet(cores);
            }

            if(selectValor1 === "mes" && selectValor2 === "ano") {
                setPrecoSelecionado(false);
                setPrecoSelecionado(false);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(anos)
                setCampoDetalhamento2contet(anos);
            }
            
        }
        return;
    },[selectValor0, selectValor1, selectValor2, contentSelecionado0, contentSelecionado1, contentSelecionado2]);

    // Estados para criar de forma dinâmica a tabela com as 2 primeiras informações 
    const [campoDetalhamento1, setCampoDetalhamento1] = useState<string[]>([]);
    const [campoDetalhamento1Preco, setCampoDetalhamento1Preco] = useState<number[]>([]);
    const [campoDetalhamento1Total, setCampoDetalhamento1Total] = useState<number[]>([]);

    // Estados para criar de forma dinâmica a tabela com as 3 informações selecionadas
    const [campoDetalhamento2contet, setCampoDetalhamento2contet] = useState<string[] | number[] | string | number>([]);
    const [campoDetalhamento2title, setCampoDetalhamento2title] = useState<string[] | number[] | string | number>([]);

    const filtrarUnicos = (campo: string) => {
        return Array.from(new Set(dados1.map(dado => dado[campo])));
    };

    // Função Gerar segunda tabela caso todos campos selecionados 
    function gerarTabela() {
        const detalhamento1 = filtrarUnicos(selectValor1);
        const detalhamento2 = filtrarUnicos(selectValor2);
    
        const tabela = detalhamento1.map(cat => {
        const linha = { propriedade: cat };
        detalhamento2.forEach(el => {
        const items = dados1.filter(d => d[selectValor1] === cat && d[selectValor2] === el);
        const soma = items.reduce((total, item) => total + item[selectValor0], 0);
        linha[el] = soma;
        });
        // Tratamento para os meses do eixo Y caso selecionar Mês no segundo campo, adaptar se necessário a outra fonte de dados. 
        if(linha.propriedade === 1) {linha.propriedade = "Janeiro";}
        if(linha.propriedade === 2) {linha.propriedade = "Fevereiro";}
        if(linha.propriedade === 3) {linha.propriedade = "Março";}
        if(linha.propriedade === 4) {linha.propriedade = "Abril";}
        if(linha.propriedade === 5) {linha.propriedade = "Maio";}
        if(linha.propriedade === 6) {linha.propriedade = "Junho";}
        if(linha.propriedade === 7) {linha.propriedade = "Julho";}
        if(linha.propriedade === 8) {linha.propriedade = "Agosto";}
        if(linha.propriedade === 9) {linha.propriedade = "Setembro";}
        if(linha.propriedade === 10) {linha.propriedade = "Outubro";}
        // Fim Tratamento para os meses do eixo Y caso selecionar Mês no segundo campo, adaptar se necessário a outra fonte de dados. 
        return linha;
    });

    return { detalhamento1, detalhamento2, tabela };
    }

    const { tabela } = gerarTabela();

    const calcularTotalPorColuna = (coluna: string) => {
        return tabela.reduce((total, linha) => total + parseFloat(linha[coluna] || '0'), 0);
    };

    const formatarMoeda = (valor: number) => {
        return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    };

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
                <Tabela 
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
                                    <td>{formatarMoeda(campoDetalhamento1Preco[i])}</td>
                                </tr>
                            ))}
                        </>
                    }
                    totalTable={
                        <tr>
                            <td style={{fontWeight:"bold"}}>Total</td>
                            <td style={{fontWeight:"bold"}}>{formatarMoeda(campoDetalhamento1Total)}</td>
                        </tr>
                    }
                />
            )}     

            {precoSelecionado3Campos && (
                <div>
                    <Tabela 
                        titleTable={
                            <tr>
                                <th>{contentSelecionado1}</th>
                                
                                {campoDetalhamento2title.map((e, i) => (
                                <th key={i}>{e}</th>
                                ))}
                            </tr>
                        }
                        contentTable={
                            <>
                                {tabela.map((linha, i) => (
                                    <tr key={i}>
                                    <td>{linha.propriedade}</td>
                                    {campoDetalhamento2contet.map((el, i) => (
                                        <td key={i}>{formatarMoeda(linha[el] || 'R$ 0.00')}</td>
                                    ))}
                                    </tr>
                                ))}
                            </>
                        }
                        totalTable={
                            <tr>
                                <td style={{fontWeight:"bold"}}>Total</td>
                                {campoDetalhamento2contet.map((d2, i) => (
                                    <td key={i} style={{fontWeight:"bold"}}>{formatarMoeda(calcularTotalPorColuna(d2))}</td>
                                ))}
                            </tr>
                        }
                    />
                </div>
            )}   

        </div>
    )
}

export default Dados1;
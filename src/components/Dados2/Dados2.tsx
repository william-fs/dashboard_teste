import Charts from '../Charts/Charts';
import Charts3Campos from '../Charts3Campos/Charts3Campos';
import {useEffect, useState} from 'react';
import Tabela from '../Tabela/Tabela';

// Fonte de dados 
import dados2 from "../../dados/fonte_de_dados_2.json";

// Valores usados nos campos 
import {valores} from "./TotalSelect";

// Import Categoria tratadas 
import {ids, datas, clientes, categorias, fabricantes, cores, anos, meses} from "./TotalSelect";
// Import valores de soma/total referente ao primeiro campo:
// Import Ids tratados 
import {somarValorTotalId101, somarValorTotalId102, somarValorTotalId103, somarValorTotalId104, somarValorTotalId105, somarValorTotalId106, somarValorTotalId107, somarValorTotalId108, somarValorTotalId109, somarValorTotalId110} from "./TotalSelect";
import {somarItemId101, somarItemId102, somarItemId103, somarItemId104, somarItemId105, somarItemId106, somarItemId107, somarItemId108, somarItemId109, somarItemId110} from "./TotalSelect";
import {somarValorTotalCatElet, somarItemCatElet} from "./TotalSelect";
import {somarValorTotalCatMov, somarItemCatMov} from "./TotalSelect";
import {somarValorTotalCatRou, somarItemCatRou} from "./TotalSelect";
import {somarValorTotalCatLiv, somarItemCatLiv} from "./TotalSelect";
import {somarValorTotalCatBel, somarItemCatBel} from "./TotalSelect";
// Import datas tratadas 
import {somarValorTotalData1, somarValorTotalData2, somarValorTotalData3, somarValorTotalData4, somarValorTotalData5, somarValorTotalData6, somarValorTotalData7, somarValorTotalData8, somarValorTotalData9, somarValorTotalData10} from "./TotalSelect";
import {somarItemData1, somarItemData2, somarItemData3, somarItemData4, somarItemData5, somarItemData6, somarItemData7, somarItemData8, somarItemData9, somarItemData10} from "./TotalSelect";
// Import Clientes tratados 
import {somarValorTotalClitenteA, somarValorTotalClitenteB, somarValorTotalClitenteC, somarValorTotalClitenteD, somarValorTotalClitenteE, somarValorTotalClitenteF, somarValorTotalClitenteG, somarValorTotalClitenteH, somarValorTotalClitenteI, somarValorTotalClitenteJ} from "./TotalSelect";
import {somarItemClitenteA, somarItemClitenteB, somarItemClitenteC, somarItemClitenteD, somarItemClitenteE, somarItemClitenteF, somarItemClitenteG, somarItemClitenteH, somarItemClitenteI, somarItemClitenteJ} from "./TotalSelect";
// Import Fabricantes tratados
import {somarValorTotalFabX, somarValorTotalFabY, somarValorTotalFabZ} from "./TotalSelect";
import {somarItemFabX, somarItemFabY, somarItemFabZ} from "./TotalSelect";
// Import Cores tratadas 
import {somarValorTotalCorVerm, somarValorTotalCorAzul, somarValorTotalCorVerde, somarValorTotalCorPreto, somarValorTotalCorBranco, somarValorTotalCorCinza} from "./TotalSelect";
import {somarItemCorVerm, somarItemCorAzul, somarItemCorVerde, somarItemCorPreto, somarItemCorBranco, somarItemCorCinza} from "./TotalSelect";
// Import Anos tratados 
import {somarValorTotalAno2024} from "./TotalSelect";
import {somarItemAno2024} from "./TotalSelect";
// Import Meses tratados 
import {somarValorTotalMesJun} from "./TotalSelect";
import {somarItemMesJun} from "./TotalSelect";

// Import função de filtro para gráfico dos 3 campos 
import {FiltroGrafico3} from "./TotalSelect";

function Dados2() {

    // "Somas totais" para usar nos estados de atualização da tabela dinâmica 
    // Preços 
    // Ids 
    const idValoresTotais:number[] = [somarValorTotalId101, somarValorTotalId102, somarValorTotalId103, somarValorTotalId104, somarValorTotalId105, somarValorTotalId106, somarValorTotalId107, somarValorTotalId108, somarValorTotalId109, somarValorTotalId110];
    const totalValorTotalId:number[] = [somarValorTotalId101+somarValorTotalId102+somarValorTotalId103+somarValorTotalId104+somarValorTotalId105+somarValorTotalId106+somarValorTotalId107+somarValorTotalId108+somarValorTotalId109+somarValorTotalId110];
    // datas
    const dataValoresTotais:number[] = [somarValorTotalData1, somarValorTotalData2, somarValorTotalData3, somarValorTotalData4, somarValorTotalData5, somarValorTotalData6, somarValorTotalData7, somarValorTotalData8, somarValorTotalData9, somarValorTotalData10];
    const totalValorTotalData:number[] = [somarValorTotalData1+somarValorTotalData2+somarValorTotalData3+somarValorTotalData4+somarValorTotalData5+somarValorTotalData6+somarValorTotalData7+somarValorTotalData8+somarValorTotalData9+somarValorTotalData10];
    // clientes
    const clienteValoresTotais:number[] = [somarValorTotalClitenteA, somarValorTotalClitenteB, somarValorTotalClitenteC, somarValorTotalClitenteD, somarValorTotalClitenteE, somarValorTotalClitenteF, somarValorTotalClitenteG, somarValorTotalClitenteH, somarValorTotalClitenteI, somarValorTotalClitenteJ];
    const totalValorTotalCliente:number[] = [somarValorTotalClitenteA+somarValorTotalClitenteB+somarValorTotalClitenteC+somarValorTotalClitenteD+somarValorTotalClitenteE+somarValorTotalClitenteF+somarValorTotalClitenteG+somarValorTotalClitenteH+somarValorTotalClitenteI+somarValorTotalClitenteJ];
    // Categorias 
    const categoriaValoresTotais:number[] = [somarValorTotalCatElet, somarValorTotalCatMov, somarValorTotalCatRou, somarValorTotalCatLiv, somarValorTotalCatBel];
    const totalValorTotalCategoria:number[] = [somarValorTotalCatElet+somarValorTotalCatMov+somarValorTotalCatRou+somarValorTotalCatLiv+somarValorTotalCatBel];
    // Fabricantes 
    const fabricanteValoresTotais:number[] = [somarValorTotalFabX, somarValorTotalFabY, somarValorTotalFabZ];
    const totalValorTotalFabricante:number[] = [somarValorTotalFabX+somarValorTotalFabY+somarValorTotalFabZ];
    // Cores 
    const coresValoresTotais:number[] = [somarValorTotalCorVerm, somarValorTotalCorAzul, somarValorTotalCorVerde, somarValorTotalCorPreto, somarValorTotalCorBranco, somarValorTotalCorCinza];
    const totalValorTotalCor:number[] = [somarValorTotalCorVerm+somarValorTotalCorAzul+somarValorTotalCorVerde+somarValorTotalCorPreto+somarValorTotalCorBranco+somarValorTotalCorCinza];
    // Anos
    const anoValoresTotais:number[] = [somarValorTotalAno2024];
    const totalValorTotalAno:number[] = [somarValorTotalAno2024];
    // Meses 
    const mesValoresTotais:number[] = [somarValorTotalMesJun];
    const totalValorTotalMes:number[] = [somarValorTotalMesJun];

    // Itens
    // IDs
    const idItens:number[] = [somarItemId101, somarItemId102, somarItemId103, somarItemId104, somarItemId105, somarItemId106, somarItemId107, somarItemId108, somarItemId109, somarItemId110];
    const totalItemId:number[] = [somarItemId101+somarItemId102+somarItemId103+somarItemId104+somarItemId105+somarItemId106+somarItemId107+somarItemId108+somarItemId109+somarItemId110];
    // Datas
    const dataItens:number[] = [somarItemData1, somarItemData2, somarItemData3, somarItemData4, somarItemData5, somarItemData6, somarItemData7, somarItemData8, somarItemData9, somarItemData10];
    const totalItemData:number[] = [somarItemData1+somarItemData2+somarItemData3+somarItemData4+somarItemData5+somarItemData6+somarItemData7+somarItemData8+somarItemData9+somarItemData10];
    // Clientes
    const clienteItens:number[] = [somarItemClitenteA, somarItemClitenteB, somarItemClitenteC, somarItemClitenteD, somarItemClitenteE, somarItemClitenteF, somarItemClitenteG, somarItemClitenteH, somarItemClitenteI, somarItemClitenteJ];
    const totalItemCliente:number[] = [somarItemClitenteA+somarItemClitenteB+somarItemClitenteC+somarItemClitenteD+somarItemClitenteE+somarItemClitenteF+somarItemClitenteG+somarItemClitenteH+somarItemClitenteI+somarItemClitenteJ];
    // Categorias 
    const categoriaItens:number[] = [somarItemCatElet, somarItemCatMov, somarItemCatRou, somarItemCatLiv, somarItemCatBel];
    const totalItemCategoria:number[] = [somarItemCatElet+somarItemCatMov+somarItemCatRou+somarItemCatLiv+somarItemCatBel];
    // Fabricantes 
    const fabricanteItens:number[] = [somarItemFabX, somarItemFabY, somarItemFabZ];
    const totalItemFabricante:number[] = [somarItemFabX+somarItemFabY+somarItemFabZ];
    // Cores 
    const corItens:number[] = [somarItemCorVerm, somarItemCorAzul, somarItemCorVerde, somarItemCorPreto, somarItemCorBranco, somarItemCorCinza];
    const totalItemCor:number[] = [somarItemCorVerm+somarItemCorAzul+somarItemCorVerde+somarItemCorPreto+somarItemCorBranco+somarItemCorCinza];
    // Anos
    const anoItens:number[] = [somarItemAno2024];
    const totalItemAno = [somarItemAno2024];
    // Meses 
    const mesItens:number[] = [somarItemMesJun];
    const totalItemMes:number[] = [somarItemMesJun];
    
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
        if(selectValor0 === "valor_total") {setContentSelecionado0("Valor Total");}
        if(selectValor0 === "itens") {setContentSelecionado0("Itens");}
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
        if(selectValor1 === "nulo1" && selectValor2 === "nulo2") {
            setValorTotalSelecionado(false); 
            setValorTotalSelecionadoGraf(false);
            setValorTotalSelecionado3Campos(false); 
            setValorTotalSelecionadoGraf3Campos(false);
        }
        if(selectValor0 === "nulo0") {
            setSelectValor0("nulo0"); 
            setSelectValor1("nulo1"); 
            setSelectValor2("nulo2"); 
            setValorTotalSelecionado(false); 
            setValorTotalSelecionadoGraf(false);
            setValorTotalSelecionado3Campos(false); 
            setValorTotalSelecionadoGraf3Campos(false);

            setItemSelecionado(false);
            setItemSelecionadoGraf(false);
            setItemSelecionadoGraf3Campos(false);
            return;}
        if(selectValor1 === "nulo1") {
            setSelectValor2("nulo2"); 
            setValorTotalSelecionado(false); 
            setValorTotalSelecionadoGraf(false);
            setValorTotalSelecionado3Campos(false); 

            setItemSelecionado(false);
            setItemSelecionadoGraf(false);
            return;}
        if(selectValor2 === "nulo2") {
            setValorTotalSelecionadoGraf(false);
            setValorTotalSelecionado3Campos(false);
            setValorTotalSelecionadoGraf3Campos(false);

            setItemSelecionadoGraf(false);
            setItemSelecionadoGraf3Campos(false);
            setItemSelecionado3Campos(false);
        }
        
        return;
    },[selectValor0, selectValor1, selectValor2, contentSelecionado0, contentSelecionado1, contentSelecionado2]);

    const [valorTotalSelecionado, setValorTotalSelecionado] = useState(false);
    const [valorTotalSelecionadoGraf, setValorTotalSelecionadoGraf] = useState(false);
    const [valorTotalSelecionadoGraf3Campos, setValorTotalSelecionadoGraf3Campos] = useState(false);
    const [valorTotalSelecionado3Campos, setValorTotalSelecionado3Campos] = useState(false);

    const [itemSelecionado, setItemSelecionado] = useState(false);
    const [itemSelecionadoGraf, setItemSelecionadoGraf] = useState(false);
    const [itemSelecionadoGraf3Campos, setItemSelecionadoGraf3Campos] = useState(false);
    const [itemSelecionado3Campos, setItemSelecionado3Campos] = useState(false);
    
    // Regras de seleções Campos 
    // Controle do Check para tabela/Gráfico 
    const [tabelaCheck, setTabelaCheck] = useState(true);
    const [graficoCheck, setGraficoCheck] = useState(true);
    function tabelaTF() {
        setTabelaCheck(!tabelaCheck);
    }
    function graficoTF() {
        setGraficoCheck(!graficoCheck);
    }
    // GRÁFICOS / Valores da tabela
    // Valores para alimentar a tabela gráfica 
    const [mediaValores, setMediaValores] = useState();
    const [detalhamento1, setDetalhamento1] = useState();

    useEffect(() => {
        // Caso Preço selecionado
        if(selectValor0 === "valor_total") {
            setItemSelecionado(false);
            setItemSelecionado3Campos(false);
            setItemSelecionadoGraf(false);
            setItemSelecionadoGraf3Campos(false);
            setYaxixType2Campos(priceY2Campos);
            setYaxixType3Campos(priceY3Campos);

            if(selectValor1 === "id") {
                setValorTotalSelecionado(false);
                setValorTotalSelecionadoGraf(false);
                setTimeout(() => {setValorTotalSelecionado(true), setValorTotalSelecionadoGraf(true);}, 10);
                setCampoDetalhamento1(ids);
                setCampoDetalhamento1ValorTotal(idValoresTotais);
                setCampoDetalhamento1Total(totalValorTotalId);

                setDetalhamento1(ids)
                setMediaValores(idValoresTotais);
            }

            if(selectValor1 === "data") {
                setValorTotalSelecionado(false);
                setValorTotalSelecionadoGraf(false);
                setTimeout(() => {setValorTotalSelecionado(true), setValorTotalSelecionadoGraf(true);}, 10);
                // Tratamento data
                const datasTratadas = datas.map(datas => {
                    const [ano, mes, dia] = datas.split('-');
                    return `${dia}/${mes}/${ano}`;
                });
                setCampoDetalhamento1(datasTratadas);
                setCampoDetalhamento1ValorTotal(dataValoresTotais);
                setCampoDetalhamento1Total(totalValorTotalData);

                setDetalhamento1(datasTratadas)
                setMediaValores(dataValoresTotais);
            }
            if(selectValor1 === "cliente") {
                setValorTotalSelecionado(false);
                setValorTotalSelecionadoGraf(false);
                setTimeout(() => {setValorTotalSelecionado(true), setValorTotalSelecionadoGraf(true);}, 10);
                setCampoDetalhamento1(clientes);
                setCampoDetalhamento1ValorTotal(clienteValoresTotais);
                setCampoDetalhamento1Total(totalValorTotalCliente);

                setDetalhamento1(clientes)
                setMediaValores(clienteValoresTotais);
            }
            if(selectValor1 === "categoria") {
                setValorTotalSelecionado(false);
                setValorTotalSelecionadoGraf(false);
                setTimeout(() => {setValorTotalSelecionado(true), setValorTotalSelecionadoGraf(true);}, 10);
                setCampoDetalhamento1(categorias);
                setCampoDetalhamento1ValorTotal(categoriaValoresTotais);
                setCampoDetalhamento1Total(totalValorTotalCategoria);

                setDetalhamento1(categorias)
                setMediaValores(categoriaValoresTotais);
            }
            if(selectValor1 === "fabricante") {
                setValorTotalSelecionado(false);
                setValorTotalSelecionadoGraf(false);
                setTimeout(() => {setValorTotalSelecionado(true), setValorTotalSelecionadoGraf(true);}, 10);
                setCampoDetalhamento1(fabricantes);
                setCampoDetalhamento1ValorTotal(fabricanteValoresTotais);
                setCampoDetalhamento1Total(totalValorTotalFabricante);

                setDetalhamento1(fabricantes)
                setMediaValores(fabricanteValoresTotais);
            }
            if(selectValor1 === "cor") {
                setValorTotalSelecionado(false);
                setValorTotalSelecionadoGraf(false);
                setTimeout(() => {setValorTotalSelecionado(true), setValorTotalSelecionadoGraf(true);}, 10);
                setCampoDetalhamento1(cores);
                setCampoDetalhamento1ValorTotal(coresValoresTotais);
                setCampoDetalhamento1Total(totalValorTotalCor);

                setDetalhamento1(cores)
                setMediaValores(coresValoresTotais);
            }
            if(selectValor1 === "ano") {
                setValorTotalSelecionado(false);
                setValorTotalSelecionadoGraf(false);
                setTimeout(() => {setValorTotalSelecionado(true), setValorTotalSelecionadoGraf(true);}, 10);
                setCampoDetalhamento1(anos);
                setCampoDetalhamento1ValorTotal(anoValoresTotais);
                setCampoDetalhamento1Total(totalValorTotalAno);

                setDetalhamento1(anos)
                setMediaValores(anoValoresTotais);
            }
            if(selectValor1 === "mes") {
                // Obs: Tratamento dos meses de número para texto 
                const mesesStr = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
                const mesesConvertidos = meses.map(numero => mesesStr[numero - 1]);
                setValorTotalSelecionado(false);
                setValorTotalSelecionadoGraf(false);
                setTimeout(() => {setValorTotalSelecionado(true), setValorTotalSelecionadoGraf(true);}, 10);
                setCampoDetalhamento1(mesesConvertidos);
                setCampoDetalhamento1ValorTotal(mesValoresTotais);
                setCampoDetalhamento1Total(totalValorTotalMes);

                setDetalhamento1(mesesConvertidos)
                setMediaValores(mesValoresTotais);
            }

            // 3 CAMPOS 
            // Usar a função FiltroGrafico3 para adicionar a data e o name na tabela gráfica
            // ID
            if(selectValor1 === "id" && selectValor2 === "categoria") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(categorias)
                setCampoDetalhamento2content(categorias);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'categoria', 'id', "valor_total")
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "id" && selectValor2 === "data") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                
                // Tratamento data
                const datasTratadas = datas.map(datas => {
                    const [ano, mes, dia] = datas.split('-');
                    return `${dia}/${mes}/${ano}`;
                });
                setCampoDetalhamento2title(datasTratadas)
                setCampoDetalhamento2content(datas);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'data', 'id', "valor_total")
                setSeriesGraf3(trat);
            }
            
            if(selectValor1 === "id" && selectValor2 === "cliente") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(clientes)
                setCampoDetalhamento2content(clientes);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'cliente', 'id', "valor_total")
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "id" && selectValor2 === "fabricante") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(fabricantes)
                setCampoDetalhamento2content(fabricantes);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'fabricante', 'id', "valor_total")
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "id" && selectValor2 === "cor") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(cores)
                setCampoDetalhamento2content(cores);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'cor', 'id', "valor_total")
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "id" && selectValor2 === "ano") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(anos)
                setCampoDetalhamento2content(anos);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'ano', 'id', "valor_total")
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "id" && selectValor2 === "mes") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                // Obs: Tratamento dos meses de número para texto 
                const mesesStr = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
                const mesesConvertidos = meses.map(numero => mesesStr[numero - 1]);
                setCampoDetalhamento2title(mesesConvertidos)
                setCampoDetalhamento2content(meses);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'mes', 'id', "valor_total");
                setSeriesGraf3(trat);
            }
            // Data
            if(selectValor1 === "data" && selectValor2 === "id") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionadoGraf3Campos(true);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(ids)
                setCampoDetalhamento2content(ids);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'id', 'data', "valor_total");
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "data" && selectValor2 === "categoria") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionadoGraf3Campos(true);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(categorias)
                setCampoDetalhamento2content(categorias);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'categoria', 'data', "valor_total");
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "data" && selectValor2 === "cliente") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionadoGraf3Campos(true);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(clientes)
                setCampoDetalhamento2content(clientes);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'cliente', 'data', "valor_total");
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "data" && selectValor2 === "fabricante") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionadoGraf3Campos(true);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(fabricantes)
                setCampoDetalhamento2content(fabricantes);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'fabricante', 'data', "valor_total");
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "data" && selectValor2 === "cor") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(cores)
                setCampoDetalhamento2content(cores);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'cor', 'data', "valor_total")
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "data" && selectValor2 === "ano") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(anos)
                setCampoDetalhamento2content(anos);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'ano', 'data', "valor_total")
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "data" && selectValor2 === "mes") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                // Obs: Tratamento dos meses de número para texto 
                const mesesStr = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
                const mesesConvertidos = meses.map(numero => mesesStr[numero - 1]);
                setCampoDetalhamento2title(mesesConvertidos)
                setCampoDetalhamento2content(meses);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'mes', 'data', "valor_total")
                setSeriesGraf3(trat);
            }
            // Clientes
            if(selectValor1 === "cliente" && selectValor2 === "id") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionadoGraf3Campos(true);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(ids)
                setCampoDetalhamento2content(ids);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'id', 'cliente', "valor_total");
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "cliente" && selectValor2 === "categoria") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionadoGraf3Campos(true);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(categorias)
                setCampoDetalhamento2content(categorias);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'categoria', 'cliente', "valor_total");
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "cliente" && selectValor2 === "data") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionadoGraf3Campos(true);
                setValorTotalSelecionado3Campos(true);
                // Tratamento data - Adicionar ao Title
                const datasTratadas = datas.map(datas => {
                    const [ano, mes, dia] = datas.split('-');
                    return `${dia}/${mes}/${ano}`;
                });
                setCampoDetalhamento2title(datasTratadas)
                setCampoDetalhamento2content(datas);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'data', 'cliente', "valor_total");
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "cliente" && selectValor2 === "fabricante") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionadoGraf3Campos(true);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(fabricantes)
                setCampoDetalhamento2content(fabricantes);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'fabricante', 'cliente', "valor_total");
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "cliente" && selectValor2 === "cor") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(cores)
                setCampoDetalhamento2content(cores);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'cor', 'cliente', "valor_total")
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "cliente" && selectValor2 === "ano") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(anos)
                setCampoDetalhamento2content(anos);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'ano', 'cliente', "valor_total")
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "cliente" && selectValor2 === "mes") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                // Obs: Tratamento dos meses de número para texto 
                const mesesStr = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
                const mesesConvertidos = meses.map(numero => mesesStr[numero - 1]);
                setCampoDetalhamento2title(mesesConvertidos)
                setCampoDetalhamento2content(meses);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'mes', 'cliente', "valor_total")
                setSeriesGraf3(trat);
            }
            // CATEGORIA
            if(selectValor1 === "categoria" && selectValor2 === "id") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionadoGraf3Campos(true);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(ids)
                setCampoDetalhamento2content(ids);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'id', 'categoria', "valor_total");
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "categoria" && selectValor2 === "data") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionadoGraf3Campos(true);
                setValorTotalSelecionado3Campos(true);
                // Tratamento data - Adicionar ao Title
                const datasTratadas = datas.map(datas => {
                    const [ano, mes, dia] = datas.split('-');
                    return `${dia}/${mes}/${ano}`;
                });
                setCampoDetalhamento2title(datasTratadas)
                setCampoDetalhamento2content(datas);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'data', 'categoria', "valor_total");
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "categoria" && selectValor2 === "cliente") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionadoGraf3Campos(true);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(clientes)
                setCampoDetalhamento2content(clientes);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'cliente', 'categoria', "valor_total");
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "categoria" && selectValor2 === "fabricante") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionadoGraf3Campos(true);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(fabricantes)
                setCampoDetalhamento2content(fabricantes);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'fabricante', 'categoria', "valor_total");
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "categoria" && selectValor2 === "cor") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(cores)
                setCampoDetalhamento2content(cores);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'cor', 'categoria', "valor_total")
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "categoria" && selectValor2 === "ano") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(anos)
                setCampoDetalhamento2content(anos);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'ano', 'categoria', "valor_total")
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "categoria" && selectValor2 === "mes") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                // Obs: Tratamento dos meses de número para texto 
                const mesesStr = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
                const mesesConvertidos = meses.map(numero => mesesStr[numero - 1]);
                setCampoDetalhamento2title(mesesConvertidos)
                setCampoDetalhamento2content(meses);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'mes', 'categoria', "valor_total")
                setSeriesGraf3(trat);
            }

            // FABRICANTE
            if(selectValor1 === "fabricante" && selectValor2 === "id") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(ids)
                setCampoDetalhamento2content(ids);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'id', 'fabricante', "valor_total")
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "fabricante" && selectValor2 === "data") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                // Tratamento data - Adicionar ao Title
                const datasTratadas = datas.map(datas => {
                    const [ano, mes, dia] = datas.split('-');
                    return `${dia}/${mes}/${ano}`;
                });
                setCampoDetalhamento2title(datasTratadas)
                setCampoDetalhamento2content(datas);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'data', 'fabricante', "valor_total")
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "fabricante" && selectValor2 === "cliente") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(clientes)
                setCampoDetalhamento2content(clientes);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'cliente', 'fabricante', "valor_total")
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "fabricante" && selectValor2 === "categoria") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(categorias)
                setCampoDetalhamento2content(categorias);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'categoria', 'fabricante', "valor_total")
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "fabricante" && selectValor2 === "cor") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(cores)
                setCampoDetalhamento2content(cores);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'cor', 'fabricante', "valor_total")
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "fabricante" && selectValor2 === "ano") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(anos)
                setCampoDetalhamento2content(anos);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'ano', 'fabricante', "valor_total")
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "fabricante" && selectValor2 === "mes") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                // Obs: Tratamento dos meses de número para texto 
                const mesesStr = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
                const mesesConvertidos = meses.map(numero => mesesStr[numero - 1]);
                setCampoDetalhamento2title(mesesConvertidos)
                setCampoDetalhamento2content(meses);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'mes', 'fabricante', "valor_total");
                setSeriesGraf3(trat);
            }

            // COR
            if(selectValor1 === "cor" && selectValor2 === "id") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(ids)
                setCampoDetalhamento2content(ids);
                
                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'id', 'cor', "valor_total");
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "cor" && selectValor2 === "data") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                // Tratamento data - Adicionar ao Title
                const datasTratadas = datas.map(datas => {
                    const [ano, mes, dia] = datas.split('-');
                    return `${dia}/${mes}/${ano}`;
                });
                setCampoDetalhamento2title(datasTratadas)
                setCampoDetalhamento2content(datas);
                
                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'data', 'cor', "valor_total");
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "cor" && selectValor2 === "cliente") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(clientes)
                setCampoDetalhamento2content(clientes);
                
                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'cliente', 'cor', "valor_total");
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "cor" && selectValor2 === "categoria") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(categorias)
                setCampoDetalhamento2content(categorias);
                
                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'categoria', 'cor', "valor_total");
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "cor" && selectValor2 === "fabricante") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(fabricantes)
                setCampoDetalhamento2content(fabricantes);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'fabricante', 'cor', "valor_total");
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "cor" && selectValor2 === "ano") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(anos)
                setCampoDetalhamento2content(anos);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'ano', 'cor', "valor_total");
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "cor" && selectValor2 === "mes") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                // Obs: Tratamento dos meses de número para texto 
                const mesesStr = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
                const mesesConvertidos = meses.map(numero => mesesStr[numero - 1]);
                setCampoDetalhamento2title(mesesConvertidos)
                setCampoDetalhamento2content(meses);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'mes', 'cor', "valor_total");
                setSeriesGraf3(trat);
            }

            // ANO
            if(selectValor1 === "ano" && selectValor2 === "id") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(ids)
                setCampoDetalhamento2content(ids);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'id', 'ano', "valor_total");
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "ano" && selectValor2 === "data") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                // Tratamento data - Adicionar ao Title
                const datasTratadas = datas.map(datas => {
                    const [ano, mes, dia] = datas.split('-');
                    return `${dia}/${mes}/${ano}`;
                });
                setCampoDetalhamento2title(datasTratadas)
                setCampoDetalhamento2content(datas);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'data', 'ano', "valor_total");
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "ano" && selectValor2 === "cliente") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(clientes)
                setCampoDetalhamento2content(clientes);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'cliente', 'ano', "valor_total");
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "ano" && selectValor2 === "categoria") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(categorias)
                setCampoDetalhamento2content(categorias);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'categoria', 'ano', "valor_total");
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "ano" && selectValor2 === "fabricante") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(fabricantes)
                setCampoDetalhamento2content(fabricantes);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'fabricante', 'ano', "valor_total");
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "ano" && selectValor2 === "cor") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(cores)
                setCampoDetalhamento2content(cores);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'cor', 'ano', "valor_total");
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "ano" && selectValor2 === "mes") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                // Obs: Tratamento dos meses de número para texto 
                const mesesStr = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
                const mesesConvertidos = meses.map(numero => mesesStr[numero - 1]);
                setCampoDetalhamento2title(mesesConvertidos)
                setCampoDetalhamento2content(meses);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'mes', 'ano', "valor_total");
                setSeriesGraf3(trat);
            }

            // MES
            if(selectValor1 === "mes" && selectValor2 === "id") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(ids)
                setCampoDetalhamento2content(ids);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'id', 'mes', "valor_total");
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "mes" && selectValor2 === "data") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                // Tratamento data - Adicionar ao Title
                const datasTratadas = datas.map(datas => {
                    const [ano, mes, dia] = datas.split('-');
                    return `${dia}/${mes}/${ano}`;
                });
                setCampoDetalhamento2title(datasTratadas)
                setCampoDetalhamento2content(datas);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'data', 'mes', "valor_total");
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "mes" && selectValor2 === "cliente") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(clientes)
                setCampoDetalhamento2content(clientes);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'cliente', 'mes', "valor_total");
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "mes" && selectValor2 === "categoria") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(categorias)
                setCampoDetalhamento2content(categorias);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'categoria', 'mes', "valor_total");
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "mes" && selectValor2 === "fabricante") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(fabricantes)
                setCampoDetalhamento2content(fabricantes);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'fabricante', 'mes', "valor_total");
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "mes" && selectValor2 === "cor") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(cores)
                setCampoDetalhamento2content(cores);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'cor', 'mes', "valor_total");
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "mes" && selectValor2 === "ano") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(anos)
                setCampoDetalhamento2content(anos);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'ano', 'mes', "valor_total");
                setSeriesGraf3(trat);
            }
        }

        // Caso Itens selecionada
        if(selectValor0 === "itens") {
            setValorTotalSelecionado(false);
            setValorTotalSelecionado3Campos(false);
            setValorTotalSelecionadoGraf(false);
            setValorTotalSelecionadoGraf3Campos(false);
            setYaxixType2Campos(quantY2Campos);
            setYaxixType3Campos(quantY3Campos);

            if(selectValor1 === "id") {
                setItemSelecionado(false);
                setItemSelecionadoGraf(false);
                setTimeout(() => {setItemSelecionado(true), setItemSelecionadoGraf(true);}, 10);
                setCampoDetalhamento1(ids);
                setCampoDetalhamento1Item(idItens);
                setCampoDetalhamento1Total(totalItemId);

                setDetalhamento1(ids)
                setMediaValores(idItens);
            }
            if(selectValor1 === "data") {
                setItemSelecionado(false);
                setItemSelecionadoGraf(false);
                setTimeout(() => {setItemSelecionado(true), setItemSelecionadoGraf(true);}, 10);
                // Tratamento data
                const datasTratadas = datas.map(datas => {
                    const [ano, mes, dia] = datas.split('-');
                    return `${dia}/${mes}/${ano}`;
                });
                setCampoDetalhamento1(datasTratadas);
                setCampoDetalhamento1Item(dataValoresTotais);
                setCampoDetalhamento1Total(totalItemData);

                setDetalhamento1(datasTratadas)
                setMediaValores(dataItens);
            }
            if(selectValor1 === "cliente") {
                setItemSelecionado(false);
                setItemSelecionadoGraf(false);
                setTimeout(() => {setItemSelecionado(true), setItemSelecionadoGraf(true);}, 10);
                setCampoDetalhamento1(clientes);
                setCampoDetalhamento1Item(clienteItens);
                setCampoDetalhamento1Total(totalItemCliente);

                setDetalhamento1(clientes)
                setMediaValores(clienteItens);
            }
            if(selectValor1 === "categoria") {
                setItemSelecionado(false);
                setItemSelecionadoGraf(false);
                setTimeout(() => {setItemSelecionado(true), setItemSelecionadoGraf(true);}, 10);
                setCampoDetalhamento1(categorias);
                setCampoDetalhamento1Item(categoriaItens);
                setCampoDetalhamento1Total(totalItemCategoria);

                setDetalhamento1(categorias)
                setMediaValores(categoriaItens);
            }
            if(selectValor1 === "fabricante") {
                setItemSelecionado(false);
                setItemSelecionadoGraf(false);
                setTimeout(() => {setItemSelecionado(true), setItemSelecionadoGraf(true);}, 10);
                setCampoDetalhamento1(fabricantes);
                setCampoDetalhamento1Item(fabricanteItens);
                setCampoDetalhamento1Total(totalItemFabricante);

                setDetalhamento1(fabricantes)
                setMediaValores(fabricanteItens);
            }
            if(selectValor1 === "cor") {
                setItemSelecionado(false);
                setItemSelecionadoGraf(false);
                setTimeout(() => {setItemSelecionado(true), setItemSelecionadoGraf(true);}, 10);
                setCampoDetalhamento1(cores);
                setCampoDetalhamento1Item(corItens);
                setCampoDetalhamento1Total(totalItemCor);

                setDetalhamento1(cores)
                setMediaValores(corItens);
            }
            if(selectValor1 === "ano") {
                setItemSelecionado(false);
                setItemSelecionadoGraf(false);
                setTimeout(() => {setItemSelecionado(true), setItemSelecionadoGraf(true);}, 10);
                setCampoDetalhamento1(anos);
                setCampoDetalhamento1Item(anoItens);
                setCampoDetalhamento1Total(totalItemAno);

                setDetalhamento1(anos)
                setMediaValores(anoItens);
            }
            if(selectValor1 === "mes") {
                // Obs: Tratamento dos meses de número para texto 
                const mesesStr = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
                const mesesConvertidos = meses.map(numero => mesesStr[numero - 1]);
                setItemSelecionado(false);
                setItemSelecionadoGraf(false);
                setTimeout(() => {setItemSelecionado(true), setItemSelecionadoGraf(true);}, 10);
                setCampoDetalhamento1(mesesConvertidos);
                setCampoDetalhamento1Item(mesItens);
                setCampoDetalhamento1Total(totalItemMes);

                setDetalhamento1(mesesConvertidos)
                setMediaValores(mesItens);
            }

            // 3 CAMPOS Usar a função FiltroGrafico3 para adicionar a data e o name na tabela gráfica
            // ID
            if(selectValor1 === "id" && selectValor2 === "categoria") {
                setTimeout(() => {setItemSelecionado(false), setItemSelecionadoGraf(false), setItemSelecionadoGraf3Campos(false);}, 10);
                setItemSelecionado3Campos(true);
                setCampoDetalhamento2title(categorias)
                setCampoDetalhamento2content(categorias);

                setTimeout(() => {setItemSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'categoria', 'id', 'itens')
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "id" && selectValor2 === "data") {
                setTimeout(() => {setItemSelecionado(false), setItemSelecionadoGraf(false), setItemSelecionadoGraf3Campos(false);}, 10);
                setItemSelecionado3Campos(true);
                // Tratamento data - Adicionar ao Title
                const datasTratadas = datas.map(datas => {
                    const [ano, mes, dia] = datas.split('-');
                    return `${dia}/${mes}/${ano}`;
                });
                setCampoDetalhamento2title(datasTratadas)
                setCampoDetalhamento2content(datas);

                setTimeout(() => {setItemSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'data', 'id', 'itens')
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "id" && selectValor2 === "cliente") {
                setTimeout(() => {setItemSelecionado(false), setItemSelecionadoGraf(false), setItemSelecionadoGraf3Campos(false);}, 10);
                setItemSelecionado3Campos(true);
                setCampoDetalhamento2title(clientes)
                setCampoDetalhamento2content(clientes);

                setTimeout(() => {setItemSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'cliente', 'id', 'itens')
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "id" && selectValor2 === "fabricante") {
                setTimeout(() => {setItemSelecionado(false), setItemSelecionadoGraf(false), setItemSelecionadoGraf3Campos(false);}, 10);
                setItemSelecionado3Campos(true);
                setCampoDetalhamento2title(fabricantes)
                setCampoDetalhamento2content(fabricantes);

                setTimeout(() => {setItemSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'fabricante', 'id', 'itens')
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "id" && selectValor2 === "cor") {
                setTimeout(() => {setItemSelecionado(false), setItemSelecionadoGraf(false), setItemSelecionadoGraf3Campos(false);}, 10);
                setItemSelecionado3Campos(true);
                setCampoDetalhamento2title(cores)
                setCampoDetalhamento2content(cores);

                setTimeout(() => {setItemSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'cor', 'id', 'itens')
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "id" && selectValor2 === "ano") {
                setTimeout(() => {setItemSelecionado(false), setItemSelecionadoGraf(false), setItemSelecionadoGraf3Campos(false);}, 10);
                setItemSelecionado3Campos(true);
                setCampoDetalhamento2title(anos)
                setCampoDetalhamento2content(anos);

                setTimeout(() => {setItemSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'ano', 'id', 'itens')
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "id" && selectValor2 === "mes") {
                setTimeout(() => {setItemSelecionado(false), setItemSelecionadoGraf(false), setItemSelecionadoGraf3Campos(false);}, 10);
                setItemSelecionado3Campos(true);
                // Obs: Tratamento dos meses de número para texto 
                const mesesStr = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
                const mesesConvertidos = meses.map(numero => mesesStr[numero - 1]);
                setCampoDetalhamento2title(mesesConvertidos)
                setCampoDetalhamento2content(meses);

                setTimeout(() => {setItemSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'mes', 'id', 'itens');
                setSeriesGraf3(trat);
            }
            // CLIENTES
            if(selectValor1 === "cliente" && selectValor2 === "categoria") {
                setTimeout(() => {setItemSelecionado(false), setItemSelecionadoGraf(false), setItemSelecionadoGraf3Campos(false);}, 10);
                setItemSelecionado3Campos(true);
                setCampoDetalhamento2title(categorias)
                setCampoDetalhamento2content(categorias);

                setTimeout(() => {setItemSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'categoria', 'cliente', 'itens');
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "cliente" && selectValor2 === "id") {
                setTimeout(() => {setItemSelecionado(false), setItemSelecionadoGraf(false), setItemSelecionadoGraf3Campos(false);}, 10);
                setItemSelecionado3Campos(true);
                setCampoDetalhamento2title(ids)
                setCampoDetalhamento2content(ids);

                setTimeout(() => {setItemSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'id', 'cliente', 'itens');
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "cliente" && selectValor2 === "data") {
                setTimeout(() => {setItemSelecionado(false), setItemSelecionadoGraf(false), setItemSelecionadoGraf3Campos(false);}, 10);
                setItemSelecionado3Campos(true);
                // Tratamento data - Adicionar ao Title
                const datasTratadas = datas.map(datas => {
                    const [ano, mes, dia] = datas.split('-');
                    return `${dia}/${mes}/${ano}`;
                });
                setCampoDetalhamento2title(datasTratadas)
                setCampoDetalhamento2content(datas);

                setTimeout(() => {setItemSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'data', 'cliente', 'itens');
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "cliente" && selectValor2 === "fabricante") {
                setTimeout(() => {setItemSelecionado(false), setItemSelecionadoGraf(false), setItemSelecionadoGraf3Campos(false);}, 10);
                setItemSelecionadoGraf3Campos(true);
                setItemSelecionado3Campos(true);
                setCampoDetalhamento2title(fabricantes)
                setCampoDetalhamento2content(fabricantes);

                setTimeout(() => {setItemSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'fabricante', 'cliente', 'itens');
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "cliente" && selectValor2 === "cor") {
                setTimeout(() => {setItemSelecionado(false), setItemSelecionadoGraf(false), setItemSelecionadoGraf3Campos(false);}, 10);
                setItemSelecionado3Campos(true);
                setCampoDetalhamento2title(cores)
                setCampoDetalhamento2content(cores);

                setTimeout(() => {setItemSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'cor', 'cliente', 'itens');
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "cliente" && selectValor2 === "ano") {
                setTimeout(() => {setItemSelecionado(false), setItemSelecionadoGraf(false), setItemSelecionadoGraf3Campos(false);}, 10);
                setItemSelecionado3Campos(true);
                setCampoDetalhamento2title(anos)
                setCampoDetalhamento2content(anos);

                setTimeout(() => {setItemSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'ano', 'cliente', 'itens');
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "cliente" && selectValor2 === "mes") {
                setTimeout(() => {setItemSelecionado(false), setItemSelecionadoGraf(false), setItemSelecionadoGraf3Campos(false);}, 10);
                setItemSelecionado3Campos(true);
                // Obs: Tratamento dos meses de número para texto 
                const mesesStr = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
                const mesesConvertidos = meses.map(numero => mesesStr[numero - 1]);
                setCampoDetalhamento2title(mesesConvertidos)
                setCampoDetalhamento2content(meses);

                setTimeout(() => {setItemSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'mes', 'cliente', 'itens');
                setSeriesGraf3(trat);
            }
            // CATEGORIA - 
            if(selectValor1 === "categoria" && selectValor2 === "id") {
                setTimeout(() => {setItemSelecionado(false), setItemSelecionadoGraf(false), setItemSelecionadoGraf3Campos(false);}, 10);
                setItemSelecionado3Campos(true);
                setCampoDetalhamento2title(ids)
                setCampoDetalhamento2content(ids);

                setTimeout(() => {setItemSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'id', 'categoria', 'itens');
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "categoria" && selectValor2 === "data") {
                setTimeout(() => {setItemSelecionado(false), setItemSelecionadoGraf(false), setItemSelecionadoGraf3Campos(false);}, 10);
                setItemSelecionado3Campos(true);
                // Tratamento data - Adicionar ao Title
                const datasTratadas = datas.map(datas => {
                    const [ano, mes, dia] = datas.split('-');
                    return `${dia}/${mes}/${ano}`;
                });
                setCampoDetalhamento2title(datasTratadas)
                setCampoDetalhamento2content(datas);

                setTimeout(() => {setItemSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'data', 'categoria', 'itens');
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "categoria" && selectValor2 === "cliente") {
                setTimeout(() => {setItemSelecionado(false), setItemSelecionadoGraf(false), setItemSelecionadoGraf3Campos(false);}, 10);
                setItemSelecionadoGraf3Campos(true);
                setItemSelecionado3Campos(true);
                setCampoDetalhamento2title(clientes)
                setCampoDetalhamento2content(clientes);

                setTimeout(() => {setItemSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'cliente', 'categoria', 'itens');
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "categoria" && selectValor2 === "fabricante") {
                setTimeout(() => {setItemSelecionado(false), setItemSelecionadoGraf(false), setItemSelecionadoGraf3Campos(false);}, 10);
                setItemSelecionadoGraf3Campos(true);
                setItemSelecionado3Campos(true);
                setCampoDetalhamento2title(fabricantes)
                setCampoDetalhamento2content(fabricantes);

                setTimeout(() => {setItemSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'fabricante', 'categoria', 'itens');
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "categoria" && selectValor2 === "cor") {
                setTimeout(() => {setItemSelecionado(false), setItemSelecionadoGraf(false), setItemSelecionadoGraf3Campos(false);}, 10);
                setItemSelecionado3Campos(true);
                setCampoDetalhamento2title(cores)
                setCampoDetalhamento2content(cores);

                setTimeout(() => {setItemSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'cor', 'categoria', 'itens');
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "categoria" && selectValor2 === "ano") {
                setTimeout(() => {setItemSelecionado(false), setItemSelecionadoGraf(false), setItemSelecionadoGraf3Campos(false);}, 10);
                setItemSelecionado3Campos(true);
                setCampoDetalhamento2title(anos)
                setCampoDetalhamento2content(anos);

                setTimeout(() => {setItemSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'ano', 'categoria', 'itens');
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "categoria" && selectValor2 === "mes") {
                setTimeout(() => {setItemSelecionado(false), setItemSelecionadoGraf(false), setItemSelecionadoGraf3Campos(false);}, 10);
                setItemSelecionado3Campos(true);
                // Obs: Tratamento dos meses de número para texto 
                const mesesStr = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
                const mesesConvertidos = meses.map(numero => mesesStr[numero - 1]);
                setCampoDetalhamento2title(mesesConvertidos)
                setCampoDetalhamento2content(meses);

                setTimeout(() => {setItemSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'mes', 'categoria', 'itens');
                setSeriesGraf3(trat);
            }

            // FABRICANTE
            if(selectValor1 === "fabricante" && selectValor2 === "id") {
                setTimeout(() => {setItemSelecionado(false), setItemSelecionadoGraf(false), setItemSelecionadoGraf3Campos(false);}, 10);
                setItemSelecionado3Campos(true);
                setCampoDetalhamento2title(ids)
                setCampoDetalhamento2content(ids);

                setTimeout(() => {setItemSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'id', 'fabricante', 'itens')
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "fabricante" && selectValor2 === "data") {
                setTimeout(() => {setItemSelecionado(false), setItemSelecionadoGraf(false), setItemSelecionadoGraf3Campos(false);}, 10);
                setItemSelecionado3Campos(true);
                // Tratamento data - Adicionar ao Title
                const datasTratadas = datas.map(datas => {
                    const [ano, mes, dia] = datas.split('-');
                    return `${dia}/${mes}/${ano}`;
                });
                setCampoDetalhamento2title(datasTratadas)
                setCampoDetalhamento2content(datas);

                setTimeout(() => {setItemSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'data', 'fabricante', 'itens')
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "fabricante" && selectValor2 === "cliente") {
                setTimeout(() => {setItemSelecionado(false), setItemSelecionadoGraf(false), setItemSelecionadoGraf3Campos(false);}, 10);
                setItemSelecionado3Campos(true);
                setCampoDetalhamento2title(clientes)
                setCampoDetalhamento2content(clientes);

                setTimeout(() => {setItemSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'cliente', 'fabricante', 'itens')
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "fabricante" && selectValor2 === "categoria") {
                setTimeout(() => {setItemSelecionado(false), setItemSelecionadoGraf(false), setItemSelecionadoGraf3Campos(false);}, 10);
                setItemSelecionado3Campos(true);
                setCampoDetalhamento2title(categorias)
                setCampoDetalhamento2content(categorias);

                setTimeout(() => {setItemSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'categoria', 'fabricante', 'itens')
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "fabricante" && selectValor2 === "cor") {
                setTimeout(() => {setItemSelecionado(false), setItemSelecionadoGraf(false), setItemSelecionadoGraf3Campos(false);}, 10);
                setItemSelecionado3Campos(true);
                setCampoDetalhamento2title(cores)
                setCampoDetalhamento2content(cores);

                setTimeout(() => {setItemSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'cor', 'fabricante', 'itens')
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "fabricante" && selectValor2 === "ano") {
                setTimeout(() => {setItemSelecionado(false), setItemSelecionadoGraf(false), setItemSelecionadoGraf3Campos(false);}, 10);
                setItemSelecionado3Campos(true);
                setCampoDetalhamento2title(anos)
                setCampoDetalhamento2content(anos);

                setTimeout(() => {setItemSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'ano', 'fabricante', 'itens')
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "fabricante" && selectValor2 === "mes") {
                setTimeout(() => {setItemSelecionado(false), setItemSelecionadoGraf(false), setItemSelecionadoGraf3Campos(false);}, 10);
                setItemSelecionado3Campos(true);
                // Obs: Tratamento dos meses de número para texto 
                const mesesStr = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
                const mesesConvertidos = meses.map(numero => mesesStr[numero - 1]);
                setCampoDetalhamento2title(mesesConvertidos)
                setCampoDetalhamento2content(meses);

                setTimeout(() => {setItemSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'mes', 'fabricante', 'itens');
                setSeriesGraf3(trat);
            }

            // COR
            if(selectValor1 === "cor" && selectValor2 === "id") {
                setTimeout(() => {setItemSelecionado(false), setItemSelecionadoGraf(false), setItemSelecionadoGraf3Campos(false);}, 10);
                setItemSelecionado3Campos(true);
                setCampoDetalhamento2title(ids)
                setCampoDetalhamento2content(ids);
                
                setTimeout(() => {setItemSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'id', 'cor', 'itens');
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "cor" && selectValor2 === "data") {
                setTimeout(() => {setItemSelecionado(false), setItemSelecionadoGraf(false), setItemSelecionadoGraf3Campos(false);}, 10);
                setItemSelecionado3Campos(true);
                // Tratamento data - Adicionar ao Title
                const datasTratadas = datas.map(datas => {
                    const [ano, mes, dia] = datas.split('-');
                    return `${dia}/${mes}/${ano}`;
                });
                setCampoDetalhamento2title(datasTratadas)
                setCampoDetalhamento2content(datas);
                
                setTimeout(() => {setItemSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'data', 'cor', 'itens');
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "cor" && selectValor2 === "cliente") {
                setTimeout(() => {setItemSelecionado(false), setItemSelecionadoGraf(false), setItemSelecionadoGraf3Campos(false);}, 10);
                setItemSelecionado3Campos(true);
                setCampoDetalhamento2title(clientes)
                setCampoDetalhamento2content(clientes);
                
                setTimeout(() => {setItemSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'cliente', 'cor', 'itens');
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "cor" && selectValor2 === "categoria") {
                setTimeout(() => {setItemSelecionado(false), setItemSelecionadoGraf(false), setItemSelecionadoGraf3Campos(false);}, 10);
                setItemSelecionado3Campos(true);
                setCampoDetalhamento2title(categorias)
                setCampoDetalhamento2content(categorias);
                
                setTimeout(() => {setItemSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'categoria', 'cor', 'itens');
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "cor" && selectValor2 === "fabricante") {
                setTimeout(() => {setItemSelecionado(false), setItemSelecionadoGraf(false), setItemSelecionadoGraf3Campos(false);}, 10);
                setItemSelecionado3Campos(true);
                setCampoDetalhamento2title(fabricantes)
                setCampoDetalhamento2content(fabricantes);

                setTimeout(() => {setItemSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'fabricante', 'cor', 'itens');
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "cor" && selectValor2 === "ano") {
                setTimeout(() => {setItemSelecionado(false), setItemSelecionadoGraf(false), setItemSelecionadoGraf3Campos(false);}, 10);
                setItemSelecionado3Campos(true);
                setCampoDetalhamento2title(anos)
                setCampoDetalhamento2content(anos);

                setTimeout(() => {setItemSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'ano', 'cor', 'itens');
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "cor" && selectValor2 === "mes") {
                setTimeout(() => {setItemSelecionado(false), setItemSelecionadoGraf(false), setItemSelecionadoGraf3Campos(false);}, 10);
                setItemSelecionado3Campos(true);
                // Obs: Tratamento dos meses de número para texto 
                const mesesStr = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
                const mesesConvertidos = meses.map(numero => mesesStr[numero - 1]);
                setCampoDetalhamento2title(mesesConvertidos)
                setCampoDetalhamento2content(meses);

                setTimeout(() => {setItemSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'mes', 'cor', 'itens');
                setSeriesGraf3(trat);
            }

            // ANO
            if(selectValor1 === "ano" && selectValor2 === "id") {
                setTimeout(() => {setItemSelecionado(false), setItemSelecionadoGraf(false), setItemSelecionadoGraf3Campos(false);}, 10);
                setItemSelecionado3Campos(true);
                setCampoDetalhamento2title(ids)
                setCampoDetalhamento2content(ids);

                setTimeout(() => {setItemSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'id', 'ano', 'itens');
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "ano" && selectValor2 === "data") {
                setTimeout(() => {setItemSelecionado(false), setItemSelecionadoGraf(false), setItemSelecionadoGraf3Campos(false);}, 10);
                setItemSelecionado3Campos(true);
                // Tratamento data - Adicionar ao Title
                const datasTratadas = datas.map(datas => {
                    const [ano, mes, dia] = datas.split('-');
                    return `${dia}/${mes}/${ano}`;
                });
                setCampoDetalhamento2title(datasTratadas)
                setCampoDetalhamento2content(datas);

                setTimeout(() => {setItemSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'data', 'ano', 'itens');
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "ano" && selectValor2 === "cliente") {
                setTimeout(() => {setItemSelecionado(false), setItemSelecionadoGraf(false), setItemSelecionadoGraf3Campos(false);}, 10);
                setItemSelecionado3Campos(true);
                setCampoDetalhamento2title(clientes)
                setCampoDetalhamento2content(clientes);

                setTimeout(() => {setItemSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'cliente', 'ano', 'itens');
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "ano" && selectValor2 === "categoria") {
                setTimeout(() => {setItemSelecionado(false), setItemSelecionadoGraf(false), setItemSelecionadoGraf3Campos(false);}, 10);
                setItemSelecionado3Campos(true);
                setCampoDetalhamento2title(categorias)
                setCampoDetalhamento2content(categorias);

                setTimeout(() => {setItemSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'categoria', 'ano', 'itens');
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "ano" && selectValor2 === "fabricante") {
                setTimeout(() => {setItemSelecionado(false), setItemSelecionadoGraf(false), setItemSelecionadoGraf3Campos(false);}, 10);
                setItemSelecionado3Campos(true);
                setCampoDetalhamento2title(fabricantes)
                setCampoDetalhamento2content(fabricantes);

                setTimeout(() => {setItemSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'fabricante', 'ano', 'itens');
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "ano" && selectValor2 === "cor") {
                setTimeout(() => {setItemSelecionado(false), setItemSelecionadoGraf(false), setItemSelecionadoGraf3Campos(false);}, 10);
                setItemSelecionado3Campos(true);
                setCampoDetalhamento2title(cores)
                setCampoDetalhamento2content(cores);

                setTimeout(() => {setItemSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'cor', 'ano', 'itens');
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "ano" && selectValor2 === "mes") {
                setTimeout(() => {setItemSelecionado(false), setItemSelecionadoGraf(false), setItemSelecionadoGraf3Campos(false);}, 10);
                setItemSelecionado3Campos(true);
                // Obs: Tratamento dos meses de número para texto 
                const mesesStr = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
                const mesesConvertidos = meses.map(numero => mesesStr[numero - 1]);
                setCampoDetalhamento2title(mesesConvertidos)
                setCampoDetalhamento2content(meses);

                setTimeout(() => {setItemSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'mes', 'ano', 'itens');
                setSeriesGraf3(trat);
            }

            // MES
            if(selectValor1 === "mes" && selectValor2 === "id") {
                setTimeout(() => {setItemSelecionado(false), setItemSelecionadoGraf(false), setItemSelecionadoGraf3Campos(false);}, 10);
                setItemSelecionado3Campos(true);
                setCampoDetalhamento2title(ids)
                setCampoDetalhamento2content(ids);

                setTimeout(() => {setItemSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'id', 'mes', 'itens');
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "mes" && selectValor2 === "data") {
                setTimeout(() => {setItemSelecionado(false), setItemSelecionadoGraf(false), setItemSelecionadoGraf3Campos(false);}, 10);
                setItemSelecionado3Campos(true);
                // Tratamento data - Adicionar ao Title
                const datasTratadas = datas.map(datas => {
                    const [ano, mes, dia] = datas.split('-');
                    return `${dia}/${mes}/${ano}`;
                });
                setCampoDetalhamento2title(datasTratadas)
                setCampoDetalhamento2content(datas);

                setTimeout(() => {setItemSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'data', 'mes', 'itens');
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "mes" && selectValor2 === "cliente") {
                setTimeout(() => {setItemSelecionado(false), setItemSelecionadoGraf(false), setItemSelecionadoGraf3Campos(false);}, 10);
                setItemSelecionado3Campos(true);
                setCampoDetalhamento2title(clientes)
                setCampoDetalhamento2content(clientes);

                setTimeout(() => {setItemSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'cliente', 'mes', 'itens');
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "mes" && selectValor2 === "categoria") {
                setTimeout(() => {setItemSelecionado(false), setItemSelecionadoGraf(false), setItemSelecionadoGraf3Campos(false);}, 10);
                setItemSelecionado3Campos(true);
                setCampoDetalhamento2title(categorias)
                setCampoDetalhamento2content(categorias);

                setTimeout(() => {setItemSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'categoria', 'mes', 'itens');
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "mes" && selectValor2 === "fabricante") {
                setTimeout(() => {setItemSelecionado(false), setItemSelecionadoGraf(false), setItemSelecionadoGraf3Campos(false);}, 10);
                setItemSelecionado3Campos(true);
                setCampoDetalhamento2title(fabricantes)
                setCampoDetalhamento2content(fabricantes);

                setTimeout(() => {setItemSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'fabricante', 'mes', 'itens');
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "mes" && selectValor2 === "cor") {
                setTimeout(() => {setItemSelecionado(false), setItemSelecionadoGraf(false), setItemSelecionadoGraf3Campos(false);}, 10);
                setItemSelecionado3Campos(true);
                setCampoDetalhamento2title(cores)
                setCampoDetalhamento2content(cores);

                setTimeout(() => {setItemSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'cor', 'mes', 'itens');
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "mes" && selectValor2 === "ano") {
                setTimeout(() => {setItemSelecionado(false), setItemSelecionadoGraf(false), setItemSelecionadoGraf3Campos(false);}, 10);
                setItemSelecionado3Campos(true);
                setCampoDetalhamento2title(anos)
                setCampoDetalhamento2content(anos);

                setTimeout(() => {setItemSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados2, 'ano', 'mes', 'itens');
                setSeriesGraf3(trat);
            }
        }
        
        if((selectValor0 === "nulo0" && selectValor1 === "nulo1" && selectValor2 === "nulo2") || 
        (selectValor0 !== "nulo0" && selectValor1 === "nulo1" && selectValor2 === "nulo2")) {
            setTimeout(() => {
                setValorTotalSelecionado(false);
                setItemSelecionado(false);
                setValorTotalSelecionado3Campos(false);
                setItemSelecionado3Campos(false);
                setValorTotalSelecionadoGraf(false);
                setItemSelecionadoGraf(false);
                setValorTotalSelecionadoGraf3Campos(false);
                setItemSelecionadoGraf3Campos(false);
            }, 100);
        }
        return;
    },[selectValor0, selectValor1, selectValor2, contentSelecionado0, contentSelecionado1, contentSelecionado2]);

    // Estados para criar de forma dinâmica a tabela com as 2 primeiras informações 
    // Preço 
    const [campoDetalhamento1, setCampoDetalhamento1] = useState<string[]>([]);
    const [campoDetalhamento1ValorTotal, setCampoDetalhamento1ValorTotal] = useState<number[]>([]);
    const [campoDetalhamento1Total, setCampoDetalhamento1Total] = useState<number[]>([]);

    // Item 
    const [campoDetalhamento1Item, setCampoDetalhamento1Item] = useState<number[]>([]);

    // Estados para criar de forma dinâmica a tabela com as 3 informações selecionadas
    // obs: Campo detalhamento title criado para fazer o tratamento dos meses números para nomes
    const [campoDetalhamento2content, setCampoDetalhamento2content] = useState<string[] | number[] | string | number>([]);
    const [campoDetalhamento2title, setCampoDetalhamento2title] = useState<string[] | number[] | string | number>([]);

    const filtrarUnicos = (campo: string) => {
        return Array.from(new Set(dados2.map(dado => dado[campo])));
    };

    // Função Gerar segunda tabela caso todos campos selecionados 
    function gerarTabela() {
        const detalhamento1 = filtrarUnicos(selectValor1);
        const detalhamento2 = filtrarUnicos(selectValor2);
    
        const tabela = detalhamento1.map(cat => {
        const linha = { propriedade: cat };
        detalhamento2.forEach(el => {
        const itens = dados2.filter(d => d[selectValor1] === cat && d[selectValor2] === el);
        const soma = itens.reduce((total, item) => total + item[selectValor0], 0);
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

        if(linha.propriedade === "2024-06-01") {linha.propriedade = "01/06/2024";}
        if(linha.propriedade === "2024-06-02") {linha.propriedade = "02/06/2024";}
        if(linha.propriedade === "2024-06-03") {linha.propriedade = "03/06/2024";}
        if(linha.propriedade === "2024-06-04") {linha.propriedade = "04/06/2024";}
        if(linha.propriedade === "2024-06-05") {linha.propriedade = "05/06/2024";}
        if(linha.propriedade === "2024-06-06") {linha.propriedade = "06/06/2024";}
        if(linha.propriedade === "2024-06-07") {linha.propriedade = "07/06/2024";}
        if(linha.propriedade === "2024-06-08") {linha.propriedade = "08/06/2024";}
        if(linha.propriedade === "2024-06-09") {linha.propriedade = "09/06/2024";}
        if(linha.propriedade === "2024-06-10") {linha.propriedade = "10/06/2024";}
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

    // tabela gráfica tratamento de quantidade(numero) ou valor(moeda R$)
    // 2 campos 
    const [yaxixType2Campos, setYaxixType2Campos] = useState("");
    const priceY2Campos =  {
        formatter: function (value: number) {
            return `R$ ${value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
            }
        }
        const quantY2Campos = {
            formatter: function (value: number) {
                return value;
                }
        }

    // 3 campos 
    const [yaxixType3Campos, setYaxixType3Campos] = useState("");
    const priceY3Campos =  {
        formatter: function (value: number) {
            return `R$ ${value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
            }
        }
        const quantY3Campos = {
            formatter: function (value: number) {
                return value;
                }
        }

    // Tabela Gráfica quando todos os campos são selecionados 
    const [seriesGraf3, setSeriesGraf3] = useState("");

    const series = 
    seriesGraf3;
    
    const options = {
        chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            toolbar: {
                show: true
            },
            zoom: {
                enabled: true
            }
            },
            responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
                }
            }
            }],
            plotOptions: {
            bar: {
                horizontal: false,
                borderRadiusApplication: 'end',
                borderRadiusWhenStacked: 'last',
                dataLabels: {
                total: {
                    enabled: false,
                    style: {
                    fontSize: '13px',
                    fontWeight: 900
                    }
                }
                }
            },
            
            },
            xaxis: {
            categories: campoDetalhamento1,
            },
            yaxis: {
                labels: yaxixType3Campos,
            },
            dataLabels: {
                enabled: false,
            },
            legend: {
            position: 'bottom',
            },
            fill: {
            opacity: 1
            }
        };


    return(
        <div className='dados'>

            <div className="selectionConfig">

                <div className="camposFonte">
                    <div>
                        <label htmlFor="selectD2_0">Somar</label>
                        <select id='selectD2_0' value={selectValor0} onChange={(e) => handleOpt0(e.target.value)} className="form-select">
                            <option value="nulo0">-</option>
                            <option value="valor_total">Valor Total</option>
                            <option value="itens">Itens</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="selectD2_1">Visualizar por</label>
                        <select id='selectD2_1' value={selectValor1} onChange={(e) => handleOpt1(e.target.value)} className="form-select">
                            <option value="nulo1">-</option>
                            {
                                valorFiltrado1.map((e, i) => (
                                    <option key={"select1"+i} value={e.valor}>{e.conteudo}</option>
                                ))
                            }
                        </select>
                    </div>

                    <div>
                        <label htmlFor="selectD2_2">Detalhar por</label>
                        <select id='selectD2_2' value={selectValor2} onChange={(e) => handleOpt2(e.target.value)} className="form-select">
                            <option value="nulo2">-</option>
                            {
                                valorFiltrado2.map((e, i) => (
                                    <option key={"select2"+i} value={e.valor}>{e.conteudo}</option>
                                ))
                            }
                        </select>
                    </div>

                </div>

                <div className="checkBox">
                    <div className="form-check">
                            <input className='form-check-input' type="checkbox" id="tabela" name="tabela" value="tabela" checked={tabelaCheck} onChange={tabelaTF} />
                            <label className="form-check-label" htmlFor="tabela">
                                Tabela
                            </label>
                    </div>
                    <div className="form-check">
                        <input className='form-check-input' type="checkbox" id="grafico" name="grafico" value="grafico" checked={graficoCheck} onChange={graficoTF} />
                        <label className="form-check-label" htmlFor="grafico">
                            Gráfico
                        </label>
                    </div>
                </div>
                
            </div>
            

            {tabelaCheck && (
                <div>
                    {valorTotalSelecionado && (
                        <>
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
                                                <td>{formatarMoeda(campoDetalhamento1ValorTotal[i])}</td>
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
                        </>
                    )} 

                    {itemSelecionado && (
                        <>
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
                                                <td>{campoDetalhamento1Item[i]}</td>
                                            </tr>
                                        ))}
                                    </>
                                }
                                totalTable={
                                    <tr>
                                        <td style={{fontWeight:"bold"}}>Total</td>
                                        <td style={{fontWeight:"bold"}}>{campoDetalhamento1Total}</td>
                                    </tr>
                                }
                            />
                        </>
                    )}  
                    

                    {valorTotalSelecionado3Campos && (
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
                                            {campoDetalhamento2content.map((el, i) => (
                                                <td key={i}>{formatarMoeda(linha[el] || 'R$ 0.00')}</td>
                                            ))}
                                            </tr>
                                        ))}
                                    </>
                                }
                                totalTable={
                                    <tr>
                                        <td style={{fontWeight:"bold"}}>Total</td>
                                        {campoDetalhamento2content.map((d2, i) => (
                                            <td key={i} style={{fontWeight:"bold"}}>{formatarMoeda(calcularTotalPorColuna(d2))}</td>
                                        ))}
                                    </tr>
                                }
                            />
                        </div>
                    )}

                    {itemSelecionado3Campos && (
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
                                            {campoDetalhamento2content.map((el, i) => (
                                                <td key={i}>{linha[el] || '0'}</td>
                                            ))}
                                            </tr>
                                        ))}
                                    </>
                                }
                                totalTable={
                                    <tr>
                                        <td style={{fontWeight:"bold"}}>Total</td>
                                        {campoDetalhamento2content.map((d2, i) => (
                                            <td key={i} style={{fontWeight:"bold"}}>{calcularTotalPorColuna(d2)}</td>
                                        ))}
                                    </tr>
                                }
                            />
                        </div>
                    )}
                                
                </div>
            )}  

            {graficoCheck && (
                <div style={{width: "100%"}}>
                    {valorTotalSelecionadoGraf && (
                        <Charts seriesM={mediaValores} categories={detalhamento1} yaxixConf={yaxixType2Campos} />
                    )}

                    {itemSelecionadoGraf && (
                        <Charts seriesM={mediaValores} categories={detalhamento1} yaxixConf={yaxixType2Campos} />
                    )}

                    {valorTotalSelecionadoGraf3Campos && (
                        <Charts3Campos options={options} series={series} />
                    )}

                    {itemSelecionadoGraf3Campos && (
                        <Charts3Campos options={options} series={series} />
                    )}
                </div>
            )}
            
        </div>
    )
}


export default Dados2;
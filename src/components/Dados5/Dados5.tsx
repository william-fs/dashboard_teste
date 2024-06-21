import Charts from '../Charts/Charts';
import Charts3Campos from '../Charts3Campos/Charts3Campos';
import './Dados5.css';
import {useEffect, useState} from 'react';
import Tabela from '../Tabela/Tabela';

// Fonte de dados 
import dados5 from "../../dados/fonte_de_dados_5.json";

// Valores usados nos campos 
import {valores} from "./TotalSelect";
// Import Categoria tratadas 
import {ids, datas, categorias, fabricantes, cores, anos, meses, contaids, tipos} from "./TotalSelect";
// Import valores de soma/total referente ao primeiro campo:
// Import Ids tratados 
import {somarValorTotalId101, somarValorTotalId102, somarValorTotalId103, somarValorTotalId104, somarValorTotalId105, somarValorTotalId106, somarValorTotalId107, somarValorTotalId108, somarValorTotalId109, somarValorTotalId110} from "./TotalSelect";
import {somarValorTotalCatSal, somarValorTotalCatAlu, somarValorTotalCatInv} from "./TotalSelect";
// Import datas tratadas 
import {somarValorTotalData1, somarValorTotalData2, somarValorTotalData3, somarValorTotalData4, somarValorTotalData5, somarValorTotalData6, somarValorTotalData7, somarValorTotalData8, somarValorTotalData9, somarValorTotalData10} from "./TotalSelect";
// Import Fabricantes tratados
import {somarValorTotalFabX, somarValorTotalFabY, somarValorTotalFabZ} from "./TotalSelect";
// Import Cores tratadas 
import {somarValorTotalCorVerm, somarValorTotalCorAzul, somarValorTotalCorVerde, somarValorTotalCorPreto, somarValorTotalCorBranco, somarValorTotalCorCinza} from "./TotalSelect";
// Import Anos tratados 
import {somarValorTotalAno2024} from "./TotalSelect";
// Import Meses tratados 
import {somarValorTotalMesJun} from "./TotalSelect";
// import contaIds 
import {somarValorTotalcontaId1, somarValorTotalcontaId2, somarValorTotalcontaId3, somarValorTotalcontaId4, somarValorTotalcontaId5, somarValorTotalcontaId6, somarValorTotalcontaId7, somarValorTotalcontaId8, somarValorTotalcontaId9, somarValorTotalcontaId10} from "./TotalSelect";
// import tipos tratados 
import {somarValorTotalTipoDep, somarValorTotalTipoSac, somarValorTotalTipoTransf} from "./TotalSelect";

// Import função de filtro para gráfico dos 3 campos 
import {FiltroGrafico3} from "./TotalSelect";

function Dados5() {

    // "Somas totais" para usar nos estados de atualização da tabela dinâmica 
    // Preços 
    // ContaIds
    const categoriaValoresContaIds:number[] = [somarValorTotalcontaId1, somarValorTotalcontaId2, somarValorTotalcontaId3, somarValorTotalcontaId4, somarValorTotalcontaId5, somarValorTotalcontaId6, somarValorTotalcontaId7, somarValorTotalcontaId8, somarValorTotalcontaId9, somarValorTotalcontaId10];
    const totalValorContaId:number[] = [somarValorTotalcontaId1+somarValorTotalcontaId2+somarValorTotalcontaId3+somarValorTotalcontaId4+somarValorTotalcontaId5+somarValorTotalcontaId6+somarValorTotalcontaId7+somarValorTotalcontaId8+somarValorTotalcontaId9+somarValorTotalcontaId10];
    // Ids 
    const idValoresTotais:number[] = [somarValorTotalId101, somarValorTotalId102, somarValorTotalId103, somarValorTotalId104, somarValorTotalId105, somarValorTotalId106, somarValorTotalId107, somarValorTotalId108, somarValorTotalId109, somarValorTotalId110];
    const totalValorTotalId:number[] = [somarValorTotalId101+somarValorTotalId102+somarValorTotalId103+somarValorTotalId104+somarValorTotalId105+somarValorTotalId106+somarValorTotalId107+somarValorTotalId108+somarValorTotalId109+somarValorTotalId110];
    // datas
    const dataValoresTotais:number[] = [somarValorTotalData1, somarValorTotalData2, somarValorTotalData3, somarValorTotalData4, somarValorTotalData5, somarValorTotalData6, somarValorTotalData7, somarValorTotalData8, somarValorTotalData9, somarValorTotalData10];
    const totalValorTotalData:number[] = [somarValorTotalData1+somarValorTotalData2+somarValorTotalData3+somarValorTotalData4+somarValorTotalData5+somarValorTotalData6+somarValorTotalData7+somarValorTotalData8+somarValorTotalData9+somarValorTotalData10];
    // Categorias 
    const categoriaValoresTotais:number[] = [somarValorTotalCatSal, somarValorTotalCatAlu, somarValorTotalCatInv];
    const totalValorTotalCategoria:number[] = [somarValorTotalCatSal+somarValorTotalCatAlu+somarValorTotalCatInv];
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
     // Tipos
    const tipoValoresTotais:number[] = [somarValorTotalTipoDep, somarValorTotalTipoSac, somarValorTotalTipoTransf];
    const totalValorTipo:number[] = [somarValorTotalTipoDep+somarValorTotalTipoSac+somarValorTotalTipoTransf];

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
        if(selectValor0 === "valor") {setContentSelecionado0("Valor");}
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
            return;}
        if(selectValor1 === "nulo1") {
            setSelectValor2("nulo2"); 
            setValorTotalSelecionado(false); 
            setValorTotalSelecionadoGraf(false);
            setValorTotalSelecionado3Campos(false); 
            return;}
        if(selectValor2 === "nulo2") {
            setValorTotalSelecionadoGraf(false);
            setValorTotalSelecionado3Campos(false);
            setValorTotalSelecionadoGraf3Campos(false);
        }
        
        return;
    },[selectValor0, selectValor1, selectValor2, contentSelecionado0, contentSelecionado1, contentSelecionado2]);

    const [valorTotalSelecionado, setValorTotalSelecionado] = useState(false);
    const [valorTotalSelecionadoGraf, setValorTotalSelecionadoGraf] = useState(false);
    const [valorTotalSelecionadoGraf3Campos, setValorTotalSelecionadoGraf3Campos] = useState(false);
    const [valorTotalSelecionado3Campos, setValorTotalSelecionado3Campos] = useState(false);
    
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
        if(selectValor0 === "valor") {
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
            if(selectValor1 === "tipo") {
                setValorTotalSelecionado(false);
                setValorTotalSelecionadoGraf(false);
                setTimeout(() => {setValorTotalSelecionado(true), setValorTotalSelecionadoGraf(true);}, 10);
                setCampoDetalhamento1(tipos);
                setCampoDetalhamento1ValorTotal(tipoValoresTotais);
                setCampoDetalhamento1Total(totalValorTipo);

                setDetalhamento1(tipos)
                setMediaValores(tipoValoresTotais);
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
            if(selectValor1 === "conta_id") {
                setValorTotalSelecionado(false);
                setValorTotalSelecionadoGraf(false);
                setTimeout(() => {setValorTotalSelecionado(true), setValorTotalSelecionadoGraf(true);}, 10);
                setCampoDetalhamento1(contaids);
                setCampoDetalhamento1ValorTotal(categoriaValoresContaIds);
                setCampoDetalhamento1Total(totalValorContaId);

                setDetalhamento1(contaids)
                setMediaValores(categoriaValoresContaIds);
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
                const trat = FiltroGrafico3(dados5, 'categoria', 'id', "valor")
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
                const trat = FiltroGrafico3(dados5, 'data', 'id', "valor")
                setSeriesGraf3(trat);
            }
            
            if(selectValor1 === "id" && selectValor2 === "fabricante") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(fabricantes)
                setCampoDetalhamento2content(fabricantes);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados5, 'fabricante', 'id', "valor")
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "id" && selectValor2 === "tipo") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(tipos)
                setCampoDetalhamento2content(tipos);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados5, 'tipo', 'id', "valor")
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "id" && selectValor2 === "conta_id") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(contaids)
                setCampoDetalhamento2content(contaids);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados5, 'conta_id', 'id', "valor")
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "id" && selectValor2 === "cor") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(cores)
                setCampoDetalhamento2content(cores);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados5, 'cor', 'id', "valor")
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "id" && selectValor2 === "ano") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(anos)
                setCampoDetalhamento2content(anos);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados5, 'ano', 'id', "valor")
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
                const trat = FiltroGrafico3(dados5, 'mes', 'id', "valor");
                setSeriesGraf3(trat);
            }
            // CONTA ID
            if(selectValor1 === "conta_id" && selectValor2 === "id") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionadoGraf3Campos(true);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(ids)
                setCampoDetalhamento2content(ids);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados5, 'id', 'conta_id', "valor");
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "conta_id" && selectValor2 === "data") {
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
                const trat = FiltroGrafico3(dados5, 'data', 'conta_id', "valor")
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "conta_id" && selectValor2 === "categoria") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionadoGraf3Campos(true);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(categorias)
                setCampoDetalhamento2content(categorias);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados5, 'categoria', 'conta_id', "valor");
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "conta_id" && selectValor2 === "tipo") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionadoGraf3Campos(true);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(tipos)
                setCampoDetalhamento2content(tipos);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados5, 'tipo', 'conta_id', "valor");
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "conta_id" && selectValor2 === "fabricante") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionadoGraf3Campos(true);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(fabricantes)
                setCampoDetalhamento2content(fabricantes);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados5, 'fabricante', 'conta_id', "valor");
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "conta_id" && selectValor2 === "cor") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(cores)
                setCampoDetalhamento2content(cores);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados5, 'cor', 'conta_id', "valor")
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "conta_id" && selectValor2 === "ano") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(anos)
                setCampoDetalhamento2content(anos);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados5, 'ano', 'conta_id', "valor")
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "conta_id" && selectValor2 === "mes") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                // Obs: Tratamento dos meses de número para texto 
                const mesesStr = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
                const mesesConvertidos = meses.map(numero => mesesStr[numero - 1]);
                setCampoDetalhamento2title(mesesConvertidos)
                setCampoDetalhamento2content(meses);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados5, 'mes', 'conta_id', "valor")
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
                const trat = FiltroGrafico3(dados5, 'id', 'data', "valor");
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "data" && selectValor2 === "conta_id") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionadoGraf3Campos(true);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(contaids)
                setCampoDetalhamento2content(contaids);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados5, 'conta_id', 'data', "valor");
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "data" && selectValor2 === "categoria") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionadoGraf3Campos(true);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(categorias)
                setCampoDetalhamento2content(categorias);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados5, 'categoria', 'data', "valor");
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "data" && selectValor2 === "tipo") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionadoGraf3Campos(true);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(tipos)
                setCampoDetalhamento2content(tipos);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados5, 'tipo', 'data', "valor");
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "data" && selectValor2 === "fabricante") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionadoGraf3Campos(true);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(fabricantes)
                setCampoDetalhamento2content(fabricantes);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados5, 'fabricante', 'data', "valor");
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "data" && selectValor2 === "cor") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(cores)
                setCampoDetalhamento2content(cores);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados5, 'cor', 'data', "valor")
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "data" && selectValor2 === "ano") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(anos)
                setCampoDetalhamento2content(anos);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados5, 'ano', 'data', "valor")
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
                const trat = FiltroGrafico3(dados5, 'mes', 'data', "valor")
                setSeriesGraf3(trat);
            }

            // TIPOS
            if(selectValor1 === "tipo" && selectValor2 === "id") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionadoGraf3Campos(true);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(ids)
                setCampoDetalhamento2content(ids);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados5, 'id', 'tipo', "valor");
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "tipo" && selectValor2 === "categoria") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionadoGraf3Campos(true);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(categorias)
                setCampoDetalhamento2content(categorias);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados5, 'categoria', 'tipo', "valor");
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "tipo" && selectValor2 === "data") {
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
                const trat = FiltroGrafico3(dados5, 'data', 'tipo', "valor");
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "tipo" && selectValor2 === "conta_id") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionadoGraf3Campos(true);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(contaids)
                setCampoDetalhamento2content(contaids);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados5, 'conta_id', 'tipo', "valor");
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "tipo" && selectValor2 === "fabricante") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionadoGraf3Campos(true);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(fabricantes)
                setCampoDetalhamento2content(fabricantes);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados5, 'fabricante', 'tipo', "valor");
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "tipo" && selectValor2 === "cor") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(cores)
                setCampoDetalhamento2content(cores);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados5, 'cor', 'tipo', "valor")
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "tipo" && selectValor2 === "ano") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(anos)
                setCampoDetalhamento2content(anos);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados5, 'ano', 'tipo', "valor")
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "tipo" && selectValor2 === "mes") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                // Obs: Tratamento dos meses de número para texto 
                const mesesStr = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
                const mesesConvertidos = meses.map(numero => mesesStr[numero - 1]);
                setCampoDetalhamento2title(mesesConvertidos)
                setCampoDetalhamento2content(meses);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados5, 'mes', 'tipo', "valor")
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
                const trat = FiltroGrafico3(dados5, 'id', 'categoria', "valor");
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
                const trat = FiltroGrafico3(dados5, 'data', 'categoria', "valor");
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "categoria" && selectValor2 === "conta_id") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionadoGraf3Campos(true);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(contaids)
                setCampoDetalhamento2content(contaids);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados5, 'conta_id', 'categoria', "valor");
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "categoria" && selectValor2 === "fabricante") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionadoGraf3Campos(true);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(fabricantes)
                setCampoDetalhamento2content(fabricantes);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados5, 'fabricante', 'categoria', "valor");
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "categoria" && selectValor2 === "tipo") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionadoGraf3Campos(true);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(tipos)
                setCampoDetalhamento2content(tipos);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados5, 'tipo', 'categoria', "valor");
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "categoria" && selectValor2 === "cor") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(cores)
                setCampoDetalhamento2content(cores);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados5, 'cor', 'categoria', "valor")
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "categoria" && selectValor2 === "ano") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(anos)
                setCampoDetalhamento2content(anos);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados5, 'ano', 'categoria', "valor")
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
                const trat = FiltroGrafico3(dados5, 'mes', 'categoria', "valor")
                setSeriesGraf3(trat);
            }

            // FABRICANTE
            if(selectValor1 === "fabricante" && selectValor2 === "id") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(ids)
                setCampoDetalhamento2content(ids);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados5, 'id', 'fabricante', "valor")
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
                const trat = FiltroGrafico3(dados5, 'data', 'fabricante', "valor")
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "fabricante" && selectValor2 === "categoria") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(categorias)
                setCampoDetalhamento2content(categorias);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados5, 'categoria', 'fabricante', "valor")
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "fabricante" && selectValor2 === "tipo") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(tipos)
                setCampoDetalhamento2content(tipos);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados5, 'tipo', 'fabricante', "valor")
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "fabricante" && selectValor2 === "conta_id") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(contaids)
                setCampoDetalhamento2content(contaids);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados5, 'conta_id', 'fabricante', "valor")
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "fabricante" && selectValor2 === "cor") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(cores)
                setCampoDetalhamento2content(cores);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados5, 'cor', 'fabricante', "valor")
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "fabricante" && selectValor2 === "ano") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(anos)
                setCampoDetalhamento2content(anos);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados5, 'ano', 'fabricante', "valor")
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
                const trat = FiltroGrafico3(dados5, 'mes', 'fabricante', "valor");
                setSeriesGraf3(trat);
            }

            // COR
            if(selectValor1 === "cor" && selectValor2 === "id") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(ids)
                setCampoDetalhamento2content(ids);
                
                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados5, 'id', 'cor', "valor");
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
                const trat = FiltroGrafico3(dados5, 'data', 'cor', "valor");
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "cor" && selectValor2 === "categoria") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(categorias)
                setCampoDetalhamento2content(categorias);
                
                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados5, 'categoria', 'cor', "valor");
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "cor" && selectValor2 === "tipo") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(tipos)
                setCampoDetalhamento2content(tipos);
                
                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados5, 'tipo', 'cor', "valor");
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "cor" && selectValor2 === "conta_id") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(contaids)
                setCampoDetalhamento2content(contaids);
                
                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados5, 'conta_id', 'cor', "valor");
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "cor" && selectValor2 === "fabricante") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(fabricantes)
                setCampoDetalhamento2content(fabricantes);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados5, 'fabricante', 'cor', "valor");
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "cor" && selectValor2 === "ano") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(anos)
                setCampoDetalhamento2content(anos);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados5, 'ano', 'cor', "valor");
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
                const trat = FiltroGrafico3(dados5, 'mes', 'cor', "valor");
                setSeriesGraf3(trat);
            }

            // ANO
            if(selectValor1 === "ano" && selectValor2 === "id") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(ids)
                setCampoDetalhamento2content(ids);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados5, 'id', 'ano', "valor");
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
                const trat = FiltroGrafico3(dados5, 'data', 'ano', "valor");
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "ano" && selectValor2 === "categoria") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(categorias)
                setCampoDetalhamento2content(categorias);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados5, 'categoria', 'ano', "valor");
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "ano" && selectValor2 === "tipo") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(tipos)
                setCampoDetalhamento2content(tipos);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados5, 'tipo', 'ano', "valor");
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "ano" && selectValor2 === "conta_id") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(contaids)
                setCampoDetalhamento2content(contaids);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados5, 'conta_id', 'ano', "valor");
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "ano" && selectValor2 === "fabricante") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(fabricantes)
                setCampoDetalhamento2content(fabricantes);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados5, 'fabricante', 'ano', "valor");
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "ano" && selectValor2 === "cor") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(cores)
                setCampoDetalhamento2content(cores);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados5, 'cor', 'ano', "valor");
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
                const trat = FiltroGrafico3(dados5, 'mes', 'ano', "valor");
                setSeriesGraf3(trat);
            }

            // MES
            if(selectValor1 === "mes" && selectValor2 === "id") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(ids)
                setCampoDetalhamento2content(ids);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados5, 'id', 'mes', "valor");
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
                const trat = FiltroGrafico3(dados5, 'data', 'mes', "valor");
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "mes" && selectValor2 === "categoria") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(categorias)
                setCampoDetalhamento2content(categorias);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados5, 'categoria', 'mes', "valor");
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "mes" && selectValor2 === "tipo") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(tipos)
                setCampoDetalhamento2content(tipos);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados5, 'tipo', 'mes', "valor");
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "mes" && selectValor2 === "conta_id") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(contaids)
                setCampoDetalhamento2content(contaids);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados5, 'conta_id', 'mes', "valor");
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "mes" && selectValor2 === "fabricante") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(fabricantes)
                setCampoDetalhamento2content(fabricantes);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados5, 'fabricante', 'mes', "valor");
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "mes" && selectValor2 === "cor") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(cores)
                setCampoDetalhamento2content(cores);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados5, 'cor', 'mes', "valor");
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "mes" && selectValor2 === "ano") {
                setTimeout(() => {setValorTotalSelecionado(false), setValorTotalSelecionadoGraf(false), setValorTotalSelecionadoGraf3Campos(false);}, 10);
                setValorTotalSelecionado3Campos(true);
                setCampoDetalhamento2title(anos)
                setCampoDetalhamento2content(anos);

                setTimeout(() => {setValorTotalSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados5, 'ano', 'mes', "valor");
                setSeriesGraf3(trat);
            }
        }
        return;
    },[selectValor0, selectValor1, selectValor2, contentSelecionado0, contentSelecionado1, contentSelecionado2]);

    // Estados para criar de forma dinâmica a tabela com as 2 primeiras informações 
    // Preço 
    const [campoDetalhamento1, setCampoDetalhamento1] = useState<string[]>([]);
    const [campoDetalhamento1ValorTotal, setCampoDetalhamento1ValorTotal] = useState<number[]>([]);
    const [campoDetalhamento1Total, setCampoDetalhamento1Total] = useState<number[]>([]);

    // Estados para criar de forma dinâmica a tabela com as 3 informações selecionadas
    // obs: Campo detalhamento title criado para fazer o tratamento dos meses números para nomes
    const [campoDetalhamento2content, setCampoDetalhamento2content] = useState<string[] | number[] | string | number>([]);
    const [campoDetalhamento2title, setCampoDetalhamento2title] = useState<string[] | number[] | string | number>([]);

    const filtrarUnicos = (campo: string) => {
        return Array.from(new Set(dados5.map(dado => dado[campo])));
    };

    // Função Gerar segunda tabela caso todos campos selecionados 
    function gerarTabela() {
        const detalhamento1 = filtrarUnicos(selectValor1);
        const detalhamento2 = filtrarUnicos(selectValor2);
    
        const tabela = detalhamento1.map(cat => {
        const linha = { propriedade: cat };
        detalhamento2.forEach(el => {
        const itens = dados5.filter(d => d[selectValor1] === cat && d[selectValor2] === el);
        const soma = itens.reduce((total, item) => total + item[selectValor0], 0);
        linha[el] = soma;
        });
        // Tratamento para os meses do eixo Y caso selecionar Mês no segundo campo, adaptar se necessário a outra fonte de dados. 
        if(selectValor1 !== "id" && selectValor1 !== "conta_id") {
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
        } 

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
        <div className='dados5'>

            <div className="camposFonte1">
                <select value={selectValor0} onChange={(e) => handleOpt0(e.target.value)} className="form-select">
                    <option value="nulo0">-</option>
                    <option value="valor">Valor</option>
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

                <div className="check">
                    <input type="checkbox" id="tabela" name="tabela" value="tabela" checked={tabelaCheck} onChange={tabelaTF} />Tabela
                    <input type="checkbox" id="grafico" name="grafico" value="grafico" checked={graficoCheck} onChange={graficoTF} />Gráfico
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

                </div>
            )}  

            {graficoCheck && (
                <div style={{width: "100%"}}>
                    {valorTotalSelecionadoGraf && (
                        <Charts seriesM={mediaValores} categories={detalhamento1} yaxixConf={yaxixType2Campos} />
                    )}

                    {valorTotalSelecionadoGraf3Campos && (
                        <Charts3Campos options={options} series={series} />
                    )}

                </div>
            )}
            
        </div>
    )
}


export default Dados5;
import Charts from '../Charts/Charts';
import Charts3Campos from '../Charts3Campos/Charts3Campos';
import './Dados3.css';
import {useEffect, useState} from 'react';
import Tabela from '../Tabela/Tabela';

// Fonte de dados 
import dados3 from "../../dados/fonte_de_dados_3.json";

// Valores usados nos campos 
import {valores} from "./TotalSelect";

// Import valores de soma/total referente ao primeiro campo:
import {ids, nomes, departamentos, fabricantes, cores, anos, meses, idades} from "./TotalSelect";
// import IDs tratados 
import {somarId1, somarId2, somarId3, somarId4, somarId5, somarId6, somarId7, somarId8, somarId9, somarId10} from "./TotalSelect";
import {somarQuantidadeId1, somarQuantidadeId2, somarQuantidadeId3, somarQuantidadeId4, somarQuantidadeId5, somarQuantidadeId6, somarQuantidadeId7, somarQuantidadeId8, somarQuantidadeId9, somarQuantidadeId10} from "./TotalSelect";
// Import Produtos tratados 
import {somarPrecoNome1, somarPrecoNome2, somarPrecoNome3, somarPrecoNome4, somarPrecoNome5, somarPrecoNome6, somarPrecoNome7, somarPrecoNome8, somarPrecoNome9, somarPrecoNome10} from "./TotalSelect";
import {somarQuantidadeNome1, somarQuantidadeNome2, somarQuantidadeNome3, somarQuantidadeNome4, somarQuantidadeNome5, somarQuantidadeNome6, somarQuantidadeNome7, somarQuantidadeNome8, somarQuantidadeNome9, somarQuantidadeNome10} from "./TotalSelect";
// IMport Departamentos tratados 
import {somarPrecoDepartamentoVendas, somarPrecoDepartamentoTi, somarPrecoDepartamentoMkt, somarPrecoDepartamentoRh, somarPrecoDepartamentoAdm} from "./TotalSelect";
import {somarQuantidadeDepartamentoVendas, somarQuantidadeDepartamentoTi, somarQuantidadeDepartamentoMkt, somarQuantidadeDepartamentoRh, somarQuantidadeDepartamentoAdm} from "./TotalSelect";
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
// import Idades tratadas 
import {somarPrecoIdade1, somarPrecoIdade2, somarPrecoIdade3, somarPrecoIdade4, somarPrecoIdade5, somarPrecoIdade6, somarPrecoIdade7, somarPrecoIdade8, somarPrecoIdade9, somarPrecoIdade10} from "./TotalSelect";
import {somarQuantidadeIdade1, somarQuantidadeIdade2, somarQuantidadeIdade3, somarQuantidadeIdade4, somarQuantidadeIdade5, somarQuantidadeIdade6, somarQuantidadeIdade7, somarQuantidadeIdade8, somarQuantidadeIdade9, somarQuantidadeIdade10} from "./TotalSelect";

// Import função de filtro para gráfico dos 3 campos 
import {FiltroGrafico3} from "./TotalSelect";

function Dados3() {

    // "Somas totais" para usar nos estados de atualização da tabela dinâmica 
    // Preços - Salários
    // IDs
    const idPrecos = [somarId1, somarId2, somarId3, somarId4, somarId5, somarId6, somarId7, somarId8, somarId9, somarId10];
    const totalPrecoId = [somarId1+somarId2+somarId3+somarId4+somarId5+somarId6+somarId7+somarId8+somarId9+somarId10];
    // Nome
    const nomePrecos = [somarPrecoNome1, somarPrecoNome2, somarPrecoNome3, somarPrecoNome4, somarPrecoNome5, somarPrecoNome6, somarPrecoNome7, somarPrecoNome8, somarPrecoNome9, somarPrecoNome10];
    const totalPrecoNome = [somarPrecoNome1+somarPrecoNome2+somarPrecoNome3+somarPrecoNome4+somarPrecoNome5+somarPrecoNome6+somarPrecoNome7+somarPrecoNome8+somarPrecoNome9+somarPrecoNome10];
    // Departamentos
    const departamentoPrecos = [somarPrecoDepartamentoVendas, somarPrecoDepartamentoTi, somarPrecoDepartamentoMkt, somarPrecoDepartamentoRh, somarPrecoDepartamentoAdm];
    const totalPrecoDepartamento = [somarPrecoDepartamentoVendas+somarPrecoDepartamentoTi+somarPrecoDepartamentoMkt+somarPrecoDepartamentoRh+somarPrecoDepartamentoAdm];
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
    // Idades
    const idadePrecos = [somarPrecoIdade1, somarPrecoIdade2, somarPrecoIdade3, somarPrecoIdade4, somarPrecoIdade5, somarPrecoIdade6, somarPrecoIdade7, somarPrecoIdade8, somarPrecoIdade9, somarPrecoIdade10];
    const totalPrecoIdade = [somarPrecoIdade1+somarPrecoIdade2+somarPrecoIdade3+somarPrecoIdade4+somarPrecoIdade5+somarPrecoIdade6+somarPrecoIdade7+somarPrecoIdade8+somarPrecoIdade9+somarPrecoIdade10];

    // Quantidades - Anos experiência
    // IDs
    const idQuantidades = [somarQuantidadeId1, somarQuantidadeId2, somarQuantidadeId3, somarQuantidadeId4, somarQuantidadeId5, somarQuantidadeId6, somarQuantidadeId7, somarQuantidadeId8, somarQuantidadeId9, somarQuantidadeId10];
    const totalQuantidadeId = [somarQuantidadeId1+somarQuantidadeId2+somarQuantidadeId3+somarQuantidadeId4+somarQuantidadeId5+somarQuantidadeId6+somarQuantidadeId7+somarQuantidadeId8+somarQuantidadeId9+somarQuantidadeId10];
    // Nomes 
    const nomeQuantidades = [somarQuantidadeNome1, somarQuantidadeNome2, somarQuantidadeNome3, somarQuantidadeNome4, somarQuantidadeNome5, somarQuantidadeNome6, somarQuantidadeNome7, somarQuantidadeNome8, somarQuantidadeNome9, somarQuantidadeNome10];
    const totalQuantidadeNome = [somarQuantidadeNome1+somarQuantidadeNome2+somarQuantidadeNome3+somarQuantidadeNome4+somarQuantidadeNome5+somarQuantidadeNome6+somarQuantidadeNome7+somarQuantidadeNome8+somarQuantidadeNome9+somarQuantidadeNome10];
    // Departamentos
    const departamentoQuantidades = [somarQuantidadeDepartamentoVendas, somarQuantidadeDepartamentoTi, somarQuantidadeDepartamentoMkt, somarQuantidadeDepartamentoRh, somarQuantidadeDepartamentoAdm];
    const totalQuantidadeDepartamento = [somarQuantidadeDepartamentoVendas+somarQuantidadeDepartamentoTi+somarQuantidadeDepartamentoMkt+somarQuantidadeDepartamentoRh+somarQuantidadeDepartamentoAdm];
    // Fabricantes 
    const fabricanteQuantidades = [somarQuantidadeFabX, somarQuantidadeFabY, somarQuantidadeFabZ];
    const totalQuantidadeFabricante = [somarQuantidadeFabX+somarQuantidadeFabY+somarQuantidadeFabZ];
    // Cores 
    const corQuantidades = [somarQuantidadeCorVerm, somarQuantidadeCorAzul, somarQuantidadeCorVerde, somarQuantidadeCorPreto, somarQuantidadeCorBranco, somarQuantidadeCorCinza];
    const totalQuantidadeCor = [somarQuantidadeCorVerm+somarQuantidadeCorAzul+somarQuantidadeCorVerde+somarQuantidadeCorPreto+somarQuantidadeCorBranco+somarQuantidadeCorCinza];
    // Anos
    const anoQuantidades = [somarQuantidadeAno2021, somarQuantidadeAno2022, somarQuantidadeAno2023];
    const totalQuantidadeAno = [somarQuantidadeAno2021+somarQuantidadeAno2022+somarQuantidadeAno2023];
    // Meses 
    const mesQuantidades = [somarQuantidadeMesJan, somarQuantidadeMesFev, somarQuantidadeMesMar, somarQuantidadeMesAbr, somarQuantidadeMesMai, somarQuantidadeMesJun, somarQuantidadeMesJul, somarQuantidadeMesAgo, somarQuantidadeMesSet, somarQuantidadeMesOut];
    const totalQuantidadeMes = [somarQuantidadeMesJan+somarQuantidadeMesFev+somarQuantidadeMesMar+somarQuantidadeMesAbr+somarQuantidadeMesMai+somarQuantidadeMesJun+somarQuantidadeMesJul+somarQuantidadeMesAgo+somarQuantidadeMesSet+somarQuantidadeMesOut];
    // Idades
    const idadeQuantidades = [somarQuantidadeIdade1, somarQuantidadeIdade2, somarQuantidadeIdade3, somarQuantidadeIdade4, somarQuantidadeIdade5, somarQuantidadeIdade6, somarQuantidadeIdade7, somarQuantidadeIdade8, somarQuantidadeIdade9, somarQuantidadeIdade10];
    const totalQuantidadeIdade = [somarQuantidadeIdade1+somarQuantidadeIdade2+somarQuantidadeIdade3+somarQuantidadeIdade4+somarQuantidadeIdade5+somarQuantidadeIdade6+somarQuantidadeIdade7+somarQuantidadeIdade8+somarQuantidadeIdade9+somarQuantidadeIdade10];
    
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
        if(selectValor0 === "salario") {setContentSelecionado0("Salário");}
        if(selectValor0 === "anos_experiencia") {setContentSelecionado0("Anos de Experiência");}
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
            setPrecoSelecionado(false); 
            setPrecoSelecionadoGraf(false);
            setPrecoSelecionado3Campos(false); 
            setPrecoSelecionadoGraf3Campos(false);
        }
        if(selectValor0 === "nulo0") {
            setSelectValor0("nulo0"); 
            setSelectValor1("nulo1"); 
            setSelectValor2("nulo2"); 
            setPrecoSelecionado(false); 
            setPrecoSelecionadoGraf(false);
            setPrecoSelecionado3Campos(false); 
            setPrecoSelecionadoGraf3Campos(false);

            setQuantidadeSelecionado(false);
            setQuantidadeSelecionadoGraf(false);
            setQuantidadeSelecionadoGraf3Campos(false);
            return;}
        if(selectValor1 === "nulo1") {
            setSelectValor2("nulo2"); 
            setPrecoSelecionado(false); 
            setPrecoSelecionadoGraf(false);
            setPrecoSelecionado3Campos(false); 

            setQuantidadeSelecionado(false);
            setQuantidadeSelecionadoGraf(false);
            return;}
        if(selectValor2 === "nulo2") {
            setPrecoSelecionadoGraf(false);
            setPrecoSelecionado3Campos(false);
            setPrecoSelecionadoGraf3Campos(false);

            setQuantidadeSelecionadoGraf(false);
            setQuantidadeSelecionadoGraf3Campos(false);
            setQuantidadeSelecionado3Campos(false);
        }
        
        return;
    },[selectValor0, selectValor1, selectValor2, contentSelecionado0, contentSelecionado1, contentSelecionado2]);

    const [precoSelecionado, setPrecoSelecionado] = useState(false);
    const [precoSelecionadoGraf, setPrecoSelecionadoGraf] = useState(false);
    const [precoSelecionadoGraf3Campos, setPrecoSelecionadoGraf3Campos] = useState(false);
    const [precoSelecionado3Campos, setPrecoSelecionado3Campos] = useState(false);

    const [quantidadeSelecionado, setQuantidadeSelecionado] = useState(false);
    const [quantidadeSelecionadoGraf, setQuantidadeSelecionadoGraf] = useState(false);
    const [quantidadeSelecionadoGraf3Campos, setQuantidadeSelecionadoGraf3Campos] = useState(false);
    const [quantidadeSelecionado3Campos, setQuantidadeSelecionado3Campos] = useState(false);
    
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
        if(selectValor0 === "salario") {
            setQuantidadeSelecionado(false);
            setQuantidadeSelecionado3Campos(false);
            setQuantidadeSelecionadoGraf(false);
            setQuantidadeSelecionadoGraf3Campos(false);
            setYaxixType2Campos(priceY2Campos);
            setYaxixType3Campos(priceY3Campos);

            if(selectValor1 === "id") {
                setPrecoSelecionado(false);
                setPrecoSelecionadoGraf(false);
                setTimeout(() => {setPrecoSelecionado(true), setPrecoSelecionadoGraf(true);}, 10);
                setCampoDetalhamento1(ids);
                setCampoDetalhamento1Preco(idPrecos);
                setCampoDetalhamento1Total(totalPrecoId);

                setDetalhamento1(ids)
                setMediaValores(idPrecos);
            }
            if(selectValor1 === "nome") {
                setPrecoSelecionado(false);
                setPrecoSelecionadoGraf(false);
                setTimeout(() => {setPrecoSelecionado(true), setPrecoSelecionadoGraf(true);}, 10);
                setCampoDetalhamento1(nomes);
                setCampoDetalhamento1Preco(nomePrecos);
                setCampoDetalhamento1Total(totalPrecoNome);

                setDetalhamento1(nomes)
                setMediaValores(nomePrecos);
            }
            if(selectValor1 === "departamento") {
                setPrecoSelecionado(false);
                setPrecoSelecionadoGraf(false);
                setTimeout(() => {setPrecoSelecionado(true), setPrecoSelecionadoGraf(true);}, 10);
                setCampoDetalhamento1(departamentos);
                setCampoDetalhamento1Preco(departamentoPrecos);
                setCampoDetalhamento1Total(totalPrecoDepartamento);

                setDetalhamento1(departamentos)
                setMediaValores(departamentoPrecos);
            }
            if(selectValor1 === "fabricante") {
                setPrecoSelecionado(false);
                setPrecoSelecionadoGraf(false);
                setTimeout(() => {setPrecoSelecionado(true), setPrecoSelecionadoGraf(true);}, 10);
                setCampoDetalhamento1(fabricantes);
                setCampoDetalhamento1Preco(fabricantePrecos);
                setCampoDetalhamento1Total(totalPrecoFabricante);

                setDetalhamento1(fabricantes)
                setMediaValores(fabricantePrecos);
            }
            if(selectValor1 === "cor") {
                setPrecoSelecionado(false);
                setPrecoSelecionadoGraf(false);
                setTimeout(() => {setPrecoSelecionado(true), setPrecoSelecionadoGraf(true);}, 10);
                setCampoDetalhamento1(cores);
                setCampoDetalhamento1Preco(corPrecos);
                setCampoDetalhamento1Total(totalPrecoCor);

                setDetalhamento1(cores)
                setMediaValores(corPrecos);
            }
            if(selectValor1 === "ano") {
                setPrecoSelecionado(false);
                setPrecoSelecionadoGraf(false);
                setTimeout(() => {setPrecoSelecionado(true), setPrecoSelecionadoGraf(true);}, 10);
                setCampoDetalhamento1(anos);
                setCampoDetalhamento1Preco(anoPrecos);
                setCampoDetalhamento1Total(totalPrecoAno);

                setDetalhamento1(anos)
                setMediaValores(anoPrecos);
            }
            if(selectValor1 === "idade") {
                setPrecoSelecionado(false);
                setPrecoSelecionadoGraf(false);
                setTimeout(() => {setPrecoSelecionado(true), setPrecoSelecionadoGraf(true);}, 10);
                setCampoDetalhamento1(idades);
                setCampoDetalhamento1Preco(idadePrecos);
                setCampoDetalhamento1Total(totalPrecoIdade);

                setDetalhamento1(idades)
                setMediaValores(idadePrecos);
            }
            if(selectValor1 === "mes") {
                // Obs: Tratamento dos meses de número para texto 
                const mesesStr = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
                const mesesConvertidos = meses.map(numero => mesesStr[numero - 1]);
                setPrecoSelecionado(false);
                setPrecoSelecionadoGraf(false);
                setTimeout(() => {setPrecoSelecionado(true), setPrecoSelecionadoGraf(true);}, 10);
                setCampoDetalhamento1(mesesConvertidos);
                setCampoDetalhamento1Preco(mesPrecos);
                setCampoDetalhamento1Total(totalPrecoMes);

                setDetalhamento1(mesesConvertidos)
                setMediaValores(mesPrecos);
            }

            // 3 CAMPOS -  Usar a função FiltroGrafico3 para adicionar a data e o name na tabela gráfica
            // ID's
            if(selectValor1 === "id" && selectValor2 === "nome") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionadoGraf3Campos(true);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(nomes)
                setCampoDetalhamento2content(nomes);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'nome', 'id', "salario")
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "id" && selectValor2 === "idade") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionadoGraf3Campos(true);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(idades)
                setCampoDetalhamento2content(idades);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'idade', 'id', "salario")
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "id" && selectValor2 === "departamento") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionadoGraf3Campos(true);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(departamentos)
                setCampoDetalhamento2content(departamentos);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'departamento', 'id', "salario")
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "id" && selectValor2 === "fabricante") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionadoGraf3Campos(true);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(fabricantes)
                setCampoDetalhamento2content(fabricantes);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'fabricante', 'id', "salario")
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "id" && selectValor2 === "cor") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(cores)
                setCampoDetalhamento2content(cores);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'cor', 'id', "salario")
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "id" && selectValor2 === "ano") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(anos)
                setCampoDetalhamento2content(anos);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'ano', 'id', "salario")
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "id" && selectValor2 === "mes") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                // Obs: Tratamento dos meses de número para texto 
                const mesesStr = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
                const mesesConvertidos = meses.map(numero => mesesStr[numero - 1]);
                setCampoDetalhamento2title(mesesConvertidos)
                setCampoDetalhamento2content(meses);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'mes', 'id', "salario")
                setSeriesGraf3(trat);
            }

            // NOMES
            if(selectValor1 === "nome" && selectValor2 === "id") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionadoGraf3Campos(true);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(ids)
                setCampoDetalhamento2content(ids);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'id', 'nome', "salario")
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "nome" && selectValor2 === "departamento") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionadoGraf3Campos(true);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(departamentos)
                setCampoDetalhamento2content(departamentos);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'departamento', 'nome', "salario")
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "nome" && selectValor2 === "idade") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionadoGraf3Campos(true);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(idades)
                setCampoDetalhamento2content(idades);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'idade', 'nome', "salario")
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "nome" && selectValor2 === "fabricante") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionadoGraf3Campos(true);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(fabricantes)
                setCampoDetalhamento2content(fabricantes);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'fabricante', 'nome', "salario")
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "nome" && selectValor2 === "cor") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(cores)
                setCampoDetalhamento2content(cores);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'cor', 'nome', "salario")
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "nome" && selectValor2 === "ano") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(anos)
                setCampoDetalhamento2content(anos);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'ano', 'nome', "salario")
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "nome" && selectValor2 === "mes") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                // Obs: Tratamento dos meses de número para texto 
                const mesesStr = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
                const mesesConvertidos = meses.map(numero => mesesStr[numero - 1]);
                setCampoDetalhamento2title(mesesConvertidos)
                setCampoDetalhamento2content(meses);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'mes', 'nome', "salario")
                setSeriesGraf3(trat);
            }
            // IDADES
            if(selectValor1 === "idade" && selectValor2 === "fabricante") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(fabricantes)
                setCampoDetalhamento2content(fabricantes);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'fabricante', 'idade', "salario")
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "idade" && selectValor2 === "departamento") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(departamentos)
                setCampoDetalhamento2content(departamentos);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'departamento', 'idade', "salario")
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "idade" && selectValor2 === "id") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(ids)
                setCampoDetalhamento2content(ids);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'id', 'idade', "salario")
                setSeriesGraf3(trat);
            }
            
            if(selectValor1 === "idade" && selectValor2 === "nome") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(nomes)
                setCampoDetalhamento2content(nomes);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'nome', 'idade', "salario")
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "idade" && selectValor2 === "cor") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(cores)
                setCampoDetalhamento2content(cores);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'cor', 'idade', "salario")
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "idade" && selectValor2 === "ano") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(anos)
                setCampoDetalhamento2content(anos);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'ano', 'idade', "salario")
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "idade" && selectValor2 === "mes") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                // Obs: Tratamento dos meses de número para texto 
                const mesesStr = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
                const mesesConvertidos = meses.map(numero => mesesStr[numero - 1]);
                setCampoDetalhamento2title(mesesConvertidos)
                setCampoDetalhamento2content(meses);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'mes', 'idade', "salario");
                setSeriesGraf3(trat);
            }

            // DEPARTAMENTO
            if(selectValor1 === "departamento" && selectValor2 === "fabricante") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(fabricantes)
                setCampoDetalhamento2content(fabricantes);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'fabricante', 'departamento', "salario")
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "departamento" && selectValor2 === "id") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(ids)
                setCampoDetalhamento2content(ids);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'id', 'departamento', "salario")
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "departamento" && selectValor2 === "idade") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(idades)
                setCampoDetalhamento2content(idades);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'idade', 'departamento', "salario")
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "departamento" && selectValor2 === "nome") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(nomes)
                setCampoDetalhamento2content(nomes);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'nome', 'departamento', "salario")
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "departamento" && selectValor2 === "cor") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(cores)
                setCampoDetalhamento2content(cores);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'cor', 'departamento', "salario")
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "departamento" && selectValor2 === "ano") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(anos)
                setCampoDetalhamento2content(anos);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'ano', 'departamento', "salario")
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "departamento" && selectValor2 === "mes") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                // Obs: Tratamento dos meses de número para texto 
                const mesesStr = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
                const mesesConvertidos = meses.map(numero => mesesStr[numero - 1]);
                setCampoDetalhamento2title(mesesConvertidos)
                setCampoDetalhamento2content(meses);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'mes', 'departamento', "salario");
                setSeriesGraf3(trat);
            }

            // FABRICANTE
            if(selectValor1 === "fabricante" && selectValor2 === "id") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(ids)
                setCampoDetalhamento2content(ids);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'id', 'fabricante', "salario")
                setSeriesGraf3(trat);
            }
            
            if(selectValor1 === "fabricante" && selectValor2 === "nome") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(nomes)
                setCampoDetalhamento2content(nomes);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'nome', 'fabricante', "salario")
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "fabricante" && selectValor2 === "idade") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(idades)
                setCampoDetalhamento2content(idades);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'idade', 'fabricante', "salario")
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "fabricante" && selectValor2 === "departamento") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(departamentos)
                setCampoDetalhamento2content(departamentos);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'departamento', 'fabricante', "salario")
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "fabricante" && selectValor2 === "cor") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(cores)
                setCampoDetalhamento2content(cores);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'cor', 'fabricante', "salario")
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "fabricante" && selectValor2 === "ano") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(anos)
                setCampoDetalhamento2content(anos);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'ano', 'fabricante', "salario")
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "fabricante" && selectValor2 === "mes") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                // Obs: Tratamento dos meses de número para texto 
                const mesesStr = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
                const mesesConvertidos = meses.map(numero => mesesStr[numero - 1]);
                setCampoDetalhamento2title(mesesConvertidos)
                setCampoDetalhamento2content(meses);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'mes', 'fabricante', "salario");
                setSeriesGraf3(trat);
            }

            // COR
            if(selectValor1 === "cor" && selectValor2 === "id") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(ids)
                setCampoDetalhamento2content(ids);
                
                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'id', 'cor', "salario");
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "cor" && selectValor2 === "nome") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(nomes)
                setCampoDetalhamento2content(nomes);
                
                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'nome', 'cor', "salario");
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "cor" && selectValor2 === "idade") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(idades)
                setCampoDetalhamento2content(idades);
                
                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'idade', 'cor', "salario");
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "cor" && selectValor2 === "departamento") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(departamentos)
                setCampoDetalhamento2content(departamentos);
                
                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'departamento', 'cor', "salario");
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "cor" && selectValor2 === "fabricante") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(fabricantes)
                setCampoDetalhamento2content(fabricantes);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'fabricante', 'cor', "salario");
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "cor" && selectValor2 === "ano") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(anos)
                setCampoDetalhamento2content(anos);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'ano', 'cor', "salario");
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "cor" && selectValor2 === "mes") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                // Obs: Tratamento dos meses de número para texto 
                const mesesStr = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
                const mesesConvertidos = meses.map(numero => mesesStr[numero - 1]);
                setCampoDetalhamento2title(mesesConvertidos)
                setCampoDetalhamento2content(meses);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'mes', 'cor', "salario");
                setSeriesGraf3(trat);
            }

            // ANO
            if(selectValor1 === "ano" && selectValor2 === "id") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(ids)
                setCampoDetalhamento2content(ids);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'id', 'ano', "salario");
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "ano" && selectValor2 === "nome") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(nomes)
                setCampoDetalhamento2content(nomes);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'nome', 'ano', "salario");
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "ano" && selectValor2 === "idade") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(idades)
                setCampoDetalhamento2content(idades);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'idade', 'ano', "salario");
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "ano" && selectValor2 === "departamento") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(departamentos)
                setCampoDetalhamento2content(departamentos);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'departamento', 'ano', "salario");
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "ano" && selectValor2 === "fabricante") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(fabricantes)
                setCampoDetalhamento2content(fabricantes);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'fabricante', 'ano', "salario");
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "ano" && selectValor2 === "cor") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(cores)
                setCampoDetalhamento2content(cores);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'cor', 'ano', "salario");
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "ano" && selectValor2 === "mes") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                // Obs: Tratamento dos meses de número para texto 
                const mesesStr = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
                const mesesConvertidos = meses.map(numero => mesesStr[numero - 1]);
                setCampoDetalhamento2title(mesesConvertidos)
                setCampoDetalhamento2content(meses);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'mes', 'ano', "salario");
                setSeriesGraf3(trat);
            }

            // MES
            if(selectValor1 === "mes" && selectValor2 === "id") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(ids)
                setCampoDetalhamento2content(ids);
                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'id', 'mes', "salario");
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "mes" && selectValor2 === "nome") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(nomes)
                setCampoDetalhamento2content(nomes);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'nome', 'mes', "salario");
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "mes" && selectValor2 === "idade") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(idades)
                setCampoDetalhamento2content(idades);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'idade', 'mes', "salario");
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "mes" && selectValor2 === "departamento") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(departamentos)
                setCampoDetalhamento2content(departamentos);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'departamento', 'mes', "salario");
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "mes" && selectValor2 === "fabricante") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(fabricantes)
                setCampoDetalhamento2content(fabricantes);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'fabricante', 'mes', "salario");
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "mes" && selectValor2 === "cor") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(cores)
                setCampoDetalhamento2content(cores);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'cor', 'mes', "salario");
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "mes" && selectValor2 === "ano") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(anos)
                setCampoDetalhamento2content(anos);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'ano', 'mes', "salario");
                setSeriesGraf3(trat);
            }
        }

        // Caso Quantidade selecionada
        if(selectValor0 === "anos_experiencia") {
            setPrecoSelecionado(false);
            setPrecoSelecionado3Campos(false);
            setPrecoSelecionadoGraf(false);
            setPrecoSelecionadoGraf3Campos(false);
            setYaxixType2Campos(quantY2Campos);
            setYaxixType3Campos(quantY3Campos);

            if(selectValor1 === "id") {
                setQuantidadeSelecionado(false);
                setQuantidadeSelecionadoGraf(false);
                setTimeout(() => {setQuantidadeSelecionado(true), setQuantidadeSelecionadoGraf(true);}, 10);
                setCampoDetalhamento1(ids);
                setCampoDetalhamento1Quantidade(idQuantidades);
                setCampoDetalhamento1Total(totalQuantidadeId);

                setDetalhamento1(ids)
                setMediaValores(idQuantidades);
            }
            if(selectValor1 === "departamento") {
                setQuantidadeSelecionado(false);
                setQuantidadeSelecionadoGraf(false);
                setTimeout(() => {setQuantidadeSelecionado(true), setQuantidadeSelecionadoGraf(true);}, 10);
                setCampoDetalhamento1(departamentos);
                setCampoDetalhamento1Quantidade(departamentoQuantidades);
                setCampoDetalhamento1Total(totalQuantidadeDepartamento);

                setDetalhamento1(departamentos)
                setMediaValores(departamentoQuantidades);
            }
            if(selectValor1 === "idade") {
                setQuantidadeSelecionado(false);
                setQuantidadeSelecionadoGraf(false);
                setTimeout(() => {setQuantidadeSelecionado(true), setQuantidadeSelecionadoGraf(true);}, 10);
                setCampoDetalhamento1(idades);
                setCampoDetalhamento1Quantidade(idadeQuantidades);
                setCampoDetalhamento1Total(totalQuantidadeIdade);

                setDetalhamento1(idades)
                setMediaValores(idadeQuantidades);
            }
            if(selectValor1 === "nome") {
                setQuantidadeSelecionado(false);
                setQuantidadeSelecionadoGraf(false);
                setTimeout(() => {setQuantidadeSelecionado(true), setQuantidadeSelecionadoGraf(true);}, 10);
                setCampoDetalhamento1(nomes);
                setCampoDetalhamento1Quantidade(nomeQuantidades);
                setCampoDetalhamento1Total(totalQuantidadeNome);

                setDetalhamento1(nomes)
                setMediaValores(nomeQuantidades);
            }
            if(selectValor1 === "fabricante") {
                setQuantidadeSelecionado(false);
                setQuantidadeSelecionadoGraf(false);
                setTimeout(() => {setQuantidadeSelecionado(true), setQuantidadeSelecionadoGraf(true);}, 10);
                setCampoDetalhamento1(fabricantes);
                setCampoDetalhamento1Quantidade(fabricanteQuantidades);
                setCampoDetalhamento1Total(totalQuantidadeFabricante);

                setDetalhamento1(fabricantes)
                setMediaValores(fabricanteQuantidades);
            }
            if(selectValor1 === "cor") {
                setQuantidadeSelecionado(false);
                setQuantidadeSelecionadoGraf(false);
                setTimeout(() => {setQuantidadeSelecionado(true), setQuantidadeSelecionadoGraf(true);}, 10);
                setCampoDetalhamento1(cores);
                setCampoDetalhamento1Quantidade(corQuantidades);
                setCampoDetalhamento1Total(totalQuantidadeCor);

                setDetalhamento1(cores)
                setMediaValores(corQuantidades);
            }
            if(selectValor1 === "ano") {
                setQuantidadeSelecionado(false);
                setQuantidadeSelecionadoGraf(false);
                setTimeout(() => {setQuantidadeSelecionado(true), setQuantidadeSelecionadoGraf(true);}, 10);
                setCampoDetalhamento1(anos);
                setCampoDetalhamento1Quantidade(anoQuantidades);
                setCampoDetalhamento1Total(totalQuantidadeAno);

                setDetalhamento1(anos)
                setMediaValores(anoQuantidades);
            }
            if(selectValor1 === "mes") {
                // Obs: Tratamento dos meses de número para texto 
                const mesesStr = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
                const mesesConvertidos = meses.map(numero => mesesStr[numero - 1]);
                setQuantidadeSelecionado(false);
                setQuantidadeSelecionadoGraf(false);
                setTimeout(() => {setQuantidadeSelecionado(true), setQuantidadeSelecionadoGraf(true);}, 10);
                setCampoDetalhamento1(mesesConvertidos);
                setCampoDetalhamento1Quantidade(mesQuantidades);
                setCampoDetalhamento1Total(totalQuantidadeMes);

                setDetalhamento1(mesesConvertidos)
                setMediaValores(mesQuantidades);
            }

            // 3 CAMPOS - Usar a função FiltroGrafico3 para adicionar a data e o name na tabela gráfica 
            // IDs
            if(selectValor1 === "id" && selectValor2 === "nome") {
                setTimeout(() => {setQuantidadeSelecionado(false), setQuantidadeSelecionadoGraf(false), setQuantidadeSelecionadoGraf3Campos(false);}, 10);
                setQuantidadeSelecionadoGraf3Campos(true);
                setQuantidadeSelecionado3Campos(true);
                setCampoDetalhamento2title(nomes)
                setCampoDetalhamento2content(nomes);

                setTimeout(() => {setQuantidadeSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'nome', 'id', 'anos_experiencia');
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "id" && selectValor2 === "fabricante") {
                setTimeout(() => {setQuantidadeSelecionado(false), setQuantidadeSelecionadoGraf(false), setQuantidadeSelecionadoGraf3Campos(false);}, 10);
                setQuantidadeSelecionadoGraf3Campos(true);
                setQuantidadeSelecionado3Campos(true);
                setCampoDetalhamento2title(fabricantes)
                setCampoDetalhamento2content(fabricantes);

                setTimeout(() => {setQuantidadeSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'fabricante', 'id', 'anos_experiencia');
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "id" && selectValor2 === "idade") {
                setTimeout(() => {setQuantidadeSelecionado(false), setQuantidadeSelecionadoGraf(false), setQuantidadeSelecionadoGraf3Campos(false);}, 10);
                setQuantidadeSelecionadoGraf3Campos(true);
                setQuantidadeSelecionado3Campos(true);
                setCampoDetalhamento2title(idades)
                setCampoDetalhamento2content(idades);

                setTimeout(() => {setQuantidadeSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'idade', 'id', 'anos_experiencia');
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "id" && selectValor2 === "departamento") {
                setTimeout(() => {setQuantidadeSelecionado(false), setQuantidadeSelecionadoGraf(false), setQuantidadeSelecionadoGraf3Campos(false);}, 10);
                setQuantidadeSelecionado3Campos(true);
                setCampoDetalhamento2title(departamentos)
                setCampoDetalhamento2content(departamentos);

                setTimeout(() => {setQuantidadeSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'departamento', 'id', 'anos_experiencia');
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "id" && selectValor2 === "cor") {
                setTimeout(() => {setQuantidadeSelecionado(false), setQuantidadeSelecionadoGraf(false), setQuantidadeSelecionadoGraf3Campos(false);}, 10);
                setQuantidadeSelecionado3Campos(true);
                setCampoDetalhamento2title(cores)
                setCampoDetalhamento2content(cores);

                setTimeout(() => {setQuantidadeSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'cor', 'id', 'anos_experiencia');
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "id" && selectValor2 === "ano") {
                setTimeout(() => {setQuantidadeSelecionado(false), setQuantidadeSelecionadoGraf(false), setQuantidadeSelecionadoGraf3Campos(false);}, 10);
                setQuantidadeSelecionado3Campos(true);
                setCampoDetalhamento2title(anos)
                setCampoDetalhamento2content(anos);

                setTimeout(() => {setQuantidadeSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'ano', 'id', 'anos_experiencia');
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "id" && selectValor2 === "mes") {
                setTimeout(() => {setQuantidadeSelecionado(false), setQuantidadeSelecionadoGraf(false), setQuantidadeSelecionadoGraf3Campos(false);}, 10);
                setQuantidadeSelecionado3Campos(true);
                // Obs: Tratamento dos meses de número para texto 
                const mesesStr = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
                const mesesConvertidos = meses.map(numero => mesesStr[numero - 1]);
                setCampoDetalhamento2title(mesesConvertidos)
                setCampoDetalhamento2content(meses);

                setTimeout(() => {setQuantidadeSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'mes', 'id', 'anos_experiencia');
                setSeriesGraf3(trat);
            }

            // NOMES
            if(selectValor1 === "nome" && selectValor2 === "id") {
                setTimeout(() => {setQuantidadeSelecionado(false), setQuantidadeSelecionadoGraf(false), setQuantidadeSelecionadoGraf3Campos(false);}, 10);
                setQuantidadeSelecionadoGraf3Campos(true);
                setQuantidadeSelecionado3Campos(true);
                setCampoDetalhamento2title(ids)
                setCampoDetalhamento2content(ids);

                setTimeout(() => {setQuantidadeSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'id', 'nome', 'anos_experiencia');
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "nome" && selectValor2 === "fabricante") {
                setTimeout(() => {setQuantidadeSelecionado(false), setQuantidadeSelecionadoGraf(false), setQuantidadeSelecionadoGraf3Campos(false);}, 10);
                setQuantidadeSelecionadoGraf3Campos(true);
                setQuantidadeSelecionado3Campos(true);
                setCampoDetalhamento2title(fabricantes)
                setCampoDetalhamento2content(fabricantes);

                setTimeout(() => {setQuantidadeSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'fabricante', 'nome', 'anos_experiencia');
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "nome" && selectValor2 === "idade") {
                setTimeout(() => {setQuantidadeSelecionado(false), setQuantidadeSelecionadoGraf(false), setQuantidadeSelecionadoGraf3Campos(false);}, 10);
                setQuantidadeSelecionadoGraf3Campos(true);
                setQuantidadeSelecionado3Campos(true);
                setCampoDetalhamento2title(idades)
                setCampoDetalhamento2content(idades);

                setTimeout(() => {setQuantidadeSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'idade', 'nome', 'anos_experiencia');
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "nome" && selectValor2 === "departamento") {
                setTimeout(() => {setQuantidadeSelecionado(false), setQuantidadeSelecionadoGraf(false), setQuantidadeSelecionadoGraf3Campos(false);}, 10);
                setQuantidadeSelecionadoGraf3Campos(true);
                setQuantidadeSelecionado3Campos(true);
                setCampoDetalhamento2title(departamentos)
                setCampoDetalhamento2content(departamentos);

                setTimeout(() => {setQuantidadeSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'departamento', 'nome', 'anos_experiencia');
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "nome" && selectValor2 === "cor") {
                setTimeout(() => {setQuantidadeSelecionado(false), setQuantidadeSelecionadoGraf(false), setQuantidadeSelecionadoGraf3Campos(false);}, 10);
                setQuantidadeSelecionado3Campos(true);
                setCampoDetalhamento2title(cores)
                setCampoDetalhamento2content(cores);

                setTimeout(() => {setQuantidadeSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'cor', 'nome', 'anos_experiencia');
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "nome" && selectValor2 === "ano") {
                setTimeout(() => {setQuantidadeSelecionado(false), setQuantidadeSelecionadoGraf(false), setQuantidadeSelecionadoGraf3Campos(false);}, 10);
                setQuantidadeSelecionado3Campos(true);
                setCampoDetalhamento2title(anos)
                setCampoDetalhamento2content(anos);

                setTimeout(() => {setQuantidadeSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'ano', 'nome', 'anos_experiencia');
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "nome" && selectValor2 === "mes") {
                setTimeout(() => {setQuantidadeSelecionado(false), setQuantidadeSelecionadoGraf(false), setQuantidadeSelecionadoGraf3Campos(false);}, 10);
                setQuantidadeSelecionado3Campos(true);
                // Obs: Tratamento dos meses de número para texto 
                const mesesStr = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
                const mesesConvertidos = meses.map(numero => mesesStr[numero - 1]);
                setCampoDetalhamento2title(mesesConvertidos)
                setCampoDetalhamento2content(meses);

                setTimeout(() => {setQuantidadeSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'mes', 'nome', 'anos_experiencia');
                setSeriesGraf3(trat);
            }
            // IDADE
            if(selectValor1 === "idade" && selectValor2 === "id") {
                setTimeout(() => {setQuantidadeSelecionado(false), setQuantidadeSelecionadoGraf(false), setQuantidadeSelecionadoGraf3Campos(false);}, 10);
                setQuantidadeSelecionado3Campos(true);
                setCampoDetalhamento2title(ids)
                setCampoDetalhamento2content(ids);

                setTimeout(() => {setQuantidadeSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'id', 'idade', 'anos_experiencia')
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "idade" && selectValor2 === "departamento") {
                setTimeout(() => {setQuantidadeSelecionado(false), setQuantidadeSelecionadoGraf(false), setQuantidadeSelecionadoGraf3Campos(false);}, 10);
                setQuantidadeSelecionado3Campos(true);
                setCampoDetalhamento2title(departamentos)
                setCampoDetalhamento2content(departamentos);

                setTimeout(() => {setQuantidadeSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'departamento', 'idade', 'anos_experiencia')
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "idade" && selectValor2 === "fabricante") {
                setTimeout(() => {setQuantidadeSelecionado(false), setQuantidadeSelecionadoGraf(false), setQuantidadeSelecionadoGraf3Campos(false);}, 10);
                setQuantidadeSelecionado3Campos(true);
                setCampoDetalhamento2title(fabricantes)
                setCampoDetalhamento2content(fabricantes);

                setTimeout(() => {setQuantidadeSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'fabricante', 'idade', 'anos_experiencia')
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "idade" && selectValor2 === "nome") {
                setTimeout(() => {setQuantidadeSelecionado(false), setQuantidadeSelecionadoGraf(false), setQuantidadeSelecionadoGraf3Campos(false);}, 10);
                setQuantidadeSelecionado3Campos(true);
                setCampoDetalhamento2title(nomes)
                setCampoDetalhamento2content(nomes);

                setTimeout(() => {setQuantidadeSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'nome', 'idade', 'anos_experiencia')
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "idade" && selectValor2 === "cor") {
                setTimeout(() => {setQuantidadeSelecionado(false), setQuantidadeSelecionadoGraf(false), setQuantidadeSelecionadoGraf3Campos(false);}, 10);
                setQuantidadeSelecionado3Campos(true);
                setCampoDetalhamento2title(cores)
                setCampoDetalhamento2content(cores);

                setTimeout(() => {setQuantidadeSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'cor', 'idade', 'anos_experiencia')
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "idade" && selectValor2 === "ano") {
                setTimeout(() => {setQuantidadeSelecionado(false), setQuantidadeSelecionadoGraf(false), setQuantidadeSelecionadoGraf3Campos(false);}, 10);
                setQuantidadeSelecionado3Campos(true);
                setCampoDetalhamento2title(anos)
                setCampoDetalhamento2content(anos);

                setTimeout(() => {setQuantidadeSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'ano', 'idade', 'anos_experiencia')
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "idade" && selectValor2 === "mes") {
                setTimeout(() => {setQuantidadeSelecionado(false), setQuantidadeSelecionadoGraf(false), setQuantidadeSelecionadoGraf3Campos(false);}, 10);
                setQuantidadeSelecionado3Campos(true);
                // Obs: Tratamento dos meses de número para texto 
                const mesesStr = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
                const mesesConvertidos = meses.map(numero => mesesStr[numero - 1]);
                setCampoDetalhamento2title(mesesConvertidos)
                setCampoDetalhamento2content(meses);

                setTimeout(() => {setQuantidadeSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'mes', 'idade', 'anos_experiencia');
                setSeriesGraf3(trat);
            }

            // DEPARTAMENTO
            if(selectValor1 === "departamento" && selectValor2 === "id") {
                setTimeout(() => {setQuantidadeSelecionado(false), setQuantidadeSelecionadoGraf(false), setQuantidadeSelecionadoGraf3Campos(false);}, 10);
                setQuantidadeSelecionado3Campos(true);
                setCampoDetalhamento2title(ids)
                setCampoDetalhamento2content(ids);

                setTimeout(() => {setQuantidadeSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'id', 'departamento', 'anos_experiencia')
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "departamento" && selectValor2 === "fabricante") {
                setTimeout(() => {setQuantidadeSelecionado(false), setQuantidadeSelecionadoGraf(false), setQuantidadeSelecionadoGraf3Campos(false);}, 10);
                setQuantidadeSelecionado3Campos(true);
                setCampoDetalhamento2title(fabricantes)
                setCampoDetalhamento2content(fabricantes);

                setTimeout(() => {setQuantidadeSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'fabricante', 'departamento', 'anos_experiencia')
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "departamento" && selectValor2 === "idade") {
                setTimeout(() => {setQuantidadeSelecionado(false), setQuantidadeSelecionadoGraf(false), setQuantidadeSelecionadoGraf3Campos(false);}, 10);
                setQuantidadeSelecionado3Campos(true);
                setCampoDetalhamento2title(idades)
                setCampoDetalhamento2content(idades);

                setTimeout(() => {setQuantidadeSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'idade', 'departamento', 'anos_experiencia')
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "departamento" && selectValor2 === "nome") {
                setTimeout(() => {setQuantidadeSelecionado(false), setQuantidadeSelecionadoGraf(false), setQuantidadeSelecionadoGraf3Campos(false);}, 10);
                setQuantidadeSelecionado3Campos(true);
                setCampoDetalhamento2title(nomes)
                setCampoDetalhamento2content(nomes);

                setTimeout(() => {setQuantidadeSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'nome', 'departamento', 'anos_experiencia')
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "departamento" && selectValor2 === "cor") {
                setTimeout(() => {setQuantidadeSelecionado(false), setQuantidadeSelecionadoGraf(false), setQuantidadeSelecionadoGraf3Campos(false);}, 10);
                setQuantidadeSelecionado3Campos(true);
                setCampoDetalhamento2title(cores)
                setCampoDetalhamento2content(cores);

                setTimeout(() => {setQuantidadeSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'cor', 'departamento', 'anos_experiencia')
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "departamento" && selectValor2 === "ano") {
                setTimeout(() => {setQuantidadeSelecionado(false), setQuantidadeSelecionadoGraf(false), setQuantidadeSelecionadoGraf3Campos(false);}, 10);
                setQuantidadeSelecionado3Campos(true);
                setCampoDetalhamento2title(anos)
                setCampoDetalhamento2content(anos);

                setTimeout(() => {setQuantidadeSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'ano', 'departamento', 'anos_experiencia')
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "departamento" && selectValor2 === "mes") {
                setTimeout(() => {setQuantidadeSelecionado(false), setQuantidadeSelecionadoGraf(false), setQuantidadeSelecionadoGraf3Campos(false);}, 10);
                setQuantidadeSelecionado3Campos(true);
                // Obs: Tratamento dos meses de número para texto 
                const mesesStr = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
                const mesesConvertidos = meses.map(numero => mesesStr[numero - 1]);
                setCampoDetalhamento2title(mesesConvertidos)
                setCampoDetalhamento2content(meses);

                setTimeout(() => {setQuantidadeSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'mes', 'departamento', 'anos_experiencia');
                setSeriesGraf3(trat);
            }
            // FABRICANTE
            if(selectValor1 === "fabricante" && selectValor2 === "id") {
                setTimeout(() => {setQuantidadeSelecionado(false), setQuantidadeSelecionadoGraf(false), setQuantidadeSelecionadoGraf3Campos(false);}, 10);
                setQuantidadeSelecionado3Campos(true);
                setCampoDetalhamento2title(ids)
                setCampoDetalhamento2content(ids);

                setTimeout(() => {setQuantidadeSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'id', 'fabricante', 'anos_experiencia')
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "fabricante" && selectValor2 === "nome") {
                setTimeout(() => {setQuantidadeSelecionado(false), setQuantidadeSelecionadoGraf(false), setQuantidadeSelecionadoGraf3Campos(false);}, 10);
                setQuantidadeSelecionado3Campos(true);
                setCampoDetalhamento2title(nomes)
                setCampoDetalhamento2content(nomes);

                setTimeout(() => {setQuantidadeSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'nome', 'fabricante', 'anos_experiencia')
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "fabricante" && selectValor2 === "idade") {
                setTimeout(() => {setQuantidadeSelecionado(false), setQuantidadeSelecionadoGraf(false), setQuantidadeSelecionadoGraf3Campos(false);}, 10);
                setQuantidadeSelecionado3Campos(true);
                setCampoDetalhamento2title(idades)
                setCampoDetalhamento2content(idades);

                setTimeout(() => {setQuantidadeSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'idade', 'fabricante', 'anos_experiencia')
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "fabricante" && selectValor2 === "departamento") {
                setTimeout(() => {setQuantidadeSelecionado(false), setQuantidadeSelecionadoGraf(false), setQuantidadeSelecionadoGraf3Campos(false);}, 10);
                setQuantidadeSelecionado3Campos(true);
                setCampoDetalhamento2title(departamentos)
                setCampoDetalhamento2content(departamentos);

                setTimeout(() => {setQuantidadeSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'departamento', 'fabricante', 'anos_experiencia')
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "fabricante" && selectValor2 === "cor") {
                setTimeout(() => {setQuantidadeSelecionado(false), setQuantidadeSelecionadoGraf(false), setQuantidadeSelecionadoGraf3Campos(false);}, 10);
                setQuantidadeSelecionado3Campos(true);
                setCampoDetalhamento2title(cores)
                setCampoDetalhamento2content(cores);

                setTimeout(() => {setQuantidadeSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'cor', 'fabricante', 'anos_experiencia')
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "fabricante" && selectValor2 === "ano") {
                setTimeout(() => {setQuantidadeSelecionado(false), setQuantidadeSelecionadoGraf(false), setQuantidadeSelecionadoGraf3Campos(false);}, 10);
                setQuantidadeSelecionado3Campos(true);
                setCampoDetalhamento2title(anos)
                setCampoDetalhamento2content(anos);

                setTimeout(() => {setQuantidadeSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'ano', 'fabricante', 'anos_experiencia')
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "fabricante" && selectValor2 === "mes") {
                setTimeout(() => {setQuantidadeSelecionado(false), setQuantidadeSelecionadoGraf(false), setQuantidadeSelecionadoGraf3Campos(false);}, 10);
                setQuantidadeSelecionado3Campos(true);
                // Obs: Tratamento dos meses de número para texto 
                const mesesStr = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
                const mesesConvertidos = meses.map(numero => mesesStr[numero - 1]);
                setCampoDetalhamento2title(mesesConvertidos)
                setCampoDetalhamento2content(meses);

                setTimeout(() => {setQuantidadeSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'mes', 'fabricante', 'anos_experiencia');
                setSeriesGraf3(trat);
            }

            // COR
            if(selectValor1 === "cor" && selectValor2 === "id") {
                setTimeout(() => {setQuantidadeSelecionado(false), setQuantidadeSelecionadoGraf(false), setQuantidadeSelecionadoGraf3Campos(false);}, 10);
                setQuantidadeSelecionado3Campos(true);
                setCampoDetalhamento2title(ids)
                setCampoDetalhamento2content(ids);
                
                setTimeout(() => {setQuantidadeSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'id', 'cor', 'anos_experiencia');
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "cor" && selectValor2 === "nome") {
                setTimeout(() => {setQuantidadeSelecionado(false), setQuantidadeSelecionadoGraf(false), setQuantidadeSelecionadoGraf3Campos(false);}, 10);
                setQuantidadeSelecionado3Campos(true);
                setCampoDetalhamento2title(nomes)
                setCampoDetalhamento2content(nomes);
                
                setTimeout(() => {setQuantidadeSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'nome', 'cor', 'anos_experiencia');
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "cor" && selectValor2 === "idade") {
                setTimeout(() => {setQuantidadeSelecionado(false), setQuantidadeSelecionadoGraf(false), setQuantidadeSelecionadoGraf3Campos(false);}, 10);
                setQuantidadeSelecionado3Campos(true);
                setCampoDetalhamento2title(idades)
                setCampoDetalhamento2content(idades);
                
                setTimeout(() => {setQuantidadeSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'idade', 'cor', 'anos_experiencia');
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "cor" && selectValor2 === "departamento") {
                setTimeout(() => {setQuantidadeSelecionado(false), setQuantidadeSelecionadoGraf(false), setQuantidadeSelecionadoGraf3Campos(false);}, 10);
                setQuantidadeSelecionado3Campos(true);
                setCampoDetalhamento2title(departamentos)
                setCampoDetalhamento2content(departamentos);
                
                setTimeout(() => {setQuantidadeSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'departamento', 'cor', 'anos_experiencia');
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "cor" && selectValor2 === "fabricante") {
                setTimeout(() => {setQuantidadeSelecionado(false), setQuantidadeSelecionadoGraf(false), setQuantidadeSelecionadoGraf3Campos(false);}, 10);
                setQuantidadeSelecionado3Campos(true);
                setCampoDetalhamento2title(fabricantes)
                setCampoDetalhamento2content(fabricantes);

                setTimeout(() => {setQuantidadeSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'fabricante', 'cor', 'anos_experiencia');
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "cor" && selectValor2 === "ano") {
                setTimeout(() => {setQuantidadeSelecionado(false), setQuantidadeSelecionadoGraf(false), setQuantidadeSelecionadoGraf3Campos(false);}, 10);
                setQuantidadeSelecionado3Campos(true);
                setCampoDetalhamento2title(anos)
                setCampoDetalhamento2content(anos);

                setTimeout(() => {setQuantidadeSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'ano', 'cor', 'anos_experiencia');
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "cor" && selectValor2 === "mes") {
                setTimeout(() => {setQuantidadeSelecionado(false), setQuantidadeSelecionadoGraf(false), setQuantidadeSelecionadoGraf3Campos(false);}, 10);
                setQuantidadeSelecionado3Campos(true);
                // Obs: Tratamento dos meses de número para texto 
                const mesesStr = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
                const mesesConvertidos = meses.map(numero => mesesStr[numero - 1]);
                setCampoDetalhamento2title(mesesConvertidos)
                setCampoDetalhamento2content(meses);

                setTimeout(() => {setQuantidadeSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'mes', 'cor', 'anos_experiencia');
                setSeriesGraf3(trat);
            }

            // ANO
            if(selectValor1 === "ano" && selectValor2 === "id") {
                setTimeout(() => {setQuantidadeSelecionado(false), setQuantidadeSelecionadoGraf(false), setQuantidadeSelecionadoGraf3Campos(false);}, 10);
                setQuantidadeSelecionado3Campos(true);
                setCampoDetalhamento2title(ids)
                setCampoDetalhamento2content(ids);

                setTimeout(() => {setQuantidadeSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'id', 'ano', 'anos_experiencia');
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "ano" && selectValor2 === "nome") {
                setTimeout(() => {setQuantidadeSelecionado(false), setQuantidadeSelecionadoGraf(false), setQuantidadeSelecionadoGraf3Campos(false);}, 10);
                setQuantidadeSelecionado3Campos(true);
                setCampoDetalhamento2title(nomes)
                setCampoDetalhamento2content(nomes);

                setTimeout(() => {setQuantidadeSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'nome', 'ano', 'anos_experiencia');
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "ano" && selectValor2 === "departamento") {
                setTimeout(() => {setQuantidadeSelecionado(false), setQuantidadeSelecionadoGraf(false), setQuantidadeSelecionadoGraf3Campos(false);}, 10);
                setQuantidadeSelecionado3Campos(true);
                setCampoDetalhamento2title(departamentos)
                setCampoDetalhamento2content(departamentos);

                setTimeout(() => {setQuantidadeSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'departamento', 'ano', 'anos_experiencia');
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "ano" && selectValor2 === "fabricante") {
                setTimeout(() => {setQuantidadeSelecionado(false), setQuantidadeSelecionadoGraf(false), setQuantidadeSelecionadoGraf3Campos(false);}, 10);
                setQuantidadeSelecionado3Campos(true);
                setCampoDetalhamento2title(fabricantes)
                setCampoDetalhamento2content(fabricantes);

                setTimeout(() => {setQuantidadeSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'fabricante', 'ano', 'anos_experiencia');
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "ano" && selectValor2 === "idade") {
                setTimeout(() => {setQuantidadeSelecionado(false), setQuantidadeSelecionadoGraf(false), setQuantidadeSelecionadoGraf3Campos(false);}, 10);
                setQuantidadeSelecionado3Campos(true);
                setCampoDetalhamento2title(idades)
                setCampoDetalhamento2content(idades);

                setTimeout(() => {setQuantidadeSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'idade', 'ano', 'anos_experiencia');
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "ano" && selectValor2 === "cor") {
                setTimeout(() => {setQuantidadeSelecionado(false), setQuantidadeSelecionadoGraf(false), setQuantidadeSelecionadoGraf3Campos(false);}, 10);
                setQuantidadeSelecionado3Campos(true);
                setCampoDetalhamento2title(cores)
                setCampoDetalhamento2content(cores);

                setTimeout(() => {setQuantidadeSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'cor', 'ano', 'anos_experiencia');
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "ano" && selectValor2 === "mes") {
                setTimeout(() => {setQuantidadeSelecionado(false), setQuantidadeSelecionadoGraf(false), setQuantidadeSelecionadoGraf3Campos(false);}, 10);
                setQuantidadeSelecionado3Campos(true);
                // Obs: Tratamento dos meses de número para texto 
                const mesesStr = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
                const mesesConvertidos = meses.map(numero => mesesStr[numero - 1]);
                setCampoDetalhamento2title(mesesConvertidos)
                setCampoDetalhamento2content(meses);

                setTimeout(() => {setQuantidadeSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'mes', 'ano', 'anos_experiencia');
                setSeriesGraf3(trat);
            }

            // MES
            if(selectValor1 === "mes" && selectValor2 === "id") {
                setTimeout(() => {setQuantidadeSelecionado(false), setQuantidadeSelecionadoGraf(false), setQuantidadeSelecionadoGraf3Campos(false);}, 10);
                setQuantidadeSelecionado3Campos(true);
                setCampoDetalhamento2title(ids)
                setCampoDetalhamento2content(ids);

                setTimeout(() => {setQuantidadeSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'id', 'mes', 'anos_experiencia');
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "mes" && selectValor2 === "nome") {
                setTimeout(() => {setQuantidadeSelecionado(false), setQuantidadeSelecionadoGraf(false), setQuantidadeSelecionadoGraf3Campos(false);}, 10);
                setQuantidadeSelecionado3Campos(true);
                setCampoDetalhamento2title(nomes)
                setCampoDetalhamento2content(nomes);

                setTimeout(() => {setQuantidadeSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'nome', 'mes', 'anos_experiencia');
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "mes" && selectValor2 === "idade") {
                setTimeout(() => {setQuantidadeSelecionado(false), setQuantidadeSelecionadoGraf(false), setQuantidadeSelecionadoGraf3Campos(false);}, 10);
                setQuantidadeSelecionado3Campos(true);
                setCampoDetalhamento2title(idades)
                setCampoDetalhamento2content(idades);

                setTimeout(() => {setQuantidadeSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'idade', 'mes', 'anos_experiencia');
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "mes" && selectValor2 === "departamento") {
                setTimeout(() => {setQuantidadeSelecionado(false), setQuantidadeSelecionadoGraf(false), setQuantidadeSelecionadoGraf3Campos(false);}, 10);
                setQuantidadeSelecionado3Campos(true);
                setCampoDetalhamento2title(departamentos)
                setCampoDetalhamento2content(departamentos);

                setTimeout(() => {setQuantidadeSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'departamento', 'mes', 'anos_experiencia');
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "mes" && selectValor2 === "fabricante") {
                setTimeout(() => {setQuantidadeSelecionado(false), setQuantidadeSelecionadoGraf(false), setQuantidadeSelecionadoGraf3Campos(false);}, 10);
                setQuantidadeSelecionado3Campos(true);
                setCampoDetalhamento2title(fabricantes)
                setCampoDetalhamento2content(fabricantes);

                setTimeout(() => {setQuantidadeSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'fabricante', 'mes', 'anos_experiencia');
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "mes" && selectValor2 === "cor") {
                setTimeout(() => {setQuantidadeSelecionado(false), setQuantidadeSelecionadoGraf(false), setQuantidadeSelecionadoGraf3Campos(false);}, 10);
                setQuantidadeSelecionado3Campos(true);
                setCampoDetalhamento2title(cores)
                setCampoDetalhamento2content(cores);

                setTimeout(() => {setQuantidadeSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'cor', 'mes', 'anos_experiencia');
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "mes" && selectValor2 === "ano") {
                setTimeout(() => {setQuantidadeSelecionado(false), setQuantidadeSelecionadoGraf(false), setQuantidadeSelecionadoGraf3Campos(false);}, 10);
                setQuantidadeSelecionado3Campos(true);
                setCampoDetalhamento2title(anos)
                setCampoDetalhamento2content(anos);

                setTimeout(() => {setQuantidadeSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados3, 'ano', 'mes', 'anos_experiencia');
                setSeriesGraf3(trat);
            }
        }
        
        if((selectValor0 === "nulo0" && selectValor1 === "nulo1" && selectValor2 === "nulo2") || 
        (selectValor0 !== "nulo0" && selectValor1 === "nulo1" && selectValor2 === "nulo2")) {
            setTimeout(() => {
                setPrecoSelecionado(false);
                setQuantidadeSelecionado(false);
                setPrecoSelecionado3Campos(false);
                setQuantidadeSelecionado3Campos(false);
                setPrecoSelecionadoGraf(false);
                setQuantidadeSelecionadoGraf(false);
                setPrecoSelecionadoGraf3Campos(false);
                setQuantidadeSelecionadoGraf3Campos(false);
            }, 100);
        }
        return;
    },[selectValor0, selectValor1, selectValor2, contentSelecionado0, contentSelecionado1, contentSelecionado2]);

    // Estados para criar de forma dinâmica a tabela com as 2 primeiras informações 
    // Preço 
    const [campoDetalhamento1, setCampoDetalhamento1] = useState<string[]>([]);
    const [campoDetalhamento1Preco, setCampoDetalhamento1Preco] = useState<number[]>([]);
    const [campoDetalhamento1Total, setCampoDetalhamento1Total] = useState<number[]>([]);

    // Quantidade 
    const [campoDetalhamento1Quantidade, setCampoDetalhamento1Quantidade] = useState<number[]>([]);

    // Estados para criar de forma dinâmica a tabela com as 3 informações selecionadas
    // obs: Campo detalhamento title criado para fazer o tratamento dos meses números para nomes
    const [campoDetalhamento2content, setCampoDetalhamento2content] = useState<string[] | number[] | string | number>([]);
    const [campoDetalhamento2title, setCampoDetalhamento2title] = useState<string[] | number[] | string | number>([]);

    const filtrarUnicos = (campo: string) => {
        return Array.from(new Set(dados3.map(dado => dado[campo])));
    };

    // Função Gerar segunda tabela caso todos campos selecionados 
    function gerarTabela() {
        const detalhamento1 = filtrarUnicos(selectValor1);
        const detalhamento2 = filtrarUnicos(selectValor2);
    
        const tabela = detalhamento1.map(cat => {
        const linha = { propriedade: cat };
        detalhamento2.forEach(el => {
        const itens = dados3.filter(d => d[selectValor1] === cat && d[selectValor2] === el);
        const soma = itens.reduce((total, item) => total + item[selectValor0], 0);
        linha[el] = soma;
        });
        // Tratamento para os meses do eixo Y caso selecionar Mês no segundo campo, adaptar se necessário a outra fonte de dados.
        // Regra para ID caso conversão de mês de algum problema 
        if(selectValor1 !== "id") {
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
        <div className='dados3'>

            <div className="camposFonte1">
                <select value={selectValor0} onChange={(e) => handleOpt0(e.target.value)} className="form-select">
                    <option value="nulo0">-</option>
                    <option value="salario">Salário</option>
                    <option value="anos_experiencia">Anos de Experiência</option>
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
                    {precoSelecionado && (
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
                        </>
                    )} 

                    {quantidadeSelecionado && (
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
                                                <td>{campoDetalhamento1Quantidade[i]}</td>
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

                    {quantidadeSelecionado3Campos && (
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
                    {precoSelecionadoGraf && (
                        <Charts seriesM={mediaValores} categories={detalhamento1} yaxixConf={yaxixType2Campos} />
                    )}

                    {quantidadeSelecionadoGraf && (
                        <Charts seriesM={mediaValores} categories={detalhamento1} yaxixConf={yaxixType2Campos} />
                    )}

                    {precoSelecionadoGraf3Campos && (
                        <Charts3Campos options={options} series={series} />
                    )}

                    {quantidadeSelecionadoGraf3Campos && (
                        <Charts3Campos options={options} series={series} />
                    )}
                </div>
            )}
            
        </div>
    )
}


export default Dados3;
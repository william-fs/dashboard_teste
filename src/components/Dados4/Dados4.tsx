import Charts from '../Charts/Charts';
import Charts3Campos from '../Charts3Campos/Charts3Campos';
import {useEffect, useState} from 'react';
import Tabela from '../Tabela/Tabela';

// Fonte de dados 
import dados4 from "../../dados/fonte_de_dados_4.json";

// Valores usados nos campos 
import {valores} from "./TotalSelect";

// Import valores de soma/total referente ao primeiro campo:
import {ids, projetos, fabricantes, cores, anos, meses, departamentos, duracaoMeses} from "./TotalSelect";
// import duração meses tratados 
import {somarDuracaoMeses12, somarDuracaoMeses14, somarDuracaoMeses16, somarDuracaoMeses18, somarDuracaoMeses10, somarDuracaoMeses8, somarDuracaoMeses9} from "./TotalSelect";
// import IDs tratados 
import {somarId1, somarId2, somarId3, somarId4, somarId5, somarId6, somarId7, somarId8, somarId9, somarId10} from "./TotalSelect";
// Import Projetos tratados 
import {somarPrecoProdA, somarPrecoProdB, somarPrecoProdC, somarPrecoProdD, somarPrecoProdE, somarPrecoProdF, somarPrecoProdG, somarPrecoProdH, somarPrecoProdI, somarPrecoProdJ} from "./TotalSelect";
// Import Fabricantes tratados
import {somarPrecoFabX, somarPrecoFabY, somarPrecoFabZ} from "./TotalSelect";
// Import Cores tratadas 
import {somarPrecoCorVerm, somarPrecoCorAzul, somarPrecoCorVerde, somarPrecoCorPreto, somarPrecoCorBranco, somarPrecoCorCinza} from "./TotalSelect";
// Import Anos tratados 
import {somarPrecoAno2021, somarPrecoAno2022, somarPrecoAno2023} from "./TotalSelect";
// Import Meses tratados 
import {somarPrecoMesJan, somarPrecoMesFev, somarPrecoMesMar, somarPrecoMesAbr, somarPrecoMesMai, somarPrecoMesJun, somarPrecoMesJul, somarPrecoMesAgo, somarPrecoMesSet, somarPrecoMesOut} from "./TotalSelect";
// import departamentos tratados 
import {somarPrecoDev, somarPrecoPesquisa, somarPrecoTi, somarPrecoMkt, somarPrecoRh} from "./TotalSelect";

// Import função de filtro para gráfico dos 3 campos 
import {FiltroGrafico3} from "./TotalSelect";

function Dados4() {

    // "Somas totais" para usar nos estados de atualização da tabela dinâmica 
    // Preços 
    // Duração meses
    const duracaoMesPrecos = [somarDuracaoMeses12, somarDuracaoMeses14, somarDuracaoMeses16, somarDuracaoMeses18, somarDuracaoMeses10, somarDuracaoMeses8, somarDuracaoMeses9];
    const totalPrecoDuracaoMes = [somarDuracaoMeses12+somarDuracaoMeses14+somarDuracaoMeses16+somarDuracaoMeses18+somarDuracaoMeses10+somarDuracaoMeses8+somarDuracaoMeses9];
    // IDs
    const idPrecos = [somarId1, somarId2, somarId3, somarId4, somarId5, somarId6, somarId7, somarId8, somarId9, somarId10];
    const totalPrecoId = [somarId1+somarId2+somarId3+somarId4+somarId5+somarId6+somarId7+somarId8+somarId9+somarId10];
    // Projetos
    const projetoPrecos = [somarPrecoProdA, somarPrecoProdB, somarPrecoProdC, somarPrecoProdD, somarPrecoProdE, somarPrecoProdF, somarPrecoProdG, somarPrecoProdH, somarPrecoProdI, somarPrecoProdJ];
    const totalPrecoProjeto = [somarPrecoProdA+somarPrecoProdB+somarPrecoProdC+somarPrecoProdD+somarPrecoProdE+somarPrecoProdF+somarPrecoProdG+somarPrecoProdH+somarPrecoProdI+somarPrecoProdJ];
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
    // Departamentos
    const departamentoPrecos = [somarPrecoDev, somarPrecoPesquisa, somarPrecoTi, somarPrecoMkt, somarPrecoRh];
    const totalPrecoDepartamento = [somarPrecoDev+somarPrecoPesquisa+somarPrecoTi+somarPrecoMkt+somarPrecoRh];
    
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
        if(selectValor0 === "orcamento") {setContentSelecionado0("Orçamento");}
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
            return;}
        if(selectValor1 === "nulo1") {
            setSelectValor2("nulo2"); 
            setPrecoSelecionado(false); 
            setPrecoSelecionadoGraf(false);
            setPrecoSelecionado3Campos(false); 
            return;}
        if(selectValor2 === "nulo2") {
            setPrecoSelecionadoGraf(false);
            setPrecoSelecionado3Campos(false);
            setPrecoSelecionadoGraf3Campos(false);

        }
        return;
    },[selectValor0, selectValor1, selectValor2, contentSelecionado0, contentSelecionado1, contentSelecionado2]);

    const [precoSelecionado, setPrecoSelecionado] = useState(false);
    const [precoSelecionadoGraf, setPrecoSelecionadoGraf] = useState(false);
    const [precoSelecionadoGraf3Campos, setPrecoSelecionadoGraf3Campos] = useState(false);
    const [precoSelecionado3Campos, setPrecoSelecionado3Campos] = useState(false);
    
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
        if(selectValor0 === "orcamento") {
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
            if(selectValor1 === "duracao_meses") {
                setPrecoSelecionado(false);
                setPrecoSelecionadoGraf(false);
                setTimeout(() => {setPrecoSelecionado(true), setPrecoSelecionadoGraf(true);}, 10);
                setCampoDetalhamento1(duracaoMeses);
                setCampoDetalhamento1Preco(duracaoMesPrecos);
                setCampoDetalhamento1Total(totalPrecoDuracaoMes);

                setDetalhamento1(duracaoMeses)
                setMediaValores(duracaoMesPrecos);
            }
            if(selectValor1 === "nome") {
                setPrecoSelecionado(false);
                setPrecoSelecionadoGraf(false);
                setTimeout(() => {setPrecoSelecionado(true), setPrecoSelecionadoGraf(true);}, 10);
                setCampoDetalhamento1(projetos);
                setCampoDetalhamento1Preco(projetoPrecos);
                setCampoDetalhamento1Total(totalPrecoProjeto);

                setDetalhamento1(projetos)
                setMediaValores(projetoPrecos);
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
            if(selectValor1 === "ano_inicio") {
                setPrecoSelecionado(false);
                setPrecoSelecionadoGraf(false);
                setTimeout(() => {setPrecoSelecionado(true), setPrecoSelecionadoGraf(true);}, 10);
                setCampoDetalhamento1(anos);
                setCampoDetalhamento1Preco(anoPrecos);
                setCampoDetalhamento1Total(totalPrecoAno);

                setDetalhamento1(anos)
                setMediaValores(anoPrecos);
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
            
            if(selectValor1 === "mes_inicio") {
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
            // Duração Meses
            if(selectValor1 === "duracao_meses" && selectValor2 === "nome") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionadoGraf3Campos(true);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(projetos)
                setCampoDetalhamento2content(projetos);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados4, 'nome', 'duracao_meses', "orcamento")
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "duracao_meses" && selectValor2 === "departamento") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionadoGraf3Campos(true);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(departamentos)
                setCampoDetalhamento2content(departamentos);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados4, 'departamento', 'duracao_meses', "orcamento")
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "duracao_meses" && selectValor2 === "id") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionadoGraf3Campos(true);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(ids)
                setCampoDetalhamento2content(ids);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados4, 'id', 'duracao_meses', "orcamento")
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "duracao_meses" && selectValor2 === "fabricante") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionadoGraf3Campos(true);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(fabricantes)
                setCampoDetalhamento2content(fabricantes);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados4, 'fabricante', 'duracao_meses', "orcamento")
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "duracao_meses" && selectValor2 === "cor") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(cores)
                setCampoDetalhamento2content(cores);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados4, 'cor', 'duracao_meses', "orcamento")
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "duracao_meses" && selectValor2 === "ano_inicio") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(anos)
                setCampoDetalhamento2content(anos);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados4, 'ano_inicio', 'duracao_meses', "orcamento")
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "duracao_meses" && selectValor2 === "mes_inicio") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                // Obs: Tratamento dos meses de número para texto 
                const mesesStr = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
                const mesesConvertidos = meses.map(numero => mesesStr[numero - 1]);
                setCampoDetalhamento2title(mesesConvertidos)
                setCampoDetalhamento2content(meses);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados4, 'mes_inicio', 'duracao_meses', "orcamento")
                setSeriesGraf3(trat);
            }

            // Departamentos
            if(selectValor1 === "departamento" && selectValor2 === "nome") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionadoGraf3Campos(true);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(projetos)
                setCampoDetalhamento2content(projetos);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados4, 'nome', 'departamento', "orcamento")
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "departamento" && selectValor2 === "id") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionadoGraf3Campos(true);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(ids)
                setCampoDetalhamento2content(ids);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados4, 'id', 'departamento', "orcamento")
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "departamento" && selectValor2 === "duracao_meses") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionadoGraf3Campos(true);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(duracaoMeses)
                setCampoDetalhamento2content(duracaoMeses);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados4, 'duracao_meses', 'departamento', "orcamento")
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "departamento" && selectValor2 === "fabricante") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionadoGraf3Campos(true);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(fabricantes)
                setCampoDetalhamento2content(fabricantes);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados4, 'fabricante', 'departamento', "orcamento")
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "departamento" && selectValor2 === "cor") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(cores)
                setCampoDetalhamento2content(cores);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados4, 'cor', 'departamento', "orcamento")
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "departamento" && selectValor2 === "ano_inicio") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(anos)
                setCampoDetalhamento2content(anos);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados4, 'ano_inicio', 'departamento', "orcamento")
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "departamento" && selectValor2 === "mes_inicio") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                // Obs: Tratamento dos meses de número para texto 
                const mesesStr = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
                const mesesConvertidos = meses.map(numero => mesesStr[numero - 1]);
                setCampoDetalhamento2title(mesesConvertidos)
                setCampoDetalhamento2content(meses);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados4, 'mes_inicio', 'departamento', "orcamento")
                setSeriesGraf3(trat);
            }

            // ID's
            if(selectValor1 === "id" && selectValor2 === "nome") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionadoGraf3Campos(true);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(projetos)
                setCampoDetalhamento2content(projetos);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados4, 'nome', 'id', "orcamento")
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "id" && selectValor2 === "departamento") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionadoGraf3Campos(true);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(departamentos)
                setCampoDetalhamento2content(departamentos);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados4, 'departamento', 'id', "orcamento")
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "id" && selectValor2 === "duracao_meses") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionadoGraf3Campos(true);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(duracaoMeses)
                setCampoDetalhamento2content(duracaoMeses);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados4, 'duracao_meses', 'id', "orcamento")
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "id" && selectValor2 === "fabricante") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionadoGraf3Campos(true);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(fabricantes)
                setCampoDetalhamento2content(fabricantes);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados4, 'fabricante', 'id', "orcamento")
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "id" && selectValor2 === "cor") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(cores)
                setCampoDetalhamento2content(cores);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados4, 'cor', 'id', "orcamento")
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "id" && selectValor2 === "ano_inicio") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(anos)
                setCampoDetalhamento2content(anos);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados4, 'ano_inicio', 'id', "orcamento")
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "id" && selectValor2 === "mes_inicio") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                // Obs: Tratamento dos meses de número para texto 
                const mesesStr = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
                const mesesConvertidos = meses.map(numero => mesesStr[numero - 1]);
                setCampoDetalhamento2title(mesesConvertidos)
                setCampoDetalhamento2content(meses);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados4, 'mes_inicio', 'id', "orcamento")
                setSeriesGraf3(trat);
            }
            
            // PRODUTOS
            if(selectValor1 === "nome" && selectValor2 === "id") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionadoGraf3Campos(true);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(ids)
                setCampoDetalhamento2content(ids);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados4, 'id', 'nome', "orcamento")
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "nome" && selectValor2 === "departamento") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionadoGraf3Campos(true);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(departamentos)
                setCampoDetalhamento2content(departamentos);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados4, 'departamento', 'nome', "orcamento")
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "nome" && selectValor2 === "duracao_meses") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionadoGraf3Campos(true);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(duracaoMeses)
                setCampoDetalhamento2content(duracaoMeses);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados4, 'duracao_meses', 'nome', "orcamento")
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "nome" && selectValor2 === "fabricante") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionadoGraf3Campos(true);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(fabricantes)
                setCampoDetalhamento2content(fabricantes);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados4, 'fabricante', 'nome', "orcamento")
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "nome" && selectValor2 === "cor") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(cores)
                setCampoDetalhamento2content(cores);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados4, 'cor', 'nome', "orcamento")
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "nome" && selectValor2 === "ano_inicio") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(anos)
                setCampoDetalhamento2content(anos);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados4, 'ano_inicio', 'nome', "orcamento")
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "nome" && selectValor2 === "mes_inicio") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                // Obs: Tratamento dos meses de número para texto 
                const mesesStr = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
                const mesesConvertidos = meses.map(numero => mesesStr[numero - 1]);
                setCampoDetalhamento2title(mesesConvertidos)
                setCampoDetalhamento2content(meses);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados4, 'mes_inicio', 'nome', "orcamento")
                setSeriesGraf3(trat);
            }

            // FABRICANTE
            if(selectValor1 === "fabricante" && selectValor2 === "id") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(ids)
                setCampoDetalhamento2content(ids);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados4, 'id', 'fabricante', "orcamento")
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "fabricante" && selectValor2 === "duracao_meses") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(duracaoMeses)
                setCampoDetalhamento2content(duracaoMeses);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados4, 'duracao_meses', 'fabricante', "orcamento")
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "fabricante" && selectValor2 === "departamento") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(departamentos)
                setCampoDetalhamento2content(departamentos);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados4, 'departamento', 'fabricante', "orcamento")
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "fabricante" && selectValor2 === "nome") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(projetos)
                setCampoDetalhamento2content(projetos);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados4, 'nome', 'fabricante', "orcamento")
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "fabricante" && selectValor2 === "cor") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(cores)
                setCampoDetalhamento2content(cores);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados4, 'cor', 'fabricante', "orcamento")
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "fabricante" && selectValor2 === "ano_inicio") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(anos)
                setCampoDetalhamento2content(anos);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados4, 'ano_inicio', 'fabricante', "orcamento")
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "fabricante" && selectValor2 === "mes_inicio") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                // Obs: Tratamento dos meses de número para texto 
                const mesesStr = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
                const mesesConvertidos = meses.map(numero => mesesStr[numero - 1]);
                setCampoDetalhamento2title(mesesConvertidos)
                setCampoDetalhamento2content(meses);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados4, 'mes_inicio', 'fabricante', "orcamento");
                setSeriesGraf3(trat);
            }

            // COR
            if(selectValor1 === "cor" && selectValor2 === "id") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(ids)
                setCampoDetalhamento2content(ids);
                
                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados4, 'id', 'cor', "orcamento");
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "cor" && selectValor2 === "departamento") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(departamentos)
                setCampoDetalhamento2content(departamentos);
                
                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados4, 'departamento', 'cor', "orcamento");
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "cor" && selectValor2 === "duracao_meses") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(duracaoMeses)
                setCampoDetalhamento2content(duracaoMeses);
                
                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados4, 'duracao_meses', 'cor', "orcamento");
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "cor" && selectValor2 === "nome") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(projetos)
                setCampoDetalhamento2content(projetos);
                
                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados4, 'nome', 'cor', "orcamento");
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "cor" && selectValor2 === "fabricante") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(fabricantes)
                setCampoDetalhamento2content(fabricantes);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados4, 'fabricante', 'cor', "orcamento");
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "cor" && selectValor2 === "ano_inicio") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(anos)
                setCampoDetalhamento2content(anos);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados4, 'ano_inicio', 'cor', "orcamento");
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "cor" && selectValor2 === "mes_inicio") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                // Obs: Tratamento dos meses de número para texto 
                const mesesStr = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
                const mesesConvertidos = meses.map(numero => mesesStr[numero - 1]);
                setCampoDetalhamento2title(mesesConvertidos)
                setCampoDetalhamento2content(meses);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados4, 'mes_inicio', 'cor', "orcamento");
                setSeriesGraf3(trat);
            }

            // ANO
            if(selectValor1 === "ano_inicio" && selectValor2 === "id") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(ids)
                setCampoDetalhamento2content(ids);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados4, 'id', 'ano_inicio', "orcamento");
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "ano_inicio" && selectValor2 === "departamento") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(departamentos)
                setCampoDetalhamento2content(departamentos);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados4, 'departamento', 'ano_inicio', "orcamento");
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "ano_inicio" && selectValor2 === "duracao_meses") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(duracaoMeses)
                setCampoDetalhamento2content(duracaoMeses);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados4, 'duracao_meses', 'ano_inicio', "orcamento");
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "ano_inicio" && selectValor2 === "nome") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(projetos)
                setCampoDetalhamento2content(projetos);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados4, 'nome', 'ano_inicio', "orcamento");
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "ano_inicio" && selectValor2 === "fabricante") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(fabricantes)
                setCampoDetalhamento2content(fabricantes);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados4, 'fabricante', 'ano_inicio', "orcamento");
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "ano_inicio" && selectValor2 === "cor") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(cores)
                setCampoDetalhamento2content(cores);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados4, 'cor', 'ano_inicio', "orcamento");
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "ano_inicio" && selectValor2 === "mes_inicio") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                // Obs: Tratamento dos meses de número para texto 
                const mesesStr = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
                const mesesConvertidos = meses.map(numero => mesesStr[numero - 1]);
                setCampoDetalhamento2title(mesesConvertidos)
                setCampoDetalhamento2content(meses);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados4, 'mes_inicio', 'ano_inicio', "orcamento");
                setSeriesGraf3(trat);
            }

            // MES
            if(selectValor1 === "mes_inicio" && selectValor2 === "id") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(ids)
                setCampoDetalhamento2content(ids);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados4, 'id', 'mes_inicio', "orcamento");
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "mes_inicio" && selectValor2 === "departamento") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(departamentos)
                setCampoDetalhamento2content(departamentos);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados4, 'departamento', 'mes_inicio', "orcamento");
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "mes_inicio" && selectValor2 === "duracao_meses") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(duracaoMeses)
                setCampoDetalhamento2content(duracaoMeses);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados4, 'duracao_meses', 'mes_inicio', "orcamento");
                setSeriesGraf3(trat);
            }
            if(selectValor1 === "mes_inicio" && selectValor2 === "nome") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(projetos)
                setCampoDetalhamento2content(projetos);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados4, 'nome', 'mes_inicio', "orcamento");
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "mes_inicio" && selectValor2 === "fabricante") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(fabricantes)
                setCampoDetalhamento2content(fabricantes);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados4, 'fabricante', 'mes_inicio', "orcamento");
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "mes_inicio" && selectValor2 === "cor") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                setCampoDetalhamento2title(cores)
                setCampoDetalhamento2content(cores);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados4, 'cor', 'mes_inicio', "orcamento");
                setSeriesGraf3(trat);
            }

            if(selectValor1 === "mes_inicio" && selectValor2 === "ano_inicio") {
                setTimeout(() => {setPrecoSelecionado(false), setPrecoSelecionadoGraf(false), setPrecoSelecionadoGraf3Campos(false);}, 10);
                setPrecoSelecionado3Campos(true);
                // Obs: Tratamento dos meses de número para texto 
                const mesesStr = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
                const mesesConvertidos = meses.map(numero => mesesStr[numero - 1]);
                setCampoDetalhamento2title(mesesConvertidos)
                setCampoDetalhamento2content(meses);

                setTimeout(() => {setPrecoSelecionadoGraf3Campos(true);}, 20);
                const trat = FiltroGrafico3(dados4, 'ano_inicio', 'mes_inicio', "orcamento");
                setSeriesGraf3(trat);
            }
        }

        return;
    },[selectValor0, selectValor1, selectValor2, contentSelecionado0, contentSelecionado1, contentSelecionado2]);

    // Estados para criar de forma dinâmica a tabela com as 2 primeiras informações 
    // Preço 
    const [campoDetalhamento1, setCampoDetalhamento1] = useState<string[]>([]);
    const [campoDetalhamento1Preco, setCampoDetalhamento1Preco] = useState<number[]>([]);
    const [campoDetalhamento1Total, setCampoDetalhamento1Total] = useState<number[]>([]);

    // Estados para criar de forma dinâmica a tabela com as 3 informações selecionadas
    // obs: Campo detalhamento title criado para fazer o tratamento dos meses números para nomes
    const [campoDetalhamento2content, setCampoDetalhamento2content] = useState<string[] | number[] | string | number>([]);
    const [campoDetalhamento2title, setCampoDetalhamento2title] = useState<string[] | number[] | string | number>([]);

    const filtrarUnicos = (campo: string) => {
        return Array.from(new Set(dados4.map(dado => dado[campo])));
    };

    // Função Gerar segunda tabela caso todos campos selecionados 
    function gerarTabela() {
        const detalhamento1 = filtrarUnicos(selectValor1);
        const detalhamento2 = filtrarUnicos(selectValor2);
        const tabela = detalhamento1.map(cat => {
        const linha = { propriedade: cat };
        detalhamento2.forEach(el => {
        const itens = dados4.filter(d => d[selectValor1] === cat && d[selectValor2] === el);
        const soma = itens.reduce((total, item) => total + item[selectValor0], 0);
        linha[el] = soma;
        });
        // Tratamento para os meses do eixo Y caso selecionar Mês no segundo campo, adaptar se necessário a outra fonte de dados.
        // Regra para ID caso conversão de mês de algum problema 
        if(selectValor1 !== "id" && selectValor1 !== "duracao_meses") {
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
        <div className='dados'>

            <div className="selectionConfig">
                <div className="camposFonte">
                    <div>
                        <label htmlFor="selectD4_0">Somar</label>
                        <select id='selectD4_0' value={selectValor0} onChange={(e) => handleOpt0(e.target.value)} className="form-select">
                            <option value="nulo0">-</option>
                            <option value="orcamento">Orçamento</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="selectD4_1">Visualizar por</label>
                        <select id='selectD4_1' value={selectValor1} onChange={(e) => handleOpt1(e.target.value)} className="form-select">
                            <option value="nulo1">-</option>
                            {
                                valorFiltrado1.map((e, i) => (
                                    <option key={"select1"+i} value={e.valor}>{e.conteudo}</option>
                                ))
                            }
                        </select>
                    </div>

                    <div>
                        <label htmlFor="selectD4_2">Detalhar por</label>
                        <select id='selectD4_2' value={selectValor2} onChange={(e) => handleOpt2(e.target.value)} className="form-select">
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
                </div>
            )}  

            {graficoCheck && (
                <div style={{width: "100%"}}>
                    {precoSelecionadoGraf && (
                        <Charts seriesM={mediaValores} categories={detalhamento1} yaxixConf={yaxixType2Campos} />
                    )}

                    {precoSelecionadoGraf3Campos && (
                        <Charts3Campos options={options} series={series} />
                    )}
                </div>
            )}
            
        </div>
    )
}


export default Dados4;
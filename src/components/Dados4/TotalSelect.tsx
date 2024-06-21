import dados4 from "../../dados/fonte_de_dados_4.json";

// Valores usados nos campos 
const valores = [
    {valor: "id", conteudo: "ID"},
    {valor: "nome", conteudo: "Projeto"},
    {valor: "fabricante", conteudo: "Fabricante"},
    {valor: "cor", conteudo: "Cor"},
    {valor: "ano_inicio", conteudo: "Ano Início"},
    {valor: "mes_inicio", conteudo: "Mês Início"},
    {valor: "departamento", conteudo: "Departamento"},
    {valor: "duracao_meses", conteudo: "Duração Meses"},
]
export {valores};

// Filtro: conteúdo duplicados 
const ids = Array.from(new Set(dados4.map(dado => dado.id)));
const projetos = Array.from(new Set(dados4.map(dado => dado.nome)));
const fabricantes = Array.from(new Set(dados4.map(dado => dado.fabricante)));
const cores = Array.from(new Set(dados4.map(dado => dado.cor)));
const anos = Array.from(new Set(dados4.map(dado => dado.ano_inicio)));
const meses = Array.from(new Set(dados4.map(dado => dado.mes_inicio)));
const departamentos = Array.from(new Set(dados4.map(dado => dado.departamento)));
const duracaoMeses = Array.from(new Set(dados4.map(dado => dado.duracao_meses)));


export {ids, projetos, fabricantes, cores, anos, meses, departamentos, duracaoMeses};

// Filtrar por Tipo de dado para extrair os valores de soma - 
// Filtrar por Tipo de Duração, Preço e ID - 
// DuracaoMeses12
const DuracaoMeses12Filtrado = dados4.filter(dur => dur.duracao_meses === 12);
const somarDuracaoMeses12 = Number(DuracaoMeses12Filtrado.reduce((total, item) => total + item.orcamento, 0).toFixed(2));
// DuracaoMeses14
const DuracaoMeses14Filtrado = dados4.filter(dur => dur.duracao_meses === 14);
const somarDuracaoMeses14 = Number(DuracaoMeses14Filtrado.reduce((total, item) => total + item.orcamento, 0).toFixed(2));
// DuracaoMeses16
const DuracaoMeses16Filtrado = dados4.filter(dur => dur.duracao_meses === 16);
const somarDuracaoMeses16 = Number(DuracaoMeses16Filtrado.reduce((total, item) => total + item.orcamento, 0).toFixed(2));
// DuracaoMeses18
const DuracaoMeses18Filtrado = dados4.filter(dur => dur.duracao_meses === 18);
const somarDuracaoMeses18 = Number(DuracaoMeses18Filtrado.reduce((total, item) => total + item.orcamento, 0).toFixed(2));
// DuracaoMeses10
const DuracaoMeses10Filtrado = dados4.filter(dur => dur.duracao_meses === 10);
const somarDuracaoMeses10 = Number(DuracaoMeses10Filtrado.reduce((total, item) => total + item.orcamento, 0).toFixed(2));
// DuracaoMeses8
const DuracaoMeses8Filtrado = dados4.filter(dur => dur.duracao_meses === 8);
const somarDuracaoMeses8 = Number(DuracaoMeses8Filtrado.reduce((total, item) => total + item.orcamento, 0).toFixed(2));
// DuracaoMeses9
const DuracaoMeses9Filtrado = dados4.filter(dur => dur.duracao_meses === 9);
const somarDuracaoMeses9 = Number(DuracaoMeses9Filtrado.reduce((total, item) => total + item.orcamento, 0).toFixed(2));

export {somarDuracaoMeses12, somarDuracaoMeses14, somarDuracaoMeses16, somarDuracaoMeses18, somarDuracaoMeses10, somarDuracaoMeses8, somarDuracaoMeses9};

// Filtrar por Tipo de Categoria, Preço e ID - 
// ID 1
const id1Filtrado = dados4.filter(id => id.id === 1);
const somarId1 = Number(id1Filtrado.reduce((total, item) => total + item.orcamento, 0).toFixed(2));
// ID 2
const id2Filtrado = dados4.filter(id => id.id === 2);
const somarId2 = Number(id2Filtrado.reduce((total, item) => total + item.orcamento, 0).toFixed(2));
// ID 3
const id3Filtrado = dados4.filter(id => id.id === 3);
const somarId3 = Number(id3Filtrado.reduce((total, item) => total + item.orcamento, 0).toFixed(2));
// ID 4
const id4Filtrado = dados4.filter(id => id.id === 4);
const somarId4 = Number(id4Filtrado.reduce((total, item) => total + item.orcamento, 0).toFixed(2));
// ID 5
const id5Filtrado = dados4.filter(id => id.id === 5);
const somarId5 = Number(id5Filtrado.reduce((total, item) => total + item.orcamento, 0).toFixed(2));
// ID 6
const id6Filtrado = dados4.filter(id => id.id === 6);
const somarId6 = Number(id6Filtrado.reduce((total, item) => total + item.orcamento, 0).toFixed(2));
// ID 7
const id7Filtrado = dados4.filter(id => id.id === 7);
const somarId7 = Number(id7Filtrado.reduce((total, item) => total + item.orcamento, 0).toFixed(2));
// ID 8
const id8Filtrado = dados4.filter(id => id.id === 8);
const somarId8 = Number(id8Filtrado.reduce((total, item) => total + item.orcamento, 0).toFixed(2));
// ID 9
const id9Filtrado = dados4.filter(id => id.id === 9);
const somarId9 = Number(id9Filtrado.reduce((total, item) => total + item.orcamento, 0).toFixed(2));
// ID 10
const id10Filtrado = dados4.filter(id => id.id === 10);
const somarId10 = Number(id10Filtrado.reduce((total, item) => total + item.orcamento, 0).toFixed(2));

export {somarId1, somarId2, somarId3, somarId4, somarId5, somarId6, somarId7, somarId8, somarId9, somarId10};

// Filtrar por Tipo de Categoria, Preço e Produto - 
// Projeto A
const produtoProdAFiltrado = dados4.filter(prod => prod.nome === "Projeto A");
const somarPrecoProdA = Number(produtoProdAFiltrado.reduce((total, item) => total + item.orcamento, 0).toFixed(2));
// Projeto B
const produtoProdBFiltrado = dados4.filter(prod => prod.nome === "Projeto B");
const somarPrecoProdB = Number(produtoProdBFiltrado.reduce((total, item) => total + item.orcamento, 0).toFixed(2));
// Projeto C
const produtoProdCFiltrado = dados4.filter(prod => prod.nome === "Projeto C");
const somarPrecoProdC = Number(produtoProdCFiltrado.reduce((total, item) => total + item.orcamento, 0).toFixed(2));
// Projeto D
const produtoProdDFiltrado = dados4.filter(prod => prod.nome === "Projeto D");
const somarPrecoProdD = Number(produtoProdDFiltrado.reduce((total, item) => total + item.orcamento, 0).toFixed(2));
// Projeto E
const produtoProdEFiltrado = dados4.filter(prod => prod.nome === "Projeto E");
const somarPrecoProdE = Number(produtoProdEFiltrado.reduce((total, item) => total + item.orcamento, 0).toFixed(2));
// Projeto F
const produtoProdFFiltrado = dados4.filter(prod => prod.nome === "Projeto F");
const somarPrecoProdF = Number(produtoProdFFiltrado.reduce((total, item) => total + item.orcamento, 0).toFixed(2));
// Projeto G
const produtoProdGFiltrado = dados4.filter(prod => prod.nome === "Projeto G");
const somarPrecoProdG = Number(produtoProdGFiltrado.reduce((total, item) => total + item.orcamento, 0).toFixed(2));
// Projeto H
const produtoProdHFiltrado = dados4.filter(prod => prod.nome === "Projeto H");
const somarPrecoProdH = Number(produtoProdHFiltrado.reduce((total, item) => total + item.orcamento, 0).toFixed(2));
// Projeto I
const produtoProdIFiltrado = dados4.filter(prod => prod.nome === "Projeto I");
const somarPrecoProdI = Number(produtoProdIFiltrado.reduce((total, item) => total + item.orcamento, 0).toFixed(2));
// Projeto J
const produtoProdJFiltrado = dados4.filter(prod => prod.nome === "Projeto J");
const somarPrecoProdJ = Number(produtoProdJFiltrado.reduce((total, item) => total + item.orcamento, 0).toFixed(2));

export {somarPrecoProdA, somarPrecoProdB, somarPrecoProdC, somarPrecoProdD, somarPrecoProdE, somarPrecoProdF, somarPrecoProdG, somarPrecoProdH, somarPrecoProdI, somarPrecoProdJ};

// Filtrar por Tipo de Fabricante, Preço e Quantidade - 
// Fabricante X 
const fabricanteXFiltrado = dados4.filter(fab => fab.fabricante === "Fabricante X");
const somarPrecoFabX = Number(fabricanteXFiltrado.reduce((total, item) => total + item.orcamento, 0).toFixed(2));
// Fabricante Y
const fabricanteYFiltrado = dados4.filter(fab => fab.fabricante === "Fabricante Y");
const somarPrecoFabY = Number(fabricanteYFiltrado.reduce((total, item) => total + item.orcamento, 0).toFixed(2));
// Fabricante Z
const fabricanteZFiltrado = dados4.filter(fab => fab.fabricante === "Fabricante Z");
const somarPrecoFabZ = Number(fabricanteZFiltrado.reduce((total, item) => total + item.orcamento, 0).toFixed(2));

export {somarPrecoFabX, somarPrecoFabY, somarPrecoFabZ};

// Filtrar Cores, Preço e Quantidade - 
// Cor Vermelho
const corVermelhoFiltrado = dados4.filter(cor => cor.cor === "Vermelho");
const somarPrecoCorVerm = Number(corVermelhoFiltrado.reduce((total, item) => total + item.orcamento, 0).toFixed(2));
// Cor Azul
const corAzulFiltrado = dados4.filter(cor => cor.cor === "Azul");
const somarPrecoCorAzul = Number(corAzulFiltrado.reduce((total, item) => total + item.orcamento, 0).toFixed(2));
// Cor Verde
const corVerdeFiltrado = dados4.filter(cor => cor.cor === "Verde");
const somarPrecoCorVerde = Number(corVerdeFiltrado.reduce((total, item) => total + item.orcamento, 0).toFixed(2));
// Cor Preto
const corPretoFiltrado = dados4.filter(cor => cor.cor === "Preto");
const somarPrecoCorPreto = Number(corPretoFiltrado.reduce((total, item) => total + item.orcamento, 0).toFixed(2));
// Cor Branco
const corBrancoFiltrado = dados4.filter(cor => cor.cor === "Branco");
const somarPrecoCorBranco = Number(corBrancoFiltrado.reduce((total, item) => total + item.orcamento, 0).toFixed(2));
// Cor Cinza
const corCinzaFiltrado = dados4.filter(cor => cor.cor === "Cinza");
const somarPrecoCorCinza = Number(corCinzaFiltrado.reduce((total, item) => total + item.orcamento, 0).toFixed(2));

export {somarPrecoCorVerm, somarPrecoCorAzul, somarPrecoCorVerde, somarPrecoCorPreto, somarPrecoCorBranco, somarPrecoCorCinza};

// Filtrar Anos, Preço e Quantidade - 
// 2021
const ano2021Filtrado = dados4.filter(ano => ano.ano_inicio === 2021);
const somarPrecoAno2021 = Number(ano2021Filtrado.reduce((total, item) => total + item.orcamento, 0).toFixed(2));
// 2022
const ano2022Filtrado = dados4.filter(ano => ano.ano_inicio === 2022);
const somarPrecoAno2022 = Number(ano2022Filtrado.reduce((total, item) => total + item.orcamento, 0).toFixed(2));
// 2023
const ano2023Filtrado = dados4.filter(ano => ano.ano_inicio === 2023);
const somarPrecoAno2023 = Number(ano2023Filtrado.reduce((total, item) => total + item.orcamento, 0).toFixed(2));

export {somarPrecoAno2021, somarPrecoAno2022, somarPrecoAno2023};

// Filtrar Meses, Preço e Quantidade - 
// Mes 1 Janeiro
const mesJanFiltrado = dados4.filter(mes => mes.mes_inicio === 1);
const somarPrecoMesJan = Number(mesJanFiltrado.reduce((total, item) => total + item.orcamento, 0).toFixed(2));

// Mes 2 Fevereiro
const mesFevFiltrado = dados4.filter(mes => mes.mes_inicio === 2);
const somarPrecoMesFev = Number(mesFevFiltrado.reduce((total, item) => total + item.orcamento, 0).toFixed(2));

// Mes 3 Março
const mesMarFiltrado = dados4.filter(mes => mes.mes_inicio === 3);
const somarPrecoMesMar = Number(mesMarFiltrado.reduce((total, item) => total + item.orcamento, 0).toFixed(2));

// Mes 4 Abril
const mesAbrFiltrado = dados4.filter(mes => mes.mes_inicio === 4);
const somarPrecoMesAbr = Number(mesAbrFiltrado.reduce((total, item) => total + item.orcamento, 0).toFixed(2));

// Mes 5 Maio
const mesMaiFiltrado = dados4.filter(mes => mes.mes_inicio === 5);
const somarPrecoMesMai = Number(mesMaiFiltrado.reduce((total, item) => total + item.orcamento, 0).toFixed(2));

// Mes 6 Junho
const mesJunFiltrado = dados4.filter(mes => mes.mes_inicio === 6);
const somarPrecoMesJun = Number(mesJunFiltrado.reduce((total, item) => total + item.orcamento, 0).toFixed(2));

// Mes 7 Julho
const mesJulFiltrado = dados4.filter(mes => mes.mes_inicio === 7);
const somarPrecoMesJul = Number(mesJulFiltrado.reduce((total, item) => total + item.orcamento, 0).toFixed(2));

// Mes 8 Agosto
const mesAgoFiltrado = dados4.filter(mes => mes.mes_inicio === 8);
const somarPrecoMesAgo = Number(mesAgoFiltrado.reduce((total, item) => total + item.orcamento, 0).toFixed(2));

// Mes 9 Setembro
const mesSetFiltrado = dados4.filter(mes => mes.mes_inicio === 9);
const somarPrecoMesSet = Number(mesSetFiltrado.reduce((total, item) => total + item.orcamento, 0).toFixed(2));

// Mes 10 Outubro
const mesOutFiltrado = dados4.filter(mes => mes.mes_inicio === 10);
const somarPrecoMesOut = Number(mesOutFiltrado.reduce((total, item) => total + item.orcamento, 0).toFixed(2));

export {somarPrecoMesJan, somarPrecoMesFev, somarPrecoMesMar, somarPrecoMesAbr, somarPrecoMesMai, somarPrecoMesJun, somarPrecoMesJul, somarPrecoMesAgo, somarPrecoMesSet, somarPrecoMesOut};

// Filtrar por Tipo de Departamento, Preço e Quantidade - 
// Departamento Dev
const departamentoDevFiltrado = dados4.filter(dep => dep.departamento === "Desenvolvimento");
const somarPrecoDev = Number(departamentoDevFiltrado.reduce((total, item) => total + item.orcamento, 0).toFixed(2));
// Departamento Pesquisa
const departamentoPesquisaFiltrado = dados4.filter(dep => dep.departamento === "Pesquisa");
const somarPrecoPesquisa = Number(departamentoPesquisaFiltrado.reduce((total, item) => total + item.orcamento, 0).toFixed(2));
// Departamento Ti
const departamentoTiFiltrado = dados4.filter(dep => dep.departamento === "TI");
const somarPrecoTi = Number(departamentoTiFiltrado.reduce((total, item) => total + item.orcamento, 0).toFixed(2));
// Departamento Mkt
const departamentoMktFiltrado = dados4.filter(dep => dep.departamento === "Marketing");
const somarPrecoMkt = Number(departamentoMktFiltrado.reduce((total, item) => total + item.orcamento, 0).toFixed(2));
// Departamento Rh
const departamentoRhFiltrado = dados4.filter(dep => dep.departamento === "RH");
const somarPrecoRh = Number(departamentoRhFiltrado.reduce((total, item) => total + item.orcamento, 0).toFixed(2));

export {somarPrecoDev, somarPrecoPesquisa, somarPrecoTi, somarPrecoMkt, somarPrecoRh};

interface FiltroGraf3 {
    name: string;
    data: number[];
}

function FiltroGrafico3(data: any[], grupo: string, preencher: string, valorCampo: string): FiltroGraf3[] {
    const agrupamento: { [key: string]: { [key: string]: number } } = {};
    const preencherValor: Set<string> = new Set();

// Coleta todos os valores únicos da chave preencher
data.forEach(item => {
    preencherValor.add(item[preencher]);
});

// Mapeia os valores de preencher para os índices
const preencherLista = Array.from(preencherValor);
const preencherIndexMap: { [key: string]: number } = {};
preencherLista.forEach((value, index) => {
    preencherIndexMap[value] = index;
});

// Inicializa dados de cada grupo com 0.00 para todos os valores preencher e popula com os preços ou quantidades
data.forEach(item => {
    const grupoKey = item[grupo].toString();
    const PreenchimentoKey = item[preencher].toString();

    if (!agrupamento[grupoKey]) {
    agrupamento[grupoKey] = {};
    preencherLista.forEach(value => {
        agrupamento[grupoKey][value] = 0.00;
    });
    }
    agrupamento[grupoKey][PreenchimentoKey] += item[valorCampo];
});

// Converte os dados para o formato FiltroGraf3[] e garante duas casas decimais
const result: FiltroGraf3[] = Object.keys(agrupamento).map(grupoKey => {
    return {
    name: grupoKey,
    data: preencherLista.map(PreenchimentoKey => parseFloat(agrupamento[grupoKey][PreenchimentoKey].toFixed(2)))
    };
});

return result;
}

// Exemplos de uso
// const resultadoFiltro = FiltroGrafico3(dados4, 'fabricante', 'categoria', 'quantidade');
// console.log(resultadoFiltro);


export {FiltroGrafico3};
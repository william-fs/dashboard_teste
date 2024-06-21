import dados1 from "../../dados/fonte_de_dados_1.json";

// Valores usados nos campos 
const valores = [
    {valor: "id", conteudo: "ID"},
    {valor: "nome", conteudo: "Produto"},
    {valor: "categoria", conteudo: "Categoria"},
    {valor: "fabricante", conteudo: "Fabricante"},
    {valor: "cor", conteudo: "Cor"},
    {valor: "ano", conteudo: "Ano"},
    {valor: "mes", conteudo: "Mês"}
]
export {valores};

// Filtro: conteúdo duplicados 
const ids = Array.from(new Set(dados1.map(dado => dado.id)));
const produtos = Array.from(new Set(dados1.map(dado => dado.nome)));
const categorias = Array.from(new Set(dados1.map(dado => dado.categoria)));
const fabricantes = Array.from(new Set(dados1.map(dado => dado.fabricante)));
const cores = Array.from(new Set(dados1.map(dado => dado.cor)));
const anos = Array.from(new Set(dados1.map(dado => dado.ano)));
const meses = Array.from(new Set(dados1.map(dado => dado.mes)));


export {ids, produtos, categorias, fabricantes, cores, anos, meses};

// Filtrar por Tipo de dado para extrair os valores de soma - 
// Filtrar por Tipo de Categoria, Preço e ID - 
// ID 1
const id1Filtrado = dados1.filter(id => id.id === 1);
const somarId1 = Number(id1Filtrado.reduce((total, item) => total + item.preco, 0).toFixed(2));
const somarQuantidadeId1 = id1Filtrado.reduce((total, item) => total + item.quantidade, 0);
// ID 2
const id2Filtrado = dados1.filter(id => id.id === 2);
const somarId2 = Number(id2Filtrado.reduce((total, item) => total + item.preco, 0).toFixed(2));
const somarQuantidadeId2 = id2Filtrado.reduce((total, item) => total + item.quantidade, 0);
// ID 3
const id3Filtrado = dados1.filter(id => id.id === 3);
const somarId3 = Number(id3Filtrado.reduce((total, item) => total + item.preco, 0).toFixed(2));
const somarQuantidadeId3 = id3Filtrado.reduce((total, item) => total + item.quantidade, 0);
// ID 4
const id4Filtrado = dados1.filter(id => id.id === 4);
const somarId4 = Number(id4Filtrado.reduce((total, item) => total + item.preco, 0).toFixed(2));
const somarQuantidadeId4 = id4Filtrado.reduce((total, item) => total + item.quantidade, 0);
// ID 5
const id5Filtrado = dados1.filter(id => id.id === 5);
const somarId5 = Number(id5Filtrado.reduce((total, item) => total + item.preco, 0).toFixed(2));
const somarQuantidadeId5 = id5Filtrado.reduce((total, item) => total + item.quantidade, 0);
// ID 6
const id6Filtrado = dados1.filter(id => id.id === 6);
const somarId6 = Number(id6Filtrado.reduce((total, item) => total + item.preco, 0).toFixed(2));
const somarQuantidadeId6 = id6Filtrado.reduce((total, item) => total + item.quantidade, 0);
// ID 7
const id7Filtrado = dados1.filter(id => id.id === 7);
const somarId7 = Number(id7Filtrado.reduce((total, item) => total + item.preco, 0).toFixed(2));
const somarQuantidadeId7 = id7Filtrado.reduce((total, item) => total + item.quantidade, 0);
// ID 8
const id8Filtrado = dados1.filter(id => id.id === 8);
const somarId8 = Number(id8Filtrado.reduce((total, item) => total + item.preco, 0).toFixed(2));
const somarQuantidadeId8 = id8Filtrado.reduce((total, item) => total + item.quantidade, 0);
// ID 9
const id9Filtrado = dados1.filter(id => id.id === 9);
const somarId9 = Number(id9Filtrado.reduce((total, item) => total + item.preco, 0).toFixed(2));
const somarQuantidadeId9 = id9Filtrado.reduce((total, item) => total + item.quantidade, 0);
// ID 10
const id10Filtrado = dados1.filter(id => id.id === 10);
const somarId10 = Number(id10Filtrado.reduce((total, item) => total + item.preco, 0).toFixed(2));
const somarQuantidadeId10 = id10Filtrado.reduce((total, item) => total + item.quantidade, 0);

export {somarId1, somarId2, somarId3, somarId4, somarId5, somarId6, somarId7, somarId8, somarId9, somarId10};
export {somarQuantidadeId1, somarQuantidadeId2, somarQuantidadeId3, somarQuantidadeId4, somarQuantidadeId5, somarQuantidadeId6, somarQuantidadeId7, somarQuantidadeId8, somarQuantidadeId9, somarQuantidadeId10};

// Filtrar por Tipo de Categoria, Preço e Produto - 
// Produto A
const produtoProdAFiltrado = dados1.filter(prod => prod.nome === "Produto A");
const somarPrecoProdA = Number(produtoProdAFiltrado.reduce((total, item) => total + item.preco, 0).toFixed(2));
const somarQuantidadeProdA = produtoProdAFiltrado.reduce((total, item) => total + item.quantidade, 0);
// Produto B
const produtoProdBFiltrado = dados1.filter(prod => prod.nome === "Produto B");
const somarPrecoProdB = Number(produtoProdBFiltrado.reduce((total, item) => total + item.preco, 0).toFixed(2));
const somarQuantidadeProdB = produtoProdBFiltrado.reduce((total, item) => total + item.quantidade, 0);
// Produto C
const produtoProdCFiltrado = dados1.filter(prod => prod.nome === "Produto C");
const somarPrecoProdC = Number(produtoProdCFiltrado.reduce((total, item) => total + item.preco, 0).toFixed(2));
const somarQuantidadeProdC = produtoProdCFiltrado.reduce((total, item) => total + item.quantidade, 0);
// Produto D
const produtoProdDFiltrado = dados1.filter(prod => prod.nome === "Produto D");
const somarPrecoProdD = Number(produtoProdDFiltrado.reduce((total, item) => total + item.preco, 0).toFixed(2));
const somarQuantidadeProdD = produtoProdDFiltrado.reduce((total, item) => total + item.quantidade, 0);
// Produto E
const produtoProdEFiltrado = dados1.filter(prod => prod.nome === "Produto E");
const somarPrecoProdE = Number(produtoProdEFiltrado.reduce((total, item) => total + item.preco, 0).toFixed(2));
const somarQuantidadeProdE = produtoProdEFiltrado.reduce((total, item) => total + item.quantidade, 0);
// Produto F
const produtoProdFFiltrado = dados1.filter(prod => prod.nome === "Produto F");
const somarPrecoProdF = Number(produtoProdFFiltrado.reduce((total, item) => total + item.preco, 0).toFixed(2));
const somarQuantidadeProdF = produtoProdFFiltrado.reduce((total, item) => total + item.quantidade, 0);
// Produto G
const produtoProdGFiltrado = dados1.filter(prod => prod.nome === "Produto G");
const somarPrecoProdG = Number(produtoProdGFiltrado.reduce((total, item) => total + item.preco, 0).toFixed(2));
const somarQuantidadeProdG = produtoProdGFiltrado.reduce((total, item) => total + item.quantidade, 0);
// Produto H
const produtoProdHFiltrado = dados1.filter(prod => prod.nome === "Produto H");
const somarPrecoProdH = Number(produtoProdHFiltrado.reduce((total, item) => total + item.preco, 0).toFixed(2));
const somarQuantidadeProdH = produtoProdHFiltrado.reduce((total, item) => total + item.quantidade, 0);
// Produto I
const produtoProdIFiltrado = dados1.filter(prod => prod.nome === "Produto I");
const somarPrecoProdI = Number(produtoProdIFiltrado.reduce((total, item) => total + item.preco, 0).toFixed(2));
const somarQuantidadeProdI = produtoProdIFiltrado.reduce((total, item) => total + item.quantidade, 0);
// Produto J
const produtoProdJFiltrado = dados1.filter(prod => prod.nome === "Produto J");
const somarPrecoProdJ = Number(produtoProdJFiltrado.reduce((total, item) => total + item.preco, 0).toFixed(2));
const somarQuantidadeProdJ = produtoProdJFiltrado.reduce((total, item) => total + item.quantidade, 0);

export {somarPrecoProdA, somarPrecoProdB, somarPrecoProdC, somarPrecoProdD, somarPrecoProdE, somarPrecoProdF, somarPrecoProdG, somarPrecoProdH, somarPrecoProdI, somarPrecoProdJ};
export {somarQuantidadeProdA, somarQuantidadeProdB, somarQuantidadeProdC, somarQuantidadeProdD, somarQuantidadeProdE, somarQuantidadeProdF, somarQuantidadeProdG, somarQuantidadeProdH, somarQuantidadeProdI, somarQuantidadeProdJ};

// Filtrar por Tipo de Categoria, Preço e Quantidade - 
// Eletronicos 
const categoriaEletFiltrado = dados1.filter(cat => cat.categoria === "Eletrônicos");
const somarPrecoCatElet = Number(categoriaEletFiltrado.reduce((total, item) => total + item.preco, 0).toFixed(2));
const somarQuantidadeCatElet = categoriaEletFiltrado.reduce((total, item) => total + item.quantidade, 0);
// Móveis 
const categoriaMovFiltrado = dados1.filter(cat => cat.categoria === "Móveis");
const somarPrecoCatMov = Number(categoriaMovFiltrado.reduce((total, item) => total + item.preco, 0).toFixed(2));
const somarQuantidadeCatMov = categoriaMovFiltrado.reduce((total, item) => total + item.quantidade, 0);
// Roupas
const categoriaRouFiltrado = dados1.filter(cat => cat.categoria === "Roupas");
const somarPrecoCatRou = Number(categoriaRouFiltrado.reduce((total, item) => total + item.preco, 0).toFixed(2));
const somarQuantidadeCatRou = categoriaRouFiltrado.reduce((total, item) => total + item.quantidade, 0);
// Livros
const categoriaLivFiltrado = dados1.filter(cat => cat.categoria === "Livros");
const somarPrecoCatLiv = Number(categoriaLivFiltrado.reduce((total, item) => total + item.preco, 0).toFixed(2));
const somarQuantidadeCatLiv = categoriaLivFiltrado.reduce((total, item) => total + item.quantidade, 0);
// Beleza
const categoriaBelFiltrado = dados1.filter(cat => cat.categoria === "Beleza");
const somarPrecoCatBel = Number(categoriaBelFiltrado.reduce((total, item) => total + item.preco, 0).toFixed(2));
const somarQuantidadeCatBel = categoriaBelFiltrado.reduce((total, item) => total + item.quantidade, 0);

export {somarPrecoCatElet, somarPrecoCatMov, somarPrecoCatRou, somarPrecoCatLiv, somarPrecoCatBel}
export {somarQuantidadeCatElet, somarQuantidadeCatMov, somarQuantidadeCatRou, somarQuantidadeCatLiv, somarQuantidadeCatBel}

// Filtrar por Tipo de Fabricante, Preço e Quantidade - 
// Fabricante X 
const fabricanteXFiltrado = dados1.filter(fab => fab.fabricante === "Fabricante X");
const somarPrecoFabX = Number(fabricanteXFiltrado.reduce((total, item) => total + item.preco, 0).toFixed(2));
const somarQuantidadeFabX = fabricanteXFiltrado.reduce((total, item) => total + item.quantidade, 0);
// Fabricante Y
const fabricanteYFiltrado = dados1.filter(fab => fab.fabricante === "Fabricante Y");
const somarPrecoFabY = Number(fabricanteYFiltrado.reduce((total, item) => total + item.preco, 0).toFixed(2));
const somarQuantidadeFabY = fabricanteYFiltrado.reduce((total, item) => total + item.quantidade, 0);
// Fabricante Z
const fabricanteZFiltrado = dados1.filter(fab => fab.fabricante === "Fabricante Z");
const somarPrecoFabZ = Number(fabricanteZFiltrado.reduce((total, item) => total + item.preco, 0).toFixed(2));
const somarQuantidadeFabZ = fabricanteZFiltrado.reduce((total, item) => total + item.quantidade, 0);

export {somarPrecoFabX, somarPrecoFabY, somarPrecoFabZ};
export {somarQuantidadeFabX, somarQuantidadeFabY, somarQuantidadeFabZ};

// Filtrar Cores, Preço e Quantidade - 
// Cor Vermelho
const corVermelhoFiltrado = dados1.filter(cor => cor.cor === "Vermelho");
const somarPrecoCorVerm = Number(corVermelhoFiltrado.reduce((total, item) => total + item.preco, 0).toFixed(2));
const somarQuantidadeCorVerm = corVermelhoFiltrado.reduce((total, item) => total + item.quantidade, 0);
// Cor Azul
const corAzulFiltrado = dados1.filter(cor => cor.cor === "Azul");
const somarPrecoCorAzul = Number(corAzulFiltrado.reduce((total, item) => total + item.preco, 0).toFixed(2));
const somarQuantidadeCorAzul = corAzulFiltrado.reduce((total, item) => total + item.quantidade, 0);
// Cor Verde
const corVerdeFiltrado = dados1.filter(cor => cor.cor === "Verde");
const somarPrecoCorVerde = Number(corVerdeFiltrado.reduce((total, item) => total + item.preco, 0).toFixed(2));
const somarQuantidadeCorVerde = corVerdeFiltrado.reduce((total, item) => total + item.quantidade, 0);
// Cor Preto
const corPretoFiltrado = dados1.filter(cor => cor.cor === "Preto");
const somarPrecoCorPreto = Number(corPretoFiltrado.reduce((total, item) => total + item.preco, 0).toFixed(2));
const somarQuantidadeCorPreto = corPretoFiltrado.reduce((total, item) => total + item.quantidade, 0);
// Cor Branco
const corBrancoFiltrado = dados1.filter(cor => cor.cor === "Branco");
const somarPrecoCorBranco = Number(corBrancoFiltrado.reduce((total, item) => total + item.preco, 0).toFixed(2));
const somarQuantidadeCorBranco = corPretoFiltrado.reduce((total, item) => total + item.quantidade, 0);
// Cor Cinza
const corCinzaFiltrado = dados1.filter(cor => cor.cor === "Cinza");
const somarPrecoCorCinza = Number(corCinzaFiltrado.reduce((total, item) => total + item.preco, 0).toFixed(2));
const somarQuantidadeCorCinza = corPretoFiltrado.reduce((total, item) => total + item.quantidade, 0);

export {somarPrecoCorVerm, somarPrecoCorAzul, somarPrecoCorVerde, somarPrecoCorPreto, somarPrecoCorBranco, somarPrecoCorCinza};
export {somarQuantidadeCorVerm, somarQuantidadeCorAzul, somarQuantidadeCorVerde, somarQuantidadeCorPreto, somarQuantidadeCorBranco, somarQuantidadeCorCinza};

// Filtrar Anos, Preço e Quantidade - 
// 2021
const ano2021Filtrado = dados1.filter(ano => ano.ano === 2021);
const somarPrecoAno2021 = Number(ano2021Filtrado.reduce((total, item) => total + item.preco, 0).toFixed(2));
const somarQuantidadeAno2021 = ano2021Filtrado.reduce((total, item) => total + item.quantidade, 0);
// 2022
const ano2022Filtrado = dados1.filter(ano => ano.ano === 2022);
const somarPrecoAno2022 = Number(ano2022Filtrado.reduce((total, item) => total + item.preco, 0).toFixed(2));
const somarQuantidadeAno2022 = ano2022Filtrado.reduce((total, item) => total + item.quantidade, 0);
// 2023
const ano2023Filtrado = dados1.filter(ano => ano.ano === 2023);
const somarPrecoAno2023 = Number(ano2023Filtrado.reduce((total, item) => total + item.preco, 0).toFixed(2));
const somarQuantidadeAno2023 = ano2023Filtrado.reduce((total, item) => total + item.quantidade, 0);

export {somarPrecoAno2021, somarPrecoAno2022, somarPrecoAno2023};
export {somarQuantidadeAno2021, somarQuantidadeAno2022, somarQuantidadeAno2023};

// Filtrar Meses, Preço e Quantidade - 
// Mes 1 Janeiro
const mesJanFiltrado = dados1.filter(mes => mes.mes === 1);
const somarPrecoMesJan = Number(mesJanFiltrado.reduce((total, item) => total + item.preco, 0).toFixed(2));
const somarQuantidadeMesJan = mesJanFiltrado.reduce((total, item) => total + item.quantidade, 0);

// Mes 2 Fevereiro
const mesFevFiltrado = dados1.filter(mes => mes.mes === 2);
const somarPrecoMesFev = Number(mesFevFiltrado.reduce((total, item) => total + item.preco, 0).toFixed(2));
const somarQuantidadeMesFev = mesFevFiltrado.reduce((total, item) => total + item.quantidade, 0);

// Mes 3 Março
const mesMarFiltrado = dados1.filter(mes => mes.mes === 3);
const somarPrecoMesMar = Number(mesMarFiltrado.reduce((total, item) => total + item.preco, 0).toFixed(2));
const somarQuantidadeMesMar = mesMarFiltrado.reduce((total, item) => total + item.quantidade, 0);

// Mes 4 Abril
const mesAbrFiltrado = dados1.filter(mes => mes.mes === 4);
const somarPrecoMesAbr = Number(mesAbrFiltrado.reduce((total, item) => total + item.preco, 0).toFixed(2));
const somarQuantidadeMesAbr = mesAbrFiltrado.reduce((total, item) => total + item.quantidade, 0);

// Mes 5 Maio
const mesMaiFiltrado = dados1.filter(mes => mes.mes === 5);
const somarPrecoMesMai = Number(mesMaiFiltrado.reduce((total, item) => total + item.preco, 0).toFixed(2));
const somarQuantidadeMesMai = mesMaiFiltrado.reduce((total, item) => total + item.quantidade, 0);

// Mes 6 Junho
const mesJunFiltrado = dados1.filter(mes => mes.mes === 6);
const somarPrecoMesJun = Number(mesJunFiltrado.reduce((total, item) => total + item.preco, 0).toFixed(2));
const somarQuantidadeMesJun = mesJunFiltrado.reduce((total, item) => total + item.quantidade, 0);

// Mes 7 Julho
const mesJulFiltrado = dados1.filter(mes => mes.mes === 7);
const somarPrecoMesJul = Number(mesJulFiltrado.reduce((total, item) => total + item.preco, 0).toFixed(2));
const somarQuantidadeMesJul = mesJulFiltrado.reduce((total, item) => total + item.quantidade, 0);

// Mes 8 Agosto
const mesAgoFiltrado = dados1.filter(mes => mes.mes === 8);
const somarPrecoMesAgo = Number(mesAgoFiltrado.reduce((total, item) => total + item.preco, 0).toFixed(2));
const somarQuantidadeMesAgo = mesAgoFiltrado.reduce((total, item) => total + item.quantidade, 0);

// Mes 9 Setembro
const mesSetFiltrado = dados1.filter(mes => mes.mes === 9);
const somarPrecoMesSet = Number(mesSetFiltrado.reduce((total, item) => total + item.preco, 0).toFixed(2));
const somarQuantidadeMesSet = mesSetFiltrado.reduce((total, item) => total + item.quantidade, 0);

// Mes 10 Outubro
const mesOutFiltrado = dados1.filter(mes => mes.mes === 10);
const somarPrecoMesOut = Number(mesOutFiltrado.reduce((total, item) => total + item.preco, 0).toFixed(2));
const somarQuantidadeMesOut = mesOutFiltrado.reduce((total, item) => total + item.quantidade, 0);

export {somarPrecoMesJan, somarPrecoMesFev, somarPrecoMesMar, somarPrecoMesAbr, somarPrecoMesMai, somarPrecoMesJun, somarPrecoMesJul, somarPrecoMesAgo, somarPrecoMesSet, somarPrecoMesOut};
export {somarQuantidadeMesJan, somarQuantidadeMesFev, somarQuantidadeMesMar, somarQuantidadeMesAbr, somarQuantidadeMesMai, somarQuantidadeMesJun, somarQuantidadeMesJul, somarQuantidadeMesAgo, somarQuantidadeMesSet, somarQuantidadeMesOut};



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
// const resultadoFiltro = FiltroGrafico3(dados1, 'fabricante', 'categoria', 'quantidade');
// console.log(resultadoFiltro);


export {FiltroGrafico3};
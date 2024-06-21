import dados3 from "../../dados/fonte_de_dados_3.json";

// Valores usados nos campos 
const valores = [
    {valor: "id", conteudo: "ID"},
    {valor: "nome", conteudo: "Nome"},
    {valor: "departamento", conteudo: "Departamento"},
    {valor: "fabricante", conteudo: "Fabricante"},
    {valor: "cor", conteudo: "Cor"},
    {valor: "ano", conteudo: "Ano"},
    {valor: "mes", conteudo: "Mês"},
    {valor: "idade", conteudo: "Idade"},
]
export {valores};

// Filtro: conteúdo duplicados 
const ids = Array.from(new Set(dados3.map(dado => dado.id)));
const idades = Array.from(new Set(dados3.map(dado => dado.idade)));
const nomes = Array.from(new Set(dados3.map(dado => dado.nome)));
const departamentos = Array.from(new Set(dados3.map(dado => dado.departamento)));
const fabricantes = Array.from(new Set(dados3.map(dado => dado.fabricante)));
const cores = Array.from(new Set(dados3.map(dado => dado.cor)));
const anos:(number[] | string[]) = Array.from(new Set(dados3.map(dado => dado.ano)));
const meses:(number[] | string[]) = Array.from(new Set(dados3.map(dado => dado.mes)));


export {ids, nomes, departamentos, fabricantes, cores, anos, meses, idades};

// Filtrar por Tipo de dado para extrair os valores de soma - 
// Filtrar por Tipo de Categoria, Preço e ID - 
// ID 1
const id1Filtrado = dados3.filter(id => id.id === 1);
const somarId1 = Number(id1Filtrado.reduce((total, item) => total + item.salario, 0).toFixed(2));
const somarQuantidadeId1 = id1Filtrado.reduce((total, item) => total + item.anos_experiencia, 0);
// ID 2
const id2Filtrado = dados3.filter(id => id.id === 2);
const somarId2 = Number(id2Filtrado.reduce((total, item) => total + item.salario, 0).toFixed(2));
const somarQuantidadeId2 = id2Filtrado.reduce((total, item) => total + item.anos_experiencia, 0);
// ID 3
const id3Filtrado = dados3.filter(id => id.id === 3);
const somarId3 = Number(id3Filtrado.reduce((total, item) => total + item.salario, 0).toFixed(2));
const somarQuantidadeId3 = id3Filtrado.reduce((total, item) => total + item.anos_experiencia, 0);
// ID 4
const id4Filtrado = dados3.filter(id => id.id === 4);
const somarId4 = Number(id4Filtrado.reduce((total, item) => total + item.salario, 0).toFixed(2));
const somarQuantidadeId4 = id4Filtrado.reduce((total, item) => total + item.anos_experiencia, 0);
// ID 5
const id5Filtrado = dados3.filter(id => id.id === 5);
const somarId5 = Number(id5Filtrado.reduce((total, item) => total + item.salario, 0).toFixed(2));
const somarQuantidadeId5 = id5Filtrado.reduce((total, item) => total + item.anos_experiencia, 0);
// ID 6
const id6Filtrado = dados3.filter(id => id.id === 6);
const somarId6 = Number(id6Filtrado.reduce((total, item) => total + item.salario, 0).toFixed(2));
const somarQuantidadeId6 = id6Filtrado.reduce((total, item) => total + item.anos_experiencia, 0);
// ID 7
const id7Filtrado = dados3.filter(id => id.id === 7);
const somarId7 = Number(id7Filtrado.reduce((total, item) => total + item.salario, 0).toFixed(2));
const somarQuantidadeId7 = id7Filtrado.reduce((total, item) => total + item.anos_experiencia, 0);
// ID 8
const id8Filtrado = dados3.filter(id => id.id === 8);
const somarId8 = Number(id8Filtrado.reduce((total, item) => total + item.salario, 0).toFixed(2));
const somarQuantidadeId8 = id8Filtrado.reduce((total, item) => total + item.anos_experiencia, 0);
// ID 9
const id9Filtrado = dados3.filter(id => id.id === 9);
const somarId9 = Number(id9Filtrado.reduce((total, item) => total + item.salario, 0).toFixed(2));
const somarQuantidadeId9 = id9Filtrado.reduce((total, item) => total + item.anos_experiencia, 0);
// ID 10
const id10Filtrado = dados3.filter(id => id.id === 10);
const somarId10 = Number(id10Filtrado.reduce((total, item) => total + item.salario, 0).toFixed(2));
const somarQuantidadeId10 = id10Filtrado.reduce((total, item) => total + item.anos_experiencia, 0);

export {somarId1, somarId2, somarId3, somarId4, somarId5, somarId6, somarId7, somarId8, somarId9, somarId10};
export {somarQuantidadeId1, somarQuantidadeId2, somarQuantidadeId3, somarQuantidadeId4, somarQuantidadeId5, somarQuantidadeId6, somarQuantidadeId7, somarQuantidadeId8, somarQuantidadeId9, somarQuantidadeId10};

// Filtrar por Tipo de Idade, Preço e Produto - 
// IDADE1
const idade1Filtrado = dados3.filter(prod => prod.idade === 30);
const somarPrecoIdade1 = Number(idade1Filtrado.reduce((total, item) => total + item.salario, 0).toFixed(2));
const somarQuantidadeIdade1 = idade1Filtrado.reduce((total, item) => total + item.anos_experiencia, 0);
// IDADE2
const idade2Filtrado = dados3.filter(prod => prod.idade === 32);
const somarPrecoIdade2 = Number(idade2Filtrado.reduce((total, item) => total + item.salario, 0).toFixed(2));
const somarQuantidadeIdade2 = idade2Filtrado.reduce((total, item) => total + item.anos_experiencia, 0);
// IDADE3
const idade3Filtrado = dados3.filter(prod => prod.idade === 28);
const somarPrecoIdade3 = Number(idade3Filtrado.reduce((total, item) => total + item.salario, 0).toFixed(2));
const somarQuantidadeIdade3 = idade3Filtrado.reduce((total, item) => total + item.anos_experiencia, 0);
// IDADE4
const idade4Filtrado = dados3.filter(prod => prod.idade === 35);
const somarPrecoIdade4 = Number(idade4Filtrado.reduce((total, item) => total + item.salario, 0).toFixed(2));
const somarQuantidadeIdade4 = idade4Filtrado.reduce((total, item) => total + item.anos_experiencia, 0);
// IDADE5
const idade5Filtrado = dados3.filter(prod => prod.idade === 25);
const somarPrecoIdade5 = Number(idade5Filtrado.reduce((total, item) => total + item.salario, 0).toFixed(2));
const somarQuantidadeIdade5 = idade5Filtrado.reduce((total, item) => total + item.anos_experiencia, 0);
// IDADE6
const idade6Filtrado = dados3.filter(prod => prod.idade === 27);
const somarPrecoIdade6 = Number(idade6Filtrado.reduce((total, item) => total + item.salario, 0).toFixed(2));
const somarQuantidadeIdade6 = idade6Filtrado.reduce((total, item) => total + item.anos_experiencia, 0);
// IDADE7
const idade7Filtrado = dados3.filter(prod => prod.idade === 29);
const somarPrecoIdade7 = Number(idade7Filtrado.reduce((total, item) => total + item.salario, 0).toFixed(2));
const somarQuantidadeIdade7 = idade7Filtrado.reduce((total, item) => total + item.anos_experiencia, 0);
// IDADE8
const idade8Filtrado = dados3.filter(prod => prod.idade === 31);
const somarPrecoIdade8 = Number(idade8Filtrado.reduce((total, item) => total + item.salario, 0).toFixed(2));
const somarQuantidadeIdade8 = idade8Filtrado.reduce((total, item) => total + item.anos_experiencia, 0);
// IDADE9
const idade9Filtrado = dados3.filter(prod => prod.idade === 26);
const somarPrecoIdade9 = Number(idade9Filtrado.reduce((total, item) => total + item.salario, 0).toFixed(2));
const somarQuantidadeIdade9 = idade9Filtrado.reduce((total, item) => total + item.anos_experiencia, 0);
// IDADE10
const idade10Filtrado = dados3.filter(prod => prod.idade === 33);
const somarPrecoIdade10 = Number(idade10Filtrado.reduce((total, item) => total + item.salario, 0).toFixed(2));
const somarQuantidadeIdade10 = idade10Filtrado.reduce((total, item) => total + item.anos_experiencia, 0);

export {somarPrecoIdade1, somarPrecoIdade2, somarPrecoIdade3, somarPrecoIdade4, somarPrecoIdade5, somarPrecoIdade6, somarPrecoIdade7, somarPrecoIdade8, somarPrecoIdade9, somarPrecoIdade10};
export {somarQuantidadeIdade1, somarQuantidadeIdade2, somarQuantidadeIdade3, somarQuantidadeIdade4, somarQuantidadeIdade5, somarQuantidadeIdade6, somarQuantidadeIdade7, somarQuantidadeIdade8, somarQuantidadeIdade9, somarQuantidadeIdade10};

// Filtrar por Tipo de Categoria, Preço e Produto - 
// NOME 1
const nome1Filtrado = dados3.filter(prod => prod.nome === "Alice");
const somarPrecoNome1 = Number(nome1Filtrado.reduce((total, item) => total + item.salario, 0).toFixed(2));
const somarQuantidadeNome1 = nome1Filtrado.reduce((total, item) => total + item.anos_experiencia, 0);
// NOME2
const nome2Filtrado = dados3.filter(prod => prod.nome === "Bob");
const somarPrecoNome2 = Number(nome2Filtrado.reduce((total, item) => total + item.salario, 0).toFixed(2));
const somarQuantidadeNome2 = nome2Filtrado.reduce((total, item) => total + item.anos_experiencia, 0);
// NOME3
const nome3Filtrado = dados3.filter(prod => prod.nome === "Carol");
const somarPrecoNome3 = Number(nome3Filtrado.reduce((total, item) => total + item.salario, 0).toFixed(2));
const somarQuantidadeNome3 = nome3Filtrado.reduce((total, item) => total + item.anos_experiencia, 0);
// NOME4
const nome4Filtrado = dados3.filter(prod => prod.nome === "David");
const somarPrecoNome4 = Number(nome4Filtrado.reduce((total, item) => total + item.salario, 0).toFixed(2));
const somarQuantidadeNome4 = nome4Filtrado.reduce((total, item) => total + item.anos_experiencia, 0);
// NOME5
const nome5Filtrado = dados3.filter(prod => prod.nome === "Eve");
const somarPrecoNome5 = Number(nome5Filtrado.reduce((total, item) => total + item.salario, 0).toFixed(2));
const somarQuantidadeNome5 = nome5Filtrado.reduce((total, item) => total + item.anos_experiencia, 0);
// NOME6
const nome6Filtrado = dados3.filter(prod => prod.nome === "Frank");
const somarPrecoNome6 = Number(nome6Filtrado.reduce((total, item) => total + item.salario, 0).toFixed(2));
const somarQuantidadeNome6 = nome6Filtrado.reduce((total, item) => total + item.anos_experiencia, 0);
// NOME7
const nome7Filtrado = dados3.filter(prod => prod.nome === "Grace");
const somarPrecoNome7 = Number(nome7Filtrado.reduce((total, item) => total + item.salario, 0).toFixed(2));
const somarQuantidadeNome7 = nome7Filtrado.reduce((total, item) => total + item.anos_experiencia, 0);
// NOME8
const nome8Filtrado = dados3.filter(prod => prod.nome === "Hank");
const somarPrecoNome8 = Number(nome8Filtrado.reduce((total, item) => total + item.salario, 0).toFixed(2));
const somarQuantidadeNome8 = nome8Filtrado.reduce((total, item) => total + item.anos_experiencia, 0);
// NOME9
const nome9Filtrado = dados3.filter(prod => prod.nome === "Ivy");
const somarPrecoNome9 = Number(nome9Filtrado.reduce((total, item) => total + item.salario, 0).toFixed(2));
const somarQuantidadeNome9 = nome9Filtrado.reduce((total, item) => total + item.anos_experiencia, 0);
// NOME10
const nome10Filtrado = dados3.filter(prod => prod.nome === "Jack");
const somarPrecoNome10 = Number(nome10Filtrado.reduce((total, item) => total + item.salario, 0).toFixed(2));
const somarQuantidadeNome10 = nome10Filtrado.reduce((total, item) => total + item.anos_experiencia, 0);

export {somarPrecoNome1, somarPrecoNome2, somarPrecoNome3, somarPrecoNome4, somarPrecoNome5, somarPrecoNome6, somarPrecoNome7, somarPrecoNome8, somarPrecoNome9, somarPrecoNome10};
export {somarQuantidadeNome1, somarQuantidadeNome2, somarQuantidadeNome3, somarQuantidadeNome4, somarQuantidadeNome5, somarQuantidadeNome6, somarQuantidadeNome7, somarQuantidadeNome8, somarQuantidadeNome9, somarQuantidadeNome10};

// Filtrar por Tipo de Departamentos, Preço e Quantidade - 
// DepartamentoVendas 
const departamentoVendasFiltrado = dados3.filter(dep => dep.departamento === "Vendas");
const somarPrecoDepartamentoVendas = Number(departamentoVendasFiltrado.reduce((total, item) => total + item.salario, 0).toFixed(2));
const somarQuantidadeDepartamentoVendas = departamentoVendasFiltrado.reduce((total, item) => total + item.anos_experiencia, 0);
// DepartamentoTi 
const departamentoTiFiltrado = dados3.filter(dep => dep.departamento === "TI");
const somarPrecoDepartamentoTi = Number(departamentoTiFiltrado.reduce((total, item) => total + item.salario, 0).toFixed(2));
const somarQuantidadeDepartamentoTi = departamentoTiFiltrado.reduce((total, item) => total + item.anos_experiencia, 0);
// DepartamentoMkt
const departamentoMktFiltrado = dados3.filter(dep => dep.departamento === "Marketing");
const somarPrecoDepartamentoMkt = Number(departamentoMktFiltrado.reduce((total, item) => total + item.salario, 0).toFixed(2));
const somarQuantidadeDepartamentoMkt = departamentoMktFiltrado.reduce((total, item) => total + item.anos_experiencia, 0);
// DepartamentoRh
const departamentoRhFiltrado = dados3.filter(dep => dep.departamento === "RH");
const somarPrecoDepartamentoRh = Number(departamentoRhFiltrado.reduce((total, item) => total + item.salario, 0).toFixed(2));
const somarQuantidadeDepartamentoRh = departamentoRhFiltrado.reduce((total, item) => total + item.anos_experiencia, 0);
// DepartamentoAdm
const departamentoAdmFiltrado = dados3.filter(dep => dep.departamento === "Administração");
const somarPrecoDepartamentoAdm = Number(departamentoAdmFiltrado.reduce((total, item) => total + item.salario, 0).toFixed(2));
const somarQuantidadeDepartamentoAdm = departamentoAdmFiltrado.reduce((total, item) => total + item.anos_experiencia, 0);

export {somarPrecoDepartamentoVendas, somarPrecoDepartamentoTi, somarPrecoDepartamentoMkt, somarPrecoDepartamentoRh, somarPrecoDepartamentoAdm};
export {somarQuantidadeDepartamentoVendas, somarQuantidadeDepartamentoTi, somarQuantidadeDepartamentoMkt, somarQuantidadeDepartamentoRh, somarQuantidadeDepartamentoAdm};

// Filtrar por Tipo de Fabricante, Preço e Quantidade - 
// Fabricante X 
const fabricanteXFiltrado = dados3.filter(fab => fab.fabricante === "Fabricante X");
const somarPrecoFabX = Number(fabricanteXFiltrado.reduce((total, item) => total + item.salario, 0).toFixed(2));
const somarQuantidadeFabX = fabricanteXFiltrado.reduce((total, item) => total + item.anos_experiencia, 0);
// Fabricante Y
const fabricanteYFiltrado = dados3.filter(fab => fab.fabricante === "Fabricante Y");
const somarPrecoFabY = Number(fabricanteYFiltrado.reduce((total, item) => total + item.salario, 0).toFixed(2));
const somarQuantidadeFabY = fabricanteYFiltrado.reduce((total, item) => total + item.anos_experiencia, 0);
// Fabricante Z
const fabricanteZFiltrado = dados3.filter(fab => fab.fabricante === "Fabricante Z");
const somarPrecoFabZ = Number(fabricanteZFiltrado.reduce((total, item) => total + item.salario, 0).toFixed(2));
const somarQuantidadeFabZ = fabricanteZFiltrado.reduce((total, item) => total + item.anos_experiencia, 0);

export {somarPrecoFabX, somarPrecoFabY, somarPrecoFabZ};
export {somarQuantidadeFabX, somarQuantidadeFabY, somarQuantidadeFabZ};

// Filtrar Cores, Preço e Quantidade - 
// Cor Vermelho
const corVermelhoFiltrado = dados3.filter(cor => cor.cor === "Vermelho");
const somarPrecoCorVerm = Number(corVermelhoFiltrado.reduce((total, item) => total + item.salario, 0).toFixed(2));
const somarQuantidadeCorVerm = corVermelhoFiltrado.reduce((total, item) => total + item.anos_experiencia, 0);
// Cor Azul
const corAzulFiltrado = dados3.filter(cor => cor.cor === "Azul");
const somarPrecoCorAzul = Number(corAzulFiltrado.reduce((total, item) => total + item.salario, 0).toFixed(2));
const somarQuantidadeCorAzul = corAzulFiltrado.reduce((total, item) => total + item.anos_experiencia, 0);
// Cor Verde
const corVerdeFiltrado = dados3.filter(cor => cor.cor === "Verde");
const somarPrecoCorVerde = Number(corVerdeFiltrado.reduce((total, item) => total + item.salario, 0).toFixed(2));
const somarQuantidadeCorVerde = corVerdeFiltrado.reduce((total, item) => total + item.anos_experiencia, 0);
// Cor Preto
const corPretoFiltrado = dados3.filter(cor => cor.cor === "Preto");
const somarPrecoCorPreto = Number(corPretoFiltrado.reduce((total, item) => total + item.salario, 0).toFixed(2));
const somarQuantidadeCorPreto = corPretoFiltrado.reduce((total, item) => total + item.anos_experiencia, 0);
// Cor Branco
const corBrancoFiltrado = dados3.filter(cor => cor.cor === "Branco");
const somarPrecoCorBranco = Number(corBrancoFiltrado.reduce((total, item) => total + item.salario, 0).toFixed(2));
const somarQuantidadeCorBranco = corPretoFiltrado.reduce((total, item) => total + item.anos_experiencia, 0);
// Cor Cinza
const corCinzaFiltrado = dados3.filter(cor => cor.cor === "Cinza");
const somarPrecoCorCinza = Number(corCinzaFiltrado.reduce((total, item) => total + item.salario, 0).toFixed(2));
const somarQuantidadeCorCinza = corPretoFiltrado.reduce((total, item) => total + item.anos_experiencia, 0);

export {somarPrecoCorVerm, somarPrecoCorAzul, somarPrecoCorVerde, somarPrecoCorPreto, somarPrecoCorBranco, somarPrecoCorCinza};
export {somarQuantidadeCorVerm, somarQuantidadeCorAzul, somarQuantidadeCorVerde, somarQuantidadeCorPreto, somarQuantidadeCorBranco, somarQuantidadeCorCinza};

// Filtrar Anos, Preço e Quantidade - 
// 2021
const ano2021Filtrado = dados3.filter(ano => ano.ano === 2021);
const somarPrecoAno2021 = Number(ano2021Filtrado.reduce((total, item) => total + item.salario, 0).toFixed(2));
const somarQuantidadeAno2021 = ano2021Filtrado.reduce((total, item) => total + item.anos_experiencia, 0);
// 2022
const ano2022Filtrado = dados3.filter(ano => ano.ano === 2022);
const somarPrecoAno2022 = Number(ano2022Filtrado.reduce((total, item) => total + item.salario, 0).toFixed(2));
const somarQuantidadeAno2022 = ano2022Filtrado.reduce((total, item) => total + item.anos_experiencia, 0);
// 2023
const ano2023Filtrado = dados3.filter(ano => ano.ano === 2023);
const somarPrecoAno2023 = Number(ano2023Filtrado.reduce((total, item) => total + item.salario, 0).toFixed(2));
const somarQuantidadeAno2023 = ano2023Filtrado.reduce((total, item) => total + item.anos_experiencia, 0);

export {somarPrecoAno2021, somarPrecoAno2022, somarPrecoAno2023};
export {somarQuantidadeAno2021, somarQuantidadeAno2022, somarQuantidadeAno2023};

// Filtrar Meses, Preço e Quantidade - 
// Mes 1 Janeiro
const mesJanFiltrado = dados3.filter(mes => mes.mes === 1);
const somarPrecoMesJan = Number(mesJanFiltrado.reduce((total, item) => total + item.salario, 0).toFixed(2));
const somarQuantidadeMesJan = mesJanFiltrado.reduce((total, item) => total + item.anos_experiencia, 0);

// Mes 2 Fevereiro
const mesFevFiltrado = dados3.filter(mes => mes.mes === 2);
const somarPrecoMesFev = Number(mesFevFiltrado.reduce((total, item) => total + item.salario, 0).toFixed(2));
const somarQuantidadeMesFev = mesFevFiltrado.reduce((total, item) => total + item.anos_experiencia, 0);

// Mes 3 Março
const mesMarFiltrado = dados3.filter(mes => mes.mes === 3);
const somarPrecoMesMar = Number(mesMarFiltrado.reduce((total, item) => total + item.salario, 0).toFixed(2));
const somarQuantidadeMesMar = mesMarFiltrado.reduce((total, item) => total + item.anos_experiencia, 0);

// Mes 4 Abril
const mesAbrFiltrado = dados3.filter(mes => mes.mes === 4);
const somarPrecoMesAbr = Number(mesAbrFiltrado.reduce((total, item) => total + item.salario, 0).toFixed(2));
const somarQuantidadeMesAbr = mesAbrFiltrado.reduce((total, item) => total + item.anos_experiencia, 0);

// Mes 5 Maio
const mesMaiFiltrado = dados3.filter(mes => mes.mes === 5);
const somarPrecoMesMai = Number(mesMaiFiltrado.reduce((total, item) => total + item.salario, 0).toFixed(2));
const somarQuantidadeMesMai = mesMaiFiltrado.reduce((total, item) => total + item.anos_experiencia, 0);

// Mes 6 Junho
const mesJunFiltrado = dados3.filter(mes => mes.mes === 6);
const somarPrecoMesJun = Number(mesJunFiltrado.reduce((total, item) => total + item.salario, 0).toFixed(2));
const somarQuantidadeMesJun = mesJunFiltrado.reduce((total, item) => total + item.anos_experiencia, 0);

// Mes 7 Julho
const mesJulFiltrado = dados3.filter(mes => mes.mes === 7);
const somarPrecoMesJul = Number(mesJulFiltrado.reduce((total, item) => total + item.salario, 0).toFixed(2));
const somarQuantidadeMesJul = mesJulFiltrado.reduce((total, item) => total + item.anos_experiencia, 0);

// Mes 8 Agosto
const mesAgoFiltrado = dados3.filter(mes => mes.mes === 8);
const somarPrecoMesAgo = Number(mesAgoFiltrado.reduce((total, item) => total + item.salario, 0).toFixed(2));
const somarQuantidadeMesAgo = mesAgoFiltrado.reduce((total, item) => total + item.anos_experiencia, 0);

// Mes 9 Setembro
const mesSetFiltrado = dados3.filter(mes => mes.mes === 9);
const somarPrecoMesSet = Number(mesSetFiltrado.reduce((total, item) => total + item.salario, 0).toFixed(2));
const somarQuantidadeMesSet = mesSetFiltrado.reduce((total, item) => total + item.anos_experiencia, 0);

// Mes 10 Outubro
const mesOutFiltrado = dados3.filter(mes => mes.mes === 10);
const somarPrecoMesOut = Number(mesOutFiltrado.reduce((total, item) => total + item.salario, 0).toFixed(2));
const somarQuantidadeMesOut = mesOutFiltrado.reduce((total, item) => total + item.anos_experiencia, 0);

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
// const resultadoFiltro = FiltroGrafico3(dados3, 'fabricante', 'categoria', 'quantidade');
// console.log(resultadoFiltro);


export {FiltroGrafico3};
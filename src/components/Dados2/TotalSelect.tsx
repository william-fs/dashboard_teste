import dados2 from "../../dados/fonte_de_dados_2.json";

// Valores usados nos campos 
const valores = [
    {valor: "id", conteudo: "ID"},
    {valor: "data", conteudo: "Data"},
    {valor: "cliente", conteudo: "Cliente"},
    {valor: "categoria", conteudo: "Categoria"},
    {valor: "fabricante", conteudo: "Fabricante"},
    {valor: "cor", conteudo: "Cor"},
    {valor: "ano", conteudo: "Ano"},
    {valor: "mes", conteudo: "Mês"}
]
export {valores};

// Filtro: conteúdo duplicados 
const ids = Array.from(new Set(dados2.map(dado => dado.id)));
const datas = Array.from(new Set(dados2.map(dado => dado.data)));
const clientes = Array.from(new Set(dados2.map(dado => dado.cliente)));
const categorias = Array.from(new Set(dados2.map(dado => dado.categoria)));
const fabricantes = Array.from(new Set(dados2.map(dado => dado.fabricante)));
const cores = Array.from(new Set(dados2.map(dado => dado.cor)));
const anos:(number[] | string[]) = Array.from(new Set(dados2.map(dado => dado.ano)));
const meses:(number[] | string[]) = Array.from(new Set(dados2.map(dado => dado.mes)));


export {ids, datas, clientes, categorias, fabricantes, cores, anos, meses};

// Filtrar por Tipo de dado para extrair os valores de soma - 
// IDs
// ID 101
const id101Filtrado = dados2.filter(id => id.id === 101);
const somarValorTotalId101 = Number(id101Filtrado.reduce((total, item) => total + item.valor_total, 0).toFixed(2));
const somarItemId101 = id101Filtrado.reduce((total, item) => total + item.itens, 0);
// ID 102
const id102Filtrado = dados2.filter(id => id.id === 102);
const somarValorTotalId102 = Number(id102Filtrado.reduce((total, item) => total + item.valor_total, 0).toFixed(2));
const somarItemId102 = id102Filtrado.reduce((total, item) => total + item.itens, 0);
// ID 103
const id103Filtrado = dados2.filter(id => id.id === 103);
const somarValorTotalId103 = Number(id103Filtrado.reduce((total, item) => total + item.valor_total, 0).toFixed(2));
const somarItemId103 = id103Filtrado.reduce((total, item) => total + item.itens, 0);
// ID 104
const id104Filtrado = dados2.filter(id => id.id === 104);
const somarValorTotalId104 = Number(id104Filtrado.reduce((total, item) => total + item.valor_total, 0).toFixed(2));
const somarItemId104 = id103Filtrado.reduce((total, item) => total + item.itens, 0);
// ID 105
const id105Filtrado = dados2.filter(id => id.id === 105);
const somarValorTotalId105 = Number(id105Filtrado.reduce((total, item) => total + item.valor_total, 0).toFixed(2));
const somarItemId105 = id105Filtrado.reduce((total, item) => total + item.itens, 0);
// ID 106
const id106Filtrado = dados2.filter(id => id.id === 106);
const somarValorTotalId106 = Number(id106Filtrado.reduce((total, item) => total + item.valor_total, 0).toFixed(2));
const somarItemId106 = id106Filtrado.reduce((total, item) => total + item.itens, 0);
// ID 107
const id107Filtrado = dados2.filter(id => id.id === 107);
const somarValorTotalId107 = Number(id107Filtrado.reduce((total, item) => total + item.valor_total, 0).toFixed(2));
const somarItemId107 = id107Filtrado.reduce((total, item) => total + item.itens, 0);
// ID 108
const id108Filtrado = dados2.filter(id => id.id === 108);
const somarValorTotalId108 = Number(id108Filtrado.reduce((total, item) => total + item.valor_total, 0).toFixed(2));
const somarItemId108 = id108Filtrado.reduce((total, item) => total + item.itens, 0);
// ID 109
const id109Filtrado = dados2.filter(id => id.id === 109);
const somarValorTotalId109 = Number(id109Filtrado.reduce((total, item) => total + item.valor_total, 0).toFixed(2));
const somarItemId109 = id109Filtrado.reduce((total, item) => total + item.itens, 0);
// ID 110
const id110Filtrado = dados2.filter(id => id.id === 110);
const somarValorTotalId110 = Number(id110Filtrado.reduce((total, item) => total + item.valor_total, 0).toFixed(2));
const somarItemId110 = id110Filtrado.reduce((total, item) => total + item.itens, 0);

export {somarValorTotalId101, somarValorTotalId102, somarValorTotalId103, somarValorTotalId104, somarValorTotalId105, somarValorTotalId106, somarValorTotalId107, somarValorTotalId108, somarValorTotalId109, somarValorTotalId110};
export {somarItemId101, somarItemId102, somarItemId103, somarItemId104, somarItemId105, somarItemId106, somarItemId107, somarItemId108, somarItemId109, somarItemId110};

// Data 
// data1
const data1Filtrado = dados2.filter(dat => dat.data === "2024-06-01");
const somarValorTotalData1 = Number(data1Filtrado.reduce((total, item) => total + item.valor_total, 0).toFixed(2));
const somarItemData1 = data1Filtrado.reduce((total, item) => total + item.itens, 0);
// data2
const data2Filtrado = dados2.filter(dat => dat.data === "2024-06-02");
const somarValorTotalData2 = Number(data2Filtrado.reduce((total, item) => total + item.valor_total, 0).toFixed(2));
const somarItemData2 = data2Filtrado.reduce((total, item) => total + item.itens, 0);
// data3
const data3Filtrado = dados2.filter(dat => dat.data === "2024-06-03");
const somarValorTotalData3 = Number(data3Filtrado.reduce((total, item) => total + item.valor_total, 0).toFixed(2));
const somarItemData3 = data3Filtrado.reduce((total, item) => total + item.itens, 0);
// data4
const data4Filtrado = dados2.filter(dat => dat.data === "2024-06-04");
const somarValorTotalData4 = Number(data4Filtrado.reduce((total, item) => total + item.valor_total, 0).toFixed(2));
const somarItemData4 = data4Filtrado.reduce((total, item) => total + item.itens, 0);
// data5
const data5Filtrado = dados2.filter(dat => dat.data === "2024-06-05");
const somarValorTotalData5 = Number(data5Filtrado.reduce((total, item) => total + item.valor_total, 0).toFixed(2));
const somarItemData5 = data5Filtrado.reduce((total, item) => total + item.itens, 0);
// data6
const data6Filtrado = dados2.filter(dat => dat.data === "2024-06-06");
const somarValorTotalData6 = Number(data6Filtrado.reduce((total, item) => total + item.valor_total, 0).toFixed(2));
const somarItemData6 = data6Filtrado.reduce((total, item) => total + item.itens, 0);
// data7
const data7Filtrado = dados2.filter(dat => dat.data === "2024-06-07");
const somarValorTotalData7 = Number(data7Filtrado.reduce((total, item) => total + item.valor_total, 0).toFixed(2));
const somarItemData7 = data7Filtrado.reduce((total, item) => total + item.itens, 0);
// data8
const data8Filtrado = dados2.filter(dat => dat.data === "2024-06-08");
const somarValorTotalData8 = Number(data8Filtrado.reduce((total, item) => total + item.valor_total, 0).toFixed(2));
const somarItemData8 = data8Filtrado.reduce((total, item) => total + item.itens, 0);
// data9
const data9Filtrado = dados2.filter(dat => dat.data === "2024-06-09");
const somarValorTotalData9 = Number(data9Filtrado.reduce((total, item) => total + item.valor_total, 0).toFixed(2));
const somarItemData9 = data9Filtrado.reduce((total, item) => total + item.itens, 0);
// data10
const data10Filtrado = dados2.filter(dat => dat.data === "2024-06-10");
const somarValorTotalData10 = Number(data10Filtrado.reduce((total, item) => total + item.valor_total, 0).toFixed(2));
const somarItemData10 = data10Filtrado.reduce((total, item) => total + item.itens, 0);

export {somarValorTotalData1, somarValorTotalData2, somarValorTotalData3, somarValorTotalData4, somarValorTotalData5, somarValorTotalData6, somarValorTotalData7, somarValorTotalData8, somarValorTotalData9, somarValorTotalData10};
export {somarItemData1, somarItemData2, somarItemData3, somarItemData4, somarItemData5, somarItemData6, somarItemData7, somarItemData8, somarItemData9, somarItemData10};

// Filtrar por Tipo de Categoria, Valor_total e Itens - 
// Clientes
// CLIENTE A 
const clienteAFiltrado = dados2.filter(cat => cat.cliente === "Cliente A");
const somarValorTotalClitenteA = Number(clienteAFiltrado.reduce((total, item) => total + item.valor_total, 0).toFixed(2));
const somarItemClitenteA = clienteAFiltrado.reduce((total, item) => total + item.itens, 0);
// CLIENTEB 
const clienteBFiltrado = dados2.filter(cat => cat.cliente === "Cliente B");
const somarValorTotalClitenteB = Number(clienteBFiltrado.reduce((total, item) => total + item.valor_total, 0).toFixed(2));
const somarItemClitenteB = clienteBFiltrado.reduce((total, item) => total + item.itens, 0);
// ClienteC 
const clienteCFiltrado = dados2.filter(cat => cat.cliente === "Cliente C");
const somarValorTotalClitenteC = Number(clienteCFiltrado.reduce((total, item) => total + item.valor_total, 0).toFixed(2));
const somarItemClitenteC = clienteCFiltrado.reduce((total, item) => total + item.itens, 0);
// ClienteD 
const clienteDFiltrado = dados2.filter(cat => cat.cliente === "Cliente D");
const somarValorTotalClitenteD = Number(clienteDFiltrado.reduce((total, item) => total + item.valor_total, 0).toFixed(2));
const somarItemClitenteD = clienteCFiltrado.reduce((total, item) => total + item.itens, 0);
// ClienteE 
const clienteEFiltrado = dados2.filter(cat => cat.cliente === "Cliente E");
const somarValorTotalClitenteE = Number(clienteEFiltrado.reduce((total, item) => total + item.valor_total, 0).toFixed(2));
const somarItemClitenteE = clienteEFiltrado.reduce((total, item) => total + item.itens, 0);
// ClienteF 
const clienteFFiltrado = dados2.filter(cat => cat.cliente === "Cliente F");
const somarValorTotalClitenteF = Number(clienteFFiltrado.reduce((total, item) => total + item.valor_total, 0).toFixed(2));
const somarItemClitenteF = clienteFFiltrado.reduce((total, item) => total + item.itens, 0);
// ClienteG 
const clienteGFiltrado = dados2.filter(cat => cat.cliente === "Cliente G");
const somarValorTotalClitenteG = Number(clienteGFiltrado.reduce((total, item) => total + item.valor_total, 0).toFixed(2));
const somarItemClitenteG = clienteGFiltrado.reduce((total, item) => total + item.itens, 0);
// ClienteH 
const clienteHFiltrado = dados2.filter(cat => cat.cliente === "Cliente H");
const somarValorTotalClitenteH = Number(clienteHFiltrado.reduce((total, item) => total + item.valor_total, 0).toFixed(2));
const somarItemClitenteH = clienteHFiltrado.reduce((total, item) => total + item.itens, 0);
// ClienteI 
const clienteIFiltrado = dados2.filter(cat => cat.cliente === "Cliente I");
const somarValorTotalClitenteI = Number(clienteIFiltrado.reduce((total, item) => total + item.valor_total, 0).toFixed(2));
const somarItemClitenteI = clienteIFiltrado.reduce((total, item) => total + item.itens, 0);
// ClienteJ 
const clienteJFiltrado = dados2.filter(cat => cat.cliente === "Cliente J");
const somarValorTotalClitenteJ = Number(clienteJFiltrado.reduce((total, item) => total + item.valor_total, 0).toFixed(2));
const somarItemClitenteJ = clienteJFiltrado.reduce((total, item) => total + item.itens, 0);

export {somarValorTotalClitenteA, somarValorTotalClitenteB, somarValorTotalClitenteC, somarValorTotalClitenteD, somarValorTotalClitenteE, somarValorTotalClitenteF, somarValorTotalClitenteG, somarValorTotalClitenteH, somarValorTotalClitenteI, somarValorTotalClitenteJ};
export {somarItemClitenteA, somarItemClitenteB, somarItemClitenteC, somarItemClitenteD, somarItemClitenteE, somarItemClitenteF, somarItemClitenteG, somarItemClitenteH, somarItemClitenteI, somarItemClitenteJ};

export {}

// Filtrar por Tipo de Categoria, Valor_total e Itens - 
// Eletronicos 
const categoriaEletFiltrado = dados2.filter(cat => cat.categoria === "Eletrônicos");
const somarValorTotalCatElet = Number(categoriaEletFiltrado.reduce((total, item) => total + item.valor_total, 0).toFixed(2));
const somarItemCatElet = categoriaEletFiltrado.reduce((total, item) => total + item.itens, 0);
// Móveis 
const categoriaMovFiltrado = dados2.filter(cat => cat.categoria === "Móveis");
const somarValorTotalCatMov = Number(categoriaMovFiltrado.reduce((total, item) => total + item.valor_total, 0).toFixed(2));
const somarItemCatMov = categoriaMovFiltrado.reduce((total, item) => total + item.itens, 0);
// Roupas
const categoriaRouFiltrado = dados2.filter(cat => cat.categoria === "Roupas");
const somarValorTotalCatRou = Number(categoriaRouFiltrado.reduce((total, item) => total + item.valor_total, 0).toFixed(2));
const somarItemCatRou = categoriaRouFiltrado.reduce((total, item) => total + item.itens, 0);
// Livros
const categoriaLivFiltrado = dados2.filter(cat => cat.categoria === "Livros");
const somarValorTotalCatLiv = Number(categoriaLivFiltrado.reduce((total, item) => total + item.valor_total, 0).toFixed(2));
const somarItemCatLiv = categoriaLivFiltrado.reduce((total, item) => total + item.itens, 0);
// Beleza
const categoriaBelFiltrado = dados2.filter(cat => cat.categoria === "Beleza");
const somarValorTotalCatBel = Number(categoriaBelFiltrado.reduce((total, item) => total + item.valor_total, 0).toFixed(2));
const somarItemCatBel = categoriaBelFiltrado.reduce((total, item) => total + item.itens, 0);

export {somarValorTotalCatElet, somarValorTotalCatMov, somarValorTotalCatRou, somarValorTotalCatLiv, somarValorTotalCatBel}
export {somarItemCatElet, somarItemCatMov, somarItemCatRou, somarItemCatLiv, somarItemCatBel}

// Filtrar por Tipo de Fabricante, Preço e Item - 
// Fabricante X 
const fabricanteXFiltrado = dados2.filter(fab => fab.fabricante === "Fabricante X");
const somarValorTotalFabX = Number(fabricanteXFiltrado.reduce((total, item) => total + item.valor_total, 0).toFixed(2));
const somarItemFabX = fabricanteXFiltrado.reduce((total, item) => total + item.itens, 0);
// Fabricante Y
const fabricanteYFiltrado = dados2.filter(fab => fab.fabricante === "Fabricante Y");
const somarValorTotalFabY = Number(fabricanteYFiltrado.reduce((total, item) => total + item.valor_total, 0).toFixed(2));
const somarItemFabY = fabricanteYFiltrado.reduce((total, item) => total + item.itens, 0);
// Fabricante Z
const fabricanteZFiltrado = dados2.filter(fab => fab.fabricante === "Fabricante Z");
const somarValorTotalFabZ = Number(fabricanteZFiltrado.reduce((total, item) => total + item.valor_total, 0).toFixed(2));
const somarItemFabZ = fabricanteZFiltrado.reduce((total, item) => total + item.itens, 0);

export {somarValorTotalFabX, somarValorTotalFabY, somarValorTotalFabZ};
export {somarItemFabX, somarItemFabY, somarItemFabZ};

// Filtrar Cores, Preço e Item - 
// Cor Vermelho
const corVermelhoFiltrado = dados2.filter(cor => cor.cor === "Vermelho");
const somarValorTotalCorVerm = Number(corVermelhoFiltrado.reduce((total, item) => total + item.valor_total, 0).toFixed(2));
const somarItemCorVerm = corVermelhoFiltrado.reduce((total, item) => total + item.itens, 0);
// Cor Azul
const corAzulFiltrado = dados2.filter(cor => cor.cor === "Azul");
const somarValorTotalCorAzul = Number(corAzulFiltrado.reduce((total, item) => total + item.valor_total, 0).toFixed(2));
const somarItemCorAzul = corAzulFiltrado.reduce((total, item) => total + item.itens, 0);
// Cor Verde
const corVerdeFiltrado = dados2.filter(cor => cor.cor === "Verde");
const somarValorTotalCorVerde = Number(corVerdeFiltrado.reduce((total, item) => total + item.valor_total, 0).toFixed(2));
const somarItemCorVerde = corVerdeFiltrado.reduce((total, item) => total + item.itens, 0);
// Cor Preto
const corPretoFiltrado = dados2.filter(cor => cor.cor === "Preto");
const somarValorTotalCorPreto = Number(corPretoFiltrado.reduce((total, item) => total + item.valor_total, 0).toFixed(2));
const somarItemCorPreto = corPretoFiltrado.reduce((total, item) => total + item.itens, 0);
// Cor Branco
const corBrancoFiltrado = dados2.filter(cor => cor.cor === "Branco");
const somarValorTotalCorBranco = Number(corBrancoFiltrado.reduce((total, item) => total + item.valor_total, 0).toFixed(2));
const somarItemCorBranco = corPretoFiltrado.reduce((total, item) => total + item.itens, 0);
// Cor Cinza
const corCinzaFiltrado = dados2.filter(cor => cor.cor === "Cinza");
const somarValorTotalCorCinza = Number(corCinzaFiltrado.reduce((total, item) => total + item.valor_total, 0).toFixed(2));
const somarItemCorCinza = corPretoFiltrado.reduce((total, item) => total + item.itens, 0);

export {somarValorTotalCorVerm, somarValorTotalCorAzul, somarValorTotalCorVerde, somarValorTotalCorPreto, somarValorTotalCorBranco, somarValorTotalCorCinza};
export {somarItemCorVerm, somarItemCorAzul, somarItemCorVerde, somarItemCorPreto, somarItemCorBranco, somarItemCorCinza};

// Filtrar Anos, Preço e Item - 
// 2024
const ano2024Filtrado = dados2.filter(ano => ano.ano === 2024);
const somarValorTotalAno2024 = Number(ano2024Filtrado.reduce((total, item) => total + item.valor_total, 0).toFixed(2));
const somarItemAno2024 = ano2024Filtrado.reduce((total, item) => total + item.itens, 0);

export {somarValorTotalAno2024};
export {somarItemAno2024};

// Filtrar Meses, Preço e Item - 

// Mes 6 Junho
const mesJunFiltrado = dados2.filter(mes => mes.mes === 6);
const somarValorTotalMesJun = Number(mesJunFiltrado.reduce((total, item) => total + item.valor_total, 0).toFixed(2));
const somarItemMesJun = mesJunFiltrado.reduce((total, item) => total + item.itens, 0);


export {somarValorTotalMesJun};
export {somarItemMesJun};



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

// Inicializa dados de cada grupo com 0.00 para todos os valores preencher e popula com os preços ou Items
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

// Converte os dados para o formato Series[] e garante duas casas decimais
const result: FiltroGraf3[] = Object.keys(agrupamento).map(grupoKey => {
    return {
    name: grupoKey,
    data: preencherLista.map(PreenchimentoKey => parseFloat(agrupamento[grupoKey][PreenchimentoKey].toFixed(2)))
    };
});

return result;
}

// Exemplos de uso
// const resultadoFiltro = FiltroGrafico3(dados2, 'fabricante', 'categoria', 'Item');
// console.log(resultadoFiltro);


export {FiltroGrafico3};
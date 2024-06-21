import dados5 from "../../dados/fonte_de_dados_5.json";

// Valores usados nos campos 
const valores = [
    {valor: "id", conteudo: "ID"},
    {valor: "data", conteudo: "Data"},
    {valor: "categoria", conteudo: "Categoria"},
    {valor: "fabricante", conteudo: "Fabricante"},
    {valor: "cor", conteudo: "Cor"},
    {valor: "ano", conteudo: "Ano"},
    {valor: "mes", conteudo: "Mês"},
    {valor: "conta_id", conteudo: "Conta ID"},
    {valor: "tipo", conteudo: "Tipo"},
]
export {valores};

// Filtro: conteúdo duplicados 
const ids = Array.from(new Set(dados5.map(dado => dado.id)));
const tipos = Array.from(new Set(dados5.map(dado => dado.tipo)));
const contaids = Array.from(new Set(dados5.map(dado => dado.conta_id)));
const datas = Array.from(new Set(dados5.map(dado => dado.data)));
const categorias = Array.from(new Set(dados5.map(dado => dado.categoria)));
const fabricantes = Array.from(new Set(dados5.map(dado => dado.fabricante)));
const cores = Array.from(new Set(dados5.map(dado => dado.cor)));
const anos:(number[] | string[]) = Array.from(new Set(dados5.map(dado => dado.ano)));
const meses:(number[] | string[]) = Array.from(new Set(dados5.map(dado => dado.mes)));


export {ids, datas, categorias, fabricantes, cores, anos, meses, contaids, tipos};

// TIPO
// DEPÓSITO
const tipoDepFiltrado = dados5.filter(tp => tp.tipo === "Depósito");
const somarValorTotalTipoDep = Number(tipoDepFiltrado.reduce((total, item) => total + item.valor, 0).toFixed(2));
// SAQUE
const tipoSacFiltrado = dados5.filter(tp => tp.tipo === "Saque");
const somarValorTotalTipoSac = Number(tipoSacFiltrado.reduce((total, item) => total + item.valor, 0).toFixed(2));
// TRANSFERENCIA
const tipoTransfFiltrado = dados5.filter(tp => tp.tipo === "Transferência");
const somarValorTotalTipoTransf = Number(tipoTransfFiltrado.reduce((total, item) => total + item.valor, 0).toFixed(2));

export {somarValorTotalTipoDep, somarValorTotalTipoSac, somarValorTotalTipoTransf};

// CONTAID
// ID 1
const contaId1Filtrado = dados5.filter(id => id.conta_id === 1);
const somarValorTotalcontaId1 = Number(contaId1Filtrado.reduce((total, item) => total + item.valor, 0).toFixed(2));
// ID 2
const contaId2Filtrado = dados5.filter(id => id.conta_id === 2);
const somarValorTotalcontaId2 = Number(contaId2Filtrado.reduce((total, item) => total + item.valor, 0).toFixed(2));
// ID 3
const contaId3Filtrado = dados5.filter(id => id.conta_id === 3);
const somarValorTotalcontaId3 = Number(contaId3Filtrado.reduce((total, item) => total + item.valor, 0).toFixed(2));
// ID 4
const contaId4Filtrado = dados5.filter(id => id.conta_id === 4);
const somarValorTotalcontaId4 = Number(contaId4Filtrado.reduce((total, item) => total + item.valor, 0).toFixed(2));
// ID 5
const contaId5Filtrado = dados5.filter(id => id.conta_id === 5);
const somarValorTotalcontaId5 = Number(contaId5Filtrado.reduce((total, item) => total + item.valor, 0).toFixed(2));
// ID 6
const contaId6Filtrado = dados5.filter(id => id.conta_id === 6);
const somarValorTotalcontaId6 = Number(contaId6Filtrado.reduce((total, item) => total + item.valor, 0).toFixed(2));
// ID 7
const contaId7Filtrado = dados5.filter(id => id.conta_id === 7);
const somarValorTotalcontaId7 = Number(contaId7Filtrado.reduce((total, item) => total + item.valor, 0).toFixed(2));
// ID 8
const contaId8Filtrado = dados5.filter(id => id.conta_id === 8);
const somarValorTotalcontaId8 = Number(contaId8Filtrado.reduce((total, item) => total + item.valor, 0).toFixed(2));
// ID 9
const contaId9Filtrado = dados5.filter(id => id.conta_id === 9);
const somarValorTotalcontaId9 = Number(contaId9Filtrado.reduce((total, item) => total + item.valor, 0).toFixed(2));
// ID 10
const contaId10Filtrado = dados5.filter(id => id.conta_id === 10);
const somarValorTotalcontaId10 = Number(contaId10Filtrado.reduce((total, item) => total + item.valor, 0).toFixed(2));

export {somarValorTotalcontaId1, somarValorTotalcontaId2, somarValorTotalcontaId3, somarValorTotalcontaId4, somarValorTotalcontaId5, somarValorTotalcontaId6, somarValorTotalcontaId7, somarValorTotalcontaId8, somarValorTotalcontaId9, somarValorTotalcontaId10};

// Filtrar por Tipo de dado para extrair os valores de soma - 
// IDs
// ID 101
const id101Filtrado = dados5.filter(id => id.id === 1001);
const somarValorTotalId101 = Number(id101Filtrado.reduce((total, item) => total + item.valor, 0).toFixed(2));
// ID 102
const id102Filtrado = dados5.filter(id => id.id === 1002);
const somarValorTotalId102 = Number(id102Filtrado.reduce((total, item) => total + item.valor, 0).toFixed(2));
// ID 103
const id103Filtrado = dados5.filter(id => id.id === 1003);
const somarValorTotalId103 = Number(id103Filtrado.reduce((total, item) => total + item.valor, 0).toFixed(2));
// ID 104
const id104Filtrado = dados5.filter(id => id.id === 1004);
const somarValorTotalId104 = Number(id104Filtrado.reduce((total, item) => total + item.valor, 0).toFixed(2));
// ID 105
const id105Filtrado = dados5.filter(id => id.id === 1005);
const somarValorTotalId105 = Number(id105Filtrado.reduce((total, item) => total + item.valor, 0).toFixed(2));
// ID 106
const id106Filtrado = dados5.filter(id => id.id === 1006);
const somarValorTotalId106 = Number(id106Filtrado.reduce((total, item) => total + item.valor, 0).toFixed(2));
// ID 107
const id107Filtrado = dados5.filter(id => id.id === 1007);
const somarValorTotalId107 = Number(id107Filtrado.reduce((total, item) => total + item.valor, 0).toFixed(2));
// ID 108
const id108Filtrado = dados5.filter(id => id.id === 1008);
const somarValorTotalId108 = Number(id108Filtrado.reduce((total, item) => total + item.valor, 0).toFixed(2));
// ID 109
const id109Filtrado = dados5.filter(id => id.id === 1009);
const somarValorTotalId109 = Number(id109Filtrado.reduce((total, item) => total + item.valor, 0).toFixed(2));
// ID 110
const id110Filtrado = dados5.filter(id => id.id === 1010);
const somarValorTotalId110 = Number(id110Filtrado.reduce((total, item) => total + item.valor, 0).toFixed(2));

export {somarValorTotalId101, somarValorTotalId102, somarValorTotalId103, somarValorTotalId104, somarValorTotalId105, somarValorTotalId106, somarValorTotalId107, somarValorTotalId108, somarValorTotalId109, somarValorTotalId110};

// Data 
// data1
const data1Filtrado = dados5.filter(dat => dat.data === "2024-06-01");
const somarValorTotalData1 = Number(data1Filtrado.reduce((total, item) => total + item.valor, 0).toFixed(2));
// data2
const data2Filtrado = dados5.filter(dat => dat.data === "2024-06-02");
const somarValorTotalData2 = Number(data2Filtrado.reduce((total, item) => total + item.valor, 0).toFixed(2));
// data3
const data3Filtrado = dados5.filter(dat => dat.data === "2024-06-03");
const somarValorTotalData3 = Number(data3Filtrado.reduce((total, item) => total + item.valor, 0).toFixed(2));
// data4
const data4Filtrado = dados5.filter(dat => dat.data === "2024-06-04");
const somarValorTotalData4 = Number(data4Filtrado.reduce((total, item) => total + item.valor, 0).toFixed(2));
// data5
const data5Filtrado = dados5.filter(dat => dat.data === "2024-06-05");
const somarValorTotalData5 = Number(data5Filtrado.reduce((total, item) => total + item.valor, 0).toFixed(2));
// data6
const data6Filtrado = dados5.filter(dat => dat.data === "2024-06-06");
const somarValorTotalData6 = Number(data6Filtrado.reduce((total, item) => total + item.valor, 0).toFixed(2));
// data7
const data7Filtrado = dados5.filter(dat => dat.data === "2024-06-07");
const somarValorTotalData7 = Number(data7Filtrado.reduce((total, item) => total + item.valor, 0).toFixed(2));
// data8
const data8Filtrado = dados5.filter(dat => dat.data === "2024-06-08");
const somarValorTotalData8 = Number(data8Filtrado.reduce((total, item) => total + item.valor, 0).toFixed(2));
// data9
const data9Filtrado = dados5.filter(dat => dat.data === "2024-06-09");
const somarValorTotalData9 = Number(data9Filtrado.reduce((total, item) => total + item.valor, 0).toFixed(2));
// data10
const data10Filtrado = dados5.filter(dat => dat.data === "2024-06-10");
const somarValorTotalData10 = Number(data10Filtrado.reduce((total, item) => total + item.valor, 0).toFixed(2));

export {somarValorTotalData1, somarValorTotalData2, somarValorTotalData3, somarValorTotalData4, somarValorTotalData5, somarValorTotalData6, somarValorTotalData7, somarValorTotalData8, somarValorTotalData9, somarValorTotalData10};


// Filtrar por Tipo de Categoria, Valor_total e Itens - 
// SALArio
const categoriaSalFiltrado = dados5.filter(cat => cat.categoria === "Salário");
const somarValorTotalCatSal = Number(categoriaSalFiltrado.reduce((total, item) => total + item.valor, 0).toFixed(2));
// ALUGUEL
const categoriaAluFiltrado = dados5.filter(cat => cat.categoria === "Aluguel");
const somarValorTotalCatAlu = Number(categoriaAluFiltrado.reduce((total, item) => total + item.valor, 0).toFixed(2));
// INVESTIMENTO
const categoriaInvFiltrado = dados5.filter(cat => cat.categoria === "Investimento");
const somarValorTotalCatInv = Number(categoriaInvFiltrado.reduce((total, item) => total + item.valor, 0).toFixed(2));


export {somarValorTotalCatSal, somarValorTotalCatAlu, somarValorTotalCatInv}

// Filtrar por Tipo de Fabricante, Preço e Item - 
// Fabricante X 
const fabricanteXFiltrado = dados5.filter(fab => fab.fabricante === "Fabricante X");
const somarValorTotalFabX = Number(fabricanteXFiltrado.reduce((total, item) => total + item.valor, 0).toFixed(2));
// Fabricante Y
const fabricanteYFiltrado = dados5.filter(fab => fab.fabricante === "Fabricante Y");
const somarValorTotalFabY = Number(fabricanteYFiltrado.reduce((total, item) => total + item.valor, 0).toFixed(2));
// Fabricante Z
const fabricanteZFiltrado = dados5.filter(fab => fab.fabricante === "Fabricante Z");
const somarValorTotalFabZ = Number(fabricanteZFiltrado.reduce((total, item) => total + item.valor, 0).toFixed(2));

export {somarValorTotalFabX, somarValorTotalFabY, somarValorTotalFabZ};

// Filtrar Cores, Preço e Item - 
// Cor Vermelho
const corVermelhoFiltrado = dados5.filter(cor => cor.cor === "Vermelho");
const somarValorTotalCorVerm = Number(corVermelhoFiltrado.reduce((total, item) => total + item.valor, 0).toFixed(2));
// Cor Azul
const corAzulFiltrado = dados5.filter(cor => cor.cor === "Azul");
const somarValorTotalCorAzul = Number(corAzulFiltrado.reduce((total, item) => total + item.valor, 0).toFixed(2));
// Cor Verde
const corVerdeFiltrado = dados5.filter(cor => cor.cor === "Verde");
const somarValorTotalCorVerde = Number(corVerdeFiltrado.reduce((total, item) => total + item.valor, 0).toFixed(2));
// Cor Preto
const corPretoFiltrado = dados5.filter(cor => cor.cor === "Preto");
const somarValorTotalCorPreto = Number(corPretoFiltrado.reduce((total, item) => total + item.valor, 0).toFixed(2));
// Cor Branco
const corBrancoFiltrado = dados5.filter(cor => cor.cor === "Branco");
const somarValorTotalCorBranco = Number(corBrancoFiltrado.reduce((total, item) => total + item.valor, 0).toFixed(2));
// Cor Cinza
const corCinzaFiltrado = dados5.filter(cor => cor.cor === "Cinza");
const somarValorTotalCorCinza = Number(corCinzaFiltrado.reduce((total, item) => total + item.valor, 0).toFixed(2));

export {somarValorTotalCorVerm, somarValorTotalCorAzul, somarValorTotalCorVerde, somarValorTotalCorPreto, somarValorTotalCorBranco, somarValorTotalCorCinza};

// Filtrar Anos, Preço e Item - 
// 2024
const ano2024Filtrado = dados5.filter(ano => ano.ano === 2024);
const somarValorTotalAno2024 = Number(ano2024Filtrado.reduce((total, item) => total + item.valor, 0).toFixed(2));

export {somarValorTotalAno2024};

// Filtrar Meses, Preço e Item - 

// Mes 6 Junho
const mesJunFiltrado = dados5.filter(mes => mes.mes === 6);
const somarValorTotalMesJun = Number(mesJunFiltrado.reduce((total, item) => total + item.valor, 0).toFixed(2));

export {somarValorTotalMesJun};



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
// const resultadoFiltro = FiltroGrafico3(dados5, 'fabricante', 'categoria', 'Item');
// console.log(resultadoFiltro);


export {FiltroGrafico3};
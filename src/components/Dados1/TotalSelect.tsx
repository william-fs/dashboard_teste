import dados1 from "../../dados/fonte_de_dados_1.json";

// Valores usados nos campos 
const valores = [
    {valor: "categoria", conteudo: "Categoria"},
    {valor: "fabricante", conteudo: "Fabricante"},
    {valor: "cor", conteudo: "Cor"},
    {valor: "ano", conteudo: "Ano"},
    {valor: "mes", conteudo: "Mês"}
]
export {valores};

// Filtrar por Tipo de Fabricante, Preço e Quantidade - 
const fabricanteXFiltrado = dados1.filter(fab => fab.fabricante === "Fabricante X");
const somarPrecoFabX = fabricanteXFiltrado.reduce((total, item) => total + item.preco, 0);
const somarQuantidadeFabX = fabricanteXFiltrado.reduce((total, item) => total + item.quantidade, 0);

const fabricanteYFiltrado = dados1.filter(fab => fab.fabricante === "Fabricante Y");
const somarPrecoFabY = fabricanteYFiltrado.reduce((total, item) => total + item.preco, 0);
const somarQuantidadeFabY = fabricanteYFiltrado.reduce((total, item) => total + item.quantidade, 0);

const fabricanteZFiltrado = dados1.filter(fab => fab.fabricante === "Fabricante Z");
const somarPrecoFabZ = fabricanteZFiltrado.reduce((total, item) => total + item.preco, 0);
const somarQuantidadeFabZ = fabricanteZFiltrado.reduce((total, item) => total + item.quantidade, 0);

export {somarPrecoFabX, somarPrecoFabY, somarPrecoFabZ};
export {somarQuantidadeFabX, somarQuantidadeFabY, somarQuantidadeFabZ};
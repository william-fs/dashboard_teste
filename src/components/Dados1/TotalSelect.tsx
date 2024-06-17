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

// Filtro de conteúdo duplicados 
const categorias:string[] = Array.from(new Set(dados1.map(dado => dado.categoria)));
const fabricantes = Array.from(new Set(dados1.map(dado => dado.fabricante)));
const cores = Array.from(new Set(dados1.map(dado => dado.cor)));
const anos = Array.from(new Set(dados1.map(dado => dado.ano)));
const meses = Array.from(new Set(dados1.map(dado => dado.mes)));

export {categorias, fabricantes, cores, anos, meses};
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


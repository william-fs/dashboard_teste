# React + TypeScript + Vite

- Criação do projeto com Vite.
- Adicionado Bootstrap padrão via CDN para auxilio de estilização dos inputs e tables
- Adicionado Apexcharts via npm para criação das tabelas gráficas

- Rodar npm install na pasta do projeto para baixar as dependências.

Informações gerais para novos dados:

Replicação e substituição de informações para a nova fonte de Dados, componete + fonte_de_dados_nova:

- Componente: Dados*.tsx = Refere ao novo componente com a nova fonte de dados selecionada.
Os componentes de Dados importa informações TotalSelect, se complementam.

- Início 

-- Alteração das informações do arquivo TotalSelect.tsx
--- Substituir a constante "valores" pelas novas infos da nova base de dados. Export
--- Substituir o "Filtro: conteúdo duplicados" com as infos da base de dados que vão integrar o campo de seleção e detalhamento 2 e 3. Export
--- Substituir o "Filtrar por Tipo de dado para extrair os valores de soma" de acordo com os campos de calculo. Export

-- Alteração das informações do arquivo Dados*.tsx
--- Atualizar o caminho da fonte de dados (Json).
--- Import valores de soma/total referente ao primeiro campo, todos do arquivo TotalSelect.tsx, todo componente de Dados trabalha em conjunto da mesma.
--- Dentro da função - Atualizar o "Somas totais" atribuindo uma constante dos valores individuais para o segundo campo e os totais.
--- Não mexer entre os comentários *** NÃO ALTERAR *** Validação dos campos gerais de seleção ***/ NÃO ALTERAR ***
--- "Condicional Render da tabela" - substituir os nomes dos estados de acordo com o sentido de renderização necessária(condição de render no html), dica: com o nome que seleciona no primeiro campo como precoSeleciona/setPrecoSelecionado. Obs: Lógica para o tratamento para os Meses, q estão vindo em valor numérico, convertido em nomes de acordo.
--- "Regras das seleções de campo" - Substituir os if's de acordo com as regras de informações com base no resultado do primeiro campo/segundo e terceiro. Substituir também as constantes abaixo dos if's de acordo com o detalhamento para ficar amis explícito com a seleção feita.
Obs: os set's se referem as importações do arquivo TotalSelect.tsx com o array das informações e a soma feita no inicio do arquivo.
--- "Função Gerar segunda tabela caso todos campos selecionados" - Tratamento de campos meses do eixo Y q vem em número, adaptar a nova fonte se necessário.

- Regras de Gráfico
-- Foram divididos em 2, o "Charts" receber apenas os campos 1 e 2 no detalhamento e o "Chart3Campos".
-- o "Chart" é tratado via props e todas as opções no próprio componente.
-- O ""Chart3Campos" tem as opções tratadas no componente principal de cada Dado, pois a informação do tem aspectos mais complexos não permitindo fazer via props.



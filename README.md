# curso-protractor-tat
Projeto para o curso de Protractor da Escola TAT

## Aula 1

Uma nota sobre arquitetura de software

<details>
  <summary>Conteúdo da aula</summary>
    <br>- Simplicidade<br>
    - Organização<br>
    - Legibilidade<br>
    - Reutilização<br>
    - Manutenção<br>
    - Evolução
</details>

## Aula 2

_Bootstrap_ do projeto de testes _end-to-end_

<details>
  <summary>Conteúdo da aula</summary>
    <br>- Clone do projeto (git clone git@github.com:wlsf82/curso-protractor-tat.git)<br>
    - Inicialização de um projeto Node.js (npm init -y)<br>
    - Criação do arquivo .gitignore (.DS_Store, node_modules/)<br>
    - Instalação do Protractor, protractor-helper e standardjs (npm install protractor protractor-helper standardjs —save-dev)<br>
    - Estrutura de diretórios do projeto de testes e2e (configurations/, page-objects/, page-objects/components/, utils/, specs/)<br>
    - Documentação oficial do Protractor (http://protractortest.org)
</details>

## Aula 3

Arquivos de configuração

<details>
  <summary>Conteúdo da aula</summary>
    <br>- utils/createConfig.js<br>
    - A importância do jasmineNodeOpts.random = true<br>
    - configurations/chromeConfig.js<br>
    - configurations/firefoxConfig.js
</details>

## Aula 4

Scripts do arquivo package.json

<details>
  <summary>Conteúdo da aula</summary>
    <br>- lint<br>
    - lint:fix<br>
    - package.json (standard.globals)<br>
    - pretest<br>
    - test<br>
    - test:chrome<br>
    - test:firefox
</details>

## Aula 5

Criando o primeiro teste

<details>
  <summary>Conteúdo da aula</summary>
    <br>- home.spec.js<br>
    - Tipagem dos métodos do protractor-helper<br>
    - Documentação oficial do protractor-helper (https://github.com/wlsf82/protractor-helper/blob/master/README.md)<br>
    - page-objects/home.js<br>
    - components/tags.js
</details>

## Aula 6

Testando a página de uma tag aleatória

<details>
  <summary>Conteúdo da aula</summary>
    <br>- tag.spec.js<br>
    - page-objects/tag.js<br>
    - components/destinations.js<br>
    - utils/randomNumberBewtweenOneAndN.js
</details>

## Aula 7

Testando a página de uma destination aleatória

<details>
  <summary>Conteúdo da aula</summary>
    <br>- destination.spec.js<br>
    - page-objects/destination.js<br>
    - components/destination.js<br>
    - utils/randomNumberBewtweenOneAndN.js
</details>

## Aula 8

Testando o básico da página de edição de uma destination aleatória

<details>
  <summary>Conteúdo da aula</summary>
    <br>- editDestination.spec.js<br>
    - page-objects/editDestination.js<br>
    - components/destination.js<br>
    - components/form.js<br>
    - utils/randomNumberBewtweenOneAndN.js
</details>

## Aula 9

Testando as validações do formulário da página de edição de uma destination aleatória

<details>
  <summary>Conteúdo da aula</summary>
    <br>- Validação de número mínimo de caracteres
</details>

## Aula 10

Testando a submissão com sucesso do formulário da página de edição de uma destination aleatória

<details>
  <summary>Conteúdo da aula</summary>
    <br>- Instalando a biblioteca faker (npm install faker —save-dev)<br>
    - O teste propriamente dito
</details>

## Aula 11

Testando o header de uma página aleatória

<details>
  <summary>Conteúdo da aula</summary>
    <br>- Como enxugar os testes e ainda manter a cobertura<br>
    - utils/pageSorter.js
</details>

## Aula 12

Executando os scripts do package.json via atalhos do Visual Studio Code

<details>
  <summary>Conteúdo da aula</summary>
    <br>- lint<br>
    - lint:fix<br>
    - pretest<br>
    - test<br>
    - test:chrome<br>
    - test:firefox
</details>

## Aula 13

Simulando falhas

<details>
  <summary>Conteúdo da aula</summary>
    <br>- Simulando a falha em um ou mais testes<br>
    - Mensagens de erro do protractor-helper (https://github.com/wlsf82/protractor-helper#example-of-a-test-failure-when-using-such-methods-as-expectations)
</details>

## Aula 14

Integração contínua

<details>
  <summary>Conteúdo da aula</summary>
    <br>- Colocando lint e testes para rodar no CI do GitHub
</details>

## Aula 15

Últimos ajustes

<details>
  <summary>Conteúdo da aula</summary>
    <br>- Últimos ajustes no arquivo package.json (description, main, keywords, repository, author, license)<br>
    - Documentando o projeto (README.md)<br>
    - Título e descrição<br>
    - Badge<br>
    - Pré-requisitos (node, npm, chrome, firefox)<br>
    - Instalação<br>
    - Executando os testes e sub-seções<br>
    - Footer
</details>

## Aula 16

Revisão do projeto

<details>
  <summary>Conteúdo da aula</summary>
    <br>- Revisão final do projeto (estrutura de arquivos e diretórios) e suas relações com uma arquitetura limpa<br>
    - Possíveis evoluções

</details>

# Desafio de Automação API - Trello

## Objetivo

Automatizar a validação da API Trello solicitada no desafio técnico utilizando Cypress e JavaScript.

---

## Tecnologias Utilizadas

* JavaScript
* Cypress
* Node.js

---

## Cenário Automatizado

### API Trello

* Realizar requisição GET para a API Trello.
* Validar status code da resposta.
* Validar o conteúdo do campo `name` da estrutura `list`.

---

## Endpoint Utilizado

```http
GET https://api.trello.com/1/actions/592f11060f95a3d3d46a987a
```

---

## Validações Realizadas

* Status code igual a `200`.
* Existência do campo `data.list.name`.
* Validação de que o campo retornado é uma string.
* Validação de que o campo não está vazio.
* Exibição do valor retornado nos logs da execução.

---

## Pré-requisitos

Antes de executar o projeto, é necessário possuir instalado:

* Node.js
* NPM (instalado juntamente com o Node.js)

---

## Instalação

Clone o repositório:

```bash
git clone https://github.com/Lis-tavares/desafio-automacao-cypress-api.git
```

Acesse a pasta do projeto:

```bash
cd desafio-automacao-cypress-api
```

Instale as dependências:

```bash
npm install
```

---

## Execução dos Testes

Abrir o Cypress em modo interativo:

```bash
npx cypress open
```

Executar os testes em modo headless:

```bash
npx cypress run
```

---

## Estrutura do Projeto

```text
cypress
├── e2e
│   └── api_trello.cy.js
│
├── features
│   └── api_trello.feature
│
├── support
│   └── commands.js
│
├── fixtures
│
cypress.config.js
package.json
README.md
```

---

## Cenário Atendido

Conforme solicitado no desafio, foi automatizado o seguinte fluxo:

✔ Enviar requisição GET para a API Trello

✔ Validar status code 200

✔ Exibir e validar o conteúdo do campo `data.list.name`

---

## Observações

O desafio original previa a utilização de Cucumber para escrita dos cenários em BDD.

Durante o desenvolvimento foi realizada a configuração e execução dos cenários utilizando Cypress e Cucumber. Entretanto, foram identificadas incompatibilidades entre versões dos pacotes utilizados pelo Cucumber e o Cypress durante a fase final de consolidação do projeto.

Para garantir a estabilidade da entrega e a execução dos testes automatizados dentro do prazo proposto, a implementação final foi disponibilizada em Cypress com JavaScript puro, preservando integralmente a cobertura dos requisitos funcionais solicitados.

Os cenários em formato Gherkin foram mantidos em arquivos `.feature` como documentação dos fluxos automatizados.

A implementação da requisição foi realizada através de comando customizado do Cypress (`Cypress.Commands.add`), promovendo reutilização e melhor organização do código.

---

## Autor

Lislaine Tavares dos Santos

Analista de Qualidade de Software (QA)

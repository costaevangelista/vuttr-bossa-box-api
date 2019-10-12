# VuttrBossaBox - API

API e o banco de dados é para a aplicação **VUTTR (Very Useful Tools to Remember)**. A aplicação é um simples repositório para gerenciar Usuários e Ferramentas com seus respectivos nomes, links, descrições e tags.

## Tecnologias utilizadas

#### Backend

```
Node + Express + Mongoose + MongoDB + JWT + Jest (para Teste Unitários e Integração)
```

### Integração e Entrega Contínua CI/CD + Deploy

```
CI/CD: GitLab | Pipelines: Test > Production
Servidor de Deploy: Heroku (PaaS) | Banco de Dados: cloud.mongodb.com > Clusters (MongoDB Atlas)

Ao finalizar com sucesso as Pipelines o projeto é atualizado automaticamente no HEROKU
se for um PUSH para o Branche Master do projeto.
```

### Conteinerização

```
Docker
```

### Documentação

```
Blueprint + Aglio
```

## Instruções para Instalação e execução do projeto

#### Depedências GLOBAIS

Você precisa do `NODE`, `NPM` e `DOCKER` instalados globalmente em sua máquina.

#### Passos

1º - Clonar repositório:
`git clone git@github.com:costaevangelista/vuttr-bossa-box-api.git`

2º - Instalação das dependências: Entre na pasta `vuttr-bossa-box-api` execute
`npm install || npm i`

3º - Renomeie o arquivo `.env.example` para > `.env`

4º - Dentro da pasta `vuttr-bossa-box-api` e execute o comando do DOCKER

```
docker-compose up -d
```

Execute o comando: `docker ps -a` e você verá o processo `NODEJS_SERVER_SYSVUTTR` e `MONGODB_SYSVUTTR`
Pronto a API já está no ar.

5º - Acesso a API
[Acesso API](http://localhost:3000)

```
O ENDPOINT / Possui a DOCUMENTAÇÂO DA API, observe as informações para ter acesso a API.
```

#### Executando os Testes Via Shell Container Docker

```
* docker exec -it NODEJS_SERVER_SYSVUTTR /bin/sh -c "[ -e /bin/bash ] && /bin/bash || /bin/sh"
* npm test
```

### Acesso API no HEROKU

[Link Heroku API](https://app-vuttr-cw.herokuapp.com)

### Autor | Contato

**Abel Gomes**

```
costaevangelista@live.com
```

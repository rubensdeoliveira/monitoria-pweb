# Node - Projeto 1

## Instalação

`yarn`
`yarn dev`

> Alterar o arquivo src/config/database.js para seus dados do postgres

## Material de apoio

### Express
Será utilizado para gerenciarmos as rotas da aplicação

`yarn add express`

### Sucrase
Ajuda ao node reconhecer as novas sintaxes da linguagem, como import e export

`yarn add sucrase -D`

### Nodemon
Executa o código node e mantém o servidor rodando e refletindo as alterações feitas no código

`yarn add nodemon -D`

### Configurar docker com postgres

`docker run --name postgres_databases -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres`

### Sequelize
É um ORM para Node.js que será utilizado para configurmos a conexão ao banco de dados postgres

`yarn add sequelize`
`yarn add sequelize-cli -D`

### Sequelize com Postgres
Para utilizarmos o postgres com sequelize é necessário adicionar as duas dependências abaixo:

`yarn add pg pg-hstore`

### Migrações com Sequelize
Criar a migração
`yarn sequelize migration:create --name=create-users`

Rodar as migrações
`yarn sequelize db:migrate`

### bcryptjs
Bcrypt será uma biblioteca que usaremos para gerar o hash da senha do usuário

`yarn add bcryptjs`

### jsonwebtoken
jsonwebtoken é uma biblioteca para lidarmos com token na aplicação

`yarn add jsonwebtoken`

### yup
Vamos utilizar yup para validações

`yarn add yup`
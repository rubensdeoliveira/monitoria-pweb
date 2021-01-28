# Tutorial de instalação de ferramentas para o desenvolvimento com Typescript

## 1. Tecnologias
- Next.js
- Node.js (express.js)
- Postgres

## 2. Ferramentas
- Node
- Yarn
- VS Code
- Docker
- Postbird
- Git e Github
- Insomnia

## 3. Tutorial

### 3.1 Node.js

- Acessar o site do Node.js
[Node.js](https://nodejs.org/en/)

- Baixar versão LTS e instalar

- Para instalar bastar dar next, next ...

- Rodar no terminal `node -v` para verificar a versão e confirmar que a instação ocorreu com sucesso.

- Rodar no terminal `npm -version` para verificar se o npm também foi instalado junto com o node.

### 3.2 Yarn

- Rodar no terminal `npm install -g yarn`

- Rodar no terminal `yarn -version` para verificar se a instação ocorreu com sucesso

### 3.3 VS Code
- Acessar o site do VS Code
[VS Code](https://code.visualstudio.com/download)

- Baixar e instalar o VS Code

- Durante a instação selecione todas as opções que aparecerem

Extensões úteis (não obrigatórias): 
- Omni
- Colorize
- Material Icon Theme
- Markdown Preview Enhanced
- Bracket Pair Colorizer 2
- Live Server
- ESLint
- Prettier - Code Formatter
- vscode-styled-components
- DotENV

### 3.4 Docker

- Essa etapa depende da versão do sistema operacional, a rocketseat criou um tutorial para cada versão e vou deixar disponível abaixo:
[Tutorial - Instalação Docker](https://www.notion.so/Instalando-Docker-6290d9994b0b4555a153576a1d97bee2)

### 3.5 Postbird

- Acessar site do Postbird
[Postbird](https://www.electronjs.org/apps/postbird)

- Baixar a versão .exe

- Instalar (instala automaticamente e já abre o programa)

### 3.6 Git e Github

- Acessar o site do Git
[Git](https://git-scm.com/downloads)

- Para instalar bastar dar next, next ...

- Rodar no terminal `git --version` para verificar se a instação ocorreu com sucesso

Rodar no terminal os comandos abaixo para configurar o git alterando os dados preenchidos pelos seus

- `git config --global user.name "Your Name"`
- `git config --global user.email "youremail@yourdomain.com"`

- Criar conta no github

### 3.7 Insomnia

- Acessar o site do Insomnia
[Insomnia](https://insomnia.rest/download/)

- Selecionar a opção de download Insomnia Core for Windows

- Instalar o Insomnia

## 4 Começar com Tecnologias

### Next.js

- Crie a pasta do seu projeto

- No terminal entre na pasta dos seus projetos

- Rode no terminal `yarn global add @create-next-app/core`

- Rode no terminal `create-next-app my-app` (troque my_app pelo nome do seu projeto)

- Rode no terminal `cd my-app` (troque my_app pelo nome do seu projeto)

- Rode no terminal `yarn dev`

- Acesse o endereço [localhost:3000](http://localhost:3000/) no seu navegador

### Postgres

- Comece rodando o comando abaixo:
`docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres`

> Altere onde tem database para o nome da imagem que deseja e na opção postgres_password. Escolha uma senha segura para o banco.

- Entre no postbird e nos campos de username e password coloque postgres e docker, respectivamente


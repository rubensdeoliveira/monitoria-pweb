# Tutorial de Git/Github

## 0. Aula
### 0.1 O que é o Git?
O Git é um sistema de controle de versão de arquivos. É um software livre e muito utilizado no desenvolvimento de software onde diversas pessoas estão contribuindo simultaneamente, podendo criar e editar arquivos. Sempre quando alguém disponibiliza sua parte do projeto no Git, ele gerencia as alterações feitas e guarda um histórico. Isso é importante pois se houver algum problema você pode desfazer as alterações e voltar para a versão que estava estável.

O Git foi projetado e desenvolvido pelo Linus Torvalds para o desenvolvimento do Linux e foi adotado por muitos outros projetos.

### 0.2 O que é o GitHub?
O GitHub é uma plataforma onde você pode armazenar seus projetos. É como se fosse uma rede social, só que de códigos, onde seus desenvolvedores podem disponibilizá-los para outras pessoas verem.

Quando seu projeto está no GitHub, você pode facilmente baixar uma cópia em outro computador. É uma plataforma gratuita e armazena milhões de projetos, tanto open source, pessoais e até mesmo comerciais. Alguns projetos bem conhecidos são o WordPress e o Linux. Hoje o GitHub pertence a Microsoft, que o adquiriu no ano de 2018.

Muitas pessoas utilizam o GitHub como portfólio de seu trabalho para que empresas possam vê-lo. Se você ainda não possui um GitHub e quer fazer parte, basta criar uma conta e um repositório.

## 1. Instalação
- Para baixar o git acesse [aqui](https://git-scm.com/downloads)
- Após terminar o download, execute o arquivo e basta selecionar next até o fim
- Após instalado o Git, abra o terminal e rode `git --version` para verificar se o git foi instalado. Caso apareça a versão significa que foi devidamente instalado.

## 2. Configuração inicial
O git necessita de uma pequena instalação inicial, que só é necessária na primeira utilização.

Para realizar essa configuração rode os dois comandos abaixo no seu terminal:

- `git config --global user.name "Your Name"`
- `git config --global user.email "youremail@yourdomain.com"`

>Lembre de alterar ***Your Name*** por seu nome e ***youremail@yourdomain.com*** pelo seu e-mail que você criou a conta no github.

## 3. Criando seus primeiros commits
Agora que o git já está instalado, podemos fazer o primeiro commit seguindo o passo a passo abaixo:
> Antes de seguir com esse tutorial, certifique-se de já possuir uma conta no github e o git no seu computador estar instalado e configurado corretamente.

- Acesse seu github e logue-se
- Crie um novo repositório de acordo com as imagens abaixo:

<br />
<div>
  <img src="repo/imgs/1.png" alt="demo" height="300" hspace="20">
  <img src="repo/imgs/2.png" alt="demo" height="600" hspace="20">
  <img src="repo/imgs/3.png" alt="demo" height="600" hspace="20">
</div>
<br />

- Quando você criar aparecerá uma tela parecida com a tela abaixo:

<br />
<img src="repo/imgs/4.png" alt="demo" height="600">
<br />
<br />

- Abra o seu terminal, crie e navegue para uma pasta vazia que será seu projeto
- Com a pasta do seu projeto aberta no terminal, abra a pasta no VS Code com o comando `code .`
- No VS Code crie um arquivo chamado `readme.md`
- Digite seu readme seguindo os padrões do [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- No terminal e rode o comando `git init`
- No terminal e rode o comando `git add .`
- No terminal rode o comando `git commit -m "adicionando readme"`
- No terminal rode o comando `git remote add origin LINK_DO_SEU_REPOSITORIO`, veja na imagem abaixo como copiar o código para facilitar:
<br />
<img src="repo/imgs/5.png" alt="demo" height="600">
<br />

- No terminal rode o comando `git push origin master`, caso não funcione rode o comando `git push origin main`
> O Github está substituindo o repositório master por main aos poucos, por isso às vezes um repositório novo é criado como master e às vezes como main

## 4. Links e referências
- https://www.treinaweb.com.br/blog/git-e-github-quais-as-diferencas/
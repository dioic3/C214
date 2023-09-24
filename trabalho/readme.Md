# Bem-vindos ao JoyceX, o gerenciador de tarefas

![JoyceX-banner](./img/banner-joycex.png)
A Joycex é uma empresa que se importa na forma que as pessoas gerenciam e planejam as tarefas, principalmente o público com Transtorno do Déficit de Atenção e Hiperatividade (TDAH). O nosso público-alvo são as pessoas com TDAH porque, geralmente, possuem problema para organizar ou gerenciar suas tarefas no dia-a-dia.

O proposito seria ajudar o público-alvo se organizar melhor, pois necessitam usar um planejador de tempo ou criar um lar para cada item.

As funcionalidades do gerenciador de tarefas incluem:

- Adicionar uma nova tarefa
- Visualizar a lista de tarefas
- Atualizar o status de uma tarefa
- Excluir uma tarefa

## Afinal, como posso executar o projeto?

Para executar o projeto, é necessário baixar o projeto na sua máquina com o comando:

```
git clone <url-do-repositório>
```
Depois que o repositório for clonado, acesse a pasta **trabalhi** no terminal com o comando e execute o comando para instalar o node_modules:

```
cd trabalho
npm install --no-save
```

O motivo para usar o **npm install --no-save** seria para não atualizar as dependências do **package.json** e **package-lock.json**.

Instalando as dependências do node dentro da pasta trabalho, é hora de executar os códigos da pasta **scr**. Então acesse a pasta **scr** com o comando:

```
cd scr
```
Dentro da pasta, existem os arquivos **gerenciarTarefa.js**, **main.js** e **tarefa.js**.

- Foto do main.js:
![Arquivo-main.js](/trabalho/img/Screenshot_1.jpg)

- Foto do tarefa.js:
![Arquivo-tarefa.js](/trabalho/img/Screenshot_2.jpg)

- Foto do gerenciarTarefa.js:
![Arquivo-gerenciarTarefa.js](/trabalho/img/Screenshot_3.jpg)

Para executar o código, é importante executar o arquivo main. No terminal, execute o comando:

```
node main.js
```

Depois verifique o menu sendo execute e escolha as opções desejadas.

## Como executar os códigos de teste?

Para executar os códigos de teste no terminal, é necessário sair da pasta **scr** e entrar na pasta **test**. Execute os seguintes comandos no terminal:

```
cd ..
cd test
```

Depois que entrou na pasta **test**, basta executar o comando para rodar os testes e veja a mágica acontecer:

```
npm test
```
Além disso, na aba de Actions do github foi feito o uso do conceito de integração continua para que toda vez algum commit for feito ou pull request for aberta, os testes unitários seram executados.

## Membros da equipe

- Nome: Joyce da Costa Dias
# MyReads Project

Myreads é um projeto de uma estante de livros utilizando ReactJS,

## Demo do projeto no HEROKU
https://stark-gorge-34780.herokuapp.com/

## Instalação:
````
  git clone
  cd myReads
  npm install
````

## Execução:
```
npm start

```

## Testes unitários:
````
  npm test
  npm run test:coverage
````

## Testes funcionais:
Para rodar os testes funcionais será necessário abrir 3 abas do terminal.
Na primeira aba inicie o projeto  ```npm start```
Na segunda aba inicie o selenium ```npm run e2e-start```
Na terceria aba inicie os testes ```npm run e2e```

## Sobre o projeto

Criar uma aplicação a fim de gerenciar livros em três categorias :  Lendo, Quero Ler e Já lido.

Ao iniciar a aplicação está irá listar todos os seus livros, separados nas três categorias.

## Funcionalidades

### Buscar Livros

Ao clicar no botão de "+" no canto inferior direito da página inicial, ou ao acessar o /search é possível realizar a busca por livros, informado o título.

### Alterar livro de estante e Remover livro

Ao clicar nos botões de "+" junto as imagens dos livros é possível alterar a estante de cada livro ou removê-lo selecionando a opção "none"

### Detalhe do livro

Ao clicar em um imagem de cada livro é possível visualizar mais dados sobre livro ou acessando o path '/book/:id_do_livro', por exemplo 'book/V-gtAgAAQBAJ'


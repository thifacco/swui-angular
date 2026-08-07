![Logo of the project](https://github.com/thifacco/swui-angular/blob/master/src/assets/images/swui-logo.jpg)


## Star Wars UI
Essa é uma aplicação desenvolvida com Angular 15+ para treinar consumo de API proposto pelo desafio que  #7DaysOfCode da Alura que participei em 07/07/2023.


## Features

As principais funcionalidades dessa aplicação são:
 - Cabeçalho fixo, presente em todas as páginas
   - logo do projeto e link para seguir o repositório no GitHub
   - menu lateral (ícone de hambúrguer) com navegação para Home, Filmes e Naves
 - Página principal da aplicação (Home)
   - mensagem de boas-vindas
   - campo de busca por nome de personagens de Star Wars
   - lista numa `mat-table` os personagens encontrados, com nome, altura e peso
   - indicador de carregamento e mensagem de erro quando a busca falha
   - cartões de destaque com atalho para as páginas de Filmes e de Naves
 - Página de Filmes
   - lista numa `mat-table` todos os filmes da franquia Star Wars, com episódio, título e data de lançamento
 - Página de Naves
   - exibe campo de busca por nome, modelo ou classe da nave
   - lista numa `mat-table` as naves encontradas na busca ou a listagem completa delas
   - cada linha pode ser expandida para exibir detalhes da nave (fabricante, capacidade de carga, avaliação de hiperdrive, tamanho, velocidade máxima, tripulação e passageiros)
   - paginação de resultados


## Fonte de dados

A aplicação foi originalmente desenvolvida para consumir a [SWAPI - Star Wars API](https://swapi.dev/api), porém essa API pública foi descontinuada e não responde mais às requisições.

Para manter a aplicação funcional, a solução adotada foi passar a consumir um **mock de dados local**, armazenado em `src/assets/data` (ex: [films.json](src/assets/data/films.json) e [starships.json](src/assets/data/starships.json)), no lugar da API remota.

Essa troca é feita de forma transparente para os componentes através de **injection tokens** (`MOVIES_SERVICE` e `STARSHIPS_SERVICE`). Cada token expõe uma interface de serviço (`IMoviesService` / `IStarshipsService`) que possui duas implementações:
 - um serviço "real" (`MoviesService` / `StarshipsService`), que faz as chamadas HTTP para a API remota da SWAPI;
 - um serviço "fake" (`MoviesFakeService` / `StarshipsFakeService`), que lê os arquivos JSON locais em `src/assets/data` e reproduz o mesmo formato de resposta da API (incluindo paginação e busca, no caso das naves).

A escolha de qual implementação será injetada é feita em [app.config.ts](src/app/app.config.ts), através de um `useFactory` que verifica as flags `useFakeMoviesData` e `useFakeStarshipsData` definidas em [environment.ts](src/environments/environment.ts) / [environment.development.ts](src/environments/environment.development.ts). Como a API remota está indisponível, os componentes (`MoviesComponent` e `StarshipsComponent`) continuam consumindo apenas o token de injeção, sem qualquer conhecimento de qual fonte de dados está sendo usada por trás.


## Tecnologias 

Essas foram as tecnologias usadas nesse projeto:

* Angular versão 15.2.0

## Serviços

* Node

## NPM packages

* Material Design
* RxJS

## Getting started

* Dependências
  - Node

* Para instalar as dependências do projeto:
```bash
npm install
```
  
* Para iniciar a aplicação:
```bash
npm start
```
Esse comando irá iniciar a aplicação e abrir automaticamente o endereço [http://localhost:4200/](http://localhost:4200/) no navegador.

## Como usar a aplicação

### 1 - Quando você acessar a url do projeto, verá a Home Page.

![Homepage image](https://github.com/thifacco/swui-angular/blob/master/src/assets/screenshots/home.png)

### 2 - Você pode navegar pela página de Filmes.

![movies](https://github.com/thifacco/swui-angular/blob/master/src/assets/screenshots/movies.png)

### 3 - Você pode navegar pela página de Naves.

![starships](https://github.com/thifacco/swui-angular/blob/master/src/assets/screenshots/starships.png)


## Links
  - Repositório: [https://github.com/thifacco/swui-angular](https://github.com/thifacco/swui-angular)
  - Star Wars API (descontinuada): [https://swapi.dev](https://swapi.dev)
  - Netlify View: [https://swui-angular.netlify.app/](https://swui-angular.netlify.app/)

## Versioning

1.7.4


## Autor

  * **Tiago Luis Facco** 

Siga-me no github e vamos juntos!
Obrigado pela visita e bons códigos!
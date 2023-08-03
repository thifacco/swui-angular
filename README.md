# Star Wars UI

<div style="display: flex; flex-direction: row; align-items: start; justify-content: left;">
<img src="https://img.shields.io/github/forks/thifacco/screen-match-java.svg">
<img src="https://img.shields.io/github/stars/thifacco/screen-match-java.svg">
<img src="https://img.shields.io/github/watchers/thifacco/screen-match-java.svg">
<img src="https://img.shields.io/github/followers/thifacco.svg?style=social&label=Follow&maxAge=2592000">
</div>

Aplicação desenvolvida com Angular v15-lts para treinar consumo de API [SWAPI](https://swapi.dev) proposto pelo desafio #7DaysOfCode da Alura.

Link da aplicação no Netlify: https://swui-angular.netlify.app/

## Features

### Home
Página principal da aplicação
- exibe campo de busca por nome de personagens de Star Wars 
- lista numa `mat-table` os nomes encontrados

### Movies
Página de Filmes
- lista numa `mat-table` com todos os filmes da franquia Star Wars

### Starships
Página de Naves
- exibe campo de busca por nome da nave da franquia Star Wars
- lista numa `mat-table` as naves encontradas na busca ou a listagem completa delas
- exibe detalhes de cada nave em cada item da `mat-table`
- paginação de resultados

## Iniciar a aplicação

```
npm start
```

## Executar os testes
```
npm run test
```
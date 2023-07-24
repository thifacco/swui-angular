import { ISwapi } from "src/app/features/shared/data/interfaces/swapi";
const swapiAPIObject: ISwapi = {
   base: {
      url: 'https://swapi.dev/api'
   },
   resources: {
      films: '/films',
      people: '/people',
      planets: '/planets',
      species: '/species',
      starships: '/starships',
      vehicles: '/vehicles'
   },
   features: {
      search: '/search'
   }
};

export const environment = {
   baseApiFilmsFake: 'assets/data/films.json',
   swapiAPIObject: swapiAPIObject
};

export interface ISwapi {
   base: ISwapiURI;
   resources: ISwapiResource;
   features: ISwapiFeature;
}

export interface ISwapiURI {
   url: string;
}

export interface ISwapiResource {
   films: string;
   people: string;
   planets: string;
   species: string;
   starships: string;
   vehicles: string;
}

export interface ISwapiFeature {
   search: string;
   page: string;
}
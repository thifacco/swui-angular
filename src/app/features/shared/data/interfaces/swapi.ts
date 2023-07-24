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
}

export class Swapi implements ISwapi {
   
   constructor(envObj: ISwapi) {
      this.base = envObj.base;
      this.resources = envObj.resources;
      this.features = envObj.features;
   }

   base: ISwapiURI;
   resources: ISwapiResource;
   features: ISwapiFeature;

   getBaseURL(): string {
      return this.base.url;
   }
   
   getBaseResourceURL(key: string) {
      return this.base.url + this.chooseResourceByKey(key);
   }
   
   getBaseResourceURLSearch(key: string) {
      return this.base.url + this.chooseResourceByKey(key) + this.features.search;
   }

   private chooseResourceByKey(key: string) {
      let resource;

      switch (key) {
         case 'films': resource = this.resources.films; break;
         case 'people': resource = this.resources.people; break;
         case 'planets': resource = this.resources.planets; break;
         case 'species': resource = this.resources.species; break;
         case 'starships': resource = this.resources.starships; break;
         case 'vehicles': resource = this.resources.vehicles; break;
      }

      return resource;
   }
}
import { ISwapi, ISwapiURI, ISwapiResource, ISwapiFeature } from "../interfaces/swapi";

export class SwapiRepository  implements ISwapi {
   
   constructor(envObj: ISwapi, key: string) {
      this.base = envObj.base;
      this.resources = envObj.resources;
      this.features = envObj.features;
      this.resourceKey = key;
   }

   base: ISwapiURI;
   resources: ISwapiResource;
   features: ISwapiFeature;
   resourceKey: string;

   getBaseURL(): string {
      return this.base.url;
   }
   
   getBaseResourceURL() {
      return this.base.url + this.chooseResourceByKey();
   }
   
   getFeatureSearch() {
      return this.features.search;
   }

   getFeaturePage() {
      return this.features.page;
   }

   private chooseResourceByKey() {
      let resource;

      switch (this.resourceKey) {
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

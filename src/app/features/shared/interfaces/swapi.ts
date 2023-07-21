export interface ISwapi {
   base: ISwapiURI;
   resources: ISwapiResource;
   searching: ISwapiURI;
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

// function getBaseURI(environmentObj: ISwapi, resourceStr: string) {
   
//    const resource = environmentObj.resources;
//    const resourceURI = resource.hasOwnProperty(resourceStr) ? resource.valueOf(resourceStr) : {};
   
//    return `${environmentObj.base.url}/${resourceURI}`;
// }
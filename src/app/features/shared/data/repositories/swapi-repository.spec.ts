import { SwapiRepository } from './swapi-repository';
import { environment } from 'src/environments/environment';

describe('SwapiRepository', () => {
  beforeEach(() => {

  });

  it('should create instance of each resource', () => {
    expect(new SwapiRepository(environment.swapiAPIObject, 'films')).toBeTruthy();
    expect(new SwapiRepository(environment.swapiAPIObject, 'people')).toBeTruthy();
    expect(new SwapiRepository(environment.swapiAPIObject, 'planets')).toBeTruthy();
    expect(new SwapiRepository(environment.swapiAPIObject, 'species')).toBeTruthy();
    expect(new SwapiRepository(environment.swapiAPIObject, 'starships')).toBeTruthy();
    expect(new SwapiRepository(environment.swapiAPIObject, 'vehicles')).toBeTruthy();
  });
});

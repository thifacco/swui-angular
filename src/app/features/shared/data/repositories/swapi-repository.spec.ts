import { SwapiRepository } from './swapi-repository';
import { environment } from 'src/environments/environment';

describe('SwapiRepository', () => {
  it('should create an instance', () => {
    expect(new SwapiRepository(environment.swapiAPIObject, '')).toBeTruthy();
  });
});

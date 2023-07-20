import { Component, OnInit } from '@angular/core';
import { HomeRepositoryService } from '../../data/repositories/home-repository.service';
import { IPeopleItem } from '../../data/interfaces/people';
import { FormControl } from '@angular/forms';
import { catchError, debounceTime, distinctUntilChanged, filter, map, switchMap, tap, throwError } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  peopleInputSearch = new FormControl();

  errorMessage = '';

  peopleResults$ = this.peopleInputSearch.valueChanges.pipe(
    // atrasa as emissões do observable de origem por 300 ms
    debounceTime(300),

    // filtra os itens emitidos e permite somente busca por 3 caracteres ou mais
    filter(inputSearchvalue => inputSearchvalue.length >= 3),
    
    // permite um debug do response
    tap(inputSearchvalue => console.log(`Buscando por '${inputSearchvalue}' ...`)),

    // retorna um observable emitido anteriormente, elimina duplicação
    distinctUntilChanged(),
    
    // emite o último observable e cancela as requisições anteriores
    switchMap(inputSearchvalue => this.homeService.searchPeople(inputSearchvalue)),
    
    // retorna o observable de origem com os dados modificados
    map(data => this.people = data.results),

    catchError(e => {
      console.log(`Erro retornado da API: ${e.status} - ${e.name}`);
      return throwError(() => new Error(this.errorMessage = 'Ocorreu um erro ao tentar acessar a API. Tente novamente mais tarde.'))
    })
  );

  displayedColumns: string[] = ['name', 'height', 'mass'];
  people: IPeopleItem[] = [];

  constructor(private homeService: HomeRepositoryService) {}

  ngOnInit(): void {
  }
}

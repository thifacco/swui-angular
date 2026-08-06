import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { HomeService } from './data/services/home.service';
import { IPeopleItem } from './data/interfaces/people';
import { LoadingComponent } from '../shared/components/loading/loading.component';
import { catchError, debounceTime, distinctUntilChanged, filter, map, switchMap, tap, throwError } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatCardModule,
    LoadingComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  peopleInputSearch = new FormControl('', { nonNullable: true });
  loading = false;

  errorMessage = '';

  peopleResults$ = this.peopleInputSearch.valueChanges.pipe(
    // atrasa as emissões do observable de origem por 300 ms
    debounceTime(300),

    // filtra os itens emitidos e permite somente busca por 3 caracteres ou mais
    filter(inputSearchvalue => inputSearchvalue.length >= 3),
    
    // permite um debug do response
    tap(inputSearchvalue => {
      console.log(`Buscando por '${inputSearchvalue}' ...`);
      this.loading = true;
    }),

    // retorna um observable emitido anteriormente, elimina duplicação
    distinctUntilChanged(),
    
    // emite o último observable e cancela as requisições anteriores
    switchMap(inputSearchvalue => this.homeService.searchPeople(inputSearchvalue)),
    
    // retorna o observable de origem com os dados modificados
    map(data => this.people = data.results),

    // encerra o loading
    tap(() => this.loading = false),

    catchError(e => {
      console.log(`Erro retornado da API: ${e.status} - ${e.name}`);
      return throwError(() => new Error(this.errorMessage = 'Ocorreu um erro ao tentar acessar a API. Tente novamente mais tarde.'))
    })
  );

  displayedColumns: string[] = ['name', 'height', 'mass'];
  people: IPeopleItem[] = [];

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
  }
}

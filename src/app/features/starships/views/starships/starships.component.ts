import { Component } from '@angular/core';
import { StarshipsRepositoryService } from '../../data/starships-repository.service';
import { map } from 'rxjs';
import { IStarshipItem } from '../../interfaces/starship';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent {

  starships: IStarshipItem[] = [];

  starshipsList$ = this.starshipRepositoryService.getAll().pipe(
    map(data => this.starships = data.results)
  );

  displayedColumns: string[] = ['name', 'model', 'manufacturer'];
  
  constructor(private starshipRepositoryService: StarshipsRepositoryService) {}
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarshipsComponent } from './views/starships/starships.component';
import { StarshipsRepositoryService } from './data/starships-repository.service';
import { StarshipsRoutingModule } from './starships-routing.module';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    StarshipsComponent
  ],
  imports: [
    CommonModule,
    StarshipsRoutingModule,
    MatTableModule
  ],
  providers: [
    StarshipsRepositoryService
  ]
})
export class StarshipsModule { }

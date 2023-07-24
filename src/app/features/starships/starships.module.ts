import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarshipsComponent } from './views/starships/starships.component';
import { StarshipsRepositoryService } from './data/starships-repository.service';
import { StarshipsRoutingModule } from './starships-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    StarshipsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StarshipsRoutingModule
  ],
  providers: [
    StarshipsRepositoryService
  ]
})
export class StarshipsModule { }

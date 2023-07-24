import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarshipsComponent } from './views/starships/starships.component';
import { StarshipsRepositoryService } from './data/starships-repository.service';
import { StarshipsRoutingModule } from './starships-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    StarshipsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StarshipsRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    StarshipsRepositoryService
  ]
})
export class StarshipsModule { }

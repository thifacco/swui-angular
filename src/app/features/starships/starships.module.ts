import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarshipsComponent } from './starships.component';
import { StarshipsRepositoryService } from './data/repositories/starships-repository.service';
import { StarshipsRoutingModule } from './starships-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';

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
    ReactiveFormsModule,
    MatPaginatorModule
  ],
  providers: [
    StarshipsRepositoryService
  ]
})
export class StarshipsModule { }

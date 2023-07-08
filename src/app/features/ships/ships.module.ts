import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShipsRoutingModule } from './ships-routing.module';
import { ShipsComponent } from './views/ships/ships.component';


@NgModule({
  declarations: [
    ShipsComponent
  ],
  imports: [
    CommonModule,
    ShipsRoutingModule
  ]
})
export class ShipsModule { }

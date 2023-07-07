import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShipRoutingModule } from './ship-routing.module';
import { ShipComponent } from './ship.component';


@NgModule({
  declarations: [
    ShipComponent
  ],
  imports: [
    CommonModule,
    ShipRoutingModule
  ]
})
export class ShipModule { }

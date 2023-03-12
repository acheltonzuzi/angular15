import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CinemaRoutingModule } from './cinema-routing.module';
import { CinemaComponent } from './cinema/cinema.component';
import { EditarComponent } from './editar/editar.component';


@NgModule({
  declarations: [
    CinemaComponent,
    EditarComponent
  ],
  imports: [
    CommonModule,
    CinemaRoutingModule,
  ]
})
export class CinemaModule { }

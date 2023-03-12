import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CinemaComponent } from './cinema/cinema.component';
import { EditarComponent } from './editar/editar.component';

const routes: Routes = [
  {
    path: '',
    component: CinemaComponent,
    children: [{ path: 'editar/:id', component: EditarComponent,data:{teste:"Achelton"} }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CinemaRoutingModule {}

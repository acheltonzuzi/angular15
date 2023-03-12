import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CinemaComponent } from './cinema/cinema/cinema.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Erro404Component } from './erro404/erro404.component';
import { ReactiveComponent } from './formularios/reactive/reactive.component';
import { GuardaGuard } from './guarda.guard';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SobreComponent } from './sobre/sobre.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'home' },
  { path: 'sobre', component: SobreComponent, title: 'Sobre' },
  { path: 'forms', component: ReactiveComponent, title: 'Forms',canDeactivate:[GuardaGuard] },
  { path: 'cinema', loadChildren:()=>import('./cinema/cinema.module').then((m)=>m.CinemaModule)},
  { path: 'dashboard', component: NavigationComponent, title: 'Forms' },
  { path: 'todo', component: TodoListComponent, title: 'todo' },
  { path: 'admin', loadChildren:()=>import('./admin/admin.module').then((m)=>m.AdminModule),canLoad:[GuardaGuard] },

  {
    path: 'produtos',
    loadChildren: () =>
    import('./demos/produtos-dashboard/produtos-dashboard.module').then(
      (m) => m.ProdutosDashboardModule
      ),
    },
    { path: '**', component: Erro404Component, title: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoListRoutingModule } from './todo-list-routing.module';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TasksIniciadasComponent } from './components/tasks-iniciadas/tasks-iniciadas.component';
import { TasksFinalizadasComponent } from './components/tasks-finalizadas/tasks-finalizadas.component';
import { HttpClientModule } from '@angular/common/http';
import { TolistComponent } from './components/tolist/tolist.component';


@NgModule({
  declarations: [
    TodoListComponent,
    TasksComponent,
    TasksIniciadasComponent,
    TasksFinalizadasComponent,
    TolistComponent
  ],
  imports: [
    CommonModule,
    TodoListRoutingModule,
    HttpClientModule
  ],
  exports:[
    TodoListComponent,
    TasksComponent,
    TasksIniciadasComponent,
    TasksFinalizadasComponent
  ]
})
export class TodoListModule { }

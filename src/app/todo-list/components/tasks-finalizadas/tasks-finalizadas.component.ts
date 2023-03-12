import { Component,OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Task } from '../../todoModel.db';

@Component({
  selector: 'app-tasks-finalizadas',
  templateUrl: './tasks-finalizadas.component.html',
  styleUrls: ['./tasks-finalizadas.component.css']
})
export class TasksFinalizadasComponent implements OnInit {
  taskLists:Task[]=[];
  constructor(private service: TodoService) {}
  ngOnInit(): void {
    this.service.getTodoList$.subscribe(res=>{
      this.taskLists=res
    });
  }
}

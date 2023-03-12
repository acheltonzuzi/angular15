import { Component,OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Task } from '../../todoModel.db';

@Component({
  selector: 'app-tasks-iniciadas',
  templateUrl: './tasks-iniciadas.component.html',
  styleUrls: ['./tasks-iniciadas.component.css']
})
export class TasksIniciadasComponent implements OnInit {
  taskLists:Task[]=[];
  constructor(private service: TodoService) {}
  ngOnInit(): void {
    this.service.getTodoList$.subscribe(res=>{
      this.taskLists=res
    });
  }
}

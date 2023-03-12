import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoService } from '../../services/todo.service';
import { Task } from '../../todoModel.db';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  taskLists:Task[]=[];
  constructor(private service: TodoService) {}
  ngOnInit(): void {
    this.service.getTodoList$.subscribe(res=>{
      this.taskLists=res
    });
  }
}

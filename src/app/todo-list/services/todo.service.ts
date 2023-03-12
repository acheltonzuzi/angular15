import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../todoModel.db';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }
  getTodoList$:Observable<Task[]>=this.http.get<Task[]>('http://localhost:3000/tasks');
  /* getTodoList():Observable<Task[]>{
    return this.http.get<Task[]>("http://localhost:3000/tasks")
  } */

}

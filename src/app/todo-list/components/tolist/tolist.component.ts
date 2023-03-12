import { Component, Input } from '@angular/core';
import { Task } from '../../todoModel.db';

@Component({
  selector: 'app-tolist',
  templateUrl: './tolist.component.html',
  styleUrls: ['./tolist.component.css']
})
export class TolistComponent {
  @Input()
  list: Task[]=[];
}

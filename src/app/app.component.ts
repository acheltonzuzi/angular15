import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'crud';
  minhaObservable(nome: string): Observable<string> {
    return new Observable((Subscriber) => {
      Subscriber.next('ola');
      Subscriber.next('ola de novo');
      Subscriber.next('ola 3 vezes');
    });
  }
  ngOnInit(): void {
    this.minhaObservable('').subscribe((res) => {
      console.log(res);
    });
  }
}

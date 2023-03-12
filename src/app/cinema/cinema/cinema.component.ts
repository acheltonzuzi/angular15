import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css'],
  
})
export class CinemaComponent {
  constructor(private router:Router){

  }
  editar(){
    this.router.navigate(['editar/',1]);
  }
}

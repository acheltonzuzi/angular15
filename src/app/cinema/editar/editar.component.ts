import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  constructor(private router:Router,private activate:ActivatedRoute){}
  id:any;
  voltar(){
    this.router.navigate(['cinema'])
  }
  ngOnInit(): void {
    this.id=this.activate.snapshot.paramMap.get('id');
  }
}

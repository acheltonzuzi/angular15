import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Usuario } from './models/usuario';
@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css'],
})
export class ReactiveComponent {
  constructor(private fb: FormBuilder) {}
  usuario!:Usuario
  Formulario = this.fb.group({
    nome: ['',[Validators.required,Validators.minLength(8)]],
    email: [''],
    cpf: [''], 
    senha: [''],
  });

  submeter() {
    this.usuario=Object.assign({},this.usuario,this.Formulario.value)
    console.log(this.usuario); 
  }
  get nome(){
    return this.Formulario.get('nome')
  }
  get email(){
    return this.Formulario.get('email')
  }
  get cpf(){
    return this.Formulario.get('cpf')
  }
  get senha(){
    return this.Formulario.get('senha')
  }
  
  

}

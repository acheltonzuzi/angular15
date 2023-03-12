import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent {
@Input() nome!:string
@Output() salvar:EventEmitter<string>=new EventEmitter()


emitir(nome:string){
  this.salvar.emit(nome)
}
}

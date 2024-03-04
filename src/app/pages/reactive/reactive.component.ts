import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {

  forma!: FormGroup;

  constructor(private fb:FormBuilder){
  this.crearFormulario();
  }

  crearFormulario(){
    this.forma = this.fb.group({
    nombre:['brigitte'],
    apellido:['padilla'],
    correo:['brillo@gmail.com']
  });
  }

  guardar(){
    console.log(this.forma);
  }



}

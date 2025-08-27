import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, model, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { inject, Injectable } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MiembrosService } from '../../Service/miembros.service';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent implements OnInit{
service = inject(MiembrosService);
provincias!: any[];
arrayprovincias: any[] = [
  "Alma Rosa 1",
  "Alma Rosa 2",
  "Los mina",
  "Villa duarte",
  "Cancino",
  "Mendoza",
  "Los frailes",
  "Boca chica"
];


usuariosform = new FormGroup({
  idPersona: new FormControl(0),
  nombre: new FormControl(""),
  telefono: new FormControl(""),
  direccion: new FormControl(''),
  cedula: new FormControl("",[Validators.required,Validators.minLength(11)]),
  provincia: new FormControl('Elija la provincia'),
})
ngOnInit(): void {
/*  this.service.getprovincias().subscribe(p => {
    this.provincias = p;
  })*/
}
guardar(){
  const {nombre,telefono,direccion,cedula,provincia} = this.usuariosform.value;
  if(!nombre || !telefono || !direccion || !cedula || !provincia){
    this.service.warning("Todos los campos son requeridos","Error","red");
    return;
  }
  if(cedula.length < 11){
  this.service.warning("Error","El campo cedula requiere 11 caracteres!","red");
  return;
  }
  if(!cedula.includes('-')){
      this.service.warning("El campo cedula debe incluir guion","Ejemplo: -","red");
    return;
  }
  const formulario = this.usuariosform.value;
  this.service.postpersonas(formulario).subscribe(() =>{
    this.service.warning("Datos enviados exitosamente!","Gracias!","green");
    this.usuariosform.reset();
    this.usuariosform.get('provincia')?.setValue('Elija la provincia');
  })
}
}

import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-formreactivo',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formreactivo.component.html',
  styleUrl: './formreactivo.component.css'
})
export class FormreactivoComponent {
  registroForm = new FormGroup({
    nombre: new FormControl('José', Validators.required),
    apellidos: new FormControl('', Validators.required),
    pais: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
    codigoTelefono: new FormControl('', Validators.required),
    sexo: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    provincia: new FormControl('', Validators.required),
    aceptarWhatsapp: new FormControl(false),
    direccion: new FormControl('', Validators.required),
    fechaNacimiento: new FormControl('', Validators.required)
  });

  constructor() { }

  onSubmit() {
    if (this.registroForm.valid) {
      console.log(this.registroForm.value);
      // Lógica para enviar el formulario
    } else {
      alert('Por favor, complete el formulario correctamente.');
    }
  }
}

import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registro-form.component.html',
  styleUrl: './registro-form.component.css'
})
export class RegistroFormComponent {
  registroForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellidos: new FormControl('', Validators.required),
    pais: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
    codigoTelefono: new FormControl('', Validators.required),
    sexo: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    provincia: new FormControl('', Validators.required),
    aceptarWhatsapp: new FormControl(false)
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

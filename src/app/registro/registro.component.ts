import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  registro = {
    nombre: '',
    apellidos: '',
    pais: '',
    telefono: '',
    codigoTelefono: '',
    sexo: '',
    email: '',
    provincia: '',
    aceptarWhatsapp: false
  };

  onSubmit() {
    console.log(this.registro);
    // Lógica para enviar el formulario
  }
}
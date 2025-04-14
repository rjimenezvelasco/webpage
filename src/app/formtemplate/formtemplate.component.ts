import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-formtemplate',
  imports: [FormsModule, CommonModule],
  templateUrl: './formtemplate.component.html',
  styleUrl: './formtemplate.component.css'
})
export class FormtemplateComponent {
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

import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  pizzas = [
    {
      name: 'Pizza de pepperoni',
      description: 'Clásica pizza con salsa de tomate, queso mozzarella y pepperoni.',
      image: 'assets/margherita.jpg',
    },
    {
      name: 'Pizza de jamón y queso',
      description: 'Pizza con salsa de tomate, queso mozzarella, jamón y champiñones.',
      image: 'assets/marinara.jpg',
    },
    {
      name: 'Pizza vegetariana',
      description: 'Pizza con salsa de tomate, queso mozzarella, pimientos, cebollas y aceitunas.',
      image: 'assets/capricciosa.jpg',
    },
  ];

  verMas(pizza: any) {
    // Lógica para ver más detalles de la pizza
    console.log('Ver más detalles de:', pizza);
  }
}
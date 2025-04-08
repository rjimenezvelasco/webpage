import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CarroselComponent } from "./carrosel/carrosel.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, CarroselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'webpage';
}

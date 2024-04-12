import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaPersonasComponent } from './lista-personas/lista-personas.component';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, ListaPersonasComponent]
})
export class AppComponent {
  title = 'CQCIAS - Recursos Humanos';
}

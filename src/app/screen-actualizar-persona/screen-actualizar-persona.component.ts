import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import { PersonaService } from '../persona.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-screen-actualizar-persona',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './screen-actualizar-persona.component.html',
  styleUrl: './screen-actualizar-persona.component.css',
})
export class ScreenActualizarPersonaComponent implements OnInit {
  // Declaración de variables
  id: number;
  persona: Persona = new Persona();
  // Constructor
  constructor(
    private personaService: PersonaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // guardamos lo que tenemos como parametro en la URL: es decir el ID
    this.id = this.route.snapshot.params['id'];

    // Obtenemos los datos de las personas
    this.personaService.obtenerPersonaPorId(this.id).subscribe(
      (dato) => {
        this.persona = dato;
      },
      (error) => console.log(error)
    );
  }
  goingToListPerson() {
    alert('Persona actualizada!');
    this.router.navigate(['/personas']);
  }
  // Acciones que se ejecutará desde el Front
  updatePersona() {
    // Si el checkbox no está marcado, establece el estado en '0'
    if (!this.persona.estatus) {
      this.persona.estatus = '0';
    } else {
      this.persona.estatus = '1';
    }
    this.personaService.actualizarPersona(this.id, this.persona).subscribe(
      (dato) => {
        this.goingToListPerson();
      },
      (error) => console.log(error)
    );
  }
}

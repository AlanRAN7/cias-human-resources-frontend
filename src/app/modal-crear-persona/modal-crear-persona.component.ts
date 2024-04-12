import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Persona } from '../persona';
import { PersonaService } from '../persona.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-crear-persona',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './modal-crear-persona.component.html',
  styleUrl: './modal-crear-persona.component.css',
})
export class ModalCrearPersonaComponent implements OnInit {
  persona: Persona = new Persona();
  constructor(
    private personaServicio: PersonaService,
    private router: Router
  ) {}
  ngOnInit(): void {
    console.log(this.persona);
  }

  guardarPersona() {
    if (!this.persona.estatus) {
      this.persona.estatus = '0';
    } else {
      this.persona.estatus = '1';
    }
    this.personaServicio.registrarPersona(this.persona).subscribe(
      (data) => {
        console.log(data);
        // Mostrar alert dependiendo del resultado
        if (data) {
          this.gointToList();
        } else {
          alert('No se puede almacenar usuario!');
        }
      },
      (error) => {
        console.log(error);
        alert('Ocurrió un error al intentar registrar el usuario.');
      }
    );
  }

  gointToList() {
    alert('Persona registrada!');
    window.location.reload();
  }

  onSubmit() {
    this.guardarPersona();
  }

  onChange(event: any) {
    if (event.target) {
      this.persona.estatus = event.target.checked ? '1' : '0';
    }
  }
}

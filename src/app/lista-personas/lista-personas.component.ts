import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import { NgFor } from '@angular/common';
import { PersonaService } from '../persona.service';
import { ModalCrearPersonaComponent } from '../modal-crear-persona/modal-crear-persona.component';
import { Router } from '@angular/router';
import { BehaviorSubject, combineLatest, map, scan } from 'rxjs';
import { ModalPersonaInformacionComponent } from '../modal-persona-informacion/modal-persona-informacion.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  standalone: true,
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrl: './lista-personas.component.css',
  imports: [NgFor, ModalPersonaInformacionComponent, ModalCrearPersonaComponent],
})
export class ListaPersonasComponent implements OnInit {
  personas: Persona[];
  nombreFilter: string;
  primerApellidoFilter: string;
  segundoApellidoFilter: string;
  telefonoFilter: string;
  sortColumn: keyof Persona | string;
  isAscendingOrder: boolean = true;

  message : number;
  // Inyectamos el servicio
  constructor(
    private personaServicio: PersonaService,
    private router: Router,
    private modalService: NgbModal,
  ) {}
  ngOnInit(): void {
    this.obtenerEmpleados();
  }
  private obtenerEmpleados() {
    this.personaServicio.getListFromPeople().subscribe((data) => {
      this.personas = data;
    });
  }
  actualizarPersona(id: number) {
    console.log(id);
    this.router.navigate(['actualizar-persona', id]);
  }

  eliminarPersona(id: number) {
    console.log(id);
    this.personaServicio.eliminarPersona(id).subscribe((data) => {
      console.log(data);
      this.obtenerEmpleados();
    });
  }
  sort(attribute: keyof Persona): void {
    if (this.sortColumn === attribute) {
      this.isAscendingOrder = !this.isAscendingOrder;
    } else {
      this.sortColumn = attribute;
      this.isAscendingOrder = true;
    }

    this.personas.sort((a, b) => {
      const aValue = a[attribute];
      const bValue = b[attribute];

      if (typeof aValue !== 'string' || typeof bValue !== 'string') {
        return 0; // No se puede comparar si alguno de los valores no es un string
      }

      if (this.isAscendingOrder) {
        return aValue.localeCompare(bValue);
      } else {
        return bValue.localeCompare(aValue);
      }
    });
  }
  mostrarDetalles(persona: Persona) {
    const modalRef = this.modalService.open(ModalPersonaInformacionComponent);
    modalRef.componentInstance.persona = persona;
  }
}

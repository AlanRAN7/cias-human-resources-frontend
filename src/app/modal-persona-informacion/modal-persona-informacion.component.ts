import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Persona } from '../persona';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-persona-informacion',
  standalone: true,
  imports: [],
  templateUrl: './modal-persona-informacion.component.html',
  styleUrl: './modal-persona-informacion.component.css',
})
export class ModalPersonaInformacionComponent implements OnChanges {
  @Input() persona: Persona;
  nombre: string;
  primerApellido: string;
  segundoApellido: string;
  telefono: string;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['persona'] && !changes['persona'].firstChange) {
      // Si la persona cambia y no es el primer cambio, actualizar el modal
      this.actualizarDatosModal();
    }
  }

  private actualizarDatosModal(): void {
    // Actualizar los datos del modal con la nueva persona seleccionada
    this.nombre = this.persona.nombre;
    this.primerApellido = this.persona.primer_apellido;
    this.segundoApellido = this.persona.segundo_apellido;
    this.telefono = this.persona.telefono;
  }

  cerrarModal(): void {
    // Cerrar el modal
    this.activeModal.close();
  }
}

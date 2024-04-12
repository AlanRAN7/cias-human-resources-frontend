import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from './persona';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  // URL de la API donde se obtienen todos los empleados del backend
  private baseURL = 'http://localhost:8080/api/v1/persona';
  constructor(private httpClient: HttpClient) {}
  
  // Obtener la lista de las personas
  getListFromPeople(): Observable<Persona[]> {
    return this.httpClient.get<Persona[]>(`${this.baseURL}`);
  }

  // Crear persona
  registrarPersona(persona: Persona) : Observable<Object>{
    persona.fechaIns = new Date(); // Asignamos la fecha de creación
    persona.fechaUpd = null; // Asignamos la fecha de actualización como nula
    return this.httpClient.post(`${this.baseURL}`, persona);
  }

  // Actualizar a la persona
  actualizarPersona(id: number, persona: Persona) : Observable<Object>{
    persona.fechaUpd = new Date(); // Asignamos la fecha de actualización
    return this.httpClient.put(`${this.baseURL}/${id}`, persona);
  }

  // Obtener datos de la persona por ID
  obtenerPersonaPorId(id: number) : Observable<Persona>{
    return this.httpClient.get<Persona>(`${this.baseURL}/${id}`);
  }

  // Eliminar a la persona
  eliminarPersona(id : number) : Observable<Object>{
 return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}

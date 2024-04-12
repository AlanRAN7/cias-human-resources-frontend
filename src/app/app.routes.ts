import { Routes } from '@angular/router';
import { ListaPersonasComponent } from './lista-personas/lista-personas.component';
import { ScreenActualizarPersonaComponent } from './screen-actualizar-persona/screen-actualizar-persona.component';

export const routes: Routes = [
    {path: 'personas', component: ListaPersonasComponent},
    {path: '', redirectTo: '/personas', pathMatch: 'full'},
    // Borrar más tarde porque será un modal
    {path: 'actualizar-persona/:id', component : ScreenActualizarPersonaComponent}
];

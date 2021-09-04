import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacientesComponent } from './components/pacientes/pacientes.component';
import { AddPacienteComponent } from './components/pacientes/add-paciente/add-paciente.component';
import { EditPacienteComponent } from './components/pacientes/edit-paciente/edit-paciente.component';

const routes: Routes = [
  { path: '', component: PacientesComponent },
  { path: 'add', component: AddPacienteComponent },
  { path: 'edit/:id', component: EditPacienteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

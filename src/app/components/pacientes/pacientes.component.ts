import { Component, OnInit } from '@angular/core';
import { PacientesService } from '../../services/pacientes.service';
import { Paciente } from '../../model/paciente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {
  pacientes: Paciente[] = [];
  constructor(private pacientesService: PacientesService, private router: Router) { }

  ngOnInit(): void {
    this.getPacientes();
  }

  getPacientes(): void {
    this.pacientesService.getPacientes().subscribe(resp => {
      this.pacientes = resp
    })
  }

  eliminar(id: any) {
    this.pacientesService.deletePacientes(id).subscribe(resp => {
      this.getPacientes();
    })
  }

}

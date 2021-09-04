import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PacientesService } from '../../../services/pacientes.service';
import { Paciente } from '../../../model/paciente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-paciente',
  templateUrl: './add-paciente.component.html',
  styleUrls: ['./add-paciente.component.css']
})
export class AddPacienteComponent implements OnInit {

  pacienteForm: FormGroup;
  constructor(private pacienteService: PacientesService, private fb: FormBuilder, private router: Router) {

    this.pacienteForm = fb.group({
      nombres: ['', [Validators.required, Validators.minLength(4)]],
      apellidos: ['', [Validators.required, Validators.minLength(4)]],
      edad: ['', Validators.required],
      sexo: ['', Validators.required],
      dni: ['', Validators.required],
      tipo_sangre: ['', Validators.required],
      telefono: ['', Validators.required],
      correo: ['', Validators.required],
      direccion: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  guardar(): void {
    const paciente: Paciente = {
      nombres: this.pacienteForm.get('nombres')?.value,
      apellidos: this.pacienteForm.get('apellidos')?.value,
      edad: this.pacienteForm.get('edad')?.value,
      sexo: this.pacienteForm.get('sexo')?.value,
      dni: this.pacienteForm.get('dni')?.value,
      tipo_sangre: this.pacienteForm.get('tipo_sangre')?.value,
      telefono: this.pacienteForm.get('telefono')?.value,
      correo: this.pacienteForm.get('correo')?.value,
      direccion: this.pacienteForm.get('direccion')?.value,
    }
    this.pacienteService.addPaciente(paciente).subscribe(resp => {
      this.router.navigate(['/'])
    })
  }


}

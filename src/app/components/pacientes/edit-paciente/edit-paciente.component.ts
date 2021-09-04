import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PacientesService } from '../../../services/pacientes.service';
import { Paciente } from '../../../model/paciente';

@Component({
  selector: 'app-edit-paciente',
  templateUrl: './edit-paciente.component.html',
  styleUrls: ['./edit-paciente.component.css']
})
export class EditPacienteComponent implements OnInit {

  idPaciente: number;
  pacienteForm: FormGroup;
  constructor(private arouter: ActivatedRoute, private pacienteService: PacientesService, private router: Router, private fb: FormBuilder,) {
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
    this.idPaciente = +Number(this.arouter.snapshot.paramMap.get('id'))
  }

  ngOnInit(): void {
    this.editar()
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
    if (this.idPaciente !== null) {
      this.pacienteService.updatePacientes(this.idPaciente, paciente).subscribe(resp => {
        this.router.navigate(['/'])
      })
    }

  }

  editar() {
    if (this.idPaciente !== null) {
      this.pacienteService.getPaciente(this.idPaciente).subscribe(data => {
        this.pacienteForm.setValue({
          nombres: data.paciente.nombres,
          apellidos: data.paciente.apellidos,
          edad: data.paciente.edad,
          sexo: data.paciente.sexo,
          dni: data.paciente.dni,
          tipo_sangre: data.paciente.tipo_sangre,
          telefono: data.paciente.telefono,
          correo: data.paciente.correo,
          direccion: data.paciente.direccion,
        })
      })
    }
  }




}

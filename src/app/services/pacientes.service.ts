import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from '../model/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  constructor(private http: HttpClient) { }
  url = 'http://apipacientes.test/api';
  getPacientes(): Observable<any> {
    return this.http.get(`${this.url}/pacientes`)
  }

  getPaciente(id: number): Observable<any> {
    return this.http.get(`${this.url}/pacientes/${id}`)
  }


  updatePacientes(id: number, paciente: Paciente): Observable<any> {
    return this.http.put(`${this.url}/pacientes/${id}`, paciente)
  }

  deletePacientes(id: number): Observable<any> {
    return this.http.delete(`${this.url}/pacientes/${id}`)
  }

  addPaciente(paciente: Paciente): Observable<any> {
    return this.http.post(`${this.url}/pacientes`, paciente)
  }

}

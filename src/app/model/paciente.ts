export class Paciente {
    id?: number;
    nombres: string;
    apellidos: string;
    edad: string;
    sexo: string;
    dni: string;
    tipo_sangre: string;
    telefono: string;
    correo: string;
    direccion: string;

    constructor(

        nombres: string,
        apellidos: string,
        edad: string,
        sexo: string,
        dni: string,
        tipo_sangre: string,
        telefono: string,
        correo: string,
        direccion: string) {

        this.nombres = nombres;
        this.apellidos = apellidos;
        this.edad = edad;
        this.sexo = sexo;
        this.dni = dni;
        this.tipo_sangre = tipo_sangre;
        this.telefono = telefono;
        this.correo = correo;
        this.direccion = direccion;
    }
}
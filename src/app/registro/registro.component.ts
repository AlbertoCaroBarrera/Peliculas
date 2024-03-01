import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { apiService } from '../services/api.service';
import { RegistroService } from '../services/registro.service';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  nombre: string = "";
  email: string = "";
  password: string = "";
  password2: string = "";
  rol: string = "";
  clientes: any[] = [];

  constructor(private router: Router,
              private apiService: apiService,
              private registroService: RegistroService,
              private loginService: LoginService
              ) { }


  registroFormulario() {
    const datosRegistro = {
      username: this.nombre,
      email: this.email,
      password1: this.password,
      password2: this.password,
      rol: 2
    };

    this.registroService.registrarUsuario(datosRegistro)
      .subscribe(
        response => {
          console.log("datos");
          const datosLogin = {
            'usuario':datosRegistro['username'],
            'pass':datosRegistro['password1']
          }
          this.loginService.loginUsuario(datosLogin).subscribe(
              response => {
                this.router.navigate(['home']);
              },
              error => {
                console.log("error");
              }
          )
        },
        error => {
          console.log("error");
        }
      );
  }

}

import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { apiService } from '../services/api.service';
import { RegistroService } from '../services/registro.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  nombre: string = "";
  password: string = "";
  constructor(private router: Router,
    private apiService: apiService,
    private registroService: RegistroService,
    private loginService: LoginService
  ) { }

  loginFormulario() {
    const datosRegistro = {
      username: this.nombre,
      password1: this.password,
    };


    const datosLogin = {
      'usuario': datosRegistro['username'],
      'pass': datosRegistro['password1']
    }
    this.loginService.loginUsuario(datosLogin).subscribe(
      response => {
        this.router.navigate(['home']);
      },
      error => {
        console.log("error");
      }
    )

  }

}

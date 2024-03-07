import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { apiService } from '../services/api.service';
import { RegistroService } from '../services/registro.service';
import { LoginService } from '../services/login.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  nombre: string="";
  password:string="";
  constructor(private router: Router,
    private apiService: apiService,
    private registroService: RegistroService,
    private loginService: LoginService,
    private tokenService: TokenService
  ) { }

  loginFormulario() {

    const user = {usuario:this.nombre,pass:this.password}
    this.loginService.loginUsuario(user).subscribe((data)=>{
      this.tokenService.setToken(data.access_token);
      this.router.navigate(['home']);
    },error => {
      console.log(error);
    });

  }

}

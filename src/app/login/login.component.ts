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
  

}

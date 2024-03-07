import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { apiService } from '../services/api.service';
import { RegistroService } from '../services/registro.service';
import { LoginService } from '../services/login.service';
import { TokenService } from '../services/token.service';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  public FormularioRegistro! : FormGroup;

  nombre: string = "";
  email: string = "";
  password: string = "";
  password2: string = "";
  rol: string = "";
  clientes: any[] = [];
  usuarioExistente: boolean = false;

  constructor(private router: Router,
              private apiService: apiService,
              private registroService: RegistroService,
              private loginService: LoginService,
              private tokenService: TokenService,
              public fb: FormBuilder,
              ) {
                this.FormularioRegistro = this.fb.group({
                  nombre: ['', Validators.required],
                  email: ['', [Validators.required, Validators.email]],
                  password: ['', Validators.required],
                  password2: ['', Validators.required]
                }, { validator: this.ValidadorContraseñas });
              }
  ngOnInit(): void {

  }

  ValidadorContraseñas(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const password2 = formGroup.get('password2')?.value;

    if (password !== password2) {
      formGroup.get('password2')?.setErrors({ passwordMismatch: true });
    } else {
      formGroup.get('password2')?.setErrors(null);
    }
  }

  registroFormulario() {
    if (this.FormularioRegistro.valid) {
    const formulario = this.FormularioRegistro.value;
    const datosRegistro = {
      username: formulario.nombre,
      email: formulario.email,
      password1: formulario.password,
      password2: formulario.password2,
      rol: 2
    };

    this.registroService.registrarUsuario(datosRegistro)
      .subscribe(
        response => {
          const datosLogin = {
            'usuario':datosRegistro['username'],
            'pass':datosRegistro['password1']
          }
          this.loginService.loginUsuario(datosLogin).subscribe(
              response => {
                this.tokenService.setToken(response.access_token);
                this.router.navigate(['home']);
              },
              error => {
                console.log(error);
              }
          )
        },

        error => {
          this.usuarioExistente=true
        }
      );
  }

}}

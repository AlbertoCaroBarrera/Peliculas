import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { apiService } from '../services/api.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  nombre: string = "";
  email: string = "";
  password: string = "";
  rol: string = "";
  clientes: any[] = [];
  constructor(private router: Router,private apiService: apiService) { }


  registroFormulario() {
    const data = {
      nombre: this.nombre,
      email: this.email,
      password: this.password,
      rol: this.rol
    };
  }
  ngOnInit(): void {
    this.obtenerClientes();
  }
  
  obtenerClientes(): void {
    this.apiService.getAll()
      .subscribe(clientes => this.clientes = clientes);
  }
}

import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { apiService } from '../services/api.service';
import { LoginService } from '../services/login.service';




@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss',
  providers: [LoginService]
})
export class AppHeaderComponent {
  terminoBusqueda: string = '';
  constructor(private router: Router,private apiService: apiService,private loginService: LoginService) { }


  buscar() {
    this.apiService.setTerminoBusqueda(this.terminoBusqueda);
    this.router.navigate(['/buscador']);
  }

}

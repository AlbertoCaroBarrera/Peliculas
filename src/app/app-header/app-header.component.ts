import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { apiService } from '../services/api.service';


@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss'
})
export class AppHeaderComponent {
  terminoBusqueda: string = '';
  constructor(private router: Router,private apiService: apiService) { }


  buscar() {
    this.apiService.setTerminoBusqueda(this.terminoBusqueda);
    console.log(this.terminoBusqueda)
    this.router.navigate(['/buscador']);
  }
}

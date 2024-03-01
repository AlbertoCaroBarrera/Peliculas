
import { Component } from '@angular/core';
import { apiService } from '../services/api.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {
  elementos: any[] = [];
  elementosFiltrados: any[] = [];
  terminoBusqueda!: string;
  
  constructor(private apiService: apiService) {}

  ngOnInit(): void {
    this.terminoBusqueda = this.apiService.terminoBusqueda;
    this.getMovies(this.terminoBusqueda); 
  }

  ngDoCheck () {
    if(this.terminoBusqueda != this.apiService.terminoBusqueda){
      this.terminoBusqueda = this.apiService.terminoBusqueda;
      this.getMovies(this.terminoBusqueda);
    }
  }

  getMovies(query: string): void {
    this.apiService.getMovies(query).subscribe(data => {
      this.elementosFiltrados = data.results;
    }, error => {
      console.error(error);
    });
  }
}

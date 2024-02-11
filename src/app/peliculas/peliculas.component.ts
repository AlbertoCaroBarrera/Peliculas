import { Component,OnInit  } from '@angular/core';
import { apiService } from '../services/api.service';
@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent implements OnInit {
  popularMovies: any[] = [];
  
  constructor(private apiService: apiService) { 

  }

  ngOnInit(): void {
    this.loadPopularMovies();
  }

  loadPopularMovies() {
    this.apiService.getPopularMovies().subscribe((data: any) => {
      this.popularMovies = data.results.slice(0, 15);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { apiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  movie: any;

  constructor(private apiService: apiService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const movieId = params['movie_id']; // Asegúrate de que el nombre del parámetro coincida con el definido en tu archivo de rutas

      this.apiService.getFilm(movieId).subscribe((data: any) => {
        this.movie = data;
      });
    });
  }

  addToWatchlist(movieId: number): void {
    this.apiService.addMovieToWatchlist(movieId)
  };
}


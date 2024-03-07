import { Component, OnInit, SimpleChange } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { apiService } from '../services/api.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  movie: any;
  watchlist: any[] = [];
  inWatchlist: boolean = false;

  constructor(
    private apiService: apiService,
    private route: ActivatedRoute,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const movieId = params['movie_id'];

      this.apiService.getFilm(movieId).subscribe((data: any) => {
        this.movie = data;
      });

      this.getWatchlist().then(() => {
        if (movieId) {
          this.inWatchlist = this.watchlist.some(movie => movie.id === parseInt(movieId));
        }
      });
    });
  }

  async getWatchlist() {
    try {
      const data = await this.apiService.getWatchlist();
      this.watchlist = data.results;
      console.log('Watchlist:', this.watchlist);
    } catch (error) {
      console.error('Error al obtener la watchlist:', error);
    }
  }

  addToWatchlist(movieId: number): void {
    this.apiService.addMovieToWatchlist(movieId);
    window.location.reload();
  }

  removeFromPending(movieId: number): void {
    this.apiService.removeFromWatchlist(movieId).subscribe(() => {
      this.getWatchlist();
      window.location.reload();
    });
  }

  tieneToken() {
    return this.tokenService.getToken() !== null;
  }
}

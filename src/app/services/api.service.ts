import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class apiService {
  apiUrlPopular = 'https://api.themoviedb.org/3/movie/popular?api_key=665eddc29536d1ffc4e5fdace47ae8c7';
  apiKey = '665eddc29536d1ffc4e5fdace47ae8c7';
  apiFilm = 'https://api.themoviedb.org/3/movie/';

  constructor(private http: HttpClient) { }

  getPopularMovies3() {
    const url = `${this.apiUrlPopular}&api_key=${this.apiKey}`;
    return this.http.get(url);
  }


  getPopularMovies() {
    const url = `${this.apiUrlPopular}&api_key=${this.apiKey}`;
    return this.http.get(url);
  }


  getFilm(movie_id: number) {
    const url = `${this.apiFilm}${movie_id}?api_key=${this.apiKey}`;
    return this.http.get(url);
  }
  
}
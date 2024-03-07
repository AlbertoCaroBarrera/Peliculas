import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

  @Injectable({
    providedIn: 'root'
  })
  export class apiService {
    apiUrl = 'https://api.themoviedb.org/3';
    apiUrlPopular = 'https://api.themoviedb.org/3/movie/top_rated?api_key=665eddc29536d1ffc4e5fdace47ae8c7';
    apiKey = '665eddc29536d1ffc4e5fdace47ae8c7';
    apiFilm = 'https://api.themoviedb.org/3/movie/';
    terminoBusqueda: string = '';
    token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjVlZGRjMjk1MzZkMWZmYzRlNWZkYWNlNDdhZThjNyIsInN1YiI6IjY1OGFiMzFiYjdiNjlkMDk2MjZkZTczOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Rufsppd2z4JY3JZaxJZDpC3FBWVswXCeqYoRkFl09ss';

    constructor(private http: HttpClient) { }




    getPopularMovies() {
      const url = `${this.apiUrlPopular}&api_key=${this.apiKey}`;
      return this.http.get(url);
    }


    getFilm(movie_id: number) {
      const url = `${this.apiFilm}${movie_id}?api_key=${this.apiKey}`;
      return this.http.get(url);
    }
    
    setTerminoBusqueda(termino: string) {
      this.terminoBusqueda = termino;
    }

    getTerminoBusqueda() {
      return this.terminoBusqueda;
    }

    getMovies(query: string): Observable<any> {
      const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false`;
      return this.http.get<any>(url, {
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${this.token}`
        }
      });
    }

    async addMovieToWatchlist(movieId: number) {
      try {
        const options = {
          method: 'POST',
          headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: `Bearer ${this.token}`
          },
          body: JSON.stringify({ media_type: 'movie', media_id: movieId, watchlist: true })
        };
  
        const response = await fetch('https://api.themoviedb.org/3/account/20862103/watchlist', options);
  
        if (!response.ok) {
          throw new Error('Failed to add to watchlist');
        }
        alert('La película ha sido añadida a tu watchlist.');
      } catch (error) {
        console.error('Error al agregar a la watchlist:', error);
        throw error;
      }
    }

    async getWatchlist() {
      try {
  
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${this.token}`
          }
        };
  
        const response = await fetch('https://api.themoviedb.org/3/account/null/watchlist/movies?language=en-US&page=1&sort_by=created_at.asc', options);
  
        if (!response.ok) {
          throw new Error('Failed to fetch watchlist');
        }

        return await response.json();
      } catch (error) {
        console.error('Error al obtener la watchlist:', error);
        throw error; 
      }


  }

  removeFromWatchlist(movieId: number): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.token}`
      })
    };

    const body = {
      media_type: 'movie',
      media_id: movieId,
      watchlist: false
    };

    const url = `${this.apiUrl}/account/20862103/watchlist?api_key=${this.apiKey}`;
    return this.http.post<any>(url, body, options);
  }

}
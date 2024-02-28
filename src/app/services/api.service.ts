
  import { Injectable } from '@angular/core';
  import { HttpClient,HttpHeaders  } from '@angular/common/http';
  import { Observable } from 'rxjs';


  const baseUrl = `http://127.0.0.1:8080/api/v1/`;
  const token = 'Vb4LxGBiGQsUUIx5b85k9gEXol0Srr';
  const headers = {
    'Authorization': `Bearer ${token}`
  }
  @Injectable({
    providedIn: 'root'
  })
  export class apiService {
    apiUrlPopular = 'https://api.themoviedb.org/3/movie/top_rated?api_key=665eddc29536d1ffc4e5fdace47ae8c7';
    apiKey = '665eddc29536d1ffc4e5fdace47ae8c7';
    apiFilm = 'https://api.themoviedb.org/3/movie/';
    terminoBusqueda: string = '';

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
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjVlZGRjMjk1MzZkMWZmYzRlNWZkYWNlNDdhZThjNyIsInN1YiI6IjY1OGFiMzFiYjdiNjlkMDk2MjZkZTczOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Rufsppd2z4JY3JZaxJZDpC3FBWVswXCeqYoRkFl09ss'
        }
      });
    }


    getAll(): Observable<any[]> {
      return this.http.get<any[]>(`${baseUrl}clientes`,{headers});
    }

  }
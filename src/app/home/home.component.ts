import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiService } from '../services/api.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies: any[] = [];
  rateds: any[] = [];
  NombreUsuario:string ="";
  
  constructor(private http: HttpClient, 
              private apiService: apiService,
              public TokenService: TokenService
              ) { } 

  ngOnInit(): void {
    this.apiService.getPopularMovies().subscribe((data: any) => {
      this.movies = data.results.slice(0, 3);
      this.getUserLogged();
    });
  
  }
  getUserLogged() {
    if (this.TokenService.getToken()){
      this.TokenService.getUserLogged().subscribe((user) => {
        
        this.NombreUsuario = user.username
      });
    }
}


}
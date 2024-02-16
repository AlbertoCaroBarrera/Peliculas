import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies: any[] = [];
  rateds: any[] = [];
  
  constructor(private http: HttpClient, private apiService: apiService) { } 

  ngOnInit(): void {
    this.apiService.getPopularMovies().subscribe((data: any) => {
      this.movies = data.results.slice(0, 3);
    });

  }
}
import { Component } from '@angular/core';
import { apiService } from '../services/api.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrl: './watchlist.component.css'
})
export class WatchlistComponent {
  watchlist: any[] = [];

  constructor(private apiService: apiService) { }

  ngOnInit(): void {
    this.getWatchlist();
  }

  getWatchlist() {
    this.apiService.getWatchlist().then((data) => {
      this.watchlist = data.results;
      console.log('Watchlist:', this.watchlist);
    }).catch(error => {
      console.error('Error al obtener la watchlist:', error);
    });
  }

  removeFromPending(movieId: number): void {
    this.apiService.removeFromWatchlist(movieId).subscribe(() => {
      this.getWatchlist();
    });
  }

  truncateOverview(text: string): string {
    if (text.length > 90) {
      return text.slice(0, 90) + '...';
    }
    return text;
  }

}

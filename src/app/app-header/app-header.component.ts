import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { apiService } from '../services/api.service';
import { TokenService } from '../services/token.service';


@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss',
})
export class AppHeaderComponent {
  terminoBusqueda: string = '';
  NombreUsuario:string = '';
  constructor(private router: Router,
              private apiService: apiService,
              private tokenService: TokenService,
              ) { }


  ngOnInit(): void {
      this.getUserLogged();
    };

  ngDoCheck(): void {
    this.getUserLogged();
  }

  buscar() {
    this.apiService.setTerminoBusqueda(this.terminoBusqueda);
    this.router.navigate(['/buscador']);
  }

  tieneToken() {
    
    return this.tokenService.getToken();
  }

  logout() {
    this.tokenService.logout();
  }

  getUserLogged() {
    if (this.tokenService.getToken()){
      this.tokenService.getUserLogged().subscribe((user) => {
        this.NombreUsuario = user.username
      });
    }
}
}

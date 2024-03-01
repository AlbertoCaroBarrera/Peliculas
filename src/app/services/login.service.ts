import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private token_url = 'http://127.0.0.1:8080/oauth2/token/';

  

  constructor(private http: HttpClient) { }

  loginUsuario(datosLogin: any): Observable<any> {
    const datosObtenerToken = {
      grant_type: 'password'  ,
      'username': datosLogin['usuario'],
      'password': datosLogin['pass'],
      'client_id': 'admin',
      'client_secret': 'admin',
    };

    return this.http.post<any>(this.token_url, datosLogin)
      .pipe(
        catchError(error => {
          throw error;
        })
      );
  }


}

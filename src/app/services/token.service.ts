import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private apiUrl = 'http://albertwok.pythonanywhere.com/api/v1/usuario/token/';
  //private apiUrl = 'http://127.0.0.1:8080/api/v1/usuario/token/';
  

  constructor(private http: HttpClient, private cookies: CookieService) { }

  setToken(token:string) {
    this.cookies.set("token", token);
  }
  getToken() {
    return this.cookies.get("token");
  }

  getUserLogged(): Observable<any> {
    const token = this.getToken();
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });

    return this.http.get<any>(`${this.apiUrl}`+`${token}`, { headers })
      .pipe(
        catchError(error => {
          throw error;
        })
      );
  }

  logout() {
    this.cookies.delete("token");
  }


  
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { FilmComponent } from './film/film.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { WatchlistComponent } from './watchlist/watchlist.component';


const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'home', component: HomeComponent }, 
  {path: 'peliculas', component: PeliculasComponent},
  {path: 'film/:movie_id',component: FilmComponent},
  {path: 'buscador',component: BuscadorComponent},
  {path: 'registro', component: RegistroComponent},
  {path: "login", component: LoginComponent},
  {path: "watchlist", component: WatchlistComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Injectable } from '@angular/core';
import { Pelicula } from '../interfaces/pelicula';


@Injectable({
  providedIn: 'root'
})
export class GestorpeliculasService {
  public peliculas:Pelicula[]=[];
  constructor() { }
  agregarPelicula(nuevaPelicula:Pelicula){
    this.peliculas.push(nuevaPelicula);

  }
  eliminarPelicula(titulo:string){
    //TODO programar
  }
  modificarPelicula(titulo:string, peliculaModificada:Pelicula){
    //TODO programar
  }
}

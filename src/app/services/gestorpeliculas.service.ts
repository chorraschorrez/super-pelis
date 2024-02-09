import { Injectable } from '@angular/core';
import { Pelicula } from '../interfaces/pelicula';


@Injectable({
  providedIn: 'root'
})
export class GestorpeliculasService {
  private peliculas:Pelicula[]=[];
  peliculasAlmacenadas:string|null;
  constructor() { 
    this.peliculasAlmacenadas = localStorage.getItem("peliculas");
    if ( this.peliculasAlmacenadas!=null ){
      this.peliculas = JSON.parse(this.peliculasAlmacenadas);
    }
  }
  getPeliculas(){
    return this.peliculas;
  }
  agregarPelicula(nuevaPelicula:Pelicula){
    this.peliculas.push(nuevaPelicula);
    guardarPeliculas(this.peliculas);
  }
  eliminarPelicula(titulo:string){
    //TODO programar
  }
  modificarPelicula(titulo:string, peliculaModificada:Pelicula){
    //TODO programar
  }
}

function guardarPeliculas(peliculas:Pelicula[]) {
  localStorage.setItem("peliculas",JSON.stringify(peliculas));
  
}
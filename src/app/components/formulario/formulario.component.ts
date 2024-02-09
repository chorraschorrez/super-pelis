import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pelicula } from '../../interfaces/pelicula';
import { GestorpeliculasService } from '../../services/gestorpeliculas.service';
import { CommonModule } from '@angular/common';  // para ver el json visible, no el bulto Object entre corchetes


@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
    pelicula:Pelicula = {};
    constructor(private servicioPeliculas:GestorpeliculasService){
      this.pelicula
    }

    agregarPelicula(){
      console.log("Agregando película...");
      // Obtenemos el servicio vía inyección (único para todos los componentes de ésta aplicación) 
      this.servicioPeliculas.agregarPelicula({...this.pelicula});  // "..." es notación de Angular para hacer copia del objeto y no apunte al real
    }
}

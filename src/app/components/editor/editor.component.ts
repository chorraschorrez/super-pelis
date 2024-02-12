import { Component } from '@angular/core';
import { GestorpeliculasService } from '../../services/gestorpeliculas.service';
import { Pelicula } from '../../interfaces/pelicula';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css'
})
export class EditorComponent {
  
  public listaPeliculas:Pelicula[] = [];
  //inyecto servicio
  constructor (private gps:GestorpeliculasService){
    this.listaPeliculas=this.gps.getPeliculas();
  }
}

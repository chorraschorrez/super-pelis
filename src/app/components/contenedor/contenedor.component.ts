import { Component } from '@angular/core';
import { FormularioComponent } from "../formulario/formulario.component";
import { ListadoPelisComponent } from "../listado-pelis/listado-pelis.component";

@Component({
    selector: 'app-contenedor',
    standalone: true,
    templateUrl: './contenedor.component.html',
    styleUrl: './contenedor.component.css',
    imports: [FormularioComponent, ListadoPelisComponent]
})
export class ContenedorComponent {

}

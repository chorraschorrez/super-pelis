import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormularioComponent } from "./components/formulario/formulario.component";
import { ListadoPelisComponent } from "./components/listado-pelis/listado-pelis.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, FormularioComponent, ListadoPelisComponent, RouterModule]
})
export class AppComponent {
  title = 'super-pelis';
}

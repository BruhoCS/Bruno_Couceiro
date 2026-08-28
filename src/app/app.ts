import { Component } from '@angular/core';
import { NavegacionComponent } from './layouts/navegacion-component/navegacion-component';
import { PieComponente } from './layouts/pie-componente/pie-componente';
import { ComponentesGenerales } from './componentes-generales/componentes-generales';

@Component({
  standalone:true,
  selector: 'app-root',
  imports: [NavegacionComponent, PieComponente, ComponentesGenerales],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {

}

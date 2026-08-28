import { Routes } from '@angular/router';
import { InicioComponente } from './componentes-generales/inicio-componente/inicio-componente';
import { Proyectos } from './componentes-generales/proyectos/proyectos';
import { SobremiComponente } from './componentes-generales/sobremi-componente/sobremi-componente';

export const routes: Routes = [
    {title:'inicio', path:'' , component:InicioComponente},
    {title:'proyectos',path:'proyectos',component:Proyectos},
    {title:'sobremi',path:'sobremi',component:SobremiComponente}
];

import { Routes } from '@angular/router';
import { InicioComponente } from './componentes-generales/inicio-componente/inicio-componente';
import { Proyectos } from './componentes-generales/proyectos/proyectos';
import { SobremiComponente } from './componentes-generales/sobremi-componente/sobremi-componente';
import { NoEncontradoComponente } from './componentes-generales/no-encontrado-componente/no-encontrado-componente';

export const routes: Routes = [
    {title:'Bruno Couceiro | Desarrollador Fullstack .NET / Angular', path:'' , component:InicioComponente},
    {title:'Proyectos | Bruno Couceiro',path:'proyectos',component:Proyectos},
    {title:'Sobre mí | Bruno Couceiro',path:'sobremi',component:SobremiComponente},
    //Se prerenderiza como 404.html para que Vercel la sirva en direcciones inexistentes
    {title:'Página no encontrada | Bruno Couceiro',path:'404',component:NoEncontradoComponente},
    {title:'Página no encontrada | Bruno Couceiro',path:'**',component:NoEncontradoComponente}
];

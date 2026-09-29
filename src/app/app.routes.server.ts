import { RenderMode, ServerRoute } from '@angular/ssr';

//Las paginas se generan como HTML en el build (sin servidor): asi buscadores
//y previews de LinkedIn leen el contenido sin ejecutar JavaScript
export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'proyectos', renderMode: RenderMode.Prerender },
  { path: 'sobremi', renderMode: RenderMode.Prerender },
  { path: '404', renderMode: RenderMode.Prerender },
  //Cualquier otra direccion no existe: la resuelve el navegador con la pagina 404
  { path: '**', renderMode: RenderMode.Client }
];

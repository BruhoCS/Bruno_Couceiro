//Vercel sirve /404.html (con estado 404) cuando una direccion no existe.
//Angular prerenderiza la ruta /404 en 404/index.html, asi que la copiamos a la raiz.
import { copyFileSync } from 'node:fs';

const salida = 'dist/porfolio_Bruno_Couceiro/browser';
copyFileSync(`${salida}/404/index.html`, `${salida}/404.html`);
console.log('404.html generado');

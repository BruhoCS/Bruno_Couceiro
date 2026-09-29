import { Component, OnDestroy, inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-no-encontrado-componente',
  imports: [RouterLink],
  templateUrl: './no-encontrado-componente.html',
  styleUrl: './no-encontrado-componente.css',
})
export class NoEncontradoComponente implements OnDestroy {
  private meta = inject(Meta);

  constructor() {
    //Que los buscadores no indexen la pagina de error
    this.meta.updateTag({ name: 'robots', content: 'noindex' });
  }

  //Al navegar a otra pagina se quita, para que el resto del portfolio siga indexable
  ngOnDestroy() {
    this.meta.removeTag('name="robots"');
  }
}

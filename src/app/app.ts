import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // rimane lo stesso
  template: `
    <h1>{{ contatore }}</h1>
    <button (click)="aumenta()">+1</button>
    <button (click)="diminuisci()">-1</button>
    <button (click)="resetta()">Reset</button>
  `,
})
export class Contatore {
  contatore = 0;

  aumenta() { this.contatore += 1; }
  diminuisci() { this.contatore -= 1; }
  resetta() { this.contatore = 0; }
}
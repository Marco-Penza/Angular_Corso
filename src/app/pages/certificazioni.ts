import { Component } from '@angular/core';

@Component({
  selector: 'app-certificazioni',
  standalone: true,
  template: `
    <h2>Certificazioni</h2>
      <p> Sanificazione ambienti sanitari </p>
      <p> Formazione su sanificazione ospedaliera e mezzi sanitari </p>
      <p> SIAATIP – Scuola Italiana Emergenze (12/2025) </p>
  `,
  styles: [`
    h2 { color: purple; }
    p { font-size: 14px; }
  `]
})
export class Certificazioni {}
import { Component } from '@angular/core';

@Component({
  selector: 'app-esperienze-formative',
  standalone: true,
  template: `
    <h2>Esperienze Formative</h2>
    <p>tecniche di amministrazione e comunicazione aziendale</p>
    <p> IISS Lèontine e Giuseppe De Nittis Barletta (BT) </p>
    <p> Diploma professionale 2008/2012  punteggio: 60</p>
  `,
  styles: [`
    h2 { color: navy; }
    p { font-size: 14px; }
  `]
})
export class EsperienzeFormative {}
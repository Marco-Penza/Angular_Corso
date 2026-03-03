import { Component } from '@angular/core';

@Component({
  selector: 'app-esperienze-lavorative',
  standalone: true,
  template: `
    <h2>Esperienze Lavorative</h2>

        <h4> Operaio </h4>

    <p> Calzaturificio EMME EMME SRL/Barletta (BT) </p>
    <p> Imballaggio e confezionamento dei prodotti </p>
    <p> Preparazione delle materie prime utili alla produzione </p>
    <p> Incollatura delle suole </p>

        <h4> Steward </h4>
    
    <p> FI.FA. security </p>
    <p> Evento svolto a Mugello MotoGP </p>
    <p> Addetto al controllo Biglietto gara ed eventuali Pass </p>


    <p> Autorizzo il trattamento dei miei dati personali presenti nel CV
ai sensi del D. Lgs. 196/2003 e del Regolamento UE 2016/679 </p>
  `,
  styles: [`
    h2 { color: green; }
    p { font-size: 14px; }
  `]
})
export class EsperienzeLavorative {}
import { Component } from '@angular/core';

@Component({
  selector: 'app-ciccio',
  standalone: true,
  template: `
    <p class="ciccio">
      quello che voglio
    </p>
  `,
  styles: [`
    .ciccio {
      background-color: red;
      color: white;
      padding: 10px;
      border-radius: 5px;
    }
  `]
})
export class Ciccio {}
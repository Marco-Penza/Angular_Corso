import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <h2>Benvenuto nel mio Curriculum</h2>
  `,
  styles: [`
    h2 { color: darkblue; font-size: 20px; margin-top: 20px; }
  `]
})
export class Home {}

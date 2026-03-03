import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterModule } from '@angular/router';
import { Home } from './pages/home';
import { EsperienzeFormative } from './pages/esperienze_formative';
import { EsperienzeLavorative } from './pages/esperienze_lavorative';
import { Contatto } from './pages/contatto';
import { Certificazioni } from './pages/certificazioni';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterModule,
    Home,
    EsperienzeFormative,
    EsperienzeLavorative,
    Contatto,
    Certificazioni
  ],
  template: `
    <!-- Bottoni di navigazione -->
    <nav style="margin-bottom: 20px;">
      <a [routerLink]="['/home']"><button>Home</button></a>
      <a [routerLink]="['/esperienze_formative']"><button>Esperienze Formative</button></a>
      <a [routerLink]="['/esperienze_lavorative']"><button>Esperienze Lavorative</button></a>
      <a [routerLink]="['/contatto']"><button>Contatto</button></a>
      <a [routerLink]="['/certificazioni']"><button>Certificazioni</button></a>
    </nav>

    <!-- Router outlet -->
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class Contatore {}
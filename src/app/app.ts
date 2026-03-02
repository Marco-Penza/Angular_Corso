import { Component } from '@angular/core';
import { Ciccio } from "./pages/ciccio";
import { Home } from './pages/home';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Route } from '@angular/router';

@Component({
  selector: 'app-root', // rimane lo stesso
  imports: [Ciccio, RouterOutlet, RouterModule,RouterLink],
  template: `
  <h1>Ciccio</h1>
  <app-ciccio></app-ciccio>
  ciao ciao ciao
  <button routerLink="home">Vai alla Home</button>
  <button routerLink="Ciccio"> pagina ciccio </button>
  <router-outlet  />
  `,
  styles:[],
})

export class Contatore {
  contatore = 0;

  aumenta() { this.contatore += 1; }
  diminuisci() { this.contatore -= 1; }
  resetta() { this.contatore = 0; }
}


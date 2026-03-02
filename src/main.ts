import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { Contatore } from './app/app'; // <-- cambiato da App a Contatore

bootstrapApplication(Contatore, appConfig)
  .catch((err) => console.error(err));
import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { Contatore } from './app/app';
import { config } from './app/app.config.server';

const bootstrap = (context: BootstrapContext) =>
    bootstrapApplication(Contatore, config, context);

export default bootstrap;

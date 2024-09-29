import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // Import your root AppComponent
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing.module'; // Import your routing module
import { provideHttpClient } from '@angular/common/http'; // Import provideHttpClient

import { environment } from './environment/environment';

if (environment.production) {
  enableProdMode();
}

// Bootstrap the AppComponent with HttpClient and Router
bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // Set up HttpClient
    provideRouter(routes) // Set up routing
  ]
}).catch(err => console.error(err));

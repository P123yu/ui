import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { App } from './app/app';
import { routes } from './app/app.routes'; // adjust the path as needed

bootstrapApplication(App, {
  providers: [
    provideHttpClient(),
    provideRouter(routes), // ✅ this is what fixes ActivatedRoute error
  ],
});
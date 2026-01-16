import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AboutProjectComponent } from './about/about-project/about-project.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
   imports: [
    AppComponent,
    BrowserModule,
  ],
  declarations: [
    DashboardComponent,
    AboutComponent,
    AboutProjectComponent
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

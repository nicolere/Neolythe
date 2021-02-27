import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { GlobalMaterialModule } from './material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IvyCarouselModule } from 'angular-responsive-carousel';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LeftNavbarComponent } from './left-navbar/left-navbar.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutProjectComponent } from './about/about-project/about-project.component';
import { ProjectDataComponent } from './about/project-data/project-data.component';
import { AnimatedCounterDirective } from './directives/animated-counter.directive';

@NgModule({
  declarations: [
    AppComponent,
    LeftNavbarComponent,
    AboutComponent,
    DashboardComponent,
    AboutProjectComponent,
    ProjectDataComponent,
    AnimatedCounterDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GlobalMaterialModule,
    FlexLayoutModule,
    IvyCarouselModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

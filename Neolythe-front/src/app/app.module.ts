import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { GlobalMaterialModule } from './material-module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LeftNavbarComponent } from './left-navbar/left-navbar.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutUsComponent } from './about/about-us/about-us.component';
import { TweetsComponent } from './about/about-us/tweets/tweets.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftNavbarComponent,
    AboutComponent,
    DashboardComponent,
    AboutUsComponent,
    TweetsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GlobalMaterialModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

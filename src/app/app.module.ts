import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import {MatMenuModule} from '@angular/material/menu'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { GenericDialogBoxComponent } from './generic-dialog-box/generic-dialog-box.component';
import {MatDialogModule} from '@angular/material/dialog'; 
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { HomePageDialogBoxComponent } from './home-page-dialog-box/home-page-dialog-box.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { SplashScreenStateService } from './services/splash-screen-state-service';
import { VaccinationAnalyticsComponent } from './vaccination-analytics/vaccination-analytics.component';
import { VaccinationAnalyticsService } from './vaccination-analytics/vaccination-analytics.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    GenericDialogBoxComponent,
    HomePageDialogBoxComponent,
    SplashScreenComponent,
    VaccinationAnalyticsComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatMenuModule
  ],
  providers: [SplashScreenStateService, VaccinationAnalyticsService],
  bootstrap: [AppComponent],
  entryComponents: [GenericDialogBoxComponent]
})
export class AppModule { }

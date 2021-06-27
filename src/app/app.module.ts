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
import { NewHomePageComponent } from './new-home-page/new-home-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    GenericDialogBoxComponent,
    NewHomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatMenuModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [GenericDialogBoxComponent]
})
export class AppModule { }

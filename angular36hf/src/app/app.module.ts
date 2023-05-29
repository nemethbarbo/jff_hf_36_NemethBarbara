import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PytagoraszComponent } from './pytagorasz/pytagorasz.component';
import { KorKerTerComponent } from './kor-ker-ter/kor-ker-ter.component';
import { VizsgaertekeloComponent } from './vizsgaertekelo/vizsgaertekelo.component';
import { TelefonszamComponent } from './telefonszam/telefonszam.component';
import { FizetesekComponent } from './fizetesek/fizetesek.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    PytagoraszComponent,
    KorKerTerComponent,
    VizsgaertekeloComponent,
    TelefonszamComponent,
    FizetesekComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

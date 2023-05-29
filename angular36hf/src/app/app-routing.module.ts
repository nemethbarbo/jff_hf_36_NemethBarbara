import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PytagoraszComponent } from './pytagorasz/pytagorasz.component';
import { KorKerTerComponent } from './kor-ker-ter/kor-ker-ter.component';
import { TelefonszamComponent } from './telefonszam/telefonszam.component';
import { VizsgaertekeloComponent } from './vizsgaertekelo/vizsgaertekelo.component';
import { FizetesekComponent } from './fizetesek/fizetesek.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'pytagorasz', component:PytagoraszComponent},
  {path: 'korKerTer', component:KorKerTerComponent},
  {path: 'telefonszam', component:TelefonszamComponent},
  {path: 'vizsgaertekelo', component:VizsgaertekeloComponent},
  {path: 'fizetesek', component:FizetesekComponent},
  {path: 'not-found', component:NotFoundComponent},
  {path: ' ', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component } from '@angular/core';

@Component({
  selector: 'app-vizsgaertekelo',
  templateUrl: './vizsgaertekelo.component.html',
  styleUrls: ['./vizsgaertekelo.component.css']
})
export class VizsgaertekeloComponent {

  private maxPontszam: number = 1;
  private elertPontszam: number = 1;

  public get MaxPontszam(): number {
    return this.maxPontszam;
  }

  public set MaxPontszam(v: number) {
    this.maxPontszam = v;
  }

  public get ElertPontszam(): number {
    return this.elertPontszam;
  }

  public set ElertPontszam(v: number) {
    this.elertPontszam = v;
  }

  public vizsgaErtekel():void{
    let elertSzazalek:number = this.elertPontszam*100/this.maxPontszam;
    if (elertSzazalek<=50){
      alert("A vizsga eredménye: elégtelen");
    } else if (51<=elertSzazalek && elertSzazalek<=60) {
      alert("A vizsga eredménye: elégséges");
    } else if (61<=elertSzazalek && elertSzazalek<=70) {
      alert("A vizsga eredménye: közepes");
    } else if (71<=elertSzazalek && elertSzazalek<=80) {
      alert("A vizsga eredménye: jó");
    } else if (81<=elertSzazalek) {
      alert("A vizsga eredménye: jeles");
    } else {
      alert("Helytelen adatot adott meg, kérem írja be újra!");
    }
}
}

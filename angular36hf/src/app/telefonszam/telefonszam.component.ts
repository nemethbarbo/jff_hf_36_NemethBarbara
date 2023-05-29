import { Component } from '@angular/core';

@Component({
  selector: 'app-telefonszam',
  templateUrl: './telefonszam.component.html',
  styleUrls: ['./telefonszam.component.css']
})
export class TelefonszamComponent {

  private telefonszam: string = "" ;

  public get Telefonszam(): string {
    return this.telefonszam;
  }

  public set Telefonszam(v: string){
    this.telefonszam = v;
  }

  public telefonszamEllenoriz(telefonszam:string):boolean {
    let regexTelSzam = /^(36-20|06-20)-[0-9]{3}-[0-9]{4}$/;
    return regexTelSzam.test(telefonszam);
  }

  public telefonszamMegfeleloE():void{
    //let telefonszam:string = String(prompt("Kérem adja meg a vizsgálni kívánt telefonszámot: "));
    if (this.telefonszamEllenoriz(this.telefonszam)){
      alert("A telefonszám formátuma megfelelő!");
    } else {
      alert ("A telefonszám formátuma nem megfelelő");
    }
  }

}

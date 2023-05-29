import { Component } from '@angular/core';

@Component({
  selector: 'app-fizetesek',
  templateUrl: './fizetesek.component.html',
  styleUrls: ['./fizetesek.component.css']
})
export class FizetesekComponent {
  private title: string = "Új fizetés a béremelés után";
  private beosztas: string = "";
  private bruttoBer: number = 1;

  public get Title() : string {
    return this.title;
  }

  public get Beosztas(): string {
    return this.beosztas;
  }

  public set Beosztas(v: string) {
    this.beosztas=v;
  }

  public get BruttoBer(): number {
    return this.bruttoBer;
  }

  public set BruttoBer(v: number) {
    this.bruttoBer=v;
  }

  public beremelesSzamol():number{
    if (this.beosztas==="programozo"){
      return Math.floor(this.bruttoBer*1.3);
    } else if (this.beosztas==="grafikus"){
      return Math.floor(this.bruttoBer*1.2);
    } else {
      return Math.floor(this.bruttoBer*1.1);
    }
  }

  public beremelesKiir(){
    alert("A béremelés után a bruttó bére: "+this.beremelesSzamol());
  }
}

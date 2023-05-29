import { Component } from '@angular/core';

@Component({
  selector: 'app-kor-ker-ter',
  templateUrl: './kor-ker-ter.component.html',
  styleUrls: ['./kor-ker-ter.component.css']
})
export class KorKerTerComponent {
  private korSugara:number = 1;
  
  public get KorSugara():number{
    return this.korSugara;
  }

  public set KorSugara(v : number) {
    this.korSugara = v;
  }

  public getKorKerulet():number {
    return 2*this.korSugara*Math.PI;
  }

  public getKorTerulet(): number {
    return this.korSugara*this.korSugara*Math.PI;
  }
  
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-pytagorasz',
  templateUrl: './pytagorasz.component.html',
  styleUrls: ['./pytagorasz.component.css']
})
export class PytagoraszComponent {
  private title:string = "Pytagorasz tétel";
  private aOldal:number = 1;  
  private bOldal:number = 1;  

  public get Title() : string {
    return this.title;
  }

  public get AOldal() : number {  
    return this.aOldal;
  }
  
  public set AOldal(v : number) {
    this.aOldal = v;
  }

  public get BOldal() : number {  
    return this.bOldal;
  }
  
  public set BOldal(v : number) {
    this.bOldal = v;
  }
  
  public getPytagorasz():number{
    let cOldal:number = Math.sqrt(this.aOldal*this.aOldal+this.bOldal*this.bOldal);
    return cOldal;
  }

  public cOldalKiszamit():void{
    alert("A c oldal hossza: "+this.getPytagorasz());
  }
}

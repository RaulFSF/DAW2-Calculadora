import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teclado',
  templateUrl: './teclado.component.html',
  styleUrls: ['./teclado.component.scss']
})
export class TecladoComponent implements OnInit {

  operation ="" ;
  res: string | undefined = undefined;
  constructor() { }

  ngOnInit(): void {
  }

  addItem(item:string): void{
    this.operation+=item;
    console.log(this.operation);
  }
  
  clean(): void{
    this.operation = "";
    this.res="";
  }

  evaluate(): void{
    try {
      this.res = eval(this.operation);
    } catch (error) {
      this.res= "error";
    }
  }
}

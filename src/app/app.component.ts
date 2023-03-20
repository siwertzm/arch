import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Arch';

  pers: any = true;


  constructor(){

  }

  physique(){
    this.pers = true;
  }

  morale(){
    this.pers = false;

  }
}

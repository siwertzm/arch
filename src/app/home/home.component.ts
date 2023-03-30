import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PrixService } from '../prix.service';
import { ReservService } from '../reserv.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private route: Router, private reservService: ReservService, private prixService: PrixService) {

  }

  reload(): void {
    window.location.reload();
  }

  navigToPart(){
    this.route.navigateByUrl("particulier");
  }

  navigToEnt(){
    this.route.navigateByUrl("entreprise");
  }

}

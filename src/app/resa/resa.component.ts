import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PrixService } from '../prix.service';
import { ReservService } from '../reserv.service';

@Component({
  selector: 'app-resa',
  templateUrl: './resa.component.html',
  styleUrls: ['./resa.component.css']
})
export class ResaComponent {

  cab: any;
  prixTotal: any;
  prixImpot: any;

  constructor(private reservService: ReservService, private prixService: PrixService, private route: Router){

  }

  ngOnInit(){
    this.commande();
  }

  validation(val: any){
   // this.route.navigateByUrl('merci')
   //test
  }

  commande(){
    this.cab = this.reservService.getNbrCabine();
    this.prixTotal = this.prixService.getPrixTotal();
    this.prixImpot = this.prixService.getPrixImpot();
  }
}
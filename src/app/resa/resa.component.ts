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
  donne: any;
  resa: any;
  prixAvec: any;
  prixSans: any;

  constructor(private reservService: ReservService, private prixService: PrixService, private route: Router){

  }

  ngOnInit(){
    this.commande();
    this.text(this.cab)
  }

  text(val: any){
    this.donne = JSON.stringify(val)
  }

  validation(val: any){
   this.route.navigateByUrl('merci')
  }

  commande(){
    this.cab = this.reservService.getNbrCabine();
    this.prixTotal = this.prixService.getPrixTotal();
    this.prixImpot = this.prixService.getPrixImpot();
    this.prixAvec = this.prixService.getPrixAvec();
    this.prixSans = this.prixService.getPrixSans();
  }

  test(){
    this.route.navigateByUrl('home');
  }
}

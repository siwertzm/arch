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

  nbrCabExt: any;
  nbrPerExt: any;

  nbrCabBalc: any;
  nbrPerBalc: any;

  nbrCabLux: any;
  nbrPerLux: any;

  nbrCabSuite: any;
  nbrPerSuite: any;


  nbrCabPres: any;
  nbrPerPres: any;

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
    this.nbrCabExt = this.reservService.getNbrExt();
    this.nbrPerExt = this.reservService.getNbrPersExt();

    this.nbrCabBalc = this.reservService.getNbrBalc();
    this.nbrPerBalc = this.reservService.getNbrPersBalc();

    this.nbrCabLux = this.reservService.getNbrLux();
    this.nbrPerLux = this.reservService.getNbrPersLux();

    this.nbrCabSuite = this.reservService.getNbrSuite();
    this.nbrPerSuite = this.reservService.getNbrPersSuite();

    this.nbrCabPres = this.reservService.getNbrPres();
    this.nbrPerPres = this.reservService.getNbrPersPres();
  }

  test(){
    this.route.navigateByUrl('particulier');
  }
}

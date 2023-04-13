import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PrixService } from '../prix.service';
import { ReservService } from '../reserv.service';

@Component({
  selector: 'app-reservation-e',
  templateUrl: './reservation-e.component.html',
  styleUrls: ['./reservation-e.component.css']
})
export class ReservationEComponent {

  cab: any;
  prixTotal: any;
  prixImpot: any;
  donne: any;
  resa: any;
  prixAvec: any;
  prixSans: any;

  nbrCabExt: any;
  nbrPerExt: any;
  nbrSemExt: any;

  nbrCabBalc: any;
  nbrPerBalc: any;
  nbrSemBalc: any;

  nbrCabLux: any;
  nbrPerLux: any;
  nbrSemLux: any;

  nbrCabSuite: any;
  nbrPerSuite: any;
  nbrSemSuite: any;


  nbrCabPres: any;
  nbrPerPres: any;
  nbrSemPres: any;

  prixHT: any;
  prixTTC: any;
  prixMecenat: any;

  prixReduc: any;



  constructor(private reservService: ReservService, private prixService: PrixService, private route: Router) {

  }

  ngOnInit() {
    this.commande();
    this.text(this.cab)
  }

  text(val: any) {
    this.donne = JSON.stringify(val)
  }

  validation(val: any) {
    this.route.navigateByUrl('merci')
  }

  commande() {
    this.cab = this.reservService.getNbrCabine();
    this.prixTotal = this.prixService.getPrixTotal();
    this.prixReduc = this.prixService.getPrixReduc();
    this.prixImpot = this.prixService.getPrixImpot();
    this.prixAvec = this.prixService.getPrixAvec();
    this.prixSans = this.prixService.getPrixSans();

    this.nbrCabExt = this.reservService.getNbrExt();
    this.nbrPerExt = this.reservService.getNbrPersExt();
    this.nbrSemExt = this.reservService.getNbrSemiExt();

    this.nbrCabBalc = this.reservService.getNbrBalc();
    this.nbrPerBalc = this.reservService.getNbrPersBalc();
    this.nbrSemBalc = this.reservService.getNbrSemiBalc();

    this.nbrCabLux = this.reservService.getNbrLux();
    this.nbrPerLux = this.reservService.getNbrPersLux();
    this.nbrSemLux = this.reservService.getNbrSemiLux();

    this.nbrCabSuite = this.reservService.getNbrSuite();
    this.nbrPerSuite = this.reservService.getNbrPersSuite();
    this.nbrSemSuite = this.reservService.getNbrSemiSuite();

    this.nbrCabPres = this.reservService.getNbrPres();
    this.nbrPerPres = this.reservService.getNbrPersPres();
    this.nbrSemPres = this.reservService.getNbrSemiPres();
    this.prixHT = this.prixService.getPrixHT();
    this.prixTTC = this.prixService.getPrixTTC();
    this.prixMecenat = this.prixService.getPrixMecenat();

    this.nbrCabExt = this.reservService.getNbrExt();
  }

  test() {
    this.route.navigateByUrl('entreprise');
  }

}

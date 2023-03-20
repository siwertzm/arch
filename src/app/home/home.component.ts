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

  test: any = 0;

  msgExt: any;
  msgExtBalc: any;
  msgLuxe: any;
  msgSuite: any;
  msgSuitePres: any;

  reserv: any = false;

  cout: any;
  coutText: any;
  coutBalc: any;
  coutBalcText: any;
  coutLuxe: any;
  coutLuxeText: any;
  coutSuite: any;
  coutSuiteText: any;
  coutPres: any;
  coutPresText: any;

  fisccout: any;
  fisccoutText: any;
  fisccoutBalc: any;
  fisccoutBalcText: any;
  fisccoutLuxe: any;
  fisccoutLuxeText: any;
  fisccoutSuite: any;
  fisccoutSuiteText: any;
  fisccoutPres: any;
  fisccoutPresText: any;

  totalCout: any;
  totalFisc: any;

  msgError: any;


  constructor(private route: Router, private reservService: ReservService, private prixService: PrixService) {

  }
  resa(val: any) {

    this.test = 1;

    if (val.persExt > 2 * val.cabExt) {
      this.msgExt = 'Le nombre de personne doit etre inferieur au double des cabines.';
      this.test = 2;
    } else if (val.persExtBalc > 2 * val.cabExtBalc) {
      this.msgExtBalc = 'Le nombre de personne doit etre inferieur au double des cabines.';
      this.test = 2;
    } else if (val.persLuxe > 2 * val.cabLuxe) {
      this.msgLuxe = 'Le nombre de personne doit etre inferieur au double des cabines.';
      this.test = 2;
    } else if (val.persSuite > 2 * val.suite) {
      this.msgSuite = 'Le nombre de personne doit etre inferieur au double des cabines.';
      this.test = 2;
    } else if (val.persSuitePres > 2 * val.suitePres) {
      this.msgSuitePres = 'Le nombre de personne doit etre inferieur au double des cabines.';
      this.test = 2;
    } else {
      this.cout = (val.cabExt * 1000 + val.persExt * 750)
      this.coutText = this.cout + " €"
      this.coutBalc = (val.cabExtBalc * 1100 + val.persExtBalc * 800)
      this.coutBalcText = this.coutBalc + " €"
      this.coutLuxe = (val.cabLuxe * 1150 + val.persLuxe * 825)
      this.coutLuxeText = this.coutLuxe + " €"
      this.coutSuite = (val.suite * 1500 + val.persSuite * 1000)
      this.coutSuiteText = this.coutSuite + " €"
      this.coutPres = (val.suitePres * 2750 + val.persSuitePres * 1625)
      this.coutPresText = this.coutPres + " €"

      this.fisccout = ((val.cabExt * 700 + val.persExt * 625) * 0.34) + (val.cabExt * 300 + val.persExt * 125)
      this.fisccoutText = this.fisccout + " €"
      this.fisccoutBalc = ((val.cabExtBalc * 770 + val.persExtBalc * 665) * 0.34) + (val.cabExtBalc * 330 + val.persExtBalc * 135)
      this.fisccoutBalcText = this.fisccoutBalc + " €"
      this.fisccoutLuxe = ((val.cabLuxe * 800 + val.persLuxe * 675) * 0.34) + (val.cabLuxe * 350 + val.persLuxe * 150)
      this.fisccoutLuxeText = this.fisccoutLuxe + " €"
      this.fisccoutSuite = ((val.suite * 1050 + val.persSuite * 825) * 0.34) + (val.suite * 450 + val.persSuite * 175)
      this.fisccoutSuiteText = this.fisccoutSuite + " €"
      this.fisccoutPres = ((val.suitePres * 1750 + val.persSuitePres * 1375) * 0.34) + (val.suitePres * 1000 + val.persSuitePres * 250)
      this.fisccoutPresText = this.fisccoutPres + " €"
      this.totalCout = this.cout + this.coutBalc + this.coutLuxe + this.coutSuite + this.coutPres
      this.totalFisc = this.fisccout + this.fisccoutBalc + this.fisccoutLuxe + this.fisccoutSuite + this.fisccoutPres
      this.reservService.setNbrCabine(val);
      this.reserv = true;
    }
  }

  prix() {
    this.prixService.setPrixTotal(this.totalCout);
    this.prixService.setPrixImpot(this.totalFisc)
    if (this.totalCout == 0) {
      location.reload();
    } else {
      this.route.navigateByUrl('resa');
    }
  }

  reload(): void {
    window.location.reload();
  }

}

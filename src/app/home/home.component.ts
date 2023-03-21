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

  test: any = 1;

  msgExt: any;
  msgExtBalc: any;
  msgLuxe: any;
  msgSuite: any;
  msgSuitePres: any;

  reserv: any = false;

  pers: any;

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

  fisccoutPers: any;
  fisccoutBalcPers: any;
  fisccoutLuxePers: any;
  fisccoutSuitePers: any;
  fisccoutPresPers: any;


  totalCout: any;
  totalFisc: any;

  msgError: any;


  nbrCabExt: any;
  nbrPerExt: any;
  prixTotExt: any;
  fiscTotExt: any;

  nbrBalc: any;
  prixTotBalc: any;

  nbrLux: any;
  prixTotLux: any;

  nbrSuite: any;
  prixTotSuite: any;

  nbrPres: any;
  prixTotPres: any;


  constructor(private route: Router, private reservService: ReservService, private prixService: PrixService) {

  }
  resa(val: any) {

    this.test = 1;

    if (val.persExt > 2 * val.cabExt) {
      this.msgExt = 'Le nombre de personne doit être inferieur au double du nombre de cabines.';
      this.test = 2;
    } else if (val.persExtBalc > 2 * val.cabExtBalc) {
      this.msgExtBalc = 'Le nombre de personne doit être inferieur au double du nombre de cabines.';
      this.test = 2;
    } else if (val.persLuxe > 2 * val.cabLuxe) {
      this.msgLuxe = 'Le nombre de personne doit être inferieur au double du nombre de cabines.';
      this.test = 2;
    } else if (val.persSuite > 2 * val.suite) {
      this.msgSuite = 'Le nombre de personne doit être inferieur au double du nombre de cabines.';
      this.test = 2;
    } else if (val.persSuitePres > 2 * val.suitePres) {
      this.msgSuitePres = 'Le nombre de personne doit être inferieur au double du nombre de cabines.';
      this.test = 2;
    } else {
      this.cout = (val.cabExt * 1000 + val.persExt * 750)
      this.coutText = Math.round(this.cout) + " €"
      this.coutBalc = (val.cabExtBalc * 1100 + val.persExtBalc * 800)
      this.coutBalcText = Math.round(this.coutBalc) + " €"
      this.coutLuxe = (val.cabLuxe * 1150 + val.persLuxe * 825)
      this.coutLuxeText = Math.round(this.coutLuxe) + " €"
      this.coutSuite = (val.suite * 1500 + val.persSuite * 1000)
      this.coutSuiteText = Math.round(this.coutSuite) + " €"
      this.coutPres = (val.suitePres * 2750 + val.persSuitePres * 1625)
      this.coutPresText = Math.round(this.coutPres) + " €"

      this.fisccout = (((val.cabExt * 700 + val.persExt * 625) * 0.34) + (val.cabExt * 300 + val.persExt * 125))
      this.fisccoutText = Math.round(this.fisccout) + " €"
      this.fisccoutBalc = (((val.cabExtBalc * 770 + val.persExtBalc * 665) * 0.34) + (val.cabExtBalc * 330 + val.persExtBalc * 135))
      this.fisccoutBalcText = Math.round(this.fisccoutBalc) + " "
      this.fisccoutLuxe = (((val.cabLuxe * 800 + val.persLuxe * 675) * 0.34) + (val.cabLuxe * 350 + val.persLuxe * 150))
      this.fisccoutLuxeText = Math.round(this.fisccoutLuxe) + " €"
      this.fisccoutSuite = (((val.suite * 1050 + val.persSuite * 825) * 0.34) + (val.suite * 450 + val.persSuite * 175))
      this.fisccoutSuiteText = Math.round(this.fisccoutSuite) + " €"
      this.fisccoutPres = (((val.suitePres * 1750 + val.persSuitePres * 1375) * 0.34) + (val.suitePres * 1000 + val.persSuitePres * 250))
      this.fisccoutPresText = Math.round(this.fisccoutPres) + " €"

      this.totalCout = this.cout + this.coutBalc + this.coutLuxe + this.coutSuite + this.coutPres
      this.pers = val.persExt + val.persExtBalc + val.persLuxe + val.persSuite + val.persSuitePres
      console.log(val.persExt, val.persExtBalc, val.persLuxe, val.persSuite, val.persSuitePres)
      this.totalFisc = (this.fisccout + this.fisccoutBalc + this.fisccoutLuxe + this.fisccoutSuite + this.fisccoutPres)/this.pers
      console.log(this.pers)
      this.reservService.setNbrCabine(val);
      this.reserv = true;
      console.log(val);
    }
  }

  InputExt(event: any){
    this.nbrCabExt = event.target.value;
    if (this.nbrCabExt >= (this.nbrPerExt/2) && this.nbrCabExt <= this.nbrPerExt){
      this.prixTotExt = (this.nbrCabExt*1000) + ((this.nbrPerExt)*750);
      this.fiscTotExt = Math.round((((this.nbrCabExt*700) + (this.nbrPerExt*625))*0.34) + ((this.nbrCabExt*300) + (this.nbrPerExt*125)));
      this.msgExt = '';
    } else if (this.nbrCabExt > this.nbrPerExt) {
      this.msgExt = 'Le nombre de cabines ne peux pas être supérieur au nombre de personnes';
      this.prixTotExt = null;
    } else {
      this.msgExt = 'Le nombre de personne doit être inferieur au double du nombre de cabines.';
      this.prixTotExt = null;
    }
  }

  InputExt2(event: any){
    this.nbrPerExt = event.target.value;
    console.log(this.nbrPerExt);
    if (parseInt(this.nbrPerExt) > 2*parseInt(this.nbrCabExt)){
      this.msgExt = 'Le nombre de personne doit être inferieur au double du nombre de cabines.';
      this.prixTotExt = null;
    } else if(parseInt(this.nbrPerExt) < parseInt(this.nbrCabExt)) {
      this.prixTotExt = null;
      this.msgExt = 'Le nombre de personnes ne peux pas être inférieur au nombre de cabines';
    } else {
      this.prixTotExt = (this.nbrCabExt*1000) + ((this.nbrPerExt)*750);
      this.fiscTotExt = (((this.nbrCabExt*700) + (this.nbrPerExt*625))*0.34) + ((this.nbrCabExt*300) + (this.nbrPerExt*125));
      this.msgExt = '';
    }
  }

  InputBalc(event: any){
    this.nbrBalc = event.target.value
  }

  InputBalc2(event: any){
    let nbr: any = event.target.value;
    if (parseInt(nbr) > 2*parseInt(this.nbrBalc)){
      this.msgExtBalc = 'Le nombre de personne doit être inferieur au double du nombre de cabines.';
      this.prixTotBalc = null
    } else{
      this.prixTotBalc = (this.nbrBalc*1100) + ((event.target.value)*800);
      this.msgExtBalc = ''
    }
  }

  InputLux(event: any){
    this.nbrLux = event.target.value
  }

  InputLux2(event: any){
    let nbr: any = event.target.value;
    if (parseInt(nbr) > 2*parseInt(this.nbrLux)){
      this.msgLuxe = 'Le nombre de personne doit être inferieur au double du nombre de cabines.';
      this.prixTotLux = null
    } else{
      this.prixTotLux = (this.nbrLux*1150) + ((event.target.value)*825);
      this.msgLuxe = ''
    }
  }

  InputSuite(event: any){
    this.nbrSuite = event.target.value
  }

  InputSuite2(event: any){
    let nbr: any = event.target.value;
    if (parseInt(nbr) > 2*parseInt(this.nbrSuite)){
      this.msgSuite = 'Le nombre de personne doit être inferieur au double du nombre de cabines.';
      this.prixTotSuite = null
    } else{
      this.prixTotSuite = (this.nbrSuite*1500) + ((event.target.value)*1000);
      this.msgSuite = ''
    }
  }

  InputPres(event: any){
    this.nbrPres = event.target.value
  }

  InputPres2(event: any){
    let nbr: any = event.target.value;
    if (parseInt(nbr) > 2*parseInt(this.nbrPres)){
      this.msgSuitePres = 'Le nombre de personne doit être inferieur au double du nombre de cabines.';
      this.prixTotPres = null
    } else{
      this.prixTotPres = (this.nbrPres*2750) + ((event.target.value)*1625);
      this.msgSuitePres = ''
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

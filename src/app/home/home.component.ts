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

  nbrCabBalc: any;
  nbrPerBalc: any;
  prixTotBalc: any;
  fiscTotBalc: any;

  nbrCabLux: any;
  nbrPerLux: any;
  prixTotLux: any;
  fiscTotLux: any;

  nbrCabSuite: any;
  nbrPerSuite: any;
  prixTotSuite: any;
  fiscTotSuite: any;


  nbrCabPres: any;
  nbrPerPres: any;
  prixTotPres: any;
  fiscTotPres: any;




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
      this.fiscTotExt = (((this.nbrCabExt*700) + (this.nbrPerExt*625))*0.34) + ((this.nbrCabExt*300) + (this.nbrPerExt*125));
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
    this.nbrCabBalc = event.target.value;
    if (this.nbrCabBalc >= (this.nbrPerBalc/2) && this.nbrCabBalc <= this.nbrPerBalc){
      this.prixTotBalc = (this.nbrCabBalc*1100) + ((this.nbrPerBalc)*800);
      this.fiscTotBalc = (((this.nbrCabBalc*770) + (this.nbrPerBalc*665))*0.34) + ((this.nbrCabBalc*330) + (this.nbrPerBalc*135));
      this.msgExtBalc = '';
    } else if (this.nbrCabBalc > this.nbrPerBalc) {
      this.msgExtBalc = 'Le nombre de cabines ne peux pas être supérieur au nombre de personnes';
      this.prixTotBalc = null;
    } else {
      this.msgExtBalc = 'Le nombre de personne doit être inferieur au double du nombre de cabines.';
      this.prixTotBalc = null;
    }
  }

  InputBalc2(event: any){
    this.nbrPerBalc = event.target.value;
    console.log(this.nbrPerBalc);
    if (parseInt(this.nbrPerBalc) > 2*parseInt(this.nbrCabBalc)){
      this.msgExtBalc = 'Le nombre de personne doit être inferieur au double du nombre de cabines.';
      this.prixTotBalc = null;
    } else if(parseInt(this.nbrPerBalc) < parseInt(this.nbrCabBalc)) {
      this.prixTotBalc = null;
      this.msgExtBalc = 'Le nombre de personnes ne peux pas être inférieur au nombre de cabines';
    } else {
      this.prixTotBalc = (this.nbrCabBalc*1100) + ((this.nbrPerBalc)*800);
      this.fiscTotBalc = (((this.nbrCabBalc*770) + (this.nbrPerBalc*665))*0.34) + ((this.nbrCabBalc*330) + (this.nbrPerBalc*135));
      this.msgExtBalc = '';
    }
  }

  InputLux(event: any){
    this.nbrCabLux = event.target.value;
    if (this.nbrCabLux >= (this.nbrPerLux/2) && this.nbrCabLux <= this.nbrPerLux){
      this.prixTotLux = (this.nbrCabLux*1150) + ((this.nbrPerLux)*825);
      this.fiscTotLux = (((this.nbrCabLux*800) + (this.nbrPerLux*675))*0.34) + ((this.nbrCabLux*350) + (this.nbrPerLux*150));
      this.msgLuxe = '';
    } else if (this.nbrCabLux > this.nbrPerLux) {
      this.msgLuxe = 'Le nombre de cabines ne peux pas être supérieur au nombre de personnes';
      this.prixTotLux = null;
    } else {
      this.msgLuxe = 'Le nombre de personne doit être inferieur au double du nombre de cabines.';
      this.prixTotLux = null;
    }
  }

  InputLux2(event: any){
    this.nbrPerLux = event.target.value;
    console.log(this.nbrPerLux);
    if (parseInt(this.nbrPerLux) > 2*parseInt(this.nbrCabLux)){
      this.msgLuxe = 'Le nombre de personne doit être inferieur au double du nombre de cabines.';
      this.prixTotLux = null;
    } else if(parseInt(this.nbrPerLux) < parseInt(this.nbrCabLux)) {
      this.prixTotLux = null;
      this.msgLuxe = 'Le nombre de personnes ne peux pas être inférieur au nombre de cabines';
    } else {
      this.prixTotLux = (this.nbrCabLux*1150) + ((this.nbrPerLux)*825);
      this.fiscTotLux = (((this.nbrCabLux*800) + (this.nbrPerLux*675))*0.34) + ((this.nbrCabLux*350) + (this.nbrPerLux*150));
      this.msgLuxe = '';
    }
  }

  InputSuite(event: any){
    this.nbrCabSuite = event.target.value;
    if (this.nbrCabSuite >= (this.nbrPerSuite/2) && this.nbrCabSuite <= this.nbrPerSuite){
      this.prixTotSuite = (this.nbrCabSuite*1500) + ((this.nbrPerSuite)*1000);
      this.fiscTotSuite = (((this.nbrCabSuite*1050) + (this.nbrPerSuite*825))*0.34) + ((this.nbrCabSuite*450) + (this.nbrPerSuite*175));
      this.msgSuite = '';
    } else if (this.nbrCabSuite > this.nbrPerSuite) {
      this.msgSuite = 'Le nombre de cabines ne peux pas être supérieur au nombre de personnes';
      this.prixTotSuite = null;
    } else {
      this.msgSuite = 'Le nombre de personne doit être inferieur au double du nombre de cabines.';
      this.prixTotSuite = null;
    }
  }

  InputSuite2(event: any){
    this.nbrPerSuite = event.target.value;
    console.log(this.nbrPerSuite);
    if (parseInt(this.nbrPerSuite) > 2*parseInt(this.nbrCabSuite)){
      this.msgSuite = 'Le nombre de personne doit être inferieur au double du nombre de cabines.';
      this.prixTotSuite = null;
    } else if(parseInt(this.nbrPerSuite) < parseInt(this.nbrCabSuite)) {
      this.prixTotSuite = null;
      this.msgSuite = 'Le nombre de personnes ne peux pas être inférieur au nombre de cabines';
    } else {
      this.prixTotSuite = (this.nbrCabSuite*1500) + ((this.nbrPerSuite)*1000);
      this.fiscTotSuite = (((this.nbrCabSuite*1050) + (this.nbrPerSuite*825))*0.34) + ((this.nbrCabSuite*450) + (this.nbrPerSuite*175));
      this.msgSuite = '';
    }
  }

  InputPres(event: any){
    this.nbrCabPres = event.target.value;
    if (this.nbrCabPres >= (this.nbrPerPres/2) && this.nbrCabPres <= this.nbrPerPres){
      this.prixTotPres = (this.nbrCabPres*2750) + ((this.nbrPerPres)*1625);
      this.fiscTotPres = (((this.nbrCabPres*1750) + (this.nbrPerPres*1375))*0.34) + ((this.nbrCabPres*1000) + (this.nbrPerPres*250));
      this.msgSuitePres = '';
    } else if (this.nbrCabPres > this.nbrPerPres) {
      this.msgSuitePres = 'Le nombre de cabines ne peux pas être supérieur au nombre de personnes';
      this.prixTotPres = null;
    } else {
      this.msgSuitePres = 'Le nombre de personne doit être inferieur au double du nombre de cabines.';
      this.prixTotPres = null;
    }
  }

  InputPres2(event: any){
    this.nbrPerPres = event.target.value;
    console.log(this.nbrPerPres);
    if (parseInt(this.nbrPerPres) > 2*parseInt(this.nbrCabPres)){
      this.msgSuitePres = 'Le nombre de personne doit être inferieur au double du nombre de cabines.';
      this.prixTotPres = null;
    } else if(parseInt(this.nbrPerPres) < parseInt(this.nbrCabPres)) {
      this.prixTotPres = null;
      this.msgSuitePres = 'Le nombre de personnes ne peux pas être inférieur au nombre de cabines';
    } else {
      this.prixTotPres = (this.nbrCabPres*2750) + ((this.nbrPerPres)*1625);
      this.fiscTotPres = (((this.nbrCabPres*1750) + (this.nbrPerPres*1375))*0.34) + ((this.nbrCabPres*1000) + (this.nbrPerPres*250));
      this.msgSuitePres = '';
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

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

  err: any = false;

  msgExt: any = '';
  msgExtBalc: any= '';
  msgLuxe: any= '';
  msgSuite: any= '';
  msgSuitePres: any= '';

  pers: any;

  totalCout: any = 0;
  totalFisc: any = 0;


  nbrCabExt: any = 0;
  nbrPerExt: any = 0;
  prixTotExt: any = 0;
  fiscTotExt: any = 0;
  fiscExt: any = 0;

  nbrCabBalc: any = 0;
  nbrPerBalc: any = 0;
  prixTotBalc: any = 0;
  fiscTotBalc: any = 0;
  fiscBalc: any = 0;

  nbrCabLux: any = 0;
  nbrPerLux: any = 0;
  prixTotLux: any = 0;
  fiscTotLux: any = 0;
  fiscLux: any = 0;

  nbrCabSuite: any = 0;
  nbrPerSuite: any = 0;
  prixTotSuite: any = 0;
  fiscTotSuite: any = 0;
  fiscSuite: any = 0;


  nbrCabPres: any = 0;
  nbrPerPres: any = 0;
  prixTotPres: any = 0;
  fiscTotPres: any = 0;
  fiscPres: any = 0;




  constructor(private route: Router, private reservService: ReservService, private prixService: PrixService) {

  }

  msgErr(){
    if(this.msgExt != '' || this.msgExtBalc != '' || this.msgLuxe != '' || this.msgSuite != '' || this.msgSuitePres != ''){
      this.err = true;
    } else{
      this.err = false;
    }
  }


  resa(val: any) {

    this.msgErr();

    
    if(this.err){

    } else if (this.totalCout == 0){

    } else {
      this.reservService.setNbrCabine(val);
      this.prixService.setPrixTotal(this.totalCout);
      this.prixService.setPrixImpot(this.totalFisc);
      this.route.navigateByUrl('resa');
    }

    /*
      this.pers = parseInt(this.nbrPerExt) + parseInt(this.nbrPerBalc) + parseInt(this.nbrPerLux) + parseInt(this.nbrPerSuite) + parseInt(this.nbrPerPres)
      this.totalFisc = (this.fiscTotExt + this.fiscTotBalc + this.fiscTotLux + this.fiscTotSuite + this.fiscTotPres)/this.pers
     */
  }

  InputExt(event: any){

    if (this.nbrPerExt == this.nbrCabExt){
      this.nbrPerExt = event.target.value;
    } else {
      this.nbrPerExt = this.nbrPerExt;
    }

    this.nbrCabExt = event.target.value;

    if (this.nbrCabExt >= (this.nbrPerExt/2) && this.nbrCabExt <= this.nbrPerExt){

      this.prixTotExt = (this.nbrCabExt*1000) + ((this.nbrPerExt)*750);
      this.fiscTotExt = ((((this.nbrCabExt*700) + (this.nbrPerExt*625))*0.34) + ((this.nbrCabExt*300) + (this.nbrPerExt*125)));
      this.totalCout = this.prixTotExt + this.prixTotBalc + this.prixTotLux + this.prixTotSuite + this.prixTotPres;
      this.pers = parseInt(this.nbrPerExt) + parseInt(this.nbrPerBalc) + parseInt(this.nbrPerLux) + parseInt(this.nbrPerSuite) + parseInt(this.nbrPerPres)
      this.totalFisc = (this.fiscTotExt + this.fiscTotBalc + this.fiscTotLux + this.fiscTotSuite + this.fiscTotPres)/this.pers;
      this.fiscExt = (this.fiscTotExt)/this.nbrPerExt;
      this.msgExt = '';

    } else if (this.nbrCabExt > this.nbrPerExt) {

      this.msgExt = 'Le nombre de cabines ne peux pas être supérieur au nombre de personness';
      this.prixTotExt = 0;
      this.fiscTotExt = 0;
      this.totalCout = 0;
      this.totalFisc = 0;
      this.fiscExt = 0;

    } else {

      this.msgExt = 'Le nombre de personnes doit être inférieur au double du nombre de cabines.';
      this.prixTotExt = 0;
      this.fiscTotExt = 0;
      this.totalCout = 0;
      this.totalFisc = 0;
      this.fiscExt = 0;

    }
  }

  InputExt2(event: any){

    this.nbrPerExt = event.target.value;

    if (parseInt(this.nbrPerExt) > 2*parseInt(this.nbrCabExt)){

      this.msgExt = 'Le nombre de personnes doit être inférieur au double du nombre de cabines.';
      this.prixTotExt = 0;
      this.fiscTotExt = 0;
      this.totalCout = 0;
      this.totalFisc = 0;
      this.fiscExt = 0;

    } else if(parseInt(this.nbrPerExt) < parseInt(this.nbrCabExt)) {

      this.prixTotExt = 0;
      this.fiscTotExt = 0;
      this.totalCout = 0;
      this.fiscExt = 0;
      this.totalFisc = 0;
      this.msgExt = 'Le nombre de personness ne peux pas être inférieur au nombre de cabines';

    } else {

      this.prixTotExt = (this.nbrCabExt*1000) + ((this.nbrPerExt)*750);
      this.fiscTotExt = ((((this.nbrCabExt*700) + (this.nbrPerExt*625))*0.34) + ((this.nbrCabExt*300) + (this.nbrPerExt*125)));
      this.totalCout = this.prixTotExt + this.prixTotBalc + this.prixTotLux + this.prixTotSuite + this.prixTotPres;
      this.pers = parseInt(this.nbrPerExt) + parseInt(this.nbrPerBalc) + parseInt(this.nbrPerLux) + parseInt(this.nbrPerSuite) + parseInt(this.nbrPerPres)
      this.totalFisc = (this.fiscTotExt + this.fiscTotBalc + this.fiscTotLux + this.fiscTotSuite + this.fiscTotPres)/this.pers
      this.fiscExt = (this.fiscTotExt)/this.nbrPerExt;
      this.msgExt = '';
    }
  }

  InputBalc(event: any){

    if (this.nbrPerBalc == this.nbrCabBalc){
      this.nbrPerBalc = event.target.value;
    } else {
      this.nbrPerBalc = this.nbrPerBalc;
    }

    this.nbrCabBalc = event.target.value;

    if (this.nbrCabBalc >= (this.nbrPerBalc/2) && this.nbrCabBalc <= this.nbrPerBalc){

      this.prixTotBalc = (this.nbrCabBalc*1100) + ((this.nbrPerBalc)*800);
      this.fiscTotBalc = ((((this.nbrCabBalc*770) + (this.nbrPerBalc*665))*0.34) + ((this.nbrCabBalc*330) + (this.nbrPerBalc*135)));
      this.totalCout = this.prixTotExt + this.prixTotBalc + this.prixTotLux + this.prixTotSuite + this.prixTotPres;
      this.pers = parseInt(this.nbrPerExt) + parseInt(this.nbrPerBalc) + parseInt(this.nbrPerLux) + parseInt(this.nbrPerSuite) + parseInt(this.nbrPerPres)
      this.totalFisc = (this.fiscTotExt + this.fiscTotBalc + this.fiscTotLux + this.fiscTotSuite + this.fiscTotPres)/this.pers
      this.fiscBalc = this.fiscTotBalc/this.nbrPerBalc;
      this.msgExtBalc = '';

    } else if (this.nbrCabBalc > this.nbrPerBalc) {

      this.msgExtBalc = 'Le nombre de cabines ne peux pas être supérieur au nombre de personness';
      this.prixTotBalc = 0;
      this.fiscTotBalc = 0;
      this.totalFisc = 0;
      this.totalCout = 0;
      this.fiscBalc = 0;

    } else {

      this.msgExtBalc = 'Le nombre de personnes doit être inférieur au double du nombre de cabines.';
      this.prixTotBalc = 0;
      this.fiscTotBalc = 0;
      this.totalCout = 0;
      this.totalFisc = 0;
      this.fiscBalc = 0;

    }
  }

  InputBalc2(event: any){

    this.nbrPerBalc = event.target.value;

    if (parseInt(this.nbrPerBalc) > 2*parseInt(this.nbrCabBalc)){

      this.msgExtBalc = 'Le nombre de personnes doit être inférieur au double du nombre de cabines.';
      this.prixTotBalc = 0;
      this.fiscTotBalc = 0;
      this.totalCout = 0;
      this.totalFisc = 0;
      this.fiscBalc = 0;

    } else if(parseInt(this.nbrPerBalc) < parseInt(this.nbrCabBalc)) {

      this.prixTotBalc = 0;
      this.fiscTotBalc = 0;
      this.totalFisc = 0;
      this.totalCout = 0;
      this.fiscBalc = 0;
      this.msgExtBalc = 'Le nombre de personness ne peux pas être inférieur au nombre de cabines';

    } else {

      this.prixTotBalc = (this.nbrCabBalc*1100) + ((this.nbrPerBalc)*800);
      this.fiscTotBalc = ((((this.nbrCabBalc*770) + (this.nbrPerBalc*665))*0.34) + ((this.nbrCabBalc*330) + (this.nbrPerBalc*135)));
      this.totalCout = this.prixTotExt + this.prixTotBalc + this.prixTotLux + this.prixTotSuite + this.prixTotPres;
      this.pers = parseInt(this.nbrPerExt) + parseInt(this.nbrPerBalc) + parseInt(this.nbrPerLux) + parseInt(this.nbrPerSuite) + parseInt(this.nbrPerPres)
      this.totalFisc = (this.fiscTotExt + this.fiscTotBalc + this.fiscTotLux + this.fiscTotSuite + this.fiscTotPres)/this.pers
      this.fiscBalc = this.fiscTotBalc/this.nbrPerBalc;
      this.msgExtBalc = '';
    }
  }

  InputLux(event: any){

    if (this.nbrPerLux == this.nbrCabLux){
      this.nbrPerLux = event.target.value;
    } else {
      this.nbrPerLux = this.nbrPerLux;
    }

    this.nbrCabLux = event.target.value;

    if (this.nbrCabLux >= (this.nbrPerLux/2) && this.nbrCabLux <= this.nbrPerLux){

      this.prixTotLux = (this.nbrCabLux*1150) + ((this.nbrPerLux)*825);
      this.fiscTotLux = ((((this.nbrCabLux*800) + (this.nbrPerLux*675))*0.34) + ((this.nbrCabLux*350) + (this.nbrPerLux*150)));
      this.totalCout = this.prixTotExt + this.prixTotBalc + this.prixTotLux + this.prixTotSuite + this.prixTotPres;
      this.pers = parseInt(this.nbrPerExt) + parseInt(this.nbrPerBalc) + parseInt(this.nbrPerLux) + parseInt(this.nbrPerSuite) + parseInt(this.nbrPerPres)
      this.totalFisc = (this.fiscTotExt + this.fiscTotBalc + this.fiscTotLux + this.fiscTotSuite + this.fiscTotPres)/this.pers
      this.fiscLux = this.fiscTotLux/this.nbrPerLux;
      this.msgLuxe = '';

    } else if (this.nbrCabLux > this.nbrPerLux) {

      this.msgLuxe = 'Le nombre de cabines ne peux pas être supérieur au nombre de personness';
      this.prixTotLux = 0;
      this.fiscTotLux = 0;
      this.totalCout = 0;
      this.totalFisc = 0;
      this.fiscLux = 0;

    } else {

      this.msgLuxe = 'Le nombre de personnes doit être inférieur au double du nombre de cabines.';
      this.prixTotLux = 0;
      this.fiscTotLux = 0;
      this.totalFisc = 0;
      this.totalCout = 0;
      this.fiscLux = 0;
    }
  }

  InputLux2(event: any){

    this.nbrPerLux = event.target.value;

    if (parseInt(this.nbrPerLux) > 2*parseInt(this.nbrCabLux)){

      this.msgLuxe = 'Le nombre de personnes doit être inférieur au double du nombre de cabines.';
      this.prixTotLux = 0;
      this.fiscTotLux = 0;
      this.totalFisc = 0;
      this.totalCout = 0;
      this.fiscLux = 0;

    } else if(parseInt(this.nbrPerLux) < parseInt(this.nbrCabLux)) {

      this.prixTotLux = 0;
      this.fiscTotLux = 0;
      this.totalFisc = 0;
      this.totalCout = 0;
      this.fiscLux = 0;
      this.msgLuxe = 'Le nombre de personness ne peux pas être inférieur au nombre de cabines';

    } else {

      this.prixTotLux = (this.nbrCabLux*1150) + ((this.nbrPerLux)*825);
      this.fiscTotLux = ((((this.nbrCabLux*800) + (this.nbrPerLux*675))*0.34) + ((this.nbrCabLux*350) + (this.nbrPerLux*150)));
      this.totalCout = this.prixTotExt + this.prixTotBalc + this.prixTotLux + this.prixTotSuite + this.prixTotPres;
      this.pers = parseInt(this.nbrPerExt) + parseInt(this.nbrPerBalc) + parseInt(this.nbrPerLux) + parseInt(this.nbrPerSuite) + parseInt(this.nbrPerPres)
      this.totalFisc = (this.fiscTotExt + this.fiscTotBalc + this.fiscTotLux + this.fiscTotSuite + this.fiscTotPres)/this.pers
      this.fiscLux = this.fiscTotLux/this.nbrPerLux;
      this.msgLuxe = '';
    }
  }

  InputSuite(event: any){

    if (this.nbrPerSuite == this.nbrCabSuite){
      this.nbrPerSuite = event.target.value;
    } else {
      this.nbrPerSuite = this.nbrPerSuite;
    }

    this.nbrCabSuite = event.target.value;

    if (this.nbrCabSuite >= (this.nbrPerSuite/2) && this.nbrCabSuite <= this.nbrPerSuite){

      this.prixTotSuite = (this.nbrCabSuite*1500) + ((this.nbrPerSuite)*1000);
      this.fiscTotSuite = ((((this.nbrCabSuite*1050) + (this.nbrPerSuite*825))*0.34) + ((this.nbrCabSuite*450) + (this.nbrPerSuite*175)));
      this.totalCout = this.prixTotExt + this.prixTotBalc + this.prixTotLux + this.prixTotSuite + this.prixTotPres;
      this.pers = parseInt(this.nbrPerExt) + parseInt(this.nbrPerBalc) + parseInt(this.nbrPerLux) + parseInt(this.nbrPerSuite) + parseInt(this.nbrPerPres)
      this.totalFisc = (this.fiscTotExt + this.fiscTotBalc + this.fiscTotLux + this.fiscTotSuite + this.fiscTotPres)/this.pers
      this.fiscSuite = this.fiscTotSuite/this.nbrPerSuite;
      this.msgSuite = '';

    } else if (this.nbrCabSuite > this.nbrPerSuite) {

      this.msgSuite = 'Le nombre de cabines ne peux pas être supérieur au nombre de personness';
      this.prixTotSuite = 0;
      this.fiscTotSuite = 0;
      this.totalFisc = 0;
      this.totalCout = 0;
      this.fiscSuite = 0;

    } else {

      this.msgSuite = 'Le nombre de personnes doit être inférieur au double du nombre de cabines.';
      this.prixTotSuite = 0;
      this.fiscTotSuite = 0;
      this.totalFisc = 0;
      this.totalCout = 0;
      this.fiscSuite = 0;
    }
  }

  InputSuite2(event: any){

    this.nbrPerSuite = event.target.value;

    if (parseInt(this.nbrPerSuite) > 2*parseInt(this.nbrCabSuite)){
      this.msgSuite = 'Le nombre de personnes doit être inférieur au double du nombre de cabines.';
      this.prixTotSuite = 0;
      this.fiscTotSuite = 0;
      this.totalCout = 0;
      this.totalFisc = 0;
      this.fiscSuite = 0;

    } else if(parseInt(this.nbrPerSuite) < parseInt(this.nbrCabSuite)) {

      this.prixTotSuite = 0;
      this.totalFisc = 0;
      this.fiscTotSuite = 0;
      this.totalCout = 0;
      this.fiscSuite = 0;
      this.msgSuite = 'Le nombre de personness ne peux pas être inférieur au nombre de cabines';

    } else {

      this.prixTotSuite = (this.nbrCabSuite*1500) + ((this.nbrPerSuite)*1000);
      this.fiscTotSuite = ((((this.nbrCabSuite*1050) + (this.nbrPerSuite*825))*0.34) + ((this.nbrCabSuite*450) + (this.nbrPerSuite*175)));
      this.totalCout = this.prixTotExt + this.prixTotBalc + this.prixTotLux + this.prixTotSuite + this.prixTotPres;
      this.pers = parseInt(this.nbrPerExt) + parseInt(this.nbrPerBalc) + parseInt(this.nbrPerLux) + parseInt(this.nbrPerSuite) + parseInt(this.nbrPerPres)
      this.totalFisc = (this.fiscTotExt + this.fiscTotBalc + this.fiscTotLux + this.fiscTotSuite + this.fiscTotPres)/this.pers
      this.fiscSuite = this.fiscTotSuite/this.nbrPerSuite;
      this.msgSuite = '';
    }
  }

  InputPres(event: any){

    if (this.nbrPerPres == this.nbrCabPres){
      this.nbrPerPres = event.target.value;
    } else {
      this.nbrPerPres = this.nbrPerPres;
    }

    this.nbrCabPres = event.target.value;

    if (this.nbrCabPres >= (this.nbrPerPres/2) && this.nbrCabPres <= this.nbrPerPres){
      this.prixTotPres = (this.nbrCabPres*2750) + ((this.nbrPerPres)*1625);
      this.fiscTotPres = ((((this.nbrCabPres*1750) + (this.nbrPerPres*1375))*0.34) + ((this.nbrCabPres*1000) + (this.nbrPerPres*250)));
      this.totalCout = this.prixTotExt + this.prixTotBalc + this.prixTotLux + this.prixTotSuite + this.prixTotPres;
      this.pers = parseInt(this.nbrPerExt) + parseInt(this.nbrPerBalc) + parseInt(this.nbrPerLux) + parseInt(this.nbrPerSuite) + parseInt(this.nbrPerPres)
      this.totalFisc = (this.fiscTotExt + this.fiscTotBalc + this.fiscTotLux + this.fiscTotSuite + this.fiscTotPres)/this.pers
      this.fiscPres = this.fiscTotPres/this.nbrPerPres;
      this.msgSuitePres = '';

    } else if (this.nbrCabPres > this.nbrPerPres) {

      this.msgSuitePres = 'Le nombre de cabines ne peux pas être supérieur au nombre de personness';
      this.prixTotPres = 0;
      this.fiscTotPres = 0;
      this.totalFisc = 0;
      this.totalCout = 0;
      this.fiscPres = 0;

    } else {
      this.msgSuitePres = 'Le nombre de personnes doit être inférieur au double du nombre de cabines.';
      this.prixTotPres = 0;
      this.totalCout = 0;
      this.totalFisc = 0;
      this.fiscTotPres = 0;
      this.fiscPres = 0;
    }
  }

  InputPres2(event: any){

    this.nbrPerPres = event.target.value;

    if (parseInt(this.nbrPerPres) > 2*parseInt(this.nbrCabPres)){

      this.msgSuitePres = 'Le nombre de personnes doit être inférieur au double du nombre de cabines.';
      this.prixTotPres = 0;
      this.fiscTotPres = 0;
      this.totalFisc = 0;
      this.totalCout = 0;
      this.fiscPres = 0;

    } else if(parseInt(this.nbrPerPres) < parseInt(this.nbrCabPres)) {
      this.prixTotPres = 0;
      this.fiscTotPres = 0;
      this.totalFisc = 0;
      this.totalCout = 0;
      this.fiscPres = 0;
      this.msgSuitePres = 'Le nombre de personness ne peux pas être inférieur au nombre de cabines';

    } else {

      this.prixTotPres = (this.nbrCabPres*2750) + ((this.nbrPerPres)*1625);
      this.fiscTotPres = ((((this.nbrCabPres*1750) + (this.nbrPerPres*1375))*0.34) + ((this.nbrCabPres*1000) + (this.nbrPerPres*250)));
      this.totalCout = this.prixTotExt + this.prixTotBalc + this.prixTotLux + this.prixTotSuite + this.prixTotPres;
      this.pers = parseInt(this.nbrPerExt) + parseInt(this.nbrPerBalc) + parseInt(this.nbrPerLux) + parseInt(this.nbrPerSuite) + parseInt(this.nbrPerPres)
      this.totalFisc = (this.fiscTotExt + this.fiscTotBalc + this.fiscTotLux + this.fiscTotSuite + this.fiscTotPres)/this.pers
      this.fiscPres = this.fiscTotPres/this.nbrPerPres;
      this.msgSuitePres = '';
    }
  }

  reload(): void {
    window.location.reload();
  }

}

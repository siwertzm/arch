import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PrixService } from '../prix.service';
import { ReservService } from '../reserv.service';

@Component({
  selector: 'app-cabine-e',
  templateUrl: './cabine-e.component.html',
  styleUrls: ['./cabine-e.component.css']
})
export class CabineEComponent {

  err: any = false;

  msgExt: any = '';
  msgExtBalc: any= '';
  msgLuxe: any= '';
  msgSuite: any= '';
  msgSuitePres: any= '';

  totalCout: any = 0;
  totalReduc: any = 0;


  nbrCabExt: any = 0;
  nbrPerExt: any = 0;
  nbrSemExt: any = 0;
  prixTotExt: any = 0;
  reducExt: any = 0;
  fiscTotExt: any = 0;
  fiscExt: any = 0;

  nbrCabBalc: any = 0;
  nbrPerBalc: any = 0;
  nbrSemBalc: any = 0;
  prixTotBalc: any = 0;
  reducBalc: any = 0;
  fiscTotBalc: any = 0;
  fiscBalc: any = 0;

  nbrCabLux: any = 0;
  nbrPerLux: any = 0;
  nbrSemLux: any = 0;
  prixTotLux: any = 0;
  reducLux: any = 0;
  fiscTotLux: any = 0;
  fiscLux: any = 0;

  nbrCabSuite: any = 0;
  nbrPerSuite: any = 0;
  nbrSemSuite: any = 0;
  prixTotSuite: any = 0;
  reducSuite: any = 0;
  fiscTotSuite: any = 0;
  fiscSuite: any = 0;


  nbrCabPres: any = 0;
  nbrPerPres: any = 0;
  nbrSemPres: any = 0;
  prixTotPres: any = 0;
  reducPres: any = 0;
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


  resa() {

    this.msgErr();

    if(this.err){

    } else if (this.totalCout == 0){

    } else {
      this.reservService.setNbrExt(this.nbrCabExt)
      this.reservService.setNbrPersExt(this.nbrPerExt)
      this.reservService.setNbrSemiExt(this.nbrSemExt)

      this.reservService.setNbrBalc(this.nbrCabBalc)
      this.reservService.setNbrPersBalc(this.nbrPerBalc)
      this.reservService.setNbrSemiBalc(this.nbrSemBalc)

      this.reservService.setNbrLux(this.nbrCabLux)
      this.reservService.setNbrPersLux(this.nbrPerLux)
      this.reservService.setNbrSemiLux(this.nbrSemLux)

      this.reservService.setNbrSuite(this.nbrCabSuite)
      this.reservService.setNbrPersSuite(this.nbrPerSuite)
      this.reservService.setNbrSemiSuite(this.nbrSemSuite)

      this.reservService.setNbrPres(this.nbrCabPres)
      this.reservService.setNbrPersPres(this.nbrPerPres)
      this.reservService.setNbrSemiPres(this.nbrSemPres)

      this.prixService.setPrixTotal(this.totalCout);
      this.route.navigateByUrl('reservation-e');
    }
  }

  InputExt(event: any){

    if (this.nbrPerExt == this.nbrCabExt){
      this.nbrPerExt = event.target.value;
    } else {
      this.nbrPerExt = this.nbrPerExt;
    }

    this.nbrCabExt = event.target.value;

    if (this.nbrCabExt >= (this.nbrPerExt/2) && this.nbrCabExt <= this.nbrPerExt){

      this.prixTotExt = Math.round((this.nbrCabExt*1000) + (this.nbrPerExt*750) + (this.nbrSemExt*3750));
      this.totalCout = this.prixTotExt + this.prixTotBalc + this.prixTotLux + this.prixTotSuite + this.prixTotPres;

      if (this.totalCout >= 426000){
        this.totalReduc = Math.round((this.totalCout*300000)/426000)
        this.reducExt = Math.round((this.prixTotExt*this.totalReduc)/this.totalCout);
        this.reducBalc = Math.round((this.prixTotBalc*this.totalReduc)/this.totalCout);
        this.reducLux = Math.round((this.prixTotLux*this.totalReduc)/this.totalCout);
        this.reducSuite = Math.round((this.prixTotSuite*this.totalReduc)/this.totalCout);
        this.reducPres = Math.round((this.prixTotPres*this.totalReduc)/this.totalCout);
      } else if (this.totalCout >= 354000 && this.totalCout < 426000){
        this.totalReduc = 300000;
        this.reducExt = Math.round((this.prixTotExt*this.totalReduc)/this.totalCout);
        this.reducBalc = Math.round((this.prixTotBalc*this.totalReduc)/this.totalCout);
        this.reducLux = Math.round((this.prixTotLux*this.totalReduc)/this.totalCout);
        this.reducSuite = Math.round((this.prixTotSuite*this.totalReduc)/this.totalCout);
        this.reducPres = Math.round((this.prixTotPres*this.totalReduc)/this.totalCout);
      } else if (this.totalCout >= 118000 && this.totalCout < 354000){
        this.totalReduc = Math.round((this.totalCout*100000)/118000)
        this.reducExt = Math.round((this.prixTotExt*this.totalReduc)/this.totalCout);
        this.reducBalc = Math.round((this.prixTotBalc*this.totalReduc)/this.totalCout);
        this.reducLux = Math.round((this.prixTotLux*this.totalReduc)/this.totalCout);
        this.reducSuite = Math.round((this.prixTotSuite*this.totalReduc)/this.totalCout);
        this.reducPres = Math.round((this.prixTotPres*this.totalReduc)/this.totalCout);
      } else if (this.totalCout >= 100000 && this.totalCout < 118000){
        this.totalReduc = 100000;
        this.reducExt = Math.round((this.prixTotExt*this.totalReduc)/this.totalCout);
        this.reducBalc = Math.round((this.prixTotBalc*this.totalReduc)/this.totalCout);
        this.reducLux = Math.round((this.prixTotLux*this.totalReduc)/this.totalCout);
        this.reducSuite = Math.round((this.prixTotSuite*this.totalReduc)/this.totalCout);
        this.reducPres = Math.round((this.prixTotPres*this.totalReduc)/this.totalCout);
      } else {
        this.totalReduc = this.totalCout;
        this.reducExt = this.prixTotExt;
      }

      this.fiscTotExt = (((this.reducExt/3)*0.75) + (((this.reducExt/3)*2)*0.4));
      this.fiscExt = Math.round((this.fiscTotExt/this.nbrPerExt));
      this.fiscTotBalc = (((this.reducBalc/3)*0.75) + (((this.reducBalc/3)*2)*0.4));
      this.fiscBalc = Math.round(this.fiscTotBalc/this.nbrPerBalc);
      this.fiscTotLux = (((this.reducLux/3)*0.75) + (((this.reducLux/3)*2)*0.4));
      this.fiscLux = Math.round(this.fiscTotLux/this.nbrPerLux);
      this.fiscTotSuite = (((this.reducSuite/3)*0.75) + (((this.reducSuite/3)*2)*0.4));
      this.fiscSuite = Math.round((this.fiscTotSuite)/this.nbrPerSuite);
      this.fiscTotPres = (((this.reducPres/3)*0.75) + (((this.reducPres/3)*2)*0.4));
      this.fiscPres = Math.round((this.fiscTotPres)/this.nbrPerPres);
      this.msgExt = '';

    } else if (this.nbrCabExt > this.nbrPerExt) {

      this.msgExt = 'Le nombre de cabines ne peux pas être supérieur au nombre de personnes';
      this.prixTotExt = 0;
      this.fiscTotExt = 0;
      this.totalCout = 0;
      this.fiscExt = 0;

    } else {

      this.msgExt = 'Le nombre de personnes doit être inférieur au double du nombre de cabines.';
      this.prixTotExt = 0;
      this.fiscTotExt = 0;
      this.totalCout = 0;
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
      this.fiscExt = 0;

    } else if(parseInt(this.nbrPerExt) < parseInt(this.nbrCabExt)) {

      this.prixTotExt = 0;
      this.fiscTotExt = 0;
      this.totalCout = 0;
      this.fiscExt = 0;
      this.msgExt = 'Le nombre de personnes ne peux pas être inférieur au nombre de cabines';

    } else if (parseInt(this.nbrPerExt) < parseInt(this.nbrSemExt)){

      this.msgExt = 'Le nombre de participants doit être inférieur ou égal nombre de passagers.';
      this.prixTotExt = 0;
      this.fiscTotExt = 0;
      this.totalCout = 0;
      this.fiscExt = 0;

    } else {

      this.prixTotExt = Math.round((this.nbrCabExt*1000) + (this.nbrPerExt*750) + (this.nbrSemExt*3750));
      this.totalCout = this.prixTotExt + this.prixTotBalc + this.prixTotLux + this.prixTotSuite + this.prixTotPres;

      if (this.totalCout >= 426000){
        this.totalReduc = Math.round((this.totalCout*300000)/426000)
        this.reducExt = Math.round((this.prixTotExt*this.totalReduc)/this.totalCout);
        this.reducBalc = Math.round((this.prixTotBalc*this.totalReduc)/this.totalCout);
        this.reducLux = Math.round((this.prixTotLux*this.totalReduc)/this.totalCout);
        this.reducSuite = Math.round((this.prixTotSuite*this.totalReduc)/this.totalCout);
        this.reducPres = Math.round((this.prixTotPres*this.totalReduc)/this.totalCout);
      } else if (this.totalCout >= 354000 && this.totalCout < 426000){
        this.totalReduc = 300000;
        this.reducExt = Math.round((this.prixTotExt*this.totalReduc)/this.totalCout);
        this.reducBalc = Math.round((this.prixTotBalc*this.totalReduc)/this.totalCout);
        this.reducLux = Math.round((this.prixTotLux*this.totalReduc)/this.totalCout);
        this.reducSuite = Math.round((this.prixTotSuite*this.totalReduc)/this.totalCout);
        this.reducPres = Math.round((this.prixTotPres*this.totalReduc)/this.totalCout);
      } else if (this.totalCout >= 118000 && this.totalCout < 354000){
        this.totalReduc = Math.round((this.totalCout*100000)/118000)
        this.reducExt = Math.round((this.prixTotExt*this.totalReduc)/this.totalCout);
        this.reducBalc = Math.round((this.prixTotBalc*this.totalReduc)/this.totalCout);
        this.reducLux = Math.round((this.prixTotLux*this.totalReduc)/this.totalCout);
        this.reducSuite = Math.round((this.prixTotSuite*this.totalReduc)/this.totalCout);
        this.reducPres = Math.round((this.prixTotPres*this.totalReduc)/this.totalCout);
      } else if (this.totalCout >= 100000 && this.totalCout < 118000){
        this.totalReduc = 100000;
        this.reducExt = Math.round((this.prixTotExt*this.totalReduc)/this.totalCout);
        this.reducBalc = Math.round((this.prixTotBalc*this.totalReduc)/this.totalCout);
        this.reducLux = Math.round((this.prixTotLux*this.totalReduc)/this.totalCout);
        this.reducSuite = Math.round((this.prixTotSuite*this.totalReduc)/this.totalCout);
        this.reducPres = Math.round((this.prixTotPres*this.totalReduc)/this.totalCout);
      } else {
        this.totalReduc = this.totalCout;
        this.reducExt = this.prixTotExt;
      }

      this.fiscTotExt = (((this.reducExt/3)*0.75) + (((this.reducExt/3)*2)*0.4));
      this.fiscExt = Math.round((this.fiscTotExt/this.nbrPerExt));
      this.fiscTotBalc = (((this.reducBalc/3)*0.75) + (((this.reducBalc/3)*2)*0.4));
      this.fiscBalc = Math.round(this.fiscTotBalc/this.nbrPerBalc);
      this.fiscTotLux = (((this.reducLux/3)*0.75) + (((this.reducLux/3)*2)*0.4));
      this.fiscLux = Math.round(this.fiscTotLux/this.nbrPerLux);
      this.fiscTotSuite = (((this.reducSuite/3)*0.75) + (((this.reducSuite/3)*2)*0.4));
      this.fiscSuite = Math.round((this.fiscTotSuite)/this.nbrPerSuite);
      this.fiscTotPres = (((this.reducPres/3)*0.75) + (((this.reducPres/3)*2)*0.4));
      this.fiscPres = Math.round((this.fiscTotPres)/this.nbrPerPres);
      this.msgExt = '';
    }
  }

  InputExt3(event: any){

    this.nbrSemExt = event.target.value;

    if (parseInt(this.nbrSemExt) > parseInt(this.nbrPerExt)){

      this.msgExt = 'Le nombre de participants doit être inférieur ou égal nombre de passagers.';
      this.prixTotExt = 0;
      this.fiscTotExt = 0;
      this.totalCout = 0;
      this.fiscExt = 0;

    } else if(parseInt(this.nbrSemExt) < 0) {

      this.prixTotExt = 0;
      this.fiscTotExt = 0;
      this.totalCout = 0;
      this.fiscExt = 0;
      this.msgExt = 'Saisie incorrect';

    } else {

      this.prixTotExt = Math.round((this.nbrCabExt*1000) + (this.nbrPerExt*750) + (this.nbrSemExt*3750));
      this.totalCout = this.prixTotExt + this.prixTotBalc + this.prixTotLux + this.prixTotSuite + this.prixTotPres;

      if (this.totalCout >= 426000){
        this.totalReduc = Math.round((this.totalCout*300000)/426000)
        this.reducExt = Math.round((this.prixTotExt*this.totalReduc)/this.totalCout);
        this.reducBalc = Math.round((this.prixTotBalc*this.totalReduc)/this.totalCout);
        this.reducLux = Math.round((this.prixTotLux*this.totalReduc)/this.totalCout);
        this.reducSuite = Math.round((this.prixTotSuite*this.totalReduc)/this.totalCout);
        this.reducPres = Math.round((this.prixTotPres*this.totalReduc)/this.totalCout);
      } else if (this.totalCout >= 354000 && this.totalCout < 426000){
        this.totalReduc = 300000;
        this.reducExt = Math.round((this.prixTotExt*this.totalReduc)/this.totalCout);
        this.reducBalc = Math.round((this.prixTotBalc*this.totalReduc)/this.totalCout);
        this.reducLux = Math.round((this.prixTotLux*this.totalReduc)/this.totalCout);
        this.reducSuite = Math.round((this.prixTotSuite*this.totalReduc)/this.totalCout);
        this.reducPres = Math.round((this.prixTotPres*this.totalReduc)/this.totalCout);
      } else if (this.totalCout >= 118000 && this.totalCout < 354000){
        this.totalReduc = Math.round((this.totalCout*100000)/118000)
        this.reducExt = Math.round((this.prixTotExt*this.totalReduc)/this.totalCout);
        this.reducBalc = Math.round((this.prixTotBalc*this.totalReduc)/this.totalCout);
        this.reducLux = Math.round((this.prixTotLux*this.totalReduc)/this.totalCout);
        this.reducSuite = Math.round((this.prixTotSuite*this.totalReduc)/this.totalCout);
        this.reducPres = Math.round((this.prixTotPres*this.totalReduc)/this.totalCout);
      } else if (this.totalCout >= 100000 && this.totalCout < 118000){
        this.totalReduc = 100000;
        this.reducExt = Math.round((this.prixTotExt*this.totalReduc)/this.totalCout);
        this.reducBalc = Math.round((this.prixTotBalc*this.totalReduc)/this.totalCout);
        this.reducLux = Math.round((this.prixTotLux*this.totalReduc)/this.totalCout);
        this.reducSuite = Math.round((this.prixTotSuite*this.totalReduc)/this.totalCout);
        this.reducPres = Math.round((this.prixTotPres*this.totalReduc)/this.totalCout);
      } else {
        this.totalReduc = this.totalCout;
        this.reducExt = this.prixTotExt;
      }

      this.fiscTotExt = (((this.reducExt/3)*0.75) + (((this.reducExt/3)*2)*0.4));
      this.fiscExt = Math.round((this.fiscTotExt/this.nbrPerExt));
      this.fiscTotBalc = (((this.reducBalc/3)*0.75) + (((this.reducBalc/3)*2)*0.4));
      this.fiscBalc = Math.round(this.fiscTotBalc/this.nbrPerBalc);
      this.fiscTotLux = (((this.reducLux/3)*0.75) + (((this.reducLux/3)*2)*0.4));
      this.fiscLux = Math.round(this.fiscTotLux/this.nbrPerLux);
      this.fiscTotSuite = (((this.reducSuite/3)*0.75) + (((this.reducSuite/3)*2)*0.4));
      this.fiscSuite = Math.round((this.fiscTotSuite)/this.nbrPerSuite);
      this.fiscTotPres = (((this.reducPres/3)*0.75) + (((this.reducPres/3)*2)*0.4));
      this.fiscPres = Math.round((this.fiscTotPres)/this.nbrPerPres);
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

      this.prixTotBalc = Math.round((this.nbrCabBalc*1300) + ((this.nbrPerBalc)*900) + (this.nbrSemBalc*3750));
      this.totalCout = this.prixTotExt + this.prixTotBalc + this.prixTotLux + this.prixTotSuite + this.prixTotPres;

      if (this.totalCout >= 426000){
        this.totalReduc = Math.round((this.totalCout*300000)/426000)
        this.reducBalc = Math.round((this.prixTotBalc*this.totalReduc)/this.totalCout);
        this.reducExt = Math.round((this.prixTotExt*this.totalReduc)/this.totalCout);
        this.reducLux = Math.round((this.prixTotLux*this.totalReduc)/this.totalCout);
        this.reducSuite = Math.round((this.prixTotSuite*this.totalReduc)/this.totalCout);
        this.reducPres = Math.round((this.prixTotPres*this.totalReduc)/this.totalCout);
      } else if (this.totalCout >= 354000 && this.totalCout < 426000){
        this.totalReduc = 300000;
        this.reducBalc = Math.round((this.prixTotBalc*this.totalReduc)/this.totalCout);
        this.reducExt = Math.round((this.prixTotExt*this.totalReduc)/this.totalCout);
        this.reducLux = Math.round((this.prixTotLux*this.totalReduc)/this.totalCout);
        this.reducSuite = Math.round((this.prixTotSuite*this.totalReduc)/this.totalCout);
        this.reducPres = Math.round((this.prixTotPres*this.totalReduc)/this.totalCout);
      } else if (this.totalCout >= 118000 && this.totalCout < 354000){
        this.totalReduc = Math.round((this.totalCout*100000)/118000)
        this.reducBalc = Math.round((this.prixTotBalc*this.totalReduc)/this.totalCout);
        this.reducExt = Math.round((this.prixTotExt*this.totalReduc)/this.totalCout);
        this.reducLux = Math.round((this.prixTotLux*this.totalReduc)/this.totalCout);
        this.reducSuite = Math.round((this.prixTotSuite*this.totalReduc)/this.totalCout);
        this.reducPres = Math.round((this.prixTotPres*this.totalReduc)/this.totalCout);
      } else if (this.totalCout >= 100000 && this.totalCout < 118000){
        this.totalReduc = 100000;
        this.reducBalc = Math.round((this.prixTotBalc*this.totalReduc)/this.totalCout);
        this.reducExt = Math.round((this.prixTotExt*this.totalReduc)/this.totalCout);
        this.reducLux = Math.round((this.prixTotLux*this.totalReduc)/this.totalCout);
        this.reducSuite = Math.round((this.prixTotSuite*this.totalReduc)/this.totalCout);
        this.reducPres = Math.round((this.prixTotPres*this.totalReduc)/this.totalCout);
      } else {
        this.totalReduc = this.totalCout;
        this.reducBalc = this.prixTotBalc;
      }

      this.fiscTotExt = (((this.reducExt/3)*0.75) + (((this.reducExt/3)*2)*0.4));
      this.fiscExt = Math.round((this.fiscTotExt/this.nbrPerExt));
      this.fiscTotBalc = (((this.reducBalc/3)*0.75) + (((this.reducBalc/3)*2)*0.4));
      this.fiscBalc = Math.round(this.fiscTotBalc/this.nbrPerBalc);
      this.fiscTotLux = (((this.reducLux/3)*0.75) + (((this.reducLux/3)*2)*0.4));
      this.fiscLux = Math.round(this.fiscTotLux/this.nbrPerLux);
      this.fiscTotSuite = (((this.reducSuite/3)*0.75) + (((this.reducSuite/3)*2)*0.4));
      this.fiscSuite = Math.round((this.fiscTotSuite)/this.nbrPerSuite);
      this.fiscTotPres = (((this.reducPres/3)*0.75) + (((this.reducPres/3)*2)*0.4));
      this.fiscPres = Math.round((this.fiscTotPres)/this.nbrPerPres);
      this.msgExtBalc = '';

    } else if (this.nbrCabBalc > this.nbrPerBalc) {

      this.msgExtBalc = 'Le nombre de cabines ne peux pas être supérieur au nombre de personnes';
      this.prixTotBalc = 0;
      this.fiscTotBalc = 0;
      this.fiscBalc = 0;

    } else {

      this.msgExtBalc = 'Le nombre de personnes doit être inférieur au double du nombre de cabines.';
      this.prixTotBalc = 0;
      this.fiscTotBalc = 0;
      this.totalCout = 0;
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
      this.fiscBalc = 0;

    } else if(parseInt(this.nbrPerBalc) < parseInt(this.nbrCabBalc)) {

      this.prixTotBalc = 0;
      this.fiscTotBalc = 0;
      this.totalCout = 0;
      this.fiscBalc = 0;
      this.msgExtBalc = 'Le nombre de personnes ne peux pas être inférieur au nombre de cabines';

    } else if (parseInt(this.nbrPerBalc) < parseInt(this.nbrSemBalc)){

      this.msgExtBalc = 'Le nombre de participants doit être inférieur ou égal nombre de passagers.';
      this.prixTotBalc = 0;
      this.fiscTotBalc = 0;
      this.totalCout = 0;
      this.fiscBalc = 0;

    } else {

      this.prixTotBalc = Math.round((this.nbrCabBalc*1300) + ((this.nbrPerBalc)*900) + (this.nbrSemBalc*3750));
      this.totalCout = this.prixTotExt + this.prixTotBalc + this.prixTotLux + this.prixTotSuite + this.prixTotPres;

      if (this.totalCout >= 426000){
        this.totalReduc = Math.round((this.totalCout*300000)/426000)
        this.reducBalc = Math.round((this.prixTotBalc*this.totalReduc)/this.totalCout);
        this.reducExt = Math.round((this.prixTotExt*this.totalReduc)/this.totalCout);
        this.reducLux = Math.round((this.prixTotLux*this.totalReduc)/this.totalCout);
        this.reducSuite = Math.round((this.prixTotSuite*this.totalReduc)/this.totalCout);
        this.reducPres = Math.round((this.prixTotPres*this.totalReduc)/this.totalCout);
      } else if (this.totalCout >= 354000 && this.totalCout < 426000){
        this.totalReduc = 300000;
        this.reducBalc = Math.round((this.prixTotBalc*this.totalReduc)/this.totalCout);
        this.reducExt = Math.round((this.prixTotExt*this.totalReduc)/this.totalCout);
        this.reducLux = Math.round((this.prixTotLux*this.totalReduc)/this.totalCout);
        this.reducSuite = Math.round((this.prixTotSuite*this.totalReduc)/this.totalCout);
        this.reducPres = Math.round((this.prixTotPres*this.totalReduc)/this.totalCout);
      } else if (this.totalCout >= 118000 && this.totalCout < 354000){
        this.totalReduc = Math.round((this.totalCout*100000)/118000)
        this.reducBalc = Math.round((this.prixTotBalc*this.totalReduc)/this.totalCout);
        this.reducExt = Math.round((this.prixTotExt*this.totalReduc)/this.totalCout);
        this.reducLux = Math.round((this.prixTotLux*this.totalReduc)/this.totalCout);
        this.reducSuite = Math.round((this.prixTotSuite*this.totalReduc)/this.totalCout);
        this.reducPres = Math.round((this.prixTotPres*this.totalReduc)/this.totalCout);
      } else if (this.totalCout >= 100000 && this.totalCout < 118000){
        this.totalReduc = 100000;
        this.reducBalc = Math.round((this.prixTotBalc*this.totalReduc)/this.totalCout);
        this.reducExt = Math.round((this.prixTotExt*this.totalReduc)/this.totalCout);
        this.reducLux = Math.round((this.prixTotLux*this.totalReduc)/this.totalCout);
        this.reducSuite = Math.round((this.prixTotSuite*this.totalReduc)/this.totalCout);
        this.reducPres = Math.round((this.prixTotPres*this.totalReduc)/this.totalCout);
      } else {
        this.totalReduc = this.totalCout;
        this.reducBalc = this.prixTotBalc;
      }

      this.fiscTotExt = (((this.reducExt/3)*0.75) + (((this.reducExt/3)*2)*0.4));
      this.fiscExt = Math.round((this.fiscTotExt/this.nbrPerExt));
      this.fiscTotBalc = (((this.reducBalc/3)*0.75) + (((this.reducBalc/3)*2)*0.4));
      this.fiscBalc = Math.round(this.fiscTotBalc/this.nbrPerBalc);
      this.fiscTotLux = (((this.reducLux/3)*0.75) + (((this.reducLux/3)*2)*0.4));
      this.fiscLux = Math.round(this.fiscTotLux/this.nbrPerLux);
      this.fiscTotSuite = (((this.reducSuite/3)*0.75) + (((this.reducSuite/3)*2)*0.4));
      this.fiscSuite = Math.round((this.fiscTotSuite)/this.nbrPerSuite);
      this.fiscTotPres = (((this.reducPres/3)*0.75) + (((this.reducPres/3)*2)*0.4));
      this.fiscPres = Math.round((this.fiscTotPres)/this.nbrPerPres);
      this.msgExtBalc = '';
    }
  }

  InputBalc3(event: any){

    this.nbrSemBalc = event.target.value;

    if (parseInt(this.nbrSemBalc) > parseInt(this.nbrPerBalc)){

      this.msgExtBalc = 'Le nombre de participants doit être inférieur ou égal nombre de passagers.';
      this.prixTotBalc = 0;
      this.fiscTotBalc = 0;
      this.totalCout = 0;
      this.fiscBalc = 0;

    } else if(parseInt(this.nbrSemBalc) < 0) {

      this.prixTotBalc = 0;
      this.fiscTotBalc = 0;
      this.totalCout = 0;
      this.fiscBalc = 0;
      this.msgExtBalc = 'Saisie incorrect';

    } else {

      this.prixTotBalc = Math.round((this.nbrCabBalc*1300) + (this.nbrPerBalc*900) + (this.nbrSemBalc*3750));
      this.totalCout = this.prixTotExt + this.prixTotBalc + this.prixTotLux + this.prixTotSuite + this.prixTotPres;

      if (this.totalCout >= 426000){
        this.totalReduc = Math.round((this.totalCout*300000)/426000)
        this.reducBalc = Math.round((this.prixTotBalc*this.totalReduc)/this.totalCout);
        this.reducExt = Math.round((this.prixTotExt*this.totalReduc)/this.totalCout);
        this.reducLux = Math.round((this.prixTotLux*this.totalReduc)/this.totalCout);
        this.reducSuite = Math.round((this.prixTotSuite*this.totalReduc)/this.totalCout);
        this.reducPres = Math.round((this.prixTotPres*this.totalReduc)/this.totalCout);
      } else if (this.totalCout >= 354000 && this.totalCout < 426000){
        this.totalReduc = 300000;
        this.reducBalc = Math.round((this.prixTotBalc*this.totalReduc)/this.totalCout);
        this.reducExt = Math.round((this.prixTotExt*this.totalReduc)/this.totalCout);
        this.reducLux = Math.round((this.prixTotLux*this.totalReduc)/this.totalCout);
        this.reducSuite = Math.round((this.prixTotSuite*this.totalReduc)/this.totalCout);
        this.reducPres = Math.round((this.prixTotPres*this.totalReduc)/this.totalCout);
      } else if (this.totalCout >= 118000 && this.totalCout < 354000){
        this.totalReduc = Math.round((this.totalCout*100000)/118000)
        this.reducBalc = Math.round((this.prixTotBalc*this.totalReduc)/this.totalCout);
        this.reducExt = Math.round((this.prixTotExt*this.totalReduc)/this.totalCout);
        this.reducLux = Math.round((this.prixTotLux*this.totalReduc)/this.totalCout);
        this.reducSuite = Math.round((this.prixTotSuite*this.totalReduc)/this.totalCout);
        this.reducPres = Math.round((this.prixTotPres*this.totalReduc)/this.totalCout);
      } else if (this.totalCout >= 100000 && this.totalCout < 118000){
        this.totalReduc = 100000;
        this.reducBalc = Math.round((this.prixTotBalc*this.totalReduc)/this.totalCout);
        this.reducExt = Math.round((this.prixTotExt*this.totalReduc)/this.totalCout);
        this.reducLux = Math.round((this.prixTotLux*this.totalReduc)/this.totalCout);
        this.reducSuite = Math.round((this.prixTotSuite*this.totalReduc)/this.totalCout);
        this.reducPres = Math.round((this.prixTotPres*this.totalReduc)/this.totalCout);
      } else {
        this.totalReduc = this.totalCout;
        this.reducBalc = this.prixTotBalc;
      }

      this.fiscTotExt = (((this.reducExt/3)*0.75) + (((this.reducExt/3)*2)*0.4));
      this.fiscExt = Math.round((this.fiscTotExt/this.nbrPerExt));
      this.fiscTotBalc = (((this.reducBalc/3)*0.75) + (((this.reducBalc/3)*2)*0.4));
      this.fiscBalc = Math.round(this.fiscTotBalc/this.nbrPerBalc);
      this.fiscTotLux = (((this.reducLux/3)*0.75) + (((this.reducLux/3)*2)*0.4));
      this.fiscLux = Math.round(this.fiscTotLux/this.nbrPerLux);
      this.fiscTotSuite = (((this.reducSuite/3)*0.75) + (((this.reducSuite/3)*2)*0.4));
      this.fiscSuite = Math.round((this.fiscTotSuite)/this.nbrPerSuite);
      this.fiscTotPres = (((this.reducPres/3)*0.75) + (((this.reducPres/3)*2)*0.4));
      this.fiscPres = Math.round((this.fiscTotPres)/this.nbrPerPres);
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

      this.prixTotLux = Math.round((this.nbrCabLux*1500) + ((this.nbrPerLux)*1000) + (this.nbrSemLux*3750));
      this.totalCout = this.prixTotExt + this.prixTotBalc + this.prixTotLux + this.prixTotSuite + this.prixTotPres;

      if (this.totalCout >= 426000){
        this.totalReduc = Math.round((this.totalCout*300000)/426000)
        this.reducLux = Math.round((this.prixTotLux*this.totalReduc)/this.totalCout);
        this.reducExt = Math.round((this.prixTotExt*this.totalReduc)/this.totalCout);
        this.reducBalc = Math.round((this.prixTotBalc*this.totalReduc)/this.totalCout);
        this.reducSuite = Math.round((this.prixTotSuite*this.totalReduc)/this.totalCout);
        this.reducPres = Math.round((this.prixTotPres*this.totalReduc)/this.totalCout);
      } else if (this.totalCout >= 354000 && this.totalCout < 426000){
        this.totalReduc = 300000;
        this.reducLux = Math.round((this.prixTotLux*this.totalReduc)/this.totalCout);
        this.reducExt = Math.round((this.prixTotExt*this.totalReduc)/this.totalCout);
        this.reducBalc = Math.round((this.prixTotBalc*this.totalReduc)/this.totalCout);
        this.reducSuite = Math.round((this.prixTotSuite*this.totalReduc)/this.totalCout);
        this.reducPres = Math.round((this.prixTotPres*this.totalReduc)/this.totalCout);
      } else if (this.totalCout >= 118000 && this.totalCout < 354000){
        this.totalReduc = Math.round((this.totalCout*100000)/118000)
        this.reducLux = Math.round((this.prixTotLux*this.totalReduc)/this.totalCout);
        this.reducExt = Math.round((this.prixTotExt*this.totalReduc)/this.totalCout);
        this.reducBalc = Math.round((this.prixTotBalc*this.totalReduc)/this.totalCout);
        this.reducSuite = Math.round((this.prixTotSuite*this.totalReduc)/this.totalCout);
        this.reducPres = Math.round((this.prixTotPres*this.totalReduc)/this.totalCout);
      } else if (this.totalCout >= 100000 && this.totalCout < 118000){
        this.totalReduc = 100000;
        this.reducLux = Math.round((this.prixTotLux*this.totalReduc)/this.totalCout);
        this.reducExt = Math.round((this.prixTotExt*this.totalReduc)/this.totalCout);
        this.reducBalc = Math.round((this.prixTotBalc*this.totalReduc)/this.totalCout);
        this.reducSuite = Math.round((this.prixTotSuite*this.totalReduc)/this.totalCout);
        this.reducPres = Math.round((this.prixTotPres*this.totalReduc)/this.totalCout);
      } else {
        this.totalReduc = this.totalCout;
        this.reducLux = this.prixTotLux;
      }

      this.fiscTotExt = (((this.reducExt/3)*0.75) + (((this.reducExt/3)*2)*0.4));
      this.fiscExt = Math.round((this.fiscTotExt/this.nbrPerExt));
      this.fiscTotBalc = (((this.reducBalc/3)*0.75) + (((this.reducBalc/3)*2)*0.4));
      this.fiscBalc = Math.round(this.fiscTotBalc/this.nbrPerBalc);
      this.fiscTotLux = (((this.reducLux/3)*0.75) + (((this.reducLux/3)*2)*0.4));
      this.fiscLux = Math.round(this.fiscTotLux/this.nbrPerLux);
      this.fiscTotSuite = (((this.reducSuite/3)*0.75) + (((this.reducSuite/3)*2)*0.4));
      this.fiscSuite = Math.round((this.fiscTotSuite)/this.nbrPerSuite);
      this.fiscTotPres = (((this.reducPres/3)*0.75) + (((this.reducPres/3)*2)*0.4));
      this.fiscPres = Math.round((this.fiscTotPres)/this.nbrPerPres);
      this.msgLuxe = '';

    } else if (this.nbrCabLux > this.nbrPerLux) {

      this.msgLuxe = 'Le nombre de cabines ne peux pas être supérieur au nombre de personnes';
      this.prixTotLux = 0;
      this.fiscTotLux = 0;
      this.totalCout = 0;
      this.fiscLux = 0;

    } else {

      this.msgLuxe = 'Le nombre de personnes doit être inférieur au double du nombre de cabines.';
      this.prixTotLux = 0;
      this.fiscTotLux = 0;
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
      this.totalCout = 0;
      this.fiscLux = 0;

    } else if(parseInt(this.nbrPerLux) < parseInt(this.nbrCabLux)) {

      this.prixTotLux = 0;
      this.fiscTotLux = 0;
      this.totalCout = 0;
      this.fiscLux = 0;
      this.msgLuxe = 'Le nombre de personnes ne peux pas être inférieur au nombre de cabines';

    } else if (parseInt(this.nbrPerLux) < parseInt(this.nbrSemLux)){

      this.msgLuxe = 'Le nombre de participants doit être inférieur ou égal nombre de passagers.';
      this.prixTotLux = 0;
      this.fiscTotLux = 0;
      this.totalCout = 0;
      this.fiscLux = 0;

    } else {

      this.prixTotLux = Math.round((this.nbrCabLux*1500) + ((this.nbrPerLux)*1000) + (this.nbrSemLux*3750));
      this.totalCout = this.prixTotExt + this.prixTotBalc + this.prixTotLux + this.prixTotSuite + this.prixTotPres;

      if (this.totalCout >= 426000){
        this.totalReduc = Math.round((this.totalCout*300000)/426000)
        this.reducLux = Math.round((this.prixTotLux*this.totalReduc)/this.totalCout);
        this.reducExt = Math.round((this.prixTotExt*this.totalReduc)/this.totalCout);
        this.reducBalc = Math.round((this.prixTotBalc*this.totalReduc)/this.totalCout);
        this.reducSuite = Math.round((this.prixTotSuite*this.totalReduc)/this.totalCout);
        this.reducPres = Math.round((this.prixTotPres*this.totalReduc)/this.totalCout);
      } else if (this.totalCout >= 354000 && this.totalCout < 426000){
        this.totalReduc = 300000;
        this.reducLux = Math.round((this.prixTotLux*this.totalReduc)/this.totalCout);
        this.reducExt = Math.round((this.prixTotExt*this.totalReduc)/this.totalCout);
        this.reducBalc = Math.round((this.prixTotBalc*this.totalReduc)/this.totalCout);
        this.reducSuite = Math.round((this.prixTotSuite*this.totalReduc)/this.totalCout);
        this.reducPres = Math.round((this.prixTotPres*this.totalReduc)/this.totalCout);
      } else if (this.totalCout >= 118000 && this.totalCout < 354000){
        this.totalReduc = Math.round((this.totalCout*100000)/118000)
        this.reducLux = Math.round((this.prixTotLux*this.totalReduc)/this.totalCout);
        this.reducExt = Math.round((this.prixTotExt*this.totalReduc)/this.totalCout);
        this.reducBalc = Math.round((this.prixTotBalc*this.totalReduc)/this.totalCout);
        this.reducSuite = Math.round((this.prixTotSuite*this.totalReduc)/this.totalCout);
        this.reducPres = Math.round((this.prixTotPres*this.totalReduc)/this.totalCout);
      } else if (this.totalCout >= 100000 && this.totalCout < 118000){
        this.totalReduc = 100000;
        this.reducLux = Math.round((this.prixTotLux*this.totalReduc)/this.totalCout);
        this.reducExt = Math.round((this.prixTotExt*this.totalReduc)/this.totalCout);
        this.reducBalc = Math.round((this.prixTotBalc*this.totalReduc)/this.totalCout);
        this.reducSuite = Math.round((this.prixTotSuite*this.totalReduc)/this.totalCout);
        this.reducPres = Math.round((this.prixTotPres*this.totalReduc)/this.totalCout);
      } else {
        this.totalReduc = this.totalCout;
        this.reducLux = this.prixTotLux;
      }

      this.fiscTotExt = (((this.reducExt/3)*0.75) + (((this.reducExt/3)*2)*0.4));
      this.fiscExt = Math.round((this.fiscTotExt/this.nbrPerExt));
      this.fiscTotBalc = (((this.reducBalc/3)*0.75) + (((this.reducBalc/3)*2)*0.4));
      this.fiscBalc = Math.round(this.fiscTotBalc/this.nbrPerBalc);
      this.fiscTotLux = (((this.reducLux/3)*0.75) + (((this.reducLux/3)*2)*0.4));
      this.fiscLux = Math.round(this.fiscTotLux/this.nbrPerLux);
      this.fiscTotSuite = (((this.reducSuite/3)*0.75) + (((this.reducSuite/3)*2)*0.4));
      this.fiscSuite = Math.round((this.fiscTotSuite)/this.nbrPerSuite);
      this.fiscTotPres = (((this.reducPres/3)*0.75) + (((this.reducPres/3)*2)*0.4));
      this.fiscPres = Math.round((this.fiscTotPres)/this.nbrPerPres);
      this.msgLuxe = '';
    }
  }

  InputLux3(event: any){

    this.nbrSemLux = event.target.value;

    if (parseInt(this.nbrSemLux) > parseInt(this.nbrPerLux)){

      this.msgLuxe = 'Le nombre de participants doit être inférieur ou égal nombre de passagers.';
      this.prixTotLux = 0;
      this.fiscTotLux = 0;
      this.totalCout = 0;
      this.fiscLux = 0;

    } else if(parseInt(this.nbrSemLux) < 0) {

      this.prixTotLux = 0;
      this.fiscTotLux = 0;
      this.totalCout = 0;
      this.fiscLux = 0;
      this.msgLuxe = 'Saisie incorrect';

    } else {

      this.prixTotLux = Math.round((this.nbrCabLux*1500) + (this.nbrPerLux*1000) + (this.nbrSemLux*3750));
      this.totalCout = this.prixTotExt + this.prixTotBalc + this.prixTotLux + this.prixTotSuite + this.prixTotPres;

      if (this.totalCout >= 426000){
        this.totalReduc = Math.round((this.totalCout*300000)/426000)
        this.reducLux = Math.round((this.prixTotLux*this.totalReduc)/this.totalCout);
        this.reducExt = Math.round((this.prixTotExt*this.totalReduc)/this.totalCout);
        this.reducBalc = Math.round((this.prixTotBalc*this.totalReduc)/this.totalCout);
        this.reducSuite = Math.round((this.prixTotSuite*this.totalReduc)/this.totalCout);
        this.reducPres = Math.round((this.prixTotPres*this.totalReduc)/this.totalCout);
      } else if (this.totalCout >= 354000 && this.totalCout < 426000){
        this.totalReduc = 300000;
        this.reducLux = Math.round((this.prixTotLux*this.totalReduc)/this.totalCout);
        this.reducExt = Math.round((this.prixTotExt*this.totalReduc)/this.totalCout);
        this.reducBalc = Math.round((this.prixTotBalc*this.totalReduc)/this.totalCout);
        this.reducSuite = Math.round((this.prixTotSuite*this.totalReduc)/this.totalCout);
        this.reducPres = Math.round((this.prixTotPres*this.totalReduc)/this.totalCout);
      } else if (this.totalCout >= 118000 && this.totalCout < 354000){
        this.totalReduc = Math.round((this.totalCout*100000)/118000)
        this.reducLux = Math.round((this.prixTotLux*this.totalReduc)/this.totalCout);
        this.reducExt = Math.round((this.prixTotExt*this.totalReduc)/this.totalCout);
        this.reducBalc = Math.round((this.prixTotBalc*this.totalReduc)/this.totalCout);
        this.reducSuite = Math.round((this.prixTotSuite*this.totalReduc)/this.totalCout);
        this.reducPres = Math.round((this.prixTotPres*this.totalReduc)/this.totalCout);
      } else if (this.totalCout >= 100000 && this.totalCout < 118000){
        this.totalReduc = 100000;
        this.reducLux = Math.round((this.prixTotLux*this.totalReduc)/this.totalCout);
        this.reducExt = Math.round((this.prixTotExt*this.totalReduc)/this.totalCout);
        this.reducBalc = Math.round((this.prixTotBalc*this.totalReduc)/this.totalCout);
        this.reducSuite = Math.round((this.prixTotSuite*this.totalReduc)/this.totalCout);
        this.reducPres = Math.round((this.prixTotPres*this.totalReduc)/this.totalCout);
      } else {
        this.totalReduc = this.totalCout;
        this.reducLux = this.prixTotLux;
      }

      this.fiscTotExt = (((this.reducExt/3)*0.75) + (((this.reducExt/3)*2)*0.4));
      this.fiscExt = Math.round((this.fiscTotExt/this.nbrPerExt));
      this.fiscTotBalc = (((this.reducBalc/3)*0.75) + (((this.reducBalc/3)*2)*0.4));
      this.fiscBalc = Math.round(this.fiscTotBalc/this.nbrPerBalc);
      this.fiscTotLux = (((this.reducLux/3)*0.75) + (((this.reducLux/3)*2)*0.4));
      this.fiscLux = Math.round(this.fiscTotLux/this.nbrPerLux);
      this.fiscTotSuite = (((this.reducSuite/3)*0.75) + (((this.reducSuite/3)*2)*0.4));
      this.fiscSuite = Math.round((this.fiscTotSuite)/this.nbrPerSuite);
      this.fiscTotPres = (((this.reducPres/3)*0.75) + (((this.reducPres/3)*2)*0.4));
      this.fiscPres = Math.round((this.fiscTotPres)/this.nbrPerPres);
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

      this.prixTotSuite = Math.round((this.nbrCabSuite*2000) + ((this.nbrPerSuite)*1250) + ((this.nbrSemSuite)*3750));
      this.totalCout = this.prixTotExt + this.prixTotBalc + this.prixTotLux + this.prixTotSuite + this.prixTotPres;

      if (this.totalCout >= 426000){
        this.totalReduc = Math.round((this.totalCout*300000)/426000)
        this.reducSuite = Math.round((this.prixTotSuite*this.totalReduc)/this.totalCout);
        this.reducExt = Math.round((this.prixTotExt*this.totalReduc)/this.totalCout);
        this.reducBalc = Math.round((this.prixTotBalc*this.totalReduc)/this.totalCout);
        this.reducLux = Math.round((this.prixTotLux*this.totalReduc)/this.totalCout);
        this.reducPres = Math.round((this.prixTotPres*this.totalReduc)/this.totalCout);
      } else if (this.totalCout >= 354000 && this.totalCout < 426000){
        this.totalReduc = 300000;
        this.reducSuite = Math.round((this.prixTotSuite*this.totalReduc)/this.totalCout);
        this.reducExt = Math.round((this.prixTotExt*this.totalReduc)/this.totalCout);
        this.reducBalc = Math.round((this.prixTotBalc*this.totalReduc)/this.totalCout);
        this.reducLux = Math.round((this.prixTotLux*this.totalReduc)/this.totalCout);
        this.reducPres = Math.round((this.prixTotPres*this.totalReduc)/this.totalCout);
      } else if (this.totalCout >= 118000 && this.totalCout < 354000){
        this.totalReduc = Math.round((this.totalCout*100000)/118000)
        this.reducSuite = Math.round((this.prixTotSuite*this.totalReduc)/this.totalCout);
        this.reducExt = Math.round((this.prixTotExt*this.totalReduc)/this.totalCout);
        this.reducBalc = Math.round((this.prixTotBalc*this.totalReduc)/this.totalCout);
        this.reducLux = Math.round((this.prixTotLux*this.totalReduc)/this.totalCout);
        this.reducPres = Math.round((this.prixTotPres*this.totalReduc)/this.totalCout);
      } else if (this.totalCout >= 100000 && this.totalCout < 118000){
        this.totalReduc = 100000;
        this.reducSuite = Math.round((this.prixTotSuite*this.totalReduc)/this.totalCout);
        this.reducExt = Math.round((this.prixTotExt*this.totalReduc)/this.totalCout);
        this.reducBalc = Math.round((this.prixTotBalc*this.totalReduc)/this.totalCout);
        this.reducLux = Math.round((this.prixTotLux*this.totalReduc)/this.totalCout);
        this.reducPres = Math.round((this.prixTotPres*this.totalReduc)/this.totalCout);
      } else {
        this.totalReduc = this.totalCout;
        this.reducSuite = this.prixTotSuite;
      }

      this.fiscTotExt = (((this.reducExt/3)*0.75) + (((this.reducExt/3)*2)*0.4));
      this.fiscExt = Math.round((this.fiscTotExt/this.nbrPerExt));
      this.fiscTotBalc = (((this.reducBalc/3)*0.75) + (((this.reducBalc/3)*2)*0.4));
      this.fiscBalc = Math.round(this.fiscTotBalc/this.nbrPerBalc);
      this.fiscTotLux = (((this.reducLux/3)*0.75) + (((this.reducLux/3)*2)*0.4));
      this.fiscLux = Math.round(this.fiscTotLux/this.nbrPerLux);
      this.fiscTotSuite = (((this.reducSuite/3)*0.75) + (((this.reducSuite/3)*2)*0.4));
      this.fiscSuite = Math.round((this.fiscTotSuite)/this.nbrPerSuite);
      this.fiscTotPres = (((this.reducPres/3)*0.75) + (((this.reducPres/3)*2)*0.4));
      this.fiscPres = Math.round((this.fiscTotPres)/this.nbrPerPres);
      this.msgSuite = '';

    } else if (this.nbrCabSuite > this.nbrPerSuite) {

      this.msgSuite = 'Le nombre de cabines ne peux pas être supérieur au nombre de personnes';
      this.prixTotSuite = 0;
      this.fiscTotSuite = 0;
      this.totalCout = 0;
      this.fiscSuite = 0;

    } else {

      this.msgSuite = 'Le nombre de personnes doit être inférieur au double du nombre de cabines.';
      this.prixTotSuite = 0;
      this.fiscTotSuite = 0;
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
      this.fiscSuite = 0;

    } else if(parseInt(this.nbrPerSuite) < parseInt(this.nbrCabSuite)) {

      this.prixTotSuite = 0;
      this.fiscTotSuite = 0;
      this.totalCout = 0;
      this.fiscSuite = 0;
      this.msgSuite = 'Le nombre de personnes ne peux pas être inférieur au nombre de cabines';

    } else if (parseInt(this.nbrPerSuite) < parseInt(this.nbrSemSuite)){

      this.msgSuite = 'Le nombre de participants doit être inférieur ou égal nombre de passagers.';
      this.prixTotSuite = 0;
      this.fiscTotSuite = 0;
      this.totalCout = 0;
      this.fiscSuite = 0;

    } else {

      this.prixTotSuite = Math.round((this.nbrCabSuite*2000) + ((this.nbrPerSuite)*1250) + ((this.nbrSemSuite)*3750));
      this.totalCout = this.prixTotExt + this.prixTotBalc + this.prixTotLux + this.prixTotSuite + this.prixTotPres;

      if (this.totalCout >= 426000){
        this.totalReduc = Math.round((this.totalCout*300000)/426000)
        this.reducSuite = Math.round((this.prixTotSuite*this.totalReduc)/this.totalCout);
        this.reducExt = Math.round((this.prixTotExt*this.totalReduc)/this.totalCout);
        this.reducBalc = Math.round((this.prixTotBalc*this.totalReduc)/this.totalCout);
        this.reducLux = Math.round((this.prixTotLux*this.totalReduc)/this.totalCout);
        this.reducPres = Math.round((this.prixTotPres*this.totalReduc)/this.totalCout);
      } else if (this.totalCout >= 354000 && this.totalCout < 426000){
        this.totalReduc = 300000;
        this.reducSuite = Math.round((this.prixTotSuite*this.totalReduc)/this.totalCout);
        this.reducExt = Math.round((this.prixTotExt*this.totalReduc)/this.totalCout);
        this.reducBalc = Math.round((this.prixTotBalc*this.totalReduc)/this.totalCout);
        this.reducLux = Math.round((this.prixTotLux*this.totalReduc)/this.totalCout);
        this.reducPres = Math.round((this.prixTotPres*this.totalReduc)/this.totalCout);
      } else if (this.totalCout >= 118000 && this.totalCout < 354000){
        this.totalReduc = Math.round((this.totalCout*100000)/118000)
        this.reducSuite = Math.round((this.prixTotSuite*this.totalReduc)/this.totalCout);
        this.reducExt = Math.round((this.prixTotExt*this.totalReduc)/this.totalCout);
        this.reducBalc = Math.round((this.prixTotBalc*this.totalReduc)/this.totalCout);
        this.reducLux = Math.round((this.prixTotLux*this.totalReduc)/this.totalCout);
        this.reducPres = Math.round((this.prixTotPres*this.totalReduc)/this.totalCout);
      } else if (this.totalCout >= 100000 && this.totalCout < 118000){
        this.totalReduc = 100000;
        this.reducSuite = Math.round((this.prixTotSuite*this.totalReduc)/this.totalCout);
        this.reducExt = Math.round((this.prixTotExt*this.totalReduc)/this.totalCout);
        this.reducBalc = Math.round((this.prixTotBalc*this.totalReduc)/this.totalCout);
        this.reducLux = Math.round((this.prixTotLux*this.totalReduc)/this.totalCout);
        this.reducPres = Math.round((this.prixTotPres*this.totalReduc)/this.totalCout);
      } else {
        this.totalReduc = this.totalCout;
        this.reducSuite = this.prixTotSuite;
      }

      this.fiscTotExt = (((this.reducExt/3)*0.75) + (((this.reducExt/3)*2)*0.4));
      this.fiscExt = Math.round((this.fiscTotExt/this.nbrPerExt));
      this.fiscTotBalc = (((this.reducBalc/3)*0.75) + (((this.reducBalc/3)*2)*0.4));
      this.fiscBalc = Math.round(this.fiscTotBalc/this.nbrPerBalc);
      this.fiscTotLux = (((this.reducLux/3)*0.75) + (((this.reducLux/3)*2)*0.4));
      this.fiscLux = Math.round(this.fiscTotLux/this.nbrPerLux);
      this.fiscTotSuite = (((this.reducSuite/3)*0.75) + (((this.reducSuite/3)*2)*0.4));
      this.fiscSuite = Math.round((this.fiscTotSuite)/this.nbrPerSuite);
      this.fiscTotPres = (((this.reducPres/3)*0.75) + (((this.reducPres/3)*2)*0.4));
      this.fiscPres = Math.round((this.fiscTotPres)/this.nbrPerPres);
      this.msgSuite = '';
    }
  }

  InputSuite3(event: any){

    this.nbrSemSuite = event.target.value;

    if (parseInt(this.nbrSemSuite) > parseInt(this.nbrPerSuite)){

      this.msgSuite = 'Le nombre de participants doit être inférieur ou égal nombre de passagers.';
      this.prixTotSuite = 0;
      this.fiscTotSuite = 0;
      this.totalCout = 0;
      this.fiscSuite = 0;

    } else if(parseInt(this.nbrSemSuite) < 0) {

      this.prixTotSuite = 0;
      this.fiscTotSuite = 0;
      this.totalCout = 0;
      this.fiscSuite = 0;
      this.msgSuite = 'Saisie incorrect';

    } else {

      this.prixTotSuite = Math.round((this.nbrCabSuite*2000) + (this.nbrPerSuite*1250) + (this.nbrSemSuite*3750));
      this.totalCout = this.prixTotExt + this.prixTotBalc + this.prixTotLux + this.prixTotSuite + this.prixTotPres;

      if (this.totalCout >= 426000){
        this.totalReduc = Math.round((this.totalCout*300000)/426000)
        this.reducSuite = Math.round((this.prixTotSuite*this.totalReduc)/this.totalCout);
        this.reducExt = Math.round((this.prixTotExt*this.totalReduc)/this.totalCout);
        this.reducBalc = Math.round((this.prixTotBalc*this.totalReduc)/this.totalCout);
        this.reducLux = Math.round((this.prixTotLux*this.totalReduc)/this.totalCout);
        this.reducPres = Math.round((this.prixTotPres*this.totalReduc)/this.totalCout);
      } else if (this.totalCout >= 354000 && this.totalCout < 426000){
        this.totalReduc = 300000;
        this.reducSuite = Math.round((this.prixTotSuite*this.totalReduc)/this.totalCout);
        this.reducExt = Math.round((this.prixTotExt*this.totalReduc)/this.totalCout);
        this.reducBalc = Math.round((this.prixTotBalc*this.totalReduc)/this.totalCout);
        this.reducLux = Math.round((this.prixTotLux*this.totalReduc)/this.totalCout);
        this.reducPres = Math.round((this.prixTotPres*this.totalReduc)/this.totalCout);
      } else if (this.totalCout >= 118000 && this.totalCout < 354000){
        this.totalReduc = Math.round((this.totalCout*100000)/118000)
        this.reducSuite = Math.round((this.prixTotSuite*this.totalReduc)/this.totalCout);
        this.reducExt = Math.round((this.prixTotExt*this.totalReduc)/this.totalCout);
        this.reducBalc = Math.round((this.prixTotBalc*this.totalReduc)/this.totalCout);
        this.reducLux = Math.round((this.prixTotLux*this.totalReduc)/this.totalCout);
        this.reducPres = Math.round((this.prixTotPres*this.totalReduc)/this.totalCout);
      } else if (this.totalCout >= 100000 && this.totalCout < 118000){
        this.totalReduc = 100000;
        this.reducSuite = Math.round((this.prixTotSuite*this.totalReduc)/this.totalCout);
        this.reducExt = Math.round((this.prixTotExt*this.totalReduc)/this.totalCout);
        this.reducBalc = Math.round((this.prixTotBalc*this.totalReduc)/this.totalCout);
        this.reducLux = Math.round((this.prixTotLux*this.totalReduc)/this.totalCout);
        this.reducPres = Math.round((this.prixTotPres*this.totalReduc)/this.totalCout);
      } else {
        this.totalReduc = this.totalCout;
        this.reducSuite = this.prixTotSuite;
      }

      this.fiscTotExt = (((this.reducExt/3)*0.75) + (((this.reducExt/3)*2)*0.4));
      this.fiscExt = Math.round((this.fiscTotExt/this.nbrPerExt));
      this.fiscTotBalc = (((this.reducBalc/3)*0.75) + (((this.reducBalc/3)*2)*0.4));
      this.fiscBalc = Math.round(this.fiscTotBalc/this.nbrPerBalc);
      this.fiscTotLux = (((this.reducLux/3)*0.75) + (((this.reducLux/3)*2)*0.4));
      this.fiscLux = Math.round(this.fiscTotLux/this.nbrPerLux);
      this.fiscTotSuite = (((this.reducSuite/3)*0.75) + (((this.reducSuite/3)*2)*0.4));
      this.fiscSuite = Math.round((this.fiscTotSuite)/this.nbrPerSuite);
      this.fiscTotPres = (((this.reducPres/3)*0.75) + (((this.reducPres/3)*2)*0.4));
      this.fiscPres = Math.round((this.fiscTotPres)/this.nbrPerPres);
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

      this.prixTotPres = Math.round((this.nbrCabPres*3500) + ((this.nbrPerPres)*2000) + ((this.nbrSemPres)*3750));
      this.totalCout = this.prixTotExt + this.prixTotBalc + this.prixTotLux + this.prixTotSuite + this.prixTotPres;

      if (this.totalCout >= 426000){
        this.totalReduc = Math.round((this.totalCout*300000)/426000)
        this.reducPres = Math.round((this.prixTotPres*this.totalReduc)/this.totalCout);
        this.reducExt = Math.round((this.prixTotExt*this.totalReduc)/this.totalCout);
        this.reducBalc = Math.round((this.prixTotBalc*this.totalReduc)/this.totalCout);
        this.reducLux = Math.round((this.prixTotLux*this.totalReduc)/this.totalCout);
        this.reducSuite = Math.round((this.prixTotSuite*this.totalReduc)/this.totalCout);
      } else if (this.totalCout >= 354000 && this.totalCout < 426000){
        this.totalReduc = 300000;
        this.reducPres = Math.round((this.prixTotPres*this.totalReduc)/this.totalCout);
        this.reducExt = Math.round((this.prixTotExt*this.totalReduc)/this.totalCout);
        this.reducBalc = Math.round((this.prixTotBalc*this.totalReduc)/this.totalCout);
        this.reducLux = Math.round((this.prixTotLux*this.totalReduc)/this.totalCout);
        this.reducSuite = Math.round((this.prixTotSuite*this.totalReduc)/this.totalCout);
      } else if (this.totalCout >= 118000 && this.totalCout < 354000){
        this.totalReduc = Math.round((this.totalCout*100000)/118000)
        this.reducPres = Math.round((this.prixTotPres*this.totalReduc)/this.totalCout);
        this.reducExt = Math.round((this.prixTotExt*this.totalReduc)/this.totalCout);
        this.reducBalc = Math.round((this.prixTotBalc*this.totalReduc)/this.totalCout);
        this.reducLux = Math.round((this.prixTotLux*this.totalReduc)/this.totalCout);
        this.reducSuite = Math.round((this.prixTotSuite*this.totalReduc)/this.totalCout);
      } else if (this.totalCout >= 100000 && this.totalCout < 118000){
        this.totalReduc = 100000;
        this.reducPres = Math.round((this.prixTotPres*this.totalReduc)/this.totalCout);
        this.reducExt = Math.round((this.prixTotExt*this.totalReduc)/this.totalCout);
        this.reducBalc = Math.round((this.prixTotBalc*this.totalReduc)/this.totalCout);
        this.reducLux = Math.round((this.prixTotLux*this.totalReduc)/this.totalCout);
        this.reducSuite = Math.round((this.prixTotSuite*this.totalReduc)/this.totalCout);
      } else {
        this.totalReduc = this.totalCout;
        this.reducPres = this.prixTotPres;
      }

      this.fiscTotExt = (((this.reducExt/3)*0.75) + (((this.reducExt/3)*2)*0.4));
      this.fiscExt = Math.round((this.fiscTotExt/this.nbrPerExt));
      this.fiscTotBalc = (((this.reducBalc/3)*0.75) + (((this.reducBalc/3)*2)*0.4));
      this.fiscBalc = Math.round(this.fiscTotBalc/this.nbrPerBalc);
      this.fiscTotLux = (((this.reducLux/3)*0.75) + (((this.reducLux/3)*2)*0.4));
      this.fiscLux = Math.round(this.fiscTotLux/this.nbrPerLux);
      this.fiscTotSuite = (((this.reducSuite/3)*0.75) + (((this.reducSuite/3)*2)*0.4));
      this.fiscSuite = Math.round((this.fiscTotSuite)/this.nbrPerSuite);
      this.fiscTotPres = (((this.reducPres/3)*0.75) + (((this.reducPres/3)*2)*0.4));
      this.fiscPres = Math.round((this.fiscTotPres)/this.nbrPerPres);
      this.msgSuitePres = '';

    } else if (this.nbrCabPres > this.nbrPerPres) {

      this.msgSuitePres = 'Le nombre de cabines ne peux pas être supérieur au nombre de personnes';
      this.prixTotPres = 0;
      this.fiscTotPres = 0;
      this.totalCout = 0;
      this.fiscPres = 0;

    } else {
      this.msgSuitePres = 'Le nombre de personnes doit être inférieur au double du nombre de cabines.';
      this.prixTotPres = 0;
      this.totalCout = 0;
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
      this.totalCout = 0;
      this.fiscPres = 0;

    } else if(parseInt(this.nbrPerPres) < parseInt(this.nbrCabPres)) {
      this.prixTotPres = 0;
      this.fiscTotPres = 0;
      this.totalCout = 0;
      this.fiscPres = 0;

      this.msgSuitePres = 'Le nombre de personnes ne peux pas être inférieur au nombre de cabines';

    } else if (parseInt(this.nbrPerPres) < parseInt(this.nbrSemPres)){

      this.msgSuitePres = 'Le nombre de participants doit être inférieur ou égal nombre de passagers.';
      this.prixTotPres = 0;
      this.fiscTotPres = 0;
      this.totalCout = 0;
      this.fiscPres = 0;

    } else {

      this.prixTotPres = Math.round((this.nbrCabPres*3500) + ((this.nbrPerPres)*2000) + ((this.nbrSemPres)*3750));
      this.totalCout = this.prixTotExt + this.prixTotBalc + this.prixTotLux + this.prixTotSuite + this.prixTotPres;

      if (this.totalCout >= 426000){
        this.totalReduc = Math.round((this.totalCout*300000)/426000)
        this.reducPres = Math.round((this.prixTotPres*this.totalReduc)/this.totalCout);
        this.reducExt = Math.round((this.prixTotExt*this.totalReduc)/this.totalCout);
        this.reducBalc = Math.round((this.prixTotBalc*this.totalReduc)/this.totalCout);
        this.reducLux = Math.round((this.prixTotLux*this.totalReduc)/this.totalCout);
        this.reducSuite = Math.round((this.prixTotSuite*this.totalReduc)/this.totalCout);
      } else if (this.totalCout >= 354000 && this.totalCout < 426000){
        this.totalReduc = 300000;
        this.reducPres = Math.round((this.prixTotPres*this.totalReduc)/this.totalCout);
        this.reducExt = Math.round((this.prixTotExt*this.totalReduc)/this.totalCout);
        this.reducBalc = Math.round((this.prixTotBalc*this.totalReduc)/this.totalCout);
        this.reducLux = Math.round((this.prixTotLux*this.totalReduc)/this.totalCout);
        this.reducSuite = Math.round((this.prixTotSuite*this.totalReduc)/this.totalCout);
      } else if (this.totalCout >= 118000 && this.totalCout < 354000){
        this.totalReduc = Math.round((this.totalCout*100000)/118000)
        this.reducPres = Math.round((this.prixTotPres*this.totalReduc)/this.totalCout);
        this.reducExt = Math.round((this.prixTotExt*this.totalReduc)/this.totalCout);
        this.reducBalc = Math.round((this.prixTotBalc*this.totalReduc)/this.totalCout);
        this.reducLux = Math.round((this.prixTotLux*this.totalReduc)/this.totalCout);
        this.reducSuite = Math.round((this.prixTotSuite*this.totalReduc)/this.totalCout);
      } else if (this.totalCout >= 100000 && this.totalCout < 118000){
        this.totalReduc = 100000;
        this.reducPres = Math.round((this.prixTotPres*this.totalReduc)/this.totalCout);
        this.reducExt = Math.round((this.prixTotExt*this.totalReduc)/this.totalCout);
        this.reducBalc = Math.round((this.prixTotBalc*this.totalReduc)/this.totalCout);
        this.reducLux = Math.round((this.prixTotLux*this.totalReduc)/this.totalCout);
        this.reducSuite = Math.round((this.prixTotSuite*this.totalReduc)/this.totalCout);
      } else {
        this.totalReduc = this.totalCout;
        this.reducPres = this.prixTotPres;
      }

      this.fiscTotExt = (((this.reducExt/3)*0.75) + (((this.reducExt/3)*2)*0.4));
      this.fiscExt = Math.round((this.fiscTotExt/this.nbrPerExt));
      this.fiscTotBalc = (((this.reducBalc/3)*0.75) + (((this.reducBalc/3)*2)*0.4));
      this.fiscBalc = Math.round(this.fiscTotBalc/this.nbrPerBalc);
      this.fiscTotLux = (((this.reducLux/3)*0.75) + (((this.reducLux/3)*2)*0.4));
      this.fiscLux = Math.round(this.fiscTotLux/this.nbrPerLux);
      this.fiscTotSuite = (((this.reducSuite/3)*0.75) + (((this.reducSuite/3)*2)*0.4));
      this.fiscSuite = Math.round((this.fiscTotSuite)/this.nbrPerSuite);
      this.fiscTotPres = (((this.reducPres/3)*0.75) + (((this.reducPres/3)*2)*0.4));
      this.fiscPres = Math.round((this.fiscTotPres)/this.nbrPerPres);
      this.msgSuitePres = '';

      
    }
  }

  InputPres3(event: any){

    this.nbrSemPres = event.target.value;

    if (parseInt(this.nbrSemPres) > parseInt(this.nbrPerPres)){

      this.msgSuitePres = 'Le nombre de participants doit être inférieur ou égal nombre de passagers.';
      this.prixTotPres = 0;
      this.fiscTotPres = 0;
      this.totalCout = 0;
      this.fiscPres = 0;

    } else if(parseInt(this.nbrSemPres) < 0) {

      this.prixTotPres = 0;
      this.fiscTotPres = 0;
      this.totalCout = 0;
      this.fiscPres = 0;
      this.msgSuitePres = 'Saisie incorrect';

    } else {

      this.prixTotPres = Math.round((this.nbrCabPres*3500) + (this.nbrPerPres*2000) + (this.nbrSemPres*3750));
      this.totalCout = this.prixTotExt + this.prixTotBalc + this.prixTotLux + this.prixTotSuite + this.prixTotPres;

      if (this.totalCout >= 426000){
        this.totalReduc = Math.round((this.totalCout*300000)/426000)
        this.reducPres = Math.round((this.prixTotPres*this.totalReduc)/this.totalCout);
        this.reducExt = Math.round((this.prixTotExt*this.totalReduc)/this.totalCout);
        this.reducBalc = Math.round((this.prixTotBalc*this.totalReduc)/this.totalCout);
        this.reducLux = Math.round((this.prixTotLux*this.totalReduc)/this.totalCout);
        this.reducSuite = Math.round((this.prixTotSuite*this.totalReduc)/this.totalCout);
      } else if (this.totalCout >= 354000 && this.totalCout < 426000){
        this.totalReduc = 300000;
        this.reducPres = Math.round((this.prixTotPres*this.totalReduc)/this.totalCout);
        this.reducExt = Math.round((this.prixTotExt*this.totalReduc)/this.totalCout);
        this.reducBalc = Math.round((this.prixTotBalc*this.totalReduc)/this.totalCout);
        this.reducLux = Math.round((this.prixTotLux*this.totalReduc)/this.totalCout);
        this.reducSuite = Math.round((this.prixTotSuite*this.totalReduc)/this.totalCout);
      } else if (this.totalCout >= 118000 && this.totalCout < 354000){
        this.totalReduc = Math.round((this.totalCout*100000)/118000)
        this.reducPres = Math.round((this.prixTotPres*this.totalReduc)/this.totalCout);
        this.reducExt = Math.round((this.prixTotExt*this.totalReduc)/this.totalCout);
        this.reducBalc = Math.round((this.prixTotBalc*this.totalReduc)/this.totalCout);
        this.reducLux = Math.round((this.prixTotLux*this.totalReduc)/this.totalCout);
        this.reducSuite = Math.round((this.prixTotSuite*this.totalReduc)/this.totalCout);
      } else if (this.totalCout >= 100000 && this.totalCout < 118000){
        this.totalReduc = 100000;
        this.reducPres = Math.round((this.prixTotPres*this.totalReduc)/this.totalCout);
        this.reducExt = Math.round((this.prixTotExt*this.totalReduc)/this.totalCout);
        this.reducBalc = Math.round((this.prixTotBalc*this.totalReduc)/this.totalCout);
        this.reducLux = Math.round((this.prixTotLux*this.totalReduc)/this.totalCout);
        this.reducSuite = Math.round((this.prixTotSuite*this.totalReduc)/this.totalCout);
      } else {
        this.totalReduc = this.totalCout;
        this.reducPres = this.prixTotPres;
      }

      this.fiscTotExt = (((this.reducExt/3)*0.75) + (((this.reducExt/3)*2)*0.4));
      this.fiscExt = Math.round((this.fiscTotExt/this.nbrPerExt));
      this.fiscTotBalc = (((this.reducBalc/3)*0.75) + (((this.reducBalc/3)*2)*0.4));
      this.fiscBalc = Math.round(this.fiscTotBalc/this.nbrPerBalc);
      this.fiscTotLux = (((this.reducLux/3)*0.75) + (((this.reducLux/3)*2)*0.4));
      this.fiscLux = Math.round(this.fiscTotLux/this.nbrPerLux);
      this.fiscTotSuite = (((this.reducSuite/3)*0.75) + (((this.reducSuite/3)*2)*0.4));
      this.fiscSuite = Math.round((this.fiscTotSuite)/this.nbrPerSuite);
      this.fiscTotPres = (((this.reducPres/3)*0.75) + (((this.reducPres/3)*2)*0.4));
      this.fiscPres = Math.round((this.fiscTotPres)/this.nbrPerPres);
      this.msgSuitePres = '';
    }
  }

  reload(): void {
    window.location.reload();
  }

  test(){
    this.route.navigateByUrl("test");
  }

}

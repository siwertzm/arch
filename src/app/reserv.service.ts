import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ReservService {

  constructor(private route: Router) { }

  setNbrCabine(val: any){
    localStorage.setItem('resa',JSON.stringify(val));
  }

  getNbrCabine(){
    let cabine: any = localStorage.getItem('resa');
    return JSON.parse(cabine);
  }

  setNbrExt(val: any){
    localStorage.setItem('ext', val);
  }

  getNbrExt(){
    let val: any = localStorage.getItem('ext');
    return parseInt(val);
  }

  setNbrPersExt(val: any){
    localStorage.setItem('persExt', val);
  }

  getNbrPersExt(){
    let val: any = localStorage.getItem('persExt');
    return parseInt(val);
  }

  setNbrSemiExt(val: any){
    localStorage.setItem('semiExt', val);
  }

  getNbrSemiExt(){
    let val: any = localStorage.getItem('semiExt');
    return parseInt(val);
  }

  setNbrBalc(val: any){
    localStorage.setItem('balc', val);
  }

  getNbrBalc(){
    let val: any = localStorage.getItem('balc');
    return parseInt(val);
  }

  setNbrPersBalc(val: any){
    localStorage.setItem('persBalc', val);
  }

  getNbrPersBalc(){
    let val: any = localStorage.getItem('persBalc');
    return parseInt(val);
  }

  setNbrSemiBalc(val: any){
    localStorage.setItem('semiBalc', val);
  }

  getNbrSemiBalc(){
    let val: any = localStorage.getItem('semiBalc');
    return parseInt(val);
  }

  setNbrLux(val: any){
    localStorage.setItem('lux', val);
  }

  getNbrLux(){
    let val: any = localStorage.getItem('lux');
    return parseInt(val);
  }

  setNbrPersLux(val: any){
    localStorage.setItem('persLux', val);
  }

  getNbrPersLux(){
    let val: any = localStorage.getItem('persLux');
    return parseInt(val);
  }

  setNbrSemiLux(val: any){
    localStorage.setItem('semiLux', val);
  }

  getNbrSemiLux(){
    let val: any = localStorage.getItem('semiLux');
    return parseInt(val);
  }

  setNbrSuite(val: any){
    localStorage.setItem('suite', val);
  }

  getNbrSuite(){
    let val: any = localStorage.getItem('suite');
    return parseInt(val);
  }

  setNbrPersSuite(val: any){
    localStorage.setItem('persSuite', val);
  }

  getNbrPersSuite(){
    let val: any = localStorage.getItem('persSuite');
    return parseInt(val);
  }

  setNbrSemiSuite(val: any){
    localStorage.setItem('semiSuite', val);
  }

  getNbrSemiSuite(){
    let val: any = localStorage.getItem('semiSuite');
    return parseInt(val);
  }

  setNbrPres(val: any){
    localStorage.setItem('pres', val);
  }

  getNbrPres(){
    let val: any = localStorage.getItem('pres');
    return parseInt(val);
  }

  setNbrPersPres(val: any){
    localStorage.setItem('persPres', val);
  }

  getNbrPersPres(){
    let val: any = localStorage.getItem('persPres');
    return parseInt(val);
  }

  setNbrSemiPres(val: any){
    localStorage.setItem('semiPres', val);
  }

  getNbrSemiPres(){
    let val: any = localStorage.getItem('semiPres');
    return parseInt(val);
  }


}

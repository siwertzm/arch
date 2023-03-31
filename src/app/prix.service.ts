import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrixService {

  constructor() { }

  setPrixTotal(val: any){
    localStorage.setItem('prixTotal', JSON.stringify(val));
  }

  getPrixTotal(){
    let prixTotal: any = localStorage.getItem('prixTotal');
    return JSON.parse(prixTotal);
  }

  setPrixImpot(val: any){
    localStorage.setItem('prixImpot', JSON.stringify(val));
  }

  getPrixImpot(){
    let prixImpot: any = localStorage.getItem('prixImpot');
    return JSON.parse(prixImpot);
  }



  setPrixAvec(val: any){
    localStorage.setItem('mecenat', JSON.stringify(val));
  }

  getPrixAvec(){
    let prixTotal: any = localStorage.getItem('mecenat');
    return JSON.parse(prixTotal);
  }

  setPrixSans(val: any){
    localStorage.setItem('cabine', JSON.stringify(val));
  }

  getPrixSans(){
    let prixImpot: any = localStorage.getItem('cabine');
    return JSON.parse(prixImpot);
  }

  setPrixReduc(val: any){
    localStorage.setItem('prixReduc', val);
  }

  getPrixReduc(){
    let prixReduc: any = localStorage.getItem('prixReduc');
    return prixReduc;
  }
}

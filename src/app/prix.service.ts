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
}

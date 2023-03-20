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
}

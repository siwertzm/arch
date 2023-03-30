import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CabineEComponent } from './cabine-e/cabine-e.component';
import { CabinePComponent } from './cabine-p/cabine-p.component';
import { HomeComponent } from './home/home.component';
import { MerciComponent } from './merci/merci.component';
import { ResaComponent } from './resa/resa.component';
import { ReservationEComponent } from './reservation-e/reservation-e.component';

const routes: Routes = [
  {component: ResaComponent, path: 'resa'},
  {component: HomeComponent, path: 'home'},
  {path:'', redirectTo: 'home', pathMatch:'full'},
  {component: MerciComponent, path: 'merci'},
  {component: CabineEComponent, path: 'entreprise'},
  {component: CabinePComponent, path: 'particulier'},
  {component: ReservationEComponent, path: 'reservation-e'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

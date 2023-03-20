import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MerciComponent } from './merci/merci.component';
import { ResaComponent } from './resa/resa.component';

const routes: Routes = [
  {component: ResaComponent, path: 'resa'},
  {component: HomeComponent, path: 'home'},
  {path:'', redirectTo: 'home', pathMatch:'full'},
  {component: MerciComponent, path: 'merci'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

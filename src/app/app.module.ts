import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResaComponent } from './resa/resa.component';
import { HomeComponent } from './home/home.component';
import { MerciComponent } from './merci/merci.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { CabineEComponent } from './cabine-e/cabine-e.component';
import { CabinePComponent } from './cabine-p/cabine-p.component';
import { ReservationEComponent } from './reservation-e/reservation-e.component';

@NgModule({
  declarations: [
    AppComponent,
    ResaComponent,
    HomeComponent,
    MerciComponent,
    CabineEComponent,
    CabinePComponent,
    ReservationEComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }

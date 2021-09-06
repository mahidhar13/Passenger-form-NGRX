import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PassengerDetailsComponent } from './passenger-details/passenger-details.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { passengerDetailsReducer } from './passenger-store/passenger-details.reducer';
import { paymentDetailsReducer } from './payment-store/paymentDetails.reducer';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      passengerDetails: passengerDetailsReducer,
      paymentDetails: paymentDetailsReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    RouterModule.forRoot([
      { path: '', component: PassengerDetailsComponent },
      { path: 'payments', component: PaymentDetailsComponent }
    ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    PassengerDetailsComponent,
    PaymentDetailsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

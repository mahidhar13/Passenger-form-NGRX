import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { IPassengerDetails } from '../common/passengerDetails';
import { IPaymentDetails } from '../common/paymentDetails';
import { PassengerInfoService } from '../passengerinfo.service';
import {
  resetPaymentDetails,
  setPaymentDetails
} from '../payment-store/paymentDetails.actions';

function numberRange(min: number): ValidatorFn {
  return (c: AbstractControl): { [key: string]: boolean } | null => {
    if (c.value !== null && (isNaN(c.value) || c.value.length !== min)) {
      return { range: true };
    }
    return null;
  };
}

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {
  payementDetailsForm: FormGroup;
  paymentFormValues: any;
  summary: any;

  constructor(
    private fb: FormBuilder,
    // private passengerInforService: PassengerInfoService
    private store: Store<{ passengerDetails: IPassengerDetails }>
  ) {}

  ngOnInit() {
    this.payementDetailsForm = this.fb.group({
      creditCard: new FormControl('1234567891234567', [
        Validators.required,
        numberRange(16)
      ]),
      expiryDate: new FormControl('', [Validators.required]),
      cva: new FormControl('123', [Validators.required, numberRange(3)])
    });
    // this.summary = this.passengerInforService.getFormValues();
    this.store.select('passengerDetails').subscribe(data => {
      this.summary = data;
      console.log('summary in payment comp', this.summary);
    });
  }

  continue() {
    this.paymentFormValues = this.payementDetailsForm.value;

    if (this.payementDetailsForm.valid) {
      window.alert('Payment details are saved successfully');
    }

    let paymentValues: IPaymentDetails = {
      creditCard: this.paymentFormValues.creditCard,
      expiryDate: this.paymentFormValues.expiryDate,
      cva: this.paymentFormValues.cva
    };
    this.store.dispatch(setPaymentDetails({ paymentDetails: paymentValues }));
  }

  reset() {
    this.store.dispatch(resetPaymentDetails());
  }
}

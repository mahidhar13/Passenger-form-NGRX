import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IPassengerDetails } from '../common/passengerDetails';
import {
  resetPassengerDetails,
  setPassengerDetails
} from '../passenger-store/passenger-details.actions';
import { PassengerInfoService } from '../passengerinfo.service';

function numberRange(min: number, max: number): ValidatorFn {
  return (c: AbstractControl): { [key: string]: boolean } | null => {
    if (
      c.value !== null &&
      (isNaN(c.value) || c.value.length < min || c.value.length > max)
    ) {
      return { range: true };
    }
    return null;
  };
}

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.css']
})
export class PassengerDetailsComponent implements OnInit {
  addPassengersForm: FormGroup;
  passengerFormValues: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    // private passengerInfoService: PassengerInfoService,
    private store: Store<{ passengerDetails: IPassengerDetails }>
  ) {}

  ngOnInit() {
    this.addPassengersForm = this.fb.group({
      lastName: ['Mahidhar', [Validators.required, Validators.maxLength(16)]],
      firstName: ['Mohan', [Validators.required, Validators.maxLength(12)]],
      address: ['India', [Validators.required]],
      email: [
        'mahidhar.134@gmail.com',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
        ]
      ],
      phoneNumber: ['9791487288', [Validators.required, numberRange(8, 12)]]
    });
    this.store.select('passengerDetails').subscribe(data => console.log(data));
  }
  saveForm() {
    this.passengerFormValues = this.addPassengersForm.value;
    console.log('in saveform comp1', this.passengerFormValues.lastName);
    let passengerDetails: IPassengerDetails = {
      lastName: this.passengerFormValues.lastName,
      firstName: this.passengerFormValues.firstName,
      address: this.passengerFormValues.address,
      email: this.passengerFormValues.email,
      phoneNumber: this.passengerFormValues.phoneNumber
    };
    this.store.dispatch(setPassengerDetails(passengerDetails));
  }
  continue() {
    // this.passengerInfoService.setFormValues(this.passengerFormValues);
    this.router.navigate(['/payments']);
  }
  reset() {
    this.store.dispatch(resetPassengerDetails());
  }
}

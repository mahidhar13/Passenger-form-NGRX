import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassengerInfoService {
  constructor(private http: HttpClient) {}

  // setValues$: BehaviorSubject<any[]> = new BehaviorSubject([]);

  // setFormValues(data: any) {
  //   this.setValues$ = data;
  //   console.log('Values displayed in Service', this.setValues$);
  // }

  // getFormValues() {
  //   return this.setValues$;
  // }
}

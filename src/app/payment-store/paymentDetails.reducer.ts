import { createReducer, on } from '@ngrx/store';
import { IPaymentDetails, State } from '../common/paymentDetails';
import {
  resetPaymentDetails,
  setPaymentDetails
} from './paymentDetails.actions';

const initialState: IPaymentDetails = null;

const _paymentDetailsReducer = createReducer(
  initialState,
  on(setPaymentDetails, (state, action) => action.paymentDetails),

  on(resetPaymentDetails, state => null)
);

export function paymentDetailsReducer(state, action) {
  return _paymentDetailsReducer(state, action);
}

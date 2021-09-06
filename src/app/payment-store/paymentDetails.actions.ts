import { createAction, props } from '@ngrx/store';
import { IPaymentDetails } from '../common/paymentDetails';

export const SET_PAYMENT_DETAILS = '[payment details page] set details';
export const RESET_PAYMENT_DETAILS = '[payment details page] reset details';

export const setPaymentDetails = createAction(
  SET_PAYMENT_DETAILS,
  props<{ paymentDetails: IPaymentDetails }>()
);

export const resetPaymentDetails = createAction(RESET_PAYMENT_DETAILS);

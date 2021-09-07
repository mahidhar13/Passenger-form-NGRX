import { createReducer, on } from '@ngrx/store';
import { IPassengerDetails } from '../common/passengerDetails';
import {
  resetPassengerDetails,
  setPassengerDetails
} from './passenger-details.actions';

const initialState: IPassengerDetails = null;

const _passengerDetailsReducer = createReducer(
  initialState,

  on(setPassengerDetails, (state, payload) => payload.passengerDetails),

  on(resetPassengerDetails, state => null)
);

export function passengerDetailsReducer(state, payload) {
  return _passengerDetailsReducer(state, payload);
}

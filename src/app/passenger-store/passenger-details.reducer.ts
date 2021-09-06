import { createReducer, on } from '@ngrx/store';
import { IPassengerDetails } from '../common/passengerDetails';
import {
  resetPassengerDetails,
  setPassengerDetails
} from './passenger-details.actions';

const initialState: IPassengerDetails = null;

const _passengerDetailsReducer = createReducer(
  initialState,

  on(setPassengerDetails, (state, action) => action.passengerDetails),

  on(resetPassengerDetails, state => null)
);

export function passengerDetailsReducer(state, action) {
  return _passengerDetailsReducer(state, action);
}

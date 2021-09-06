export interface IPassengerDetails {
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  phoneNumber: number;
}

export interface State {
  passengerDetails: IPassengerDetails;
}

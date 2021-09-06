export interface IPaymentDetails {
  creditCard: number;
  expiryDate: number;
  cva: number;
}

export interface State {
  paymentDetails: IPaymentDetails;
}

import { PaymentMethod } from './payment-method';


export class Store {
  id: number;
  name: string;
  phone: string;
  description: string;
  payment_methods: PaymentMethod[];
}

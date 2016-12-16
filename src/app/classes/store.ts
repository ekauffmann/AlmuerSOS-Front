import { PaymentMethod } from './payment-method';
import { User } from './user';


export class Store {
  id: number;
  name: string;
  phone: string;
  description: string;
  payment_methods: PaymentMethod[];
  managers: User[];
}

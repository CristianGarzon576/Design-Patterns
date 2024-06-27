import { CashMethod, CreditMethod, TransferMethod } from "./Classes/PaymentMethods";
import { Payments } from "./Classes/Payments";

const cash = new CashMethod();
const transfer = new TransferMethod();
const credit = new CreditMethod();

const shoppingCar = new Payments(cash);

shoppingCar.addItem({ name: 'papaya', quantity: 1, price: 2000 })
shoppingCar.addItem({ name: 'manzanas', quantity: 7, price: 5000 })
shoppingCar.addItem({ name: 'fresas', quantity: 5, price: 10000 })

console.log(shoppingCar.printBill());
console.log('------------------- \n');
console.log(shoppingCar.setPaymentMethod(transfer).printBill());
console.log('------------------- \n');
console.log(shoppingCar.setPaymentMethod(credit).printBill());
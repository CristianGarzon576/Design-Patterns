import { Item, PaymentStrategy } from "./types";

export class Payments {
    private _paymentMethod: PaymentStrategy;
    private _items: Item[];

    constructor(paymentMethod: PaymentStrategy) {
        this._paymentMethod = paymentMethod;
        this._items = [];
    }

    setPaymentMethod(paymentMethod: PaymentStrategy): Payments {
        this._paymentMethod = paymentMethod;
        return this;
    }

    addItem(item: Item): void {
        this._items.push(item);
    }

    printBill(): void {
        const { bill, total } = this.requestPayment();
        console.log(bill, '\n', total);
    }

    requestPayment(): { bill: string, total: string } {
        let subTotalBill = 0;
        const bill = this._items.map((item) => {
            let subTotalItem = item.quantity * item.price;
            subTotalBill += subTotalItem
            return `item: ${item.name}, quantity: ${item.quantity}, price: ${item.price}, subTotal: ${subTotalItem}`
        }).join('.\n');
        const total = this._paymentMethod.calculateDiscount(subTotalBill);
        return { bill, total }
    }
}
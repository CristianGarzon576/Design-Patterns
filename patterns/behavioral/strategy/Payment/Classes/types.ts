export interface PaymentStrategy {
    readonly _discount: number;
    readonly _taxes: number;
    calculateDiscount(subTotalBill: number): string;
}

export interface Item {
    name: string;
    price: number;
    quantity: number;
}
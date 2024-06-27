import { PaymentStrategy } from "./types";

// Strategies
export class CashMethod implements PaymentStrategy {

    readonly _discount = 0.1;
    readonly _taxes = 0;

    calculateDiscount(subTotalBill: number): string {
        const totalAfterDiscounts = subTotalBill * (1 - this._discount);
        const totalAfterTaxes = totalAfterDiscounts * (1 + this._taxes);
        return `Total value: ${totalAfterTaxes.toFixed(2)} \n Bill paid with Cash`;
    }
}

export class CreditMethod implements PaymentStrategy {

    readonly _discount = 0;
    readonly _taxes = 0.1;

    calculateDiscount(subTotalBill: number): string {
        const totalAfterDiscounts = subTotalBill * (1 - this._discount);
        const totalAfterTaxes = totalAfterDiscounts * (1 + this._taxes);
        return `Total value: ${totalAfterTaxes.toFixed(2)} \n Bill paid with Credit`;
    }
}

export class TransferMethod implements PaymentStrategy {

    readonly _discount = 0;
    readonly _taxes = 0;

    calculateDiscount(subTotalBill: number): string {
        const totalAfterDiscounts = subTotalBill * (1 - this._discount);
        const totalAfterTaxes = totalAfterDiscounts * (1 + this._taxes);
        return `Total value: ${totalAfterTaxes.toFixed(2)} \n Bill paid with Transfer`;
    }
}
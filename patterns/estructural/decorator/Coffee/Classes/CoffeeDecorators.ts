import { ICoffee } from "./types";

export class CofeeDecorator implements ICoffee {

    protected _coffee: ICoffee;

    constructor(coffee: ICoffee) {
        this._coffee = coffee;
    }

    getDescription(): string {
        throw new Error("Method not implemented.");
    }
    getCost(): number {
        throw new Error("Method not implemented.");
    }
}


export class MilkDecorator extends CofeeDecorator {

    constructor(coffee: ICoffee) {
        super(coffee)
    }

    getDescription(): string {
        return `${this._coffee.getDescription()} with Milk`
    }

    getCost(): number {
        return this._coffee.getCost() + 5;
    }
}

export class SugarDecorator extends CofeeDecorator {

    constructor(coffee: ICoffee) {
        super(coffee)
    }

    getDescription(): string {
        return `${this._coffee.getDescription()} with Sugar`
    }

    getCost(): number {
        return this._coffee.getCost() + 1;
    }
}


export class VanillaFlavorDecorator extends CofeeDecorator {

    constructor(coffee: ICoffee) {
        super(coffee)
    }

    getDescription(): string {
        return `${this._coffee.getDescription()} with Vanilla Flavor`
    }

    getCost(): number {
        return this._coffee.getCost() + 10;
    }
}
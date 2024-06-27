import { ICoffee } from "./types";

export class BasicCoffee implements ICoffee {

    private _cost: number;
    private _description: string;

    constructor(cost: number = 2, description: string = 'This is a coffee') {
        this._cost = cost;
        this._description = description;
    }

    getDescription(): string {
        return this._description;
    }
    getCost(): number {
        return this._cost;
    }

}
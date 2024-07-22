import { Adaptee } from "./Adaptee";
import { Target } from "./Target";

export class Adapter extends Target {
    private _adaptee: Adaptee;

    constructor(adaptee: Adaptee) {
        super();
        this._adaptee = adaptee;
    }

    public request(): string {
        const restul = this._adaptee.specificRequest().split('').reverse().join('');
        return `Adapter: (translate) ${restul}`;
    }

}
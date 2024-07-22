interface SubSystem {
    start(): string;
    operation(): string;
}

export class SubSystem1 implements SubSystem {
    start(): string {
        return `SubSystem 1: Initializing\n`
    }
    operation(): string {
        return `SubSystem 1: Go!\n`
    }
}

export class SubSystem2 implements SubSystem {
    start(): string {
        return `SubSystem 2: Initializing\n`
    }
    operation(): string {
        return `SubSystem 2: Go!\n`
    }
}

export class Facade {
    protected _subSystem1: SubSystem1;
    protected _subSystem2: SubSystem2;

    constructor(subSystem1: SubSystem1 | null = null, subSystem2: SubSystem2 | null = null) {
        this._subSystem1 = subSystem1 || new SubSystem1();
        this._subSystem2 = subSystem2 || new SubSystem2();
    }

    public operation() {
        let result = 'Facade initializes subsystems:\n';
        result += this._subSystem1.start();
        result += this._subSystem2.start();
        result += 'Facade orders subsystems to perform the action:\n';
        result += this._subSystem1.operation();
        result += this._subSystem2.operation();
        return result;
    }
}
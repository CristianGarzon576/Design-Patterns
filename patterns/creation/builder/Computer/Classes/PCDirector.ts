import { PC } from "./PC";
import { AirRefrigeration, Builder, LiquidRefrigeration } from "./types";

export class PCDirector {
    private _builder: Builder;

    constructor(builder: Builder) {
        this._builder = builder;
    }

    getDefaultGamingPc(): PC {
        const pc: PC = this._builder.setComputerType('Tower Computer')
            .setRams([{ capacity: 16, generation: 'DDR5' }, { capacity: 16, generation: 'DDR5' }])
            .setCPU({ type: 'AMD', version: 'Ryzen 5500' })
            .setBoard('Asus 780B')
            .setChassis('Corsair 350X')
            .setRefrigeration({ quantity: 5 } as LiquidRefrigeration)
            .result()
        this._builder.reset();
        return pc;
    }

    getDefaultOfficePc(): PC {
        const pc: PC = this._builder.setComputerType('Laptop')
            .setRams([{ capacity: 4, generation: 'DDR4' }, { capacity: 4, generation: 'DDR4' }])
            .setCPU({ type: 'Intel', version: 'i7 9500G' })
            .setBoard('Asus 780B')
            .setChassis('Corsair 350X')
            .setRefrigeration({ quantity: 1, power: '320W' } as AirRefrigeration)
            .result()
        this._builder.reset();
        return pc;
    }

    getCustomPC(): Builder {
        return this._builder;
    }

    reset(): void {
        this._builder.reset();
    }
}
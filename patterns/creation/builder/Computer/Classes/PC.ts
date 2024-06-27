import { PCType, RAM, CPU, Refrigeration, Board, Chassis } from './types';

export class PC {
    private _type: PCType | null;
    private _rams: RAM[] | null;
    private _CPU: CPU | null;
    private _refrigeration: Refrigeration | null;
    private _board: Board | null;
    private _chassis: Chassis | null;

    constructor(type: PCType | null = null, rams: RAM[] | null = null, cpu: CPU | null = null, refrigeration: Refrigeration | null = null, board: Board | null = null, chassis: Chassis | null = null) {
        this._type = type;
        this._rams = rams;
        this._CPU = cpu;
        this._refrigeration = refrigeration;
        this._board = board;
        this._chassis = chassis;
    }

    set type(type: PCType | null) {
        this._type = type;
    }

    get type(): PCType | null {
        return this._type;
    }

    set rams(rams: RAM[] | null) {
        this._rams = rams;
    }

    get rams(): RAM[] | null {
        return this._rams;
    }

    set CPU(cpu: CPU | null) {
        this._CPU = cpu;
    }

    get CPU(): CPU | null {
        return this._CPU;
    }

    set refrigeration(refrigeration: Refrigeration | null) {
        this._refrigeration = refrigeration;
    }

    get refrigeration(): Refrigeration | null {
        return this._refrigeration;
    }

    set board(board: Board | null) {
        this._board = board;
    }

    get board(): Board | null {
        return this._board;
    }

    set chassis(chassis: Chassis | null) {
        this._chassis = chassis;
    }

    get chassis(): Chassis | null {
        return this._chassis;
    }

    toString() {
        let description = `This is a computer with this specs: `;
        if (!this.type) {
            description += `${this.type}, `
        }
        if (this.rams && this.rams.length > 0) {
            description += `${this.rams?.join(', ')}, `
        }
        if (this.CPU) {
            description += `${this.CPU}, `
        }
        if (this.refrigeration) {
            description += `${this.refrigeration}, `
        }
        if (this.board) {
            description += `${this.board}, `
        }
        if (this.chassis) {
            description += `${this.chassis}, `
        };
        return description.trim();
    }
}

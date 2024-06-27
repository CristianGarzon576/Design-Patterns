import { PC } from "./PC";

export type PCType = 'Tower Computer' | 'Laptop'

const RAMversions = ['DDR1', 'DDR2', 'DDR3', 'DDR4', 'DDR5'] as const;

type RAMGenerator = (typeof RAMversions)[number];

export type RAM = {
    capacity: number;
    generation: RAMGenerator
}

export type CPU = {
    type: 'Intel' | 'AMD'
    version: string;
}

export type LiquidRefrigeration = {
    quantity: number;
}

export type AirRefrigeration = {
    quantity: number;
    power: string
}

export type Refrigeration = LiquidRefrigeration | AirRefrigeration

export type Board = string;

export type Chassis = string;

export interface Builder {
    setComputerType(type: PCType): Builder;
    setRams(rams: RAM[]): Builder;
    setCPU(cpu: CPU): Builder;
    setRefrigeration(refrigeration: Refrigeration): Builder;
    setBoard(board: Board): Builder;
    setChassis(chassis: Chassis): Builder;
    reset(): void;
    result(): PC;
}
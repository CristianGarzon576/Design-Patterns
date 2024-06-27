import { PC } from "./PC";
import { Board, Builder, CPU, Chassis, PCType, RAM, Refrigeration } from "./types";

// Builder Class
export class PCBuilder implements Builder {
    private PC = new PC();

    setComputerType(type: PCType): PCBuilder {
        this.PC.type = type;
        return this;
    }

    setRams(rams: RAM[]): PCBuilder {
        this.PC.rams = rams;
        return this;
    }
    setCPU(cpu: CPU): PCBuilder {
        this.PC.CPU = cpu;
        return this;
    }
    setRefrigeration(refrigeration: Refrigeration): PCBuilder {
        this.PC.refrigeration = refrigeration;
        return this;
    }
    setBoard(board: Board): PCBuilder {
        this.PC.board = board;
        return this;
    }
    setChassis(chassis: Chassis): PCBuilder {
        this.PC.chassis = chassis;
        return this;
    }

    reset(): void {
        this.PC = new PC();
    }

    result(): PC {
        return this.PC;
    }

}
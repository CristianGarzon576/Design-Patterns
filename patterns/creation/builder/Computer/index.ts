import { PCBuilder } from "./Classes/PCBuilder";
import { PCDirector } from "./Classes/PCDirector";

const builder = new PCBuilder();
const director = new PCDirector(builder);

const pcGaming = director.getDefaultGamingPc();
const pcOffice = director.getDefaultOfficePc();
const pcCustom = director.getCustomPC().setChassis('Corsair 1100xPro').result();
director.reset();
console.log(pcOffice, pcGaming, pcCustom);

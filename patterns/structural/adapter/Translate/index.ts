import { Adaptee } from "./Classes/Adaptee";
import { Adapter } from "./Classes/Adapter";
import { Target } from "./Classes/Target";

let target: Target = new Target();
console.log(target.request());

const adaptee = new Adaptee();
console.log(adaptee.specificRequest());

target = new Adapter(adaptee);
console.log(target.request());
import { BasicCoffee } from "./Classes/BaseCoffee";
import { MilkDecorator, SugarDecorator, VanillaFlavorDecorator } from "./Classes/CoffeeDecorators";
import { ICoffee } from "./Classes/types";

let coffee: ICoffee = new BasicCoffee();

console.log(coffee.getDescription(), coffee.getCost());
coffee = new MilkDecorator(coffee);
console.log(coffee.getDescription(), coffee.getCost());
coffee = new SugarDecorator(coffee);
console.log(coffee.getDescription(), coffee.getCost());
coffee = new VanillaFlavorDecorator(coffee);
console.log(coffee.getDescription(), coffee.getCost());
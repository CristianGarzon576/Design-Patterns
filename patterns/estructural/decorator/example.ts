function first() {
    console.log("first(): factory evaluated");
    return function (target: any | null = null, propertyKey: string | null = null, descriptor: PropertyDescriptor | null = null) {
        console.log(target, propertyKey, descriptor)
        console.log("first(): called");
    };
}

function second() {
    console.log("second(): factory evaluated");
    return function (target: any | null = null, propertyKey: string | null = null, descriptor: PropertyDescriptor | null = null) {
        console.log(target, propertyKey, descriptor)
        console.log("second(): called");
    };
}

class ExampleClass {
    @first()
    @second()
    method(a: any) {
        return console.log('method Result', a)
    }
}

const a = new ExampleClass();

a.method(5);
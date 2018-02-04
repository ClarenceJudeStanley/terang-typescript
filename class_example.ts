// declaring class Car
class Car {

    // fields
    engine: string;
    model: string;

    // constructor
    constructor(engine: string, model: string) {
        this.engine = engine
        this.model = model;
    }

    // methods
    show(): void {
        console.log("Engine  :   " + this.engine)
        console.log("Model  :   " + this.model)
    }
}

//create an object 
var myCar = new Car("VVTi", "Toyota VIOS")

//access the field 
console.log("Reading attribute value Engine as :  " + myCar.engine)

//access the function
myCar.show()
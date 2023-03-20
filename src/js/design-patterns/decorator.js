class Car {
    getDescription() {
        return this.description;
    }
}
class ModelS extends Car {
    constructor() {
        super(...arguments);
        this.description = "Model S";
    }
    cost() {
        return 73000;
    }
}
class ModelX extends Car {
    constructor() {
        super(...arguments);
        this.description = "Model X";
    }
    cost() {
        return 77000;
    }
}


// dekoratory
class CarOptions extends Car {
}
// dekorator - ulepszony Auto Pilot
class EnhancedAutoPilot extends CarOptions {
    constructor(car) {
        super();
        this.decoratedCar = car;
    }
    getDescription() {
        return this.decoratedCar.getDescription() + ', Enhanced AutoPilot';
    }
    cost() {
        return this.decoratedCar.cost() + 5000;
    }
}
class RearFacingSeats extends CarOptions {
    constructor(car) {
        super();
        this.decoratedCar = car;
    }
    getDescription() {
        return this.decoratedCar.getDescription() + ', Rear Facing seats';
    }
    cost() {
        return this.decoratedCar.cost() + 4000;
    }
}


let myTesla = new ModelS();
myTesla = new RearFacingSeats(myTesla);


console.log(myTesla.cost());
console.log(myTesla.getDescription());





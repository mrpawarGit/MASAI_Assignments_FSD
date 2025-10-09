"use strict";
// class Shipping {
//   calculate(type: string): number {
//     if (type === "standard") return 50;
//     if (type === "express") return 100;
//     return 0;
//   }
// }
class StandardShipping {
    calculate() {
        return 50;
    }
}
class ExpressShipping {
    calculate() {
        return 100;
    }
}
class Shipping {
    constructor(plan) {
        this.plan = plan;
    }
    calculate() {
        return this.plan.calculate();
    }
}
const std = new Shipping(new StandardShipping());
console.log(std.calculate());
const exp = new Shipping(new ExpressShipping());
console.log(exp.calculate());

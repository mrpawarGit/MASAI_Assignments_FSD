// class Shipping {
//   calculate(type: string): number {
//     if (type === "standard") return 50;
//     if (type === "express") return 100;
//     return 0;
//   }
// }

interface ShippingPlan {
  calculate(): number;
}

class StandardShipping implements ShippingPlan {
  calculate(): number {
    return 50;
  }
}

class ExpressShipping implements ShippingPlan {
  calculate(): number {
    return 100;
  }
}

class Shipping {
  private plan: ShippingPlan;
  constructor(plan: ShippingPlan) {
    this.plan = plan;
  }

  calculate(): number {
    return this.plan.calculate();
  }
}

const std = new Shipping(new StandardShipping());
console.log(std.calculate());

const exp = new Shipping(new ExpressShipping());
console.log(exp.calculate());

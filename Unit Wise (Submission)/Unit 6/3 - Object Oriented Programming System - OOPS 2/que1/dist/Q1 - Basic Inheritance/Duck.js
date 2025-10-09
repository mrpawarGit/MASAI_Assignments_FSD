"use strict";
class Duck {
    swim() {
        console.log("I know swimming");
    }
}
class MallardDuck extends Duck {
}
const m1 = new MallardDuck();
m1.swim();

"use strict";
class ToyDuck {
    swim() {
        return "Can float on water";
    }
    fly() {
        return "Cannot fly";
    }
    sound() {
        return "Cannot sound";
    }
}
const t1 = new ToyDuck();
console.log(t1.swim());
console.log(t1.fly());
console.log(t1.sound());

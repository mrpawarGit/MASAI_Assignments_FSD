"use strict";
class Person {
    walk() {
        return "Person walking function";
    }
}
class Developer extends Person {
    walk() {
        return "Developer walking function";
    }
    code() {
        return "Developer code function";
    }
}
let dev = new Developer();
console.log(dev.walk());
console.log(dev.code());

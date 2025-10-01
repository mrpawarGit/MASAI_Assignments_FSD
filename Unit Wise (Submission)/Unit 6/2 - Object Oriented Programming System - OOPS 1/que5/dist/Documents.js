"use strict";
class Documents {
    print() {
        return "Printing Document...";
    }
}
class Photo {
    print() {
        return "Printing Photo...";
    }
}
let d1 = new Documents();
let p1 = new Photo();
let arr = [d1.print(), p1.print()];
console.log(arr);

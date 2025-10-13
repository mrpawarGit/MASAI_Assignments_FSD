"use strict";
var Smartphone = /** @class */ (function () {
    function Smartphone() {
    }
    Smartphone.prototype.update = function () {
        console.log("Smartphone received notification");
    };
    Smartphone.prototype.getName = function () {
        return "Smartphone";
    };
    return Smartphone;
}());
var Tablet = /** @class */ (function () {
    function Tablet() {
    }
    Tablet.prototype.update = function () {
        console.log("Tablet received notification");
    };
    Tablet.prototype.getName = function () {
        return "Tablet";
    };
    return Tablet;
}());
var NotificationCenter = /** @class */ (function () {
    function NotificationCenter() {
        this.observers = [];
    }
    NotificationCenter.prototype.attach = function (observer) {
        this.observers.push(observer);
        console.log("Observer added: ".concat(observer.getName()));
    };
    NotificationCenter.prototype.detach = function (observer) {
        this.observers = this.observers.filter(function (obs) { return obs !== observer; });
        console.log("Observer removed: ".concat(observer.getName()));
    };
    NotificationCenter.prototype.notify = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update();
        }
    };
    return NotificationCenter;
}());

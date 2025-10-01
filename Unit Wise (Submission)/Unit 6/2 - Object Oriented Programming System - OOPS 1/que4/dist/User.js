"use strict";
class User {
    constructor(username) {
        this.username = username;
    }
}
class Admin extends User {
    constructor(username) {
        super(username);
    }
    showUsername() {
        console.log(`Username:${this.username}`);
    }
}
let u1 = new Admin("realadmin");
u1.showUsername();

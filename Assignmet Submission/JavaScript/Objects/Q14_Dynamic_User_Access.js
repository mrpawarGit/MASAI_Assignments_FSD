/**
Q: 14
Title: L1 - Dynamic User Role Message with Object Properties

Problem Statement: Write a program that dynamically generates a message for different user roles stored in an object. The object contains a user’s name, role, and active status. Based on the role and active status, print the following messages:

If the user is "admin" and is active, print "Admin Access Granted!".
If the user is "admin" and is not active, print "Admin Access Revoked".
If the user is "user" and is active, print "User Access Granted!".
If the user is "user" and is not active, print "User Access Revoked".
For any other role, print "Access Denied".

Use the ternary operator to handle this logic.

Example:
let user = { name: "Alice", role: "admin", active: false };
Output: "Admin Access Revoked"

 */

function getAccess(obj){
  let access = obj.role=="admin" ? (obj.active ? "Admin Access Granted!" : "Admin Access Revoked"):
               obj.role=="user" ? (obj.active ? "User Access Granted!" : "User Access Revoked"): "Access Denied";
  return access;
}

let user = { name: "Alice", role: "admin", active: false };
console.log(getAccess(user));

let user2 = { name: "Alice", role: "admin", active: true };
console.log(getAccess(user2));

let user3 = { name: "Mark", role: "user", active: true };
console.log(getAccess(user3));

let user4 = { name: "John", role: "manager", active: true };
console.log(getAccess(user4));
/**

Q: 13
Title:
L1 - Multi-Level Array and Object Destructuring

Problem Statement:
You are working with an array of objects where each object represents a person with their name and address details. Use multi-level destructuring to extract the person's name, city, and street information.

Steps:
Given an array of people objects like:
const people = [ { name: "Alice", address: { city: "New York", street: { name: "Broadway", number: 123 } } }, { name: "Bob", address: { city: "Los Angeles", street: { name: "Sunset Boulevard", number: 456 } } } ];

Use multi-level destructuring to extract:
name of each person.
city and street name from the address.
Return an array of strings in the format: "Alice lives in New York on Broadway".
Example Input:

const people = [ { name: "Alice", address: { city: "New York", street: { name: "Broadway", number: 123 } } }, { name: "Bob", address: { city: "Los Angeles", street: { name: "Sunset Boulevard", number: 456 } } } ]

Example Output:

["Alice lives in New York on Broadway", "Bob lives in Los Angeles on Sunset Boulevard"]
 */

const people = [ { name: "Alice", address: { city: "New York", street: { name: "Broadway", number: 123 } } }, { name: "Bob", address: { city: "Los Angeles", street: { name: "Sunset Boulevard", number: 456 } } } ];

let [{name:u1_name,address:{city:u1_city,street:{name:u1_sname}}},
  {name:u2_name,address:{city:u2_city,street:{name:u2_sname}}}] = people;

let str1 = `${u1_name} lives in ${u1_city} on ${u1_sname}`;
let str2 = `${u2_name} lives in ${u2_city} on ${u2_sname}`;
//output:
console.log(str1);
console.log(str2);

//output
let arr = [str1,str2];
console.log(arr);
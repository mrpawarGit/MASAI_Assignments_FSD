/**
Q: 12
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

let [
  {name:name1,address:{city:city1,street:{name:sname1}}},
  {name:name2,address:{city:city2,street:{name:sname2}}}
] = people

console.log(`${name1} lives in ${city1} on ${sname1}", "${name2} lives in ${city2} on ${sname2}`)
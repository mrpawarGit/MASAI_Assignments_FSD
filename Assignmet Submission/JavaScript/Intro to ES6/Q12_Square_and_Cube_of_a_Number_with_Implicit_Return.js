/**

Q: 12
Title:
L0 - Square and Cube of a Number with Implicit Return

Problem Statement:
Write an arrow function that takes a number as input and returns both its square and cube in an object, using implicit return. The function should be as concise as possible.

Requirements:
The arrow function should use implicit return (no curly braces or return keyword).
The function should return an object in the format { square, cube }.
Example Input:

5

Example Output:

{ square: 25, cube: 125 }

 */
//app1
let obj = {square:1,cube:1};
let power = (a)=>{obj["square"]=a**2; obj["cube"]=a**3;}

power(5);
console.log(obj);


//app2
let pow = (a) =>({square:a**2,cube:a**3});
console.log(pow(5));
/**
Q: 8 Title - Prototypes and Prototypical Inheritance Syntax Practice

Overview
In this problem, you will practice writing and understanding the syntax related to prototypes and prototypical inheritance in JavaScript. This exercise aims to reinforce your knowledge of these concepts and their syntax.

Detailed Explanation
Topics
Prototypes
Prototypical Inheritance
Problem Statement
Write JavaScript code to achieve the following tasks:

Define a constructor function Animal with a property type set to "Animal".
Add a method sound to Animal.prototype that logs "Animal sound".
Define a constructor function Dog that inherits from Animal.
Ensure that Dog.prototype inherits from Animal.prototype.
Override the sound method in Dog.prototype to log "Bark" instead of "Animal sound".
Create an instance of Dog called myDog.
Call the sound method on myDog.
 */

function Animal(){
  this.type = "Animal";
}

Animal.prototype.sound = function(){
  console.log("Animal sound.")
}

function Dog(){
  Animal.call(this);
}

Dog.prototype.sound = function(){
  console.log("Bark")
}

const myDog = new Dog();
console.log(myDog.type)
myDog.sound()

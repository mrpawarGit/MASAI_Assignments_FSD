/**
Q.7 - Title: Using apply() to Multiply Numbers

Problem Statement:
Write a function called multiplyNumbers that accepts two numbers as arguments and uses the apply() method to multiply them. The function should return the product.
 */

function multiplyNumbers(num1,num2){
  console.log("Product:",this.product(num1,num2))
}

let obj1 = {
  product: function(a,b){
    return a*b;
  }
}

multiplyNumbers.apply(obj1,[7,5])
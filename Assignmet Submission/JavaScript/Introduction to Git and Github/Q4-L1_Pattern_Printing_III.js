/**
 * FTSDM01S2_2508 Introduction to Git and Github
 * 
 * Title: L1-Pattern Printing III

Problem Statement:

You are given a number stored in a variable with the name N You have to print the pattern as shown below according to the value stored in N For example, consider the value stored in N = 5, then the required pattern will be.

* * * * *
*
*
*
* * * * *


*/
let n=5
let bag="";
for(i=0;i<n;i++){
  for(j=0;j<n;j++){
    if(i==0 || j==0 || i==n-1){

      bag += "* ";
    }
  }
  bag +="\n"
}

console.log(bag)

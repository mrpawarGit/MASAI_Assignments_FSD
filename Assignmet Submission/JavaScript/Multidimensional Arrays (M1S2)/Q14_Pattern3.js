/**
 
Q: 14
**Title:**L1-Pattern Printing III

**Problem Statement:**You are given a number stored in a variable with the name N You have to print the pattern as shown below according to the value stored in N For example, consider the value stored in N = 5, then the required pattern will be.

* * * * *

*

*

*

* * * * *


 */

function patternPrint(N){

  let bag = "";
  let bag2 = "";
  for(let i=1;i<=N;i++){
      bag += "* "
  }
  for(let i=1;i<=N-2;i++){
    bag2 += "*"
    if(i==N-2) break;
    bag2 += "\n"
  }

  console.log(bag);
  console.log(bag2);
  console.log(bag);

}

patternPrint(5);
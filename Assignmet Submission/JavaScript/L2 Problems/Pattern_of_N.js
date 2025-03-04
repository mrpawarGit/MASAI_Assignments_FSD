/**
Q: 2
Title : L-2 Pattern of N

**Problem Statement: **

You are given a number stored in a variable with the name N You have to print all the numbers in the range from 1 to N*N, such that there are exactly N numbers on each line

For example, if the value stored inN = 3, then all the numbers in the range, from [1,9] need to be printed, such that there are 3 numbers on each line. Therefore, the required output is

1 2 3

4 5 6

7 8 9

 */


function patterOfN(N){
  let k=1;
  let bag = "";

  for(let i=1;i<=N;i++){
    for(let j=1;j<=N;j++){
      bag += k++ +" ";
      if(k==10){
        k=1;
      }
    }
    bag += "\n";
  }
  console.log(bag);
}

patterOfN(3);
//patterOfN(4);
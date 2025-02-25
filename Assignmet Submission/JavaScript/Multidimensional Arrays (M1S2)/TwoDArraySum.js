/**
Title: L0-Sum of Indexes

Problem Statement: You are given a 2D array, whose dimensions are stored in two variables with the name N and M
The value stored in N denotes the number of rows, and the value in M denotes the number of columns
The 2D array is stored in a variable with the name arr
You have to print the sum of indexes of the 2D array for all positions in the 2D array

For example, consider the value stored in N = 3,M = 2, and the array is arr = [1,2],[3,4],[5,6], then the required output will be

At index (0,0), the sum of indexes becomes (0 + 0 = 0)
At index (0,1), the sum of indexes becomes (0 + 1 = 1)
At index (1,0), the sum of indexes becomes (1 + 0 = 1)
At index (1,1), the sum of indexes becomes (1 + 1 = 2)
At index (2,0), the sum of indexes becomes (2 + 0 = 2)
At index (2,1), the sum of indexes becomes (2 + 1 = 3)

Therefore, the output becomes

0 1

1 2

2 3

Submission Guidelines: Please submit your Masai Git directory link.
*/

function arraSum(M,N){

  let arr = [];
  for(let i=0;i<N;i++){
    arr[i] = [];
    for(let j=0;j<M;j++){
      arr[i][j]= i+j;
    }
  }

  console.log(arr);
  console.log("\nOutput:\n");
  let op = printArray(arr);
  console.log(op);
}

function printArray(arr){
  let bag="";
  for(let i=0;i<arr.length;i++){
    for(j=0;j<arr[i].length;j++){
      //console.log(arr[i][j]+ " ");
      bag += arr[i][j] + " ";
    }
    bag += "\n\n"
  }
  return bag;
}

//passing input
arraSum(2,3);
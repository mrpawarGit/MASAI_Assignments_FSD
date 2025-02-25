/**
Q: 15
Title: L2-Circular Traversal

Problem Statement: Given a square matrix, you have to find the reverse U traversal of the matrix. Refer the sample I/O for better understanding. Refer the given figure for better understanding.

Note: No element should be visited more than once.
  
  1 2 3
  4 5 6
  7 8 9

output:- 7 4 1 2 3 6 9 8
 
 */


// I tried to make it dynamic so even if array size (n*n) changes it will still work fine 
function circularArr(n){
  let cnt = 1;
  let arr = [];
  for(let i=0;i<n;i++){
    arr[i]=[];
    for(let j=0;j<n;j++){
      arr[i][j] = cnt++
    }
  }

  //console.log(arr);
  let arrOP = printArr(arr)
  //printting array
  console.log(arrOP);

  //saving output of array in circular traversal and printing it
  let output = cirTraversal(arr);
  console.log("Output:",output);

}

//function for printing array
function printArr(arr){
  let bag="";
  for(let i=0;i<arr.length;i++){
    for(j=0;j<arr[i].length;j++){
      bag += arr[i][j] + " ";
    }
    bag += "\n"
  }
  return bag;
}

//function for output of ciricularTraversal
function cirTraversal(arr){
  let bag = "";
  let len = arr.length;

  //p1
  let j=0;
  for(let i=len-1;i>=0;i--){
    bag += arr[i][j] + " ";
  }

  //p2
  let i=0;
  for(let j=1;j<len;j++){
    bag += arr[i][j] + " ";
  }

  //p3
  j=len-1;
  for(let i=1;i<len;i++){
    bag += arr[i][j] + " ";
  }
  
  //p4
  i=len-1;
  for(let j=len-2;j>0;j--){
    bag += arr[i][j] + " ";
  }

  return bag;
}


circularArr(3)
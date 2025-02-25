/**
 Q: 13
Title: L1-Go in Zig-Zag

Problem Statement: Given amatrixwith N rows and M columns. Print the matrix elements starting from the top right corner and follow a zig-zag pattern.

Look at the image for better understanding

  1 2 3 4 5 
  6 7 8 9 1
  2 3 4 5 6 
  7 8 9 1 2

For example, for the above matrix, the required output would be as shown below.

5 4 3 2 1 6 7 8 9 1 6 5 4 3 2 7 8 9 1 2.

 */


function nXnMatrix(n){
  let arr = [];
  let count = 1;
  for(let i=0;i<n-1;i++){
    arr[i] = [];
    for(let j=0;j<n;j++){
      if(count==10) count=1;
      arr[i][j] = count++;
    }
  }

  let op = printArr(arr);
  console.log(op);

  let output = zigZag(arr);

  console.log("Output:",output)
}

function printArr(arr){
  let bag="";
  for(let i=0;i<arr.length;i++){
    for(j=0;j<arr[i].length;j++){
      //console.log(arr[i][j]+ " ");
      bag += arr[i][j] + " ";
    }
    bag += "\n"
  }
  return bag;
}

function zigZag(arr){
  let opbag = "";
  for(let i=0;i<arr.length;i++){
    if(i==0 || i%2==0){
      for(let j=arr[i].length-1;j>=0;j--){
        opbag += arr[i][j] +" ";
      }
    }
    else{
      for(let j=0;j<arr[i].length;j++){
        opbag += arr[i][j] +" ";
      }
    }
  }
  return opbag;
}

nXnMatrix(5)
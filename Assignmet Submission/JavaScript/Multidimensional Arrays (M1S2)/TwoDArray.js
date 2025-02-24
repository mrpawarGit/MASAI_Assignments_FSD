function arrPrint(N,M){

  let arr = [];
  let k=1;

  for(let i=0;i<N;i++){
    arr[i]=[];
    for(let j=0;j<M;j++){
      arr[i][j] = k++;
    }
  }

  console.log(arrOP(arr));
}

function arrOP(arr){
  let bag = "";
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
      bag += arr[i][j] +" ";
    }
    bag += "\n\n";
  }
  return bag;
}

arrPrint(3,2)
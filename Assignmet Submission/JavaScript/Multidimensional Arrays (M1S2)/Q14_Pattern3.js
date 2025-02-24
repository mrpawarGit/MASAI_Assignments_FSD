
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
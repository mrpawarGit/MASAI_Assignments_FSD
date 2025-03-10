function flyodsTriangle(n){
  let bag="";
  let k=1;
  
  for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
      bag += k++ +" ";
    }
    bag += "\n";
  }
  console.log(bag);
}

flyodsTriangle(4);
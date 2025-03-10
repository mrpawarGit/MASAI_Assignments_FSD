function zPattern(n){
  console.log("* ".repeat(n));

  for(let i=1;i<=n-2;i++){
    let bag = "";  
     for(j=1;j<=n-i-1;j++){
      bag += "  ";
     }
     bag += "*";
     console.log(bag);
  }


  console.log("* ".repeat(n));

}
zPattern(6);
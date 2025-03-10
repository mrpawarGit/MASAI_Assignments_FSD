
function treePattern(n){
  let bag = ""

      for (let i = 0; i < n; i++) {
  
          for (let j = 0; j < 2 * (n - i - 1); j++){
            bag += " ";
          }
          for (let k = 0; k < 2 * i + 1; k++){
            bag += "* ";
          }
          
          if(i==n-1) break;
          bag += "\n";
      }
      console.log(bag);
      console.log(" ".repeat(n*2-2) + "|");
      return 0;
  }
  
  treePattern(5);


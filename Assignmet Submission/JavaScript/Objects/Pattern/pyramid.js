
function pyramid(n){
  let bag = ""
      // Outer loop to print all rows
      for (let i = 0; i < n; i++) {
  
          // First inner loop to print leading white spaces
          for (let j = 0; j < 2 * (n - i - 1); j++){
            bag += " ";
          }
  
          // Second inner loop to print star * character
          for (let k = 0; k < 2 * i + 1; k++){
            bag += "* ";
          }

          bag += "\n";
      }
      console.log(bag);
      return 0;
  }
  
pyramid(5);

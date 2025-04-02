function factorial(num){
  if(num<0){
    console.log("Inavlid Number")
    return
  }
  if(num==0) return 1;

  return num * factorial(num-1);
}

let fact = factorial(3);
console.log(fact)
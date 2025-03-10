let cnt=0;
for(let i=0;i<3;i++){
  for(let j=0;j<3;j++){
    //for(let k=0;k<3;k++){
      console.log(++cnt);
      return; //can stop process here and return outside the loop
      
    //}
  }
  console.log(cnt);
}

//using Label

outerloop: for(let i=0;i<3;i++){
  for(let j=0;j<3;j++){
    //breaking both loops
    console.log("hello");
    break outerloop;
  }
}
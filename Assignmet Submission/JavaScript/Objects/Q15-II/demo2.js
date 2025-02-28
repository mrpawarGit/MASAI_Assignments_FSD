let obj = {
  name: "Raj",
  age: 25,
  post: "manager",

  data: function(name){
    //console.log(this.name);
    return this.name+" "+name;
  }
}

console.log(obj.data("rj"))
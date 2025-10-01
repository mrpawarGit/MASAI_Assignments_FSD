class Person {
  walk(): string {
    return "Person walking function";
  }
}

interface Coder {
  code(): string;
}

class Developer extends Person implements Coder {
  walk(): string {
    return "Developer walking function";
  }

  code(): string {
    return "Developer code function";
  }
}

let dev = new Developer();
console.log(dev.walk());
console.log(dev.code());

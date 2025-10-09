class Bird {
  fly(): string {
    return "I can fly";
  }
}

class Penguin extends Bird {
  fly(): string {
    return "I cannot fly";
  }
}

const b1 = new Bird();
console.log(b1.fly());

const b2 = new Penguin();
console.log(b2.fly());

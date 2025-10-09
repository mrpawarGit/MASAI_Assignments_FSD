interface IDuck {
  swim(): string;
  fly(): string;
  sound(): string;
}

class ToyDuck implements IDuck {
  swim(): string {
    return "Can float on water";
  }
  fly(): string {
    return "Cannot fly";
  }
  sound(): string {
    return "Cannot sound";
  }
}

const t1 = new ToyDuck();
console.log(t1.swim());
console.log(t1.fly());
console.log(t1.sound());

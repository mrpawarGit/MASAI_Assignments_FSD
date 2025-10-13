interface Observer {
  update(): void;
  getName(): string;
}

class Smartphone implements Observer {
  update(): void {
    console.log("Smartphone received notification");
  }
  getName(): string {
    return "Smartphone";
  }
}

class Tablet implements Observer {
  update(): void {
    console.log("Tablet received notification");
  }
  getName(): string {
    return "Tablet";
  }
}

class NotificationCenter {
  private observers: Observer[] = [];

  attach(observer: Observer): void {
    this.observers.push(observer);
    console.log(`Observer added: ${observer.getName()}`);
  }

  detach(observer: Observer): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
    console.log(`Observer removed: ${observer.getName()}`);
  }

  notify(): void {
    for (const observer of this.observers) {
      observer.update();
    }
  }
}

class User {
  protected username: string;

  constructor(username: string) {
    this.username = username;
  }
}

class Admin extends User {
  constructor(username: string) {
    super(username);
  }
  showUsername(): void {
    console.log(`Username:${this.username}`);
  }
}

let u1 = new Admin("realadmin");
u1.showUsername();

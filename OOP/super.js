class User {
  constructor(id, name) {
    ((this.id = id), (this.name = name));
  }

  displayInfo() {
    console.log(`Id : ${id} & name ${name}`);
  }
}

const user = new User(101, "Maruf");
user.displayInfo();

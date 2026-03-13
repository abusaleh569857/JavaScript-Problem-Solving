class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  displayInfo() {
    console.log(`Id : ${this.id} & name ${this.name}`);
  }
}

const user = new User(101, "Maruf");
user.displayInfo();

class Admin extends User {
  constructor(id, name, address, salary) {
    super(id, name);
    this.address = address;
    this.salary = salary;
  }
}

const admin = new Admin(102, "Mahim", "Dhaka", 30000);
admin.displayInfo();

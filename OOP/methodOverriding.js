class Animal {
  run() {
    console.log("Animal can run!");
  }
}

class Dog extends Animal {
  run() {
    console.log("Dog can run!");
  }
}

const dog = new Dog();
dog.run();

const animal = new Animal();
animal.run();


//Global Scope 
console.log(this); // output : {}

// Object method
const obj = {
  name: "Rahim",
  show: function(){
    console.log(this);
  }
}

obj.show(); 
// output(browser) : {name: "Rahim", show: f}

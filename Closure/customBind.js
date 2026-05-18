Function.prototype.myBind = function (context, ...args) {
  const targetFunction = this;
  return function (...newArgs) {
    return targetFunction.apply(context, [...args, ...newArgs]);
  };
};

const user = {
  name: "Abusaleh",
};

function greet(greeting, punctuation) {
  return `${greeting}, ${this.name}${punctuation}`;
}

const welcomeAbusaleh = greet.myBind(user, "Welcome");
console.log(welcomeAbusaleh("!"));

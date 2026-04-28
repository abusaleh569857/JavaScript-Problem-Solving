function orderFood(callback) {
  console.log("Working with parent function (order food)!");
  callback("Food order successfull!");
}

orderFood((message) => console.log(message));

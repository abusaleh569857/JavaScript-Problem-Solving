let promise = new Promise((resolve, reject) => {
  let isTrue = true;
  if (isTrue) {
    resolve("Done!");
  } else {
    reject("error!");
  }
});

promise.then((res) => console.log(res)).catch((err) => console.error(err));

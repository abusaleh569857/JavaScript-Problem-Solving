for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i); // print 5 , 5 times because var is a function scope 
  }, 1000);
}

for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i); // print 0 to 4 , because let each time create new block
  }, 1000);
}

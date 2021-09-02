const bottle = { color:"black", hold:"water",price:100, isCleaned: true};
//getting all properties names
const keys = Object.keys(bottle);
// console.log(keys)

//get all values
const values = Object.values(bottle);
// console.log(values);

const pairs = Object.entries(bottle)
// console.log(pairs);

// Object.seal(bottle)
// bottle.price = 200;

Object.freeze(bottle)
delete bottle.isCleaned;
console.log(bottle);
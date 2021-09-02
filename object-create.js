//using object literal
const student = { name:"Ishtiak anam",job:"webDevloper"}

//object contructor
const person = new Object();

//
const human = Object.create(student)
// console.log(human.job);

//4.class
class People {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}
const peop = new People("Manus", 17);
console.log(peop);


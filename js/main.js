console.log("HiHi")
console.log(2*4)

var x = 1;
let y =2 ;
const z = 3;

console.log(x,y,z);
console.log(typeof z)

const person = {
  name: "Hoàng",
  age : 20,
  isSinger : true,
  birthday: {
    day : 10,
    month : 03,
    year : 2002
  },
};


person.name = "Lã Huy Hoàng "

let array = [1,3,'nam']

console.log(array)
console.log(person["age"])
console.log(person)

function greeting(name){
  console.log("Hello " + name)
}

greeting("Lã Huy Hoàng")

function add(a,b){
  return a + b
}
console.log(add(2,8))
console.log(add("nam",9))

function hi(){
  for(var i = 0; i<5 ; i++){
    console.log(i)
  }
  console.log(i)
}
hi();

//window.alert("Đấm nhau không emm")
let a = 1;
function add(a){
  return a+1;
}

console.log(add(a))
console.log(a)

function hi(person){
  person.age = 25;
  person = {
    name : 'Jone',
    age : 20,
  };
  return person;
}
const ps1 = {
  name : 'Jun',
  age : 21,
}

const ps2 = hi(ps1);
console.log(ps1);
console.log(ps2);
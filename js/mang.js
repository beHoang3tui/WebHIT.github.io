let a =[1,3,4,2];
//a.pop();// xóa cuối
//a.push(10); // thêm cuối
//a.shift();
// console.log(a.length);
// console.log(a[3]);

// a.splice(1,2);
// console.log(a.slice(0,2));
// console.log(a.toString());

// console.log(a.sort());

// for(let i =0 ; i<a.length; i++){
//   console.log(a[i]);
// }

// a.forEach((a) => {
//   console.log(a);
// });
function x2(num){
  return 2*num;
}

function filterNumber(num){
  return num > 2;
}
let b = a.map(x2);
let c = a.filter(filterNumber)
console.log(c);
// Câu 2: Cộng một đơn vị vào mảng số nguyên
// Input: digits = [1,2,3]
// Output: [1,2,4]
 
// Input: digits = [0]
// Output: [1]
 
// Input: digits = [9]
// Output: [1,0]
let digits = [1,2,3];
let digits1 = [0];
let digits2 = [9];

const sum = (digit) => {
  let b = [];
  let a = (Number(digit.join('')) + 1)
          .toString()
          .split('')
          .forEach(ele => b.push(Number(ele)));
  return b;
}

console.log(sum(digits));
console.log(sum(digits1));
console.log(sum(digits2));
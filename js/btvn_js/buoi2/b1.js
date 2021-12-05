// Câu 1: Cho một chuỗi str, tìm ký tự không lặp lại đầu tiên trong chuỗi đó và trả về chỉ số của nó.Nếu nó không tồn tại, trả về -1.
// case1
// Input: str = "tranduong"
// Output: 0
// case2
// Input: str = "hitclubhiuhiu"
// Output: 2
// case3
// Input: str = "aabb"
// Output: -1
let str = "tranduong";
let str1 = "hitclubhiuhiu";
let str2 = "aabb";
const count = (str) => {
  const arr = [];
  for(let item of str) {
      arr[item] = arr[item] ? arr[item] + 1 : 1;
  }
  for(let index in str) {
    if(arr[str[index]] == 1) {
      return index;
    }
  }
  return -1;
};
console.log(count(str));
console.log(count(str1));
console.log(count(str2));
const arr = [1,2,3];
console.log(arr.length);
arr.length = 3;

console.log(arr);
console.log("================================================");
//2. Index
const arr2 = [1,2,3];
arr[1] = 10;
console.log(arr)
console.log("================================================");
// 3. Includes and Indexof
const arr3 = [1,2,3];
console.log(arr.includes(3));
console.log(arr.indexOf(3));
console.log(arr.lastIndexOf(3));
console.log("================================================");

// 4. Push and Pop
const arr4 = [1,2,3];
arr4.push(4);
console.log(arr4);
arr4.pop();
console.log(arr4);
arr4.unshift(4,5,6);
console.log(arr4);// far less efficient. Use only when need to
console.log("================================================");

// 5. isArray
const arr5 = [1,2,3];

console.log(Array.isArray(arr5));
console.log("================================================");
// 6 splice, slice, & concat
const arr6 = [1,2,3,4,5,6];

const newArr = arr6.slice(1,3);
console.log(newArr)

const newArr2 = arr6.concat(['hello', 'world']);
console.log(newArr2)

//arr.splice(0,2);
//console.log(arr); 
console.log("================================================");

// 7. Reverse & Join 
const arr7 = [1,2,3];
arr7.reverse()
console.log(arr7)

console.log(arr7.join(' | '));
console.log("================================================");

// 8. Loops 

const arr8 = [1,2,3];

//for (let i = 0; i< arr.length;i++){
  //  console.log(arr8[i]);
//}
for (const value of arr8) {
    console.log(value);
    //cannot access index
}
console.log("================================================");

// 9. functions
const arr9 = [1,2,3];

arr9.forEach(function(value, index, array) {
    console.log(value, index, this); 
}, {num: 10});
console.log("================================================");

//10. map function 
const arr10 = [1,2,3];

const mappedArray = arr.map(function(value, index) {
    return value + index + this.num;
    }, {num : 10});

console.log(mappedArray);
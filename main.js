// import { fullName as fn, age } from './person.js';
// import Hello from './utils.js';

// // Variables (Biến)
// // var x, y, z; // Khai báo biến
// // x = 10;
// // y = 20;
// // z = x + y; // =: Toán tử gán (x + y): là biểu thức (expression), +: Toán tử số học
// // // ES6: let, const
// // // Phạm vi của biến (scope)

// // // Khai báo hàm viduvar
// // // Phạm vi global (toàn cục)
// // function viduvar() {
// //   // function scope
// //   // khai báo biến với từ khóa var ở trong hàm, thì nó có phạm hàm
// //   var firstName = 'CodeGym'; // string
// //   console.log('firstName', firstName); // firstName có giá trị 'CodeGym'
// //   console.log('x', x);
// //   // block scope: {}
// //   for (var i = 0; i < 3; i++) {
// //     // In ra i
// //   }
// //   console.log('i', i); // lỗi
// // }
// // // console.log('firstName', firstName); // null hay là undefined
// // viduvar();

// // function vidulet() {
// //   // for (let j = 0; j < 3; j++) {
// //   //   // TODO:
// //   // }
// //   // console.log('j', j); // j được khai báo với từ khóa let, thì nó có phạm vi block scope
// //   if (true) {
// //     let message = 'Hello JavaScript!';
// //     console.log(message);
// //   }
// //   // console.log(message);
// // }
// // vidulet();
// // const PI = 3.1459;
// // console.log(PI);
// // // message = 'Xin chào';
// // console.log(message);
// // var message; // hoisting (tức là đưa những khai báo biến, hàm lên đầu phạm vi), trình thông dịch (interpreter)
// // let msg = 'Xin chao';
// // console.log(msg);

// // Classes (Lớp là một khuôn mẫu hay bản thiết kế của đối tượng. )
// class Person {

//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }

//   fullName() {
//     return this.firstName + ' ' + this.lastName;
//   }

//   display() {
//     // Template literal ``: backtick, cho phép sử dụng biểu thức (expression trong chuỗi) và có thể sử dụng chuỗi trên nhiều dòng
//     // ${expression}: Để gọi biểu thức
//     const message = `Nhớ
//     mùa thu
//     hà nội`;
//     console.log(message);
//     console.log(`Toi ten la ${this.fullName()}, toi ${this.age} tuoi`);
//   }
// }

// const hoang = new Person('Hoàng', 'Đỗ', 27);
// hoang.display();

// // Module (export, import)
// console.log(fn);
// console.log(age);
// console.log(Hello);

// Arrow Function (Hàm mũi tên)

// function sum(a, b) {
//   return a + b;
// }

// const sum = function (a, b) {
//   return a + b;
// };

// // const sum = (a, b) => a + b;
// console.log(sum(5, 10)); // 15

// const sayHello = msg => msg;

// console.log(sayHello('Xin chao C06'));

// Array Methods
// map(), filter(), reduce()
const fruits = ["Apple", "Banana"];
fruits.push("Orange");
console.log(fruits);
// map(): transform (biến đổi) giá trị trong mảng ban đầu dựa vào kết quả trả về của callbackfn, nó trả về một mảng mới
function listItem(item) {
  return `<li>${item}</li>`;
}

const newFruits = fruits.map((item) => `<li>${item}</li>`);
console.log(newFruits);
let list = `<ul>`;
for (let i = 0; i < newFruits.length; i++) {
  list += newFruits[i];
}
list += `</ul>`;
document.getElementById("demo").innerHTML = list;


// filter(): nó trả về một mảng mới dựa vào điều kiện đầu vào
const newFruits2 = fruits.filter((item) => item.includes('e'));
console.log(newFruits2);

// reduce(): nó trả về tổng giá trị của các phần tử trong mảng
const arr = [1, 2, 3];
const total = arr.reduce((acc, value) => {
  acc += value;
  return acc;
}, 0);
console.log(total);

// Destructuring (tách)
// Tách mảng
const [f, second, thuba] = fruits;
console.log(f);
console.log(second);
console.log(thuba);
// Tách đối tượng
const person = {
  name: 'WanBi',
  age: 29
};
const {name, age} = person;
console.log(name, age);

// Spread Operator: Gộp (copy) mảng hay đối tượng
const arr2 = [4, 5, 6];
const combinedArr = [...arr, ...arr2];
console.log(combinedArr);
const address = {
  address: 'HN'
};
const combinedObj = {...person, ...address};
console.log(combinedObj);

// Toán tử 3 ngôi (ternary operator)

if (combinedObj.age > 18) {
  console.log('Tôi trên 18 tuổi');
}

console.log(combinedObj.age > 18 ? 'Tôi trên 18 tuổi' : 'Tôi chưa đủ 18 tuổi');
console.log(combinedObj.age > 18 && 'Tôi trên 18 buổi');
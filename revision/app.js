// var : Global
// var a = 1
// let a = 1

// boundary start
// function myName (){
//     if(){
//         var x = 2
//     }
//     function foo(){
//         var aFoo = 1
//     }
//     console.log(x)
//     let c = 2
// }
// boundary end

// function myName(){
//     if(){
//         let a = 1
//     }
//     console.log(a)
// }

// const a = 1 //unable to change
// var b = 2
// var b = 3

// let c = 1
// c = 2
// const a = "namae"; //string | Primitive
// const b = false; //boolean | Primitive
// const c = {}; //object | Non-Primitive
// const d = 22.5; //number | Primititve
// const e = null; //null | Primitive
// // console.log(typeof null);
// const f = []; //array | Non-Primitive
// const g = undefined; //undefined | Primitive

// indexOf, slice, lastIndexOf, charAt, split. toLower, toUpper, trim,
// console.log(a.indexOf("a"));
// console.log(a.charAt(2));
// console.log(a.lastIndexOf("a"));
// console.log(a.slice(1, 3));
// console.log(a.split("a"));
// console.log(a.toLowerCase());
// console.log(a.toUpperCase());
// console.log(a.trim());
// console.log(a.replace("a", "b"));
// console.log(a.replaceAll("a", "b"));

// console.log(typeof b === "boolean")

// toString, parseInt, parseFloat, ceil, floor, round, Number, random, toFixed, isNan, isIntegar
// const stringifiedNumber = d.toString();
// const nanNumber = parseInt(stringifiedNumber);
// const l = "22.5";
// console.log(parseFloat(l),parseInt(l))
// console.log(nanNumber)
// console.log(isNaN(nanNumber))
// console.log(Math.ceil(d))
// console.log(Math.floor(d))
// console.log(Math.round(d))
// console.log(Math.random())
// console.log(d.toFixed(5))
// console.log(Number.isInteger(d))

// function myFoo(name) {
//   alert("Hello " + name);
// }

// const myFoo2 = (name,name2,...rest) => {
//   alert("Hello " + name);
//   console.log(rest)
//   return "Mr " + name;
// };

// const userName = myFoo2("Abdullah","a","s","c");
// console.log(userName);
// myFoo2("Abdullah");
// myFoo2("Ali");
// myFoo2("Rehman");

// console.log(a)
// var a = "1"
// console.log(a)

// console.log(b)
// let b = "1"
// temporal deadzone

(function () {
  var password = 123;
  console.log(password);
})();
// IIFE:Immediate Invoke Function Expression

// Lambda Function, anonymous
// function(){}
// ()=>{}

// const user = {
//   name: "Ahsan",
//   rollNo: 452316,
//   age: 25,
//   dob: "11-Dec-2000",
//   wifes: [{}],
//   child: {},
//   car: null,
//   education: "Bachelor",
//   isMarried: false,
//   callName: () => {},
// };
// const tagetedKey = "name";
// const userDes = prompt("Enter the key you want")

// console.log(user['age'],userDes);

// const myArr = ["A", 1, true, {}, [], function () {}];
const myArr = [10, 20, 11, 5, 8];
const myArr2 = [
  { id: 5, name: "Ahmed" },
  { id: 6, name: "Kalam" },
];
// console.log(myArr[0]);
// push, pop, shift, unshift, slice, splice, join, forEach, map, reduce, reverse, filter, sort, find, flat, some.
// const reduceReturned = myArr.reduce((acc, val, ind, arr) => {
//   return acc + val;
// });

// console.log(reduceReturned);
// myArr.reverse();
// console.log(myArr);

// const reversedReturn = myArr.toReversed();
// console.log(reversedReturn, myArr);

// const filteredReturn = myArr.filter(
//   val => val > 2
// );

// console.log(filteredReturn, myArr);

// const findReturn = myArr.find((val, ind, arr) => {
//   return val > 3;
// });
// console.log(findReturn);
// const myArr3 = [[1,[2,[3]]],[2],[3]];
// const flatReturn = myArr3.flat(3)
// console.log(flatReturn)
const myArr3 = [1, 6, 3, 4, 7, 4, 5];
// positive huwa to b, wrna a

// const sortResutl = myArr3.sort((a, b) => {
//   console.log({ a: a, b: b });
//   const result = a - b;
//   console.log(result, "res");
//   return result;
// });

// console.log(sortResutl);

// const someReturn = myArr2.some((val) => {
//   return val.name === "Ahmed";
// });
// console.log(someReturn);

// const includeReturn = myArr.includes(4);
// console.log(includeReturn);
// function myFun() {}
// myArr.forEach(myFun);
// myArr.forEach((val, ind, arr) => {
//   console.log(val, ind, arr, "===val");
// });
// const mappedReturn = myArr.map((val, ind, arr) => {
//   const newVal = val + "updated";
//   return newVal;
// });
// console.log(myArr, mappedReturn);

// const pushReturn = myArr.push("b", "c");
// console.log(myArr, pushReturn, "===myArr");

// const popReturn = myArr.pop();
// console.log(myArr, popReturn, "===myArr");

// const shiftReturn = myArr.shift();
// console.log(myArr, shiftReturn, "===myArr");

// const unshiftReturn = myArr.unshift("a", "b");
// console.log(myArr, unshiftReturn, "===myArr");

// const slicedArr = myArr.slice(0, 2);
// console.log(myArr, slicedArr);

// const spliceReturn = myArr.splice(2, 0, "new", "new1");
// console.log(myArr, spliceReturn, "===myArr");

// const joinReturn = myArr.join();
// console.log(myArr, joinReturn, "===myArr");
// const myArr2 = ["a", "b", "c", "d", "e", "f"];
// for (let i = 0; i < myArr2.length; i++) {
//   console.log(myArr2[i]);
// }
// while(true){
//   console.log("running")
// }

// do{
//   // code here
// } while(condition)

// const a = {
//   name: "Abdullah",
//   surname: "Motiwala",
//   role: "Student",
//   class: { roomNo: 5, floor: 4 },
// };
// const b = JSON.parse(JSON.stringify(a));
// a.name = "Mohd. Abdullah";
// a.class.floor = 5;
// console.log(a, b);
// const a = {
//   name: "Ahsan",
//   age: 5,
//   location: { lat: 50, long: 50, type: "home" },
// };
// const b = JSON.parse(JSON.stringify(a))
// // const b = { ...a };

// b.name = "Ali";
// b.location.lat = 60
// console.log(a, b);

// const clickButton = document.getElementById("click");

// const handleClick = (e) => {
//   // e.preventDefault();
//   clickButton.innerText = "Please do it";
// };
// const handleClick2 = (e) => {
//   // e.preventDefault();
//   clickButton.innerText = "Click Me";
// };
// const handleCopy = (e) => {
//   e.preventDefault();
//   console.log("===alert");
//   // e.preventDefault();
//   // clickButton.innerText = "Click Me";
// };
// // clickButton.addEventListener("contextmenu", handleClick);
// // clickButton.addEventListener("dblclick", handleClick);
// // clickButton.addEventListener("mouseover", handleClick);
// // clickButton.addEventListener("mouseleave", handleClick2);
// clickButton.addEventListener("copy", handleCopy);
// const inputBox = document.getElementById("input");

// const handleInput = (e) => {
//   console.log(e);
//   console.log("Input Change");
// };
// inputBox.addEventListener("blur", handleInput)
// inputBox.addEventListener("change", handleInput);
// inputBox.addEventListener("focus", handleInput);
// inputBox.addEventListener("keypress", handleInput);
// inputBox.addEventListener("keydown", handleInput);

// const handleclass = document.getElementsByClassName("clickbuttons");
// const handleclass = document.getElementsByTagName("input");
// handleclass
// console.log(handleclass, " class");
// const getQuerry = document.querySelector("#input");
// // console.log(typeof getQuerry);
// console.log(getQuerry);
// const getQuerry = document.querySelector(".clickbutton");
// // console.log(typeof getQuerry);
// console.log(getQuerry);

const container = document.getElementById("idContainer");
// const click = document.getElementById("click");
// console.log(container.innerText);
// console.log(container.innerHTML);
// console.log(container.outerHTML);

// const card = `<div>
//   <h1>Heading</h1>
//   <p>description...</p>
//   <button>Read More</button>
// </div>`;

// click.innerHTML += "ABC";

// container.appendChild(card);
// console.log(container.innerHTML)
// const res = fetch("https://jsonplaceholder.typicode.com/todos", {
//   method: "GET",
// });
// res
//   .then((data) => {
//     const res = data.json();
//     res.then((resData) => {
//       console.log(resData, "===resDta");
//     });
//   })
//   .catch((error) => {
//     alert("Internal Server Error");
//   });
// console.log(res);
// (async function () {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
//       method: "GET",
//     });
//     const data = await res.json();
//     console.log(data);
//   } catch (err) {
//     alert("Internal Server Error", err);
//   }
// })();
// res
//   .then((data) => {
//     const res = data.json();
//     res.then((resData) => {
//       console.log(resData, "===resDta");
//     });
//   })
//   .catch((error) => {
//     alert("Internal Server Error");
//   });

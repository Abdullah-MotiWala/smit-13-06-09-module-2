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

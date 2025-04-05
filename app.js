// primitives

var type1 = 1
var type2 = true
var type3 = "ahmed";
var type4 = undefined
var type5 = null

var camelCaseOne = "ahmed";
var snake_case = "ahmed";
var PascalCase = "ahmed";
var KEBAB_CASE = "ahmed";

// Non Premitive
var myArray = ["ahmed", "yasin", "raees", false, 45, null, undefined, [1, 2], { poition: "first", name: "Ahmed" }]

var myObject = { name: "Ahmed", age: 22, married: false, children: ["taha", "gul khan"] }

var _value = ""


// alert(undefined) // undefine is an argument here
// console.log(true)
// console.log("first")
// console.log(newValue)
// var newValue = 1;
// console.log(newValue)
// console.log("second")
// var newValue; // decelare
// newValue = "assign"; //assignment
// console.log(newValue)



var firstName = "Abdulla'h"
var firstName2 = 'Abdulla"h'


// console.log(typeof firstName)

var firstNum = 4
var secondNum = 10

// firstNum = firstNum + firstNum
// console.log(firstNum + 5)
// console.log(firstNum, secondNum)

// firstNum = firstNum + firstNum
// console.log(firstNum)
// console.log(secondNum)

// var subtraction = firstNum - secondNum
// console.log(subtraction, "subtraction")

// var multiplication = firstNum * secondNum
// console.log(multiplication, "multiplication")

// var division = firstNum / secondNum
// console.log(division, "division")

// var remainder = secondNum % firstNum
// console.log(remainder, "remainder")

// firstNum = firstNum + 5
// firstNum += 5
// console.log(firstNum)

// firstNum = firstNum + 1
// firstNum += 1


// firstNum++
// console.log(firstNum)
// console.log(firstNum++)
// console.log(firstNum)

// console.log(++firstNum)
// console.log(firstNum--)
// console.log(--firstNum)

// BODMAS
// var result = 2 + (22 + 6) / 4 * 2
// console.log(result)


// var a = 1 + 1
var b = "one" + "one"
// console.clear()
// console.log(a, b)

// console.clear()
// var a = "1" - 2 
// console.log(a)
// var age = 26
// var userAge = prompt("Enter Your Age","26")
// console.log(typeof userAge)

// var age = prompt("Enter Your Age")
// var addedAge = age + 2
// console.log(addedAge)


// var a = 1
// var b = 2

// console.log(a === b)
// console.log(a > b)
// console.log(a < b)
// console.log(a <= b)
// console.log(a >= b)

var mySalary = 50000
var newSalary = "50000"
//  data, value

// console.log(newSalary !== mySalary, "salary")

// var result = a > b

// var role = prompt("Enter your role")

// var teacherRole = "teacher"
// var studentRole = "student"

// if (role === teacherRole) {
//     console.clear()
//     console.log("Password : abcdef")
// } else if (role === studentRole) {
//     console.log("Password : ghkie")
// } else {
//     console.log("Access Denied")
// }




var result = false
if (result) {
    console.log("running")
} else {
    console.log("running in else")
}

// if // keyword
// () // dataTypeBoolen
// {} // run if return is True





// var a = 6
// var condition = true
// // console.log(condition, "===condition")

// if (true) {
//     console.log("Value of a = 5")
// } else {
//     console.log("Value of a != 5")
// }


// var dahiHai = true
// var doodhHai = true
// var andeHai = true
// var malaiWaliDahi = false

// if (dahiHai) {
//     if (malaiWaliDahi) {
//         console.log("Dahi le ao")
//     } else {
//         console.log("Khali hath ajao")
//     }
// } else if (doodhHai) {
//     console.log("Doodh le ao")
// } else if (andeHai) {
//     console.log("ande le ao")
// } else {
//     console.log("Khali hath ajao")
// }


// console.clear()

// var age = prompt("Enter Your Age")
// if (age >= 20) {
//     var isMarried = prompt("Aap shadi shuda hai")
//     if (isMarried === "yes") {
//         var isChildren = prompt("Apke bache hai")
//         if (isChildren === "yes") {
//             console.log("shadi na krein")
//         } else {
//             console.log("aik aur krlein")
//         }
//     } else {
//         console.log("Shadi krlein")
//     }
// } else {
//     console.log("Shadi na krein")
// }




// var classes = prompt("Enter your classes")
// var gender = prompt("Enter your Gender")


// if (classes >= 10) {
//     if (gender === "male") {
//         console.log("You are eligible for course")
//     } else {
//         console.log("You are not eligible for course")
//     }
// } else {
//     console.log("You are not eligible for course")
// }

// if (classes >= 10 && gender === "male") {
//     console.log("You are eligible for course")
// } else {
//     console.log("You are not eligible for course")
// }

// var matricMarks = prompt("Enter Your Matric Marks")
// var entryTestMarks = prompt("Enter Your Enter-Test Marks")

// if (matricMarks >= 70 || entryTestMarks >= 70) {
//     console.log("You are eligible for course")
// } else {
//     console.log("You are not eligible for course")
// }


console.clear()

var students = ["qurban", "adeel"];
// console.log(students)
// console.log(students.length)

// console.log(students[2])
students.push("huzaifa")

// console.log(students.length)
// console.log(students, students[2])

students.unshift("fareed")
// console.log(students, students[3])
// console.log(students.length)

students.pop()
console.log(students)

students.shift()
console.log(students)

students.shift()
console.log(students)

console.clear()


// var students = []

// var student1 = prompt("Enter Student Id")
// students.unshift(student1)

// var student2 = prompt("Enter Student Id")
// students.unshift(student2)

// var student3 = prompt("Enter Student Id")
// students.unshift(student3)

// var student4 = prompt("Enter Student Id")
// students.unshift(student4)

// var student5 = prompt("Enter Student Id")
// students.unshift(student5)

// var student6 = prompt("Enter Student Id")
// students.unshift(student6)

// students[1] = "newly"


// console.log(students[1])

var newArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// var slicedArr = newArray.slice(1, 9)
// console.log(newArray, slicedArr)
// var slicedArr = newArray.slice(1, 6)
// console.log(newArray, slicedArr)

newArray.splice(1, 0, "one", "two", 2.5)
console.log(newArray)


console.clear()

for (var i = 0; i < 10; i += 2) {
    var num = i * 2
    console.log(i, num, "===loop")
}

for (var i = 10; i > 0; i -= 2) {
    console.log(i, "===loop 2")
}
var tableNumber = 2
for (var i = 1; i <= 10; i++) {
    var resultOfTable = i * tableNumber
    console.log("2 X", i, "=", resultOfTable)
}

// console.clear()
// var result = prompt("Enter your age")
// console.log(-result, typeof -result)
// var resultInNum = parseInt(result)
// var resultInNum = parseFloat(result)
// var resultInNum = Number(result)

// console.log(result, resultInNum, typeof resultInNum)

console.clear()
var students = ["nasir", "ahmed", "fareed", "bilal", "hassan", "yasir", "talha"]
// var iteration = 0
// console.log(students[iteration])

// iteration++
// console.log(students[iteration])

// iteration++
// console.log(students[iteration])

// iteration++
// console.log(students[iteration])

// console.log(students[2])
// console.log(students[3])
// console.log(students[4])

// for (var i = 0; i < students.length; i++) {
//     console.log(students[i])
// }



// var numbers = [5, 4, 5, 9, 1,0, 5, 6, 1, 7, 3,4]

// for(var i = 0 ; i < numbers.length ; i++){

//     if(numbers[i] == 0){
//         console.log(i," = index found");
//         break;
//     }
//     console.log(numbers[i]);

// }

var shops = ["gulkhan", "Allah wali", "jawed nihari", "nagori", "motiwala", "msuleman"]
var pocketMoney = 0;
for (var i = 0; i < shops.length; i++) {
    if (shops[i] == "jawed nihari") {
        continue;
    }
    pocketMoney += 50;
}

console.log(pocketMoney, "===pocket money");
console.clear()
for (var i = 0; i < 5; i++) {
    console.log("outer", i)
    for (var j = 0; j < 3; j++) {
        console.log("inner", "j:", j, "i:", i);
    }

}


// var isMarried = prompt("Enter Yes Or No")
// var isMarriedInLower = isMarried.toLowerCase()
// var isMarriedInLower = isMarried.toUpperCase()
// if (isMarriedInLower === "yes") {
//     console.log(isMarried, isMarriedInLower, "Welcome ")
// }
// console.clear()
// var answer = "hElLo"
// console.log(answer, answer.toLowerCase())
// console.log(answer, answer.toUpperCase())


console.clear()
// var a = 1
// var a = 2
// let a = 1
// a = 2
// const a = 1
// a = 2

// var : re-declare, re-assign
// let : not re-declare, re-assign
// const : not re-declare, not re-assign

// console.log(a)

let country = "Pakaiasnadfgatan"
console.log(country.slice(0, 3))
console.log(country.length, "===length")
console.log(country[0], "===letter")
console.log(country.charAt(0), "===charAt")
console.log(country.indexOf("z"), "===index")
console.log(country.lastIndexOf("a"), "===index")

// last char of string
const lastIndex = country.length - 1
const lastElement = country.charAt(lastIndex)
console.clear()
console.log(lastElement)
country = country.replace("P", "I")
console.log(country)

country = country.replace("a", "b")
console.log(country)

country = country.replaceAll("a", "c")
console.log(country)

country = country.replaceAll("i", "j")
console.log(country)

const bill = 12.9999999
// const roundedBill = Math.round(bill)
const ceiledBill = Math.ceil(bill)
const flooredBill = Math.floor(bill)
console.log(bill, flooredBill)
const randomNumber = Math.random()
const ourNumber = randomNumber * 100
// console.log(Math.floor(ourNumber),randomNumber.toFixed(2))
console.log(randomNumber, randomNumber.toFixed(2))

// const date = new Date()
// document.write(date)
// console.log(date, "===date")



const date = new Date()
// console.log(Date.now())

// console.clear()
// console.log(date,"===date")
// console.log(date.getDay(),"===day")
// console.log(date.getMonth(),"===month")
// console.log(date.getDate(),"===date")
// console.log(date.getFullYear(),"===Year")
// console.log(date.getHours(),"===Hours")
// console.log(date.getMinutes(),"===minutes")
// console.log(date.getSeconds(),"===seconds")
// console.log(date.getMilliseconds(),"===miliseconds")
// console.log(date.getTime(),"===miliseconds")
// console.log(date.getDate(),"===miliseconds")
// console.log(date.toDateString(),"===miliseconds")
// console.log(date.toTimeString(),"===miliseconds")
// console.log(date.toString(),"===miliseconds")
// console.log(Date.now(),"date")
console.clear()

// const newDate = new Date("June 30, 2035")
// const currentDate = new Date()
// console.log(parseInt((newDate.getTime() - currentDate.getTime()) / 1000 / 60 / 60 / 24), "===newDate")

// const newDate = new Date()
// newDate.setFullYear(2029)
// newDate.setMonth(2)
// newDate.setDate(1)
// console.log(newDate)

// const myObj = {
//     name: "Bilal",
//     age: 24,
//     gender: "male",
// }
// console.log(myObj)
// console.log(myObj.name)
// console.log(myObj["name"])
// console.log(myObj.age)
// console.log(myObj.gender)


// function greet() {
//     let num1 = 0
//     // const name = prompt("Enter Your Name")
//     // const greet = "Welcome " + name
//     // console.log(greet)
//     num1++
//     console.log(num1)
// }

// greet()
// greet()
// greet()
// greet()

const consoles = {
    log: function () {
        console.log("Hi")
    }
}

// consoles.log()

// function fareed(firstNum, secondNum) {
//     const result = firstNum * secondNum
//     // console.log(result)
//     // return result
//     console.log(result)
// }
// const one = 1
// const sumResult = fareed(one, 3)
// const sumResult1 = fareed(5, 9)
// const sum3 = fareed(0, 0)
// console.log(sumResult, sumResult1, sum3, "===result")

// const myArr = [0, 1, 2, 4, 6]
// const returned = myArr.pop()
// const newReturned = myArr.push(8)
// const consoleLog = console.log(
//     "abc"
// )
// console.log(myArr, returned, newReturned, consoleLog)

// // const myFunc = function () { }
// IIFE
// (function(){
//     console.log("run");
// })()

// function foo(a, b, c, ...d) { //...d = rest parameters
//     console.log(a, b, c);
//     for (let i = 0; i < d.length; i++) {
//         console.log(d[i]);
//     }

//     return 1
// }
// const one = foo(1,2,3,4)
// foo(1, 2, 3, 4, 5, 6)

// [1,2].splice(1,1,"a","b","c")

// var a = 1

// function myFoo() {
//     var a = 2
//     console.log(a);
// }
// function myFoo2(){
//     console.log(a)
// }

// myFoo()
// myFoo2()

// function foo() {
//     const b = 2
//     if (b === 2) {
//         var a = 1
//         console.log(a)
//     }
//     console.log(a)
// }
// function foo2() {
//     const b = 2

//     if (b === 2) {
//         let a = 1
//         console.log(a)
//     }
//     console.log(a)
// }


// foo()
// foo2()

// var a = 1
// function fooScope() {
//     var bScope = 1
//     if (bScope === 1) {
//         var b = 5
//     }
//     console.log(b)
// }
// fooScope()
// console.log(a);
// console.log(bScope);
// b
// function blockScoped(){
//     let b = 2
//     if(b===2){
//         let c = 1
//     }
//     console.log(c);
// }

// blockScoped()
// let num = 1
// const day = +prompt("Enter Day", 1)

// const exercise = ["Chest", "Back", "Shoulder", "Biceps", "Abs", "legs", "Rest"]
// console.log(exercise[day - 1]);

// if (day === 1) {

// } else if (day === 2) {

// } else if (day === 3) {

// } else if (day === 4) {

// } else if (day === 5) {

// } else if (day === 6) {

// } else if (day === 7) {

// }
// switch (day) {
//     case 1:
//         console.log("Chest")
//         break
//     case 2:
//         console.log("Back")
//         break
//     case 3:
//         console.log("Shoulder")
//         break
//     case 4:
//         console.log("Arms")
//         break
//     case 5:
//         console.log("Abs")
//         break
//     case 6:
//         console.log("Legs")
//         break
//     case 7:
//         console.log("Rest")
//         break
//     default:
//         console.log("Cardio");
//         break
// }
// let condition = true
// let a = 1
// let condition = a > 10
// while (condition) {
//     console.log("running")
//     condition = false
// }

// do { console.log("run in do while") } while (false)


// function showName() {
//     alert("Hi, What's your name")
// }

// splice(index,numberOfElements,...insertElement)

// arr = [0,1,2,3,4]
// for (let i = 0; i< 2;i++){
//     arry.pop()
// }

// const pakElement = document.getElementById('pak')
// console.log(pakElement.innerHTML)

// pakElement.innerHTML = "India"
// pakElement.style.backgroundColor = "red"
// pakElement.style.display = "none"
// const myObj = {a:1}
// myObj.a  = 2

function clickMe(fName, lName) {
    console.log("My name is", fName, lName)
}

function focusMe() {
    console.log("Input is in focus")
}
function blurMe() {
    console.log("Input is in blurred state")
}

const inputBox = document.getElementById("myInput")
function submit() {
    console.log(inputBox.value)
}


function restFunction(a, b, ...c) {
    console.log("Test function", a, b, c)
}

restFunction("hello", "world", "test", "test 2")

function sum(...a) {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        // sum += a[i]
        sum = sum + a[i]
    }
    return sum
}

console.log(sum(5, 15, 30, 15, 4));


function setValue(){
    inputBox.value = "Hello, world"
}

function expandText(){
    const para = document.getElementById("text");
    para.innerText+=" test para"
}
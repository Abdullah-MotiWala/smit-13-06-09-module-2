const divElement = document.getElementById("parent")
const pElements = divElement.getElementsByTagName("p")

const firstP = pElements[0]
const secondP = pElements[1]

const nthChild = (divElement.childNodes)[4]
console.log(nthChild.nodeType);

// const firstChild = divElement.firstChild
const firstChild = divElement.firstElementChild
// const lastChild = divElement.lastChild
const lastChild = divElement.lastElementChild
const divParent = divElement.parentNode
const divSibling = divElement.nextElementSibling
const divPreSibling = divElement.previousElementSibling

// console.log(divElement.childNodes, nthChild, firstChild, lastChild);
console.log(divPreSibling, lastChild.tagName, divSibling);
const ulElement = document.getElementById("list")
const ulStyling = ulElement.getAttribute("style")
const isStyled = ulElement.hasAttribute("style")
ulElement.removeAttribute('class')
// ulElement.setAttribute("class", "d-flex")
// ulElement.classList.add("cde")
console.log(ulStyling, isStyled);

// console.log(ulElement.hasAttribute("class"))
// console.log(ulElement.outerHTML, ulElement.innerHTML)

console.clear()



// const newDiv = document.querySelector("#new")
// newDiv.innerHTML += '<p>Pakistan</p>'
// const newP = '<p>Pakistan</p>'
// const pElement = newDiv.firstElementChild
// const newP = document.createElement("p")
// const pText = document.createTextNode("Pakistan Zindabad")
// newP.appendChild(pText)
// // newDiv.appendChild(newP)
// newDiv.insertBefore(newP, pElement)
// pElement.insertAdjacentHTML('beforebegin', newP)


// const newImg = document.createElement("img")
// newImg.setAttribute('src', 'https://sherbrotherpakistan.com/wp-content/uploads/2024/01/rent-a-car-karachi-1024x768.jpeg')
// newImg.setAttribute("class", "image")
// newDiv.appendChild(newImg)


// newDiv.removeChild(pElement)

// const newKey = "ABC"
// const userKey = "myName"

// const name = "Fareed"
// const myObj = {
//     name: "Abdullah",
//     surname: "Motiwala",
// getDate: () => {
//     console.log(new Date())
// }
// }
// const name = myObj.name
// const surname = myObj.surname
// const { name, surname } = myObj
// console.log(name, "|", surname);

// const myNewObj = {
//     ...myObj,
//     fname:"Fnaem"
// name: myObj.name,
// surname: myObj.surname,
// fName: "Fname"
// }
// console.log(myNewObj)
// const newObj = { a: myObj }
// console.log(newObj, "===newObj")
// delete myObj.name
// myObj.userKey = "456"
// myObj[userKey] = "789"
// console.log(myObj["name"]);
// console.log(myObj.name);

// myObj.name = "New Name"
// myObj["surname"] = "New SurName"

// myObj.fName = "New FName"
// myObj["MName"] = "New MName"

// myObj.surname = 'N/A'
// myObj[newKey] = "123"
// myObj.newKey = newKey
// console.log(myObj[newKey])

// console.log(myObj, "===my");


// console.log(myObj.name)
// console.log(myObj.getDate())
// console.log(myObj);

// const userKey = prompt("Enter Your desire key")
// const keyValue = prompt("Enter your value")

// const user = { name: "Uzair", fname: "Farooq" }
// const student = { name: user.name, fname: user.fname, rollNo: 59868 }
// const instructor = { name: "Ahmed", ...user, timings: "6-9", }
// delete instructor.fname
// user[userKey] = keyValue
// keyoverriding

// const fname = user.fname
// const name = user.name
// const { fname, name } = user

// console.log(student, instructor, "===user");

function student(name, rollNo) {
    const student = { name, rollNo: 123 }
    return "abc"
}

const a = student()
// function greet() {
//     console.log("Hello" + " " + this.name)
// }
// function Student(name, rollNo) {
//     this.name = name
//     this.rollNo = rollNo
//     this.greet = greet
// }
// Student.prototype.greet = function () {
//     console.log("Hello" + " " + this.name)
// }

// const student1 = new Student("abc", "123")
// const student2 = new Student("abc", "123")

// console.log(student1);
// console.log(student2);

// console.log(location.href)
// console.log(location.hostname, "===hostname");
// console.log(location.pathname);
// console.log(location.hash, "===hash");
// location.reload()



// location.href = "https://google.com"

// try {
//     console.log("run before")
//     console.log(a);
//     console.log("run")
//     // extra
// } catch (err) {
//     alert("Something went wrong")
//     console.warn(err, "===err")
// }
// console.log("b")
throw new Error("This is my error")

// const cardDetail = {
//     title: "Hi", 
//     description: "ome quick example text to build on the card title and make up the bulk of the card's content.", 
//     btnDes: "Go somewhere", 
//     btnLink: "https://google.com", 
//     img:"https://img.png"
// }
// // CARD CRATE
// const mainDiv = document.createElement("div")
// const textNode = document.createTextNode(cardDetail.title)
// mainDiv.appendChild(textNode)

// document.appendChild(mainDiv)
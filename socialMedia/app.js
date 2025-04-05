const mainWrapper = document.getElementById("main-wrapper")

const postForm = document.getElementById("post")

async function fetchPostData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    for (const element of data) {
        // console.log(element)
        createCard(element.title, element.body)
    }


}
fetchPostData()
function createCard(title, body) {
    const cardUI =
        `<div class="card">
    <p>${title}</p>
    <p>${body}</p>
    </div>`

    mainWrapper.innerHTML += cardUI
}

async function submitPost(event) {
    event.preventDefault()

    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;
    const userId = document.getElementById('userId').value;
    const payload = { title, body, userId }
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })

    const data = await response.json()

    console.log(data, "submit")
}
postForm.addEventListener('submit', submitPost)


database = {
    user: [
        { _id: "kaj", name: "Farooq" }, //document
        { _id: "rY1", name: "Ahsan" }] //collection,

} //database
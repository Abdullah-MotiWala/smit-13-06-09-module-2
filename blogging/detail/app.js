import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getFirestore, collection, getDoc, doc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAFQI8gL7G3rC1ZKJCtep1Owd6uwLUiAso",
    authDomain: "smit-13-test.firebaseapp.com",
    projectId: "smit-13-test",
    storageBucket: "smit-13-test.firebasestorage.app",
    messagingSenderId: "833923891649",
    appId: "1:833923891649:web:a8717788e7172a18ccaf40"
};

const blog = document.getElementById("blog")

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const blogCollectionRef = collection(db, "blogs")

const fetchData = async () => {
    try {
        const id = getID()
        const docRef = doc(blogCollectionRef, id)
        const data = await getDoc(docRef)
        return data.data()
    }
    catch (e) {
        alert("Internal Server Error")
        console.log(e)
    }
}
function getID() {
    const url = location.href
    const urlAndId = url.split("#")
    const [_, id] = urlAndId
    return id
}
function createCard(cardDetail) {
    const { imgLink, title, description, author, publishedAt } = cardDetail
    const card = `<div class="card">
    <img src=${imgLink}/>
    <h2>${title}</h2>
    <p>${description}</p>
    <h5>${author}</h5>
    <span>${new Date(publishedAt).toLocaleString()}</span>
    </div>`
    return card
}
async function showData() {
    const data = await fetchData()
    const card = createCard(data)
    blog.innerHTML = card
}

showData()
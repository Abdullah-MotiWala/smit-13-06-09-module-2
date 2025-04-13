import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

const blog = document.getElementById("blog")
const firebaseConfig = {
    apiKey: "AIzaSyAFQI8gL7G3rC1ZKJCtep1Owd6uwLUiAso",
    authDomain: "smit-13-test.firebaseapp.com",
    projectId: "smit-13-test",
    storageBucket: "smit-13-test.firebasestorage.app",
    messagingSenderId: "833923891649",
    appId: "1:833923891649:web:a8717788e7172a18ccaf40"
};

const app = initializeApp(firebaseConfig);
const dbRef = getFirestore(app)
const blogCollectionRef = collection(dbRef, "blogs")

const fetchData = async () => {
    try {
        const data = await getDocs(blogCollectionRef)
        return data
    }
    catch (e) {
        console.log(e)
    }
}
function createCard(cardDetail, id) {
    const { imgLink, title, description, author, publishedAt } = cardDetail
    const descriptionLimit = 50
    const card = `<div class="card">
    <img src=${imgLink}/>
    <h2>${title}</h2>
    <p>${description.slice(0, descriptionLimit)}...</p>
    <h5>${author}</h5>
    <span>${new Date(publishedAt).toLocaleString()}</span>
    <a href="detail#${id}">Read More</a>
    </div>`
    return card
}
async function showData() {
    const data = await fetchData()
    data.forEach(doc => {
        const parsedData = doc.data()
        const card = createCard(parsedData, doc.id)
        blog.innerHTML += card
    })
}

showData()



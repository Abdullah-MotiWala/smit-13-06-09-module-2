import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";
import {
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

//#1 blog and save button
const saveDataBtn = document.getElementById("save-data");
const blog = document.getElementById("blog");
const getImageButton = document.getElementById("get-image");
const fileInput = document.getElementById("file");

let authorId = "";
let thumbnailImage = null;
let editFlag = false;

//#2 configs and references
const firebaseConfig = {
  apiKey: "AIzaSyAFQI8gL7G3rC1ZKJCtep1Owd6uwLUiAso",
  authDomain: "smit-13-test.firebaseapp.com",
  projectId: "smit-13-test",
  storageBucket: "smit-13-test.firebasestorage.app",
  messagingSenderId: "833923891649",
  appId: "1:833923891649:web:a8717788e7172a18ccaf40",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const blogCollectionRef = collection(db, "blogs");
let activeBlog = null;
// Save Data
const saveData = async () => {
  // add logic
  if (!editFlag) {
    // add hnga data
    const title = document.querySelector("#title").value;
    const description = document.querySelector("#description").value;
    const author = document.querySelector("#author").value;
    const currentDate = new Date();
    const payload = {
      title,
      description,
      author,
      authorId,
      thumbnailImage,
      publishedAt: currentDate.toISOString(),
    };
    await addDoc(blogCollectionRef, payload);
    await showData();
  }

  // update logic
  if (editFlag) {
    const docRef = doc(blogCollectionRef, activeBlog);
    // update hnga data
    const title = document.querySelector("#title").value;
    const description = document.querySelector("#description").value;
    const author = document.querySelector("#author").value;
    const currentDate = new Date();
    const payload = {
      title,
      description,
      author,
      authorId,
      thumbnailImage,
      updatedAt: currentDate.toISOString(),
    };
    await updateDoc(docRef, payload);
    await showData();
  }

  editFlag = false;
};
saveDataBtn.addEventListener("click", saveData);

// Fetch and Show data
const fetchData = async () => {
  try {
    const queryRef = query(
      blogCollectionRef,
      where("authorId", "==", authorId)
    );

    const data = await getDocs(queryRef);
    return data;
  } catch (e) {
    console.log(e);
  }
};
function createCard(cardDetail, imgUrl, id) {
  const { title, description, author, publishedAt } = cardDetail;
  const descriptionLimit = 50;
  console.log(imgUrl, "===imgURL");
  const card = `<div class="card">
    <img src="${imgUrl}" />
    <h2>${title}</h2>
    <p>${description.slice(0, descriptionLimit)}...</p>
    <h5>${author}</h5>
    <span>${new Date(publishedAt).toLocaleString()}</span>
    <a href="/blogging/detail#${id}">Read More</a>
    <button onclick='onDelete("${id}")'>Delete</button>
    <button onclick='onUpdate("${id}")'>Edit</button>
    </div>`;
  return card;
}
async function showData() {
  blog.innerHTML = "";
  const data = await fetchData();
  data.forEach((doc) => {
    const parsedData = doc.data();
    const imgURL = onGetImage(parsedData.thumbnailImage);
    const card = createCard(parsedData, imgURL, doc.id);
    // if(parsedData.authorId === authorId){
    blog.innerHTML += card;
    // }
  });
}

// Delete Data
const deleteBlog = async (id) => {
  try {
    const confirmationRes = confirm("Are You Sure, You want to delete.");
    if (!confirmationRes) return;
    // if (confirmationRes) {
    const docRef = doc(blogCollectionRef, id);
    // await deleteDoc(docRef)
    // updateDoc({isDeleted:true})
    alert("Deleted Successfully");
    await showData();
    // }
  } catch (e) {
    alert("Internal Server Error");
    console.log(e);
  }
};
window.onDelete = deleteBlog;

// Update Data
const updateBlog = async (id) => {
  editFlag = true;
  activeBlog = id;
};
window.onUpdate = updateBlog;

const auth = getAuth(app);
onAuthStateChanged(auth, (user) => {
  // user = {} // login
  // user = null //logout
  if (user) {
    authorId = user.uid;
    showData();
  } else {
    authorId = "";
    location.href = "/blogging/auth/sign-in.html";
  }
});

const URL = "https://zagvctmmngsowcqyhbin.supabase.co";
const ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InphZ3ZjdG1tbmdzb3djcXloYmluIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ1NTUyMDEsImV4cCI6MjA2MDEzMTIwMX0.jLUeVNn2WkqmgzwjDWLXNzzycYqSp-1nQusFaLGlHas";

const sbClient = supabase.createClient(URL, ANON_KEY);

async function onFileChange(e) {
  const file = e.target.files[0];
  const { name: fileName } = file;
  const randomNumber = Math.random();
  const timeStamp = new Date().getTime();

  const newFileName = `${randomNumber}-${timeStamp}-${fileName}`;
  const res = await sbClient.storage
    .from("users")
    .upload(`public/${newFileName}`, file);

  thumbnailImage = res.data.fullPath;
}

function onGetImage(filePath) {
  // const { data } = sbClient.storage
  //   .from("users")
  //   .getPublicUrl("public/abc.png");
  if (!filePath) return "";
  const imageUrl = `${URL}/storage/v1/object/public/${filePath}`;
  return imageUrl;
}

fileInput.addEventListener("change", onFileChange);

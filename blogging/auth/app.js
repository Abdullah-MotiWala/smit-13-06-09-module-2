import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAFQI8gL7G3rC1ZKJCtep1Owd6uwLUiAso",
  authDomain: "smit-13-test.firebaseapp.com",
  projectId: "smit-13-test",
  storageBucket: "smit-13-test.firebasestorage.app",
  messagingSenderId: "833923891649",
  appId: "1:833923891649:web:a8717788e7172a18ccaf40",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

async function onSignup(e) {
  try {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const res = await createUserWithEmailAndPassword(auth, email, password);
    alert("Signup Successfully");
    location.href = "/blogging/editor";
  } catch (e) {
    alert("Internal Server Error");
    console.log(e);
  }
}

async function onSignin(e) {
  try {
    e.preventDefault();
    const email = document.getElementById("signin-email").value;
    const password = document.getElementById("signin-password").value;
    const res = await signInWithEmailAndPassword(auth, email, password);
    console.log(res);
    alert("Signin Successfully");
    location.href = "/blogging/editor";
  } catch (e) {
    alert("Internal Server Error");
    console.log(e);
  }
}

const signupButton = document.getElementById("signup-btn");
signupButton?.addEventListener("click", onSignup);

const signinButton = document.getElementById("signin-btn");
signinButton?.addEventListener("click", onSignin);

onAuthStateChanged(auth, (user) => {
  if (user) {
    location.href = "/blogging/editor";
  }
});

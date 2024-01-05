// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getDatabase, set, ref, } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBDnUimbKjvzGZHLYdp6o7eCl-dH5TS0n8",
    authDomain: "loginauth-addcb.firebaseapp.com",
    databaseURL: "https://loginauth-addcb-default-rtdb.firebaseio.com",
    projectId: "loginauth-addcb",
    storageBucket: "loginauth-addcb.appspot.com",
    messagingSenderId: "456154460225",
    appId: "1:456154460225:web:c0a9a4c2893258f87056c0",
    measurementId: "G-X43DWGEE00"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const auth = getAuth();


signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        update(ref(database, 'users/' + user.uid), {
            username: userName,
            email: email,
            lastLoginAt: new Date().toString(),
        });
        /*document.getElementById("username").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";*/

        console.log("user logged in");
        alert("User Logged in Successfully");
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            //console.log(uid);
            document.getElementById("signup").style.display = "none";
            document.getElementById("login").style.display = "none";
            document.getElementById("logout").style.display = "block";
            document.title = "Welcome " + userName;
        }
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        console.log(errorCode);
        alert(errorMessage);
    });
    })

logout.addEventListener('click', (e) => {
    const auth = getAuth();
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log("user logged out");
        document.getElementById("signup").style.display = "block";
        document.getElementById("login").style.display = "block";
        document.getElementById("logout").style.display = "none";
        document.title = "Login Page";
    }).catch((error) => {
        // An error happened.
        console.log(error);
    });
})
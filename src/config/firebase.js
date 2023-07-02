import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, updateCurrentUser, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC-02fPqIgbm07XOimD4E_pP2879f2Wr5o",
    authDomain: "my-web-page-c4e14.firebaseapp.com",
    projectId: "my-web-page-c4e14",
    storageBucket: "my-web-page-c4e14.appspot.com",
    messagingSenderId: "889738391664",
    appId: "1:889738391664:web:c84e045a2696e28c5644b5",
    measurementId: "G-N385H17JLE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export const signUp = async (name, email, password) => {
    await createUserWithEmailAndPassword(auth, email, password)
    // await updateCurrentUser(auth, {
    //     displayName: name
    // })
}

// export const signUp = (name, email, password) => {
//     createUserWithEmailAndPassword(auth, email, password)
//         .then((e) => {
//             const user = e.user;
//             console.log("Ve işlem başarılı");
//             console.log(user)
//         })
//         .catch((err) => {
//             console.log(err.code)
//             console.log(err.message)
//         })
// }

export const Login = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
}

// export const Login = (email, password) => {
//     signInWithEmailAndPassword(auth,email,password)
//     .then((e) => {
//         console.log("login başarılı")
//         console.log(e.user)
//     })
//     .catch((err) =>{
//         console.log(err.code)
//         console.log(err.message)
//     })
// }
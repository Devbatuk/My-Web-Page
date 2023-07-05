import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, updateCurrentUser, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-hot-toast";
import { setUser } from "../stores/auth";
import { useDispatch } from "react-redux";

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

//Burda kullanıcı kayıdı yaptım
export const signUp = async (name, email, password) => {
    await createUserWithEmailAndPassword(auth, email, password)
}

export const Login = async (email, password) => {
    try {
        const response = await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        toast.error(err.message)
    }
}
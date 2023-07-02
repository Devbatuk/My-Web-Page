import { signUp } from "../config/firebase"
import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {

    const [Name, setName] = useState();
    const [Email, setEmail] = useState();
    const [Password, setPassword] = useState();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("osuruk")

        signUp(Name, Email, Password)
        .then(() => {
            console.log("Kayıt başarılı");
            navigate("/anasayfa")
        })
        .catch(() => { navigate("/signup") })

        console.log("geğirğik")

        // try {
        //     await signUp(Name, Email, Password)
        //     console.log("zoooort")
        // } catch (err) {
        //     throw err;
        // }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="İsim" onChange={(e) => { setName(e.target.value) }} />
                <input type="email" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} />
                <input type="password" placeholder="Şifre" onChange={(e) => { setPassword(e.target.value) }} />
                <button type="submit">Kayıt ol</button>
            </form>
            <p>
                Hesabın var mı? <Link to="/login">Giriş yap</Link>
            </p>
        </>
    )
}
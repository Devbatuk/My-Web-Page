import { Login } from "../config/firebase";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LoginF() {

    const [Email, setEmail] = useState();
    const [Password, setPassword] = useState();

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        Login(Email,Password).then(() => {
            console.log("Giriş başarılı")
            navigate("/anasayfa")
            localStorage.setItem("user",true)
        }).catch(() => {navigate("/login")})
    }

    // const handleSubmit = async () => {
    //     await Login(Email, Password)
    //     console.log("giriş başarılı")
    //     navigate("/anasayfa")
    // }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} />
                <input type="password" placeholder="Şifre" onChange={(e) => { setPassword(e.target.value) }} />
                <button type="submit">Giriş yap</button>
            </form>
            <p>
                Hesabın yok mu? <Link to="/signup">Hesap oluştur</Link>
            </p>
        </>
    )
}
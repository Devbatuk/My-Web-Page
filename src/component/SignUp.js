import { signUp } from "../config/firebase"
import { useState, useEffect, useContext } from "react"
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../context/SiteContext";

export default function SignUp() {

    const [Name, setName] = useState();
    const [Email, setEmail] = useState();
    const [Password, setPassword] = useState();

    const {User, setUser} = useContext(Context);
    
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        signUp(Name, Email, Password)
        .then(() => {
            console.log("Kayıt başarılı");
            setUser(true)
            navigate("/anasayfa")
        })
        .catch(() => { navigate("/signup") })
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
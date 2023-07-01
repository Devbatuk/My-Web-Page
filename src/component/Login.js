import { Login } from "../config/firebase";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginF(){

    const [Email,setEmail] = useState();
    const [Password,setPassword] = useState();

    const handleSubmit = (e) => {
        e.preventdefault()
        Login(Email,Password).then(() => {
            console.log("Giriş başarılı")
        }).catch((err) => {console.log(err)})
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" onChange={(e) => {setEmail(e.target.value)}}/>
                <input type="password" placeholder="Şifre" onChange={(e) => {setPassword(e.target.value)}}/>
                <button type="submit">Giriş yap</button>
            </form>
            <p>
                Hesabın yok mu? <Link to="/signup">Hesap oluştur</Link>
            </p>
        </>
    )
}
import { signUp } from "../config/firebase"
import { useState,useEffect } from "react"
import { Link } from "react-router-dom";

export default function SignUp(){

    const [Name,setName] = useState();
    const [Email,setEmail] = useState();
    const [Password,setPassword] = useState();

    const handleSubmit = (e) => {
        e.preventdefault()
        signUp(Name,Email,Password).then(() => {
            console.log("Kayıt başarılı");
        }).catch((err) => {console.log(err)})
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="İsim" onChange={(e) => {setName(e.target.value)}}/>
                <input type="email" placeholder="Email" onChange={(e) => {setEmail(e.target.value)}}/>
                <input type="password" placeholder="Şifre" onChange={(e) => {setPassword(e.target.value)}}/>
                <button type="submit">Kayıt ol</button>
            </form>
            <p>
                Hesabın var mı? <Link to="/login">Giriş yap</Link>
            </p>
        </>
    )
}
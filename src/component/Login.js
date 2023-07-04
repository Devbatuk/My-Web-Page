import { Login } from "../config/firebase";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Toast, toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { setUser } from "../stores/auth";
import { useDispatch } from "react-redux";

export default function LoginF() {

    const [Email, setEmail] = useState();
    const [Password, setPassword] = useState();

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const { user } = useSelector(state => state.auth);

    useEffect(() => {
        if (user) {
            console.log("redux başarılı (anasayfa)")
            navigate("/anasayfa")
        }
    })

    const handleSubmit = async (e) => {

        await e.preventDefault()

        await Login(Email, Password)
        dispatch(setUser(true))

        // .then(() => {
        //     console.log("Giriş başarılı")
        //     navigate("/anasayfa")
        // })
        // .catch((err) => {
        //     toast.error(err.code, err.message)
        // })
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
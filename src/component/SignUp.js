import { signUp } from "../config/firebase"
import { useState, useEffect, useContext } from "react"
import { Link, useNavigate } from "react-router-dom";
import { setUser } from "../stores/auth";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";

export default function SignUp() {

    console.log("signup a yönlendirme başarılı")

    const [Name, setName] = useState();
    const [Email, setEmail] = useState();
    const [Password, setPassword] = useState();

    const dispatch = useDispatch()

    const navigate = useNavigate();

    const { user } = useSelector(state => state.auth);

    useEffect(() => {
        if (user) {
            console.log("signup mesajı")
            navigate("/anasayfa")
        }
    })

    const handleSubmit = async (e) => {
        e.preventDefault();

        signUp(Name, Email, Password)
            .then(() => {
                console.log("Kayıt başarılı");
                dispatch(setUser(true))
                navigate("/anasayfa")
            })
            .catch((err) => {
                toast.error(err.code, err.message)
            })
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
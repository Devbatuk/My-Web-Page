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

    const navigate = useNavigate();

    const dispatch = useDispatch()

    const { user } = useSelector(state => state.auth);

    useEffect(() => {
        if (user) {
            console.log("signup mesajı")
            navigate("/anasayfa")
        }
    })

    const handleSubmit = async (e) => {

        try {
            e.preventDefault()

            await signUp(Name,Email, Password)
        } catch (err) {
            toast.error(err.message)
        }

        // e.preventDefault();

        // await signUp(Name, Email, Password)

        // .then(() => {
        //     console.log("Kayıt başarılı");
        //     dispatch(setUser(true))
        //     navigate("/anasayfa")
        // })
        // .catch((err) => {
        //     toast.error(err.code, err.message)
        // })
    }

    return (
        <div className="signup-container">
            <div className="text">Batuhan Kurtul</div>
            <form onSubmit={handleSubmit} className="signup-form">
                <p>Kayıt ol</p>
                <input type="text" placeholder="İsim" onChange={(e) => { setName(e.target.value) }} />
                <input type="email" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} />
                <input type="password" placeholder="Şifre" onChange={(e) => { setPassword(e.target.value) }} />
                <button type="submit" className="btn">Kayıt ol</button>
            </form>
            <p>
                Hesabın var mı? <Link to="/login">Giriş yap</Link>
            </p>
        </div>
    )
}
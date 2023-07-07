import profileFoto from "../assets/googleprofilfoto.jpg";
import { Link } from "react-router-dom";
import { setTheme } from "../stores/theme";
import { useSelector, useDispatch } from "react-redux";

export default function Header() {

    const dispatch = useDispatch()

    const { theme } = useSelector(state => state.theme);

    const TemaAyarla = () => {
        if (theme == "dark") {
            dispatch(setTheme("light"))
            console.log("Temanın şuan light olması lazım")
        } else {
            dispatch(setTheme("dark"))
            console.log("Temanın şuan dark olması lazım")
        }
    }

    return (
        <div className={theme == "dark" ? "headerDark" : "header"}>
            <img src={profileFoto} alt="resim bulunamadı" />
            <ul>
                <li>
                    <Link to="/anasayfa" className="link">
                        Anasayfa
                    </Link>
                </li>
                <li>
                    <Link to="/okul" className="link">
                        Okul
                    </Link>
                </li>
            </ul>
            <button className="temaButton" onClick={TemaAyarla}>
                {theme == "dark" ? "Açık" : "Koyu"}
            </button>
        </div>
    )
}
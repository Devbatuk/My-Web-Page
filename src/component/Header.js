import profileFoto from "../assets/googleprofilfoto.jpg";
import { Link } from "react-router-dom";
import { setTheme } from "../stores/theme";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

export default function Header() {

    const dispatch = useDispatch()

    const { theme } = useSelector(state => state.theme);

    useEffect(() => {
        if(theme == "dark"){
            document.body.style.backgroundColor = "#111827";
        }
    })

    const TemaAyarla = () => {
        if (theme == "dark") {
            dispatch(setTheme("light"))
            console.log("Temanın şuan light olması lazım")
            document.body.style.backgroundColor = "white";
        } else {
            dispatch(setTheme("dark"))
            console.log("Temanın şuan dark olması lazım")
            document.body.style.backgroundColor = "#111827";
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
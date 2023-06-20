import profileFoto from "../assets/googleprofilfoto.jpg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context/SiteContext.js"

export default function Header() {

    const { Tema, setTema } = useContext(Context);

    const TemaAyarla = () => {
        if (Tema == "dark") {
            setTema("light");
            localStorage.setItem("siteTema","light");
        } else {
            setTema("dark");
            localStorage.setItem("siteTema","dark");
        }
    }

    if (localStorage.getItem("siteTema") == "light") {
        document.body.style.backgroundColor = "#111827";
    }

    return (
        <div className={localStorage.getItem("siteTema") == "dark" ? "header" : "headerDark"}>
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

            <div className="temaButton" onClick={TemaAyarla}>
                {localStorage.getItem("siteTema") == "dark" ? "Koyu" : "Açık"}
            </div>
        </div>
    )
}
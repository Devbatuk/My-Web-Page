import profileFoto from "../assets/googleprofilfoto.jpg";
import { Link } from "react-router-dom";
import { useContext, useEffect, useRef } from "react";
import { Context } from "../context/SiteContext.js";

export default function Header() {

    const { Tema, setTema } = useContext(Context);

    const temaKontrolRef = useRef();

    useEffect(() => {
        
        if (temaKontrolRef.current.innerHTML == "Açık") {
            setTema("light");
        }

    })

    const TemaAyarla = () => {

        // localStorage.setItem("siteTema", null)
        // console.log(Tema,localStorage.getItem("siteTema"));
        // console.log(Tema);

        if (Tema == "dark") {
            setTema("light");
            localStorage.setItem("siteTema", "light");
            console.log("Tema butonu çalıştı (Dark)")
        } else if (Tema == "light") {
            setTema("dark");
            localStorage.setItem("siteTema", "dark");
            console.log("Tema butonu çalıştı (Light)")
        }
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
            <button ref={temaKontrolRef} className="temaButton" onClick={TemaAyarla}>
                {localStorage.getItem("siteTema") == "dark" ? "Koyu" : "Açık"}
            </button>
        </div>
    )
}
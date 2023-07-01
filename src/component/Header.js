import profileFoto from "../assets/googleprofilfoto.jpg";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { Context } from "../context/SiteContext.js"

export default function Header() {

    const { Tema, setTema } = useContext(Context);

    // const broadcast = new BroadcastChannel("aktarmaYolu");

    // broadcast.addEventListener("message", (e) => {
    //     switch (e.data) {
    //         case "tema:dark":
    //             console.log("Tema light")
    //             return
    //         case "tema:light":
    //             console.log("Tema dark")
    //             return
    //     }
    // })

    const TemaAyarla = () => {
        if (Tema == "dark") {
            setTema("light");
            localStorage.setItem("siteTema", "light");
            // broadcast.postMessage("tema:light");
        } else {
            setTema("dark");
            localStorage.setItem("siteTema", "dark");
            // broadcast.postMessage("tema:dark");
        }
    }

    // if (localStorage.getItem("siteTema") == "light") {
    //     document.body.style.backgroundColor = "#111827";
    // }

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
            <button className="temaButton" onClick={TemaAyarla}>
                {localStorage.getItem("siteTema") == "dark" ? "Koyu" : "Açık"}
            </button>
        </div>
    )
}
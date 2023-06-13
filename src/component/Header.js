import profileFoto from "../assets/googleprofilfoto.jpg";
import { NavLink, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import SiteContext,{Context} from "../context/SiteContext.js"

export default function Header() {

    const {Tema,setTema} = useContext(Context);

    const TemaAyarla = () =>{
        if(Tema == "dark"){
            setTema("light");
        } else{
            setTema("dark");
        }
    }

    return (
        <div className={Tema == "dark" ? "header" : "headerDark"}>
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
                {Tema == "dark" ? "Koyu" : "Açık"}
            </div>
        </div>
    )
}
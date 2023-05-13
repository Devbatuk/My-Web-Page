import profileFoto from "../assets/googleprofilfoto.jpg";
import { NavLink, Routes, Route, Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="header">
            <img src={profileFoto} alt="resim bulunamadı" />
            <ul>
                {/* <li>
                    <NavLink to="/anasayfa" className="link">
                        Anasayfa
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/okul" className="link" id={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }>
                        Okul
                    </NavLink>
                </li> */}

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
        </div>
    )
}
import Header from "../component/Header"
import MainContent from "../component/MainContent"
import Footer from "../component/Footer"
import SiteContext from "../context/SiteContext.js"
import { useNavigate } from "react-router-dom"
import { useEffect, useContext } from "react"
import { sendSignInLinkToEmail } from "firebase/auth"
import { Context } from "../context/SiteContext";

export default function Anasayfa() {

    const { User, setUser } = useContext(Context);

    const navigate = useNavigate();

    console.log("dnemememmemeem: " + localStorage.getItem("user"))
    useEffect(() => {
        if (User == false) {
            console.log("deneme")
            navigate("/")
        }
    })

    return (
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    )
}
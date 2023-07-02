import Header from "../component/Header"
import OkulContent from "../component/OkulContent"
import SiteContext from "../context/SiteContext"
import Footer from "../component/Footer"
import { useEffect,useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Context } from "../context/SiteContext";

export default function Okul() {

    const {User,setUser} = useContext(Context);

    const navigate = useNavigate();

    useEffect(() => {
        if (User == false) {
            console.log("deneme")
            navigate("/")
        }
    })

    return (
        <>
            <Header />
            <OkulContent />
            <Footer />
        </>
    )
}
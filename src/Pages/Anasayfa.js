import Header from "../component/Header"
import MainContent from "../component/MainContent"
import Footer from "../component/Footer"
import { useNavigate } from "react-router-dom"
import { useEffect, useContext, useDebugValue } from "react"
import { Context } from "../context/SiteContext";
import { useDispatch, useSelector } from "react-redux"

export default function Anasayfa() {

    // const { User, setUser } = useContext(Context);

    // console.log("dnemememmemeem: " + localStorage.getItem("user"))
    // useEffect(() => {
    //     if (User == false) {
    //         console.log("deneme")
    //         navigate("/")
    //     }
    // })

    const navigate = useNavigate();

    const { user } = useSelector(state => state.auth);

    useEffect(() => {
        if (!user) {
            console.log("redux başarılı (anasayfa)")
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
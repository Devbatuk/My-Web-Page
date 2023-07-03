import Header from "../component/Header"
import OkulContent from "../component/OkulContent"
import SiteContext from "../context/SiteContext"
import Footer from "../component/Footer"
import { useEffect,useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Context } from "../context/SiteContext";
import { useDispatch, useSelector } from "react-redux"

export default function Okul() {

    // const {User,setUser} = useContext(Context);

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
            console.log("redux başarılı (okul)")
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
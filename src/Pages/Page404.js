import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function Page404() {

    const navigate = useNavigate();

    const { user } = useSelector(state => state.auth);

    useEffect(() => {
        if (user) {
            console.log("redux başarılı (anasayfa)")
            navigate("/anasayfa")
        } else{
            navigate("/")
        }
    })

}
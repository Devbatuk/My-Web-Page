import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function WelcomePage() {

    const navigate = useNavigate();

    const { user } = useSelector(state => state.auth);

    useEffect(() => {
        if (user) {
            navigate("/anasayfa")
        } else {
            navigate("/signup")
        }
    })

    return(
        <Outlet/>
    )

    // return (
    //     <>
    //         <div>katman</div>
    //         <Link to="/signup">Kayıt ol</Link>
    //     </>
    // )
}
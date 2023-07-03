import { Link, Outlet, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function WelcomePage() {

    const navigate = useNavigate();

    const { user } = useSelector(state => state.auth);

    useEffect(() => {
        if (user) {
            console.log("redux başarılı (anasayfa)")
            navigate("/anasayfa")
        }
    })

    return (
        <>
            KATMAN
            <Link to="/signup">
                KAYIT OL
            </Link>
            <Outlet />
        </>
    )
}
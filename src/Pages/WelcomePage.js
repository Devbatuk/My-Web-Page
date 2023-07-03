import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux";
import { useEffect } from "react";

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
}
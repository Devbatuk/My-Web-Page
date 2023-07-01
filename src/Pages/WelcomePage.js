import { Link,Outlet } from "react-router-dom"
import SignUp from "../component/SignUp"

export default function WelcomePage() {

    return (
        <>
            KATMAN
            <Link to="/signup">
                KAYIT OL
            </Link>
            <Outlet/>
            {/* <SignUp/> */}
        </>
    )
}
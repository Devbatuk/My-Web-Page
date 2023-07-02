import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Okul from "./Pages/Okul";
import Anasayfa from "./Pages/Anasayfa";
import Page404 from "./Pages/Page404";
import WelcomePage from "./Pages/WelcomePage";
import Login from "./component/Login";
import SignUp from "./component/SignUp";
import { signUp } from "./config/firebase";
import { useEffect } from "react";


function App() {

  const location = useLocation()
  localStorage.setItem("location", location.pathname)

  return (
    <>
      <Routes>
        <Route path="*" element={<Page404 />} />
        <Route path="/" element={<WelcomePage />}>
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="/anasayfa" element={<Anasayfa />} />
        <Route path="/okul" element={<Okul />} />
      </Routes>
    </>
  );
}

export default App;
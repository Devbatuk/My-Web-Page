import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Okul from "./Pages/Okul";
import Anasayfa from "./Pages/Anasayfa";
import Page404 from "./Pages/Page404";
import WelcomePage from "./Pages/WelcomePage";
import Login from "./component/Login";
import SignUp from "./component/SignUp";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";


function App() {

  const location = useLocation()
  localStorage.setItem("location", location.pathname)

  return (
    <>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<WelcomePage />}>
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="*" element={<Page404 />} />
        <Route path="/anasayfa" element={<Anasayfa />} />
        <Route path="/okul" element={<Okul />} />
      </Routes>
    </>
  );
}

export default App;
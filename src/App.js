import { Routes, Route, Navigate, useLocation, Link} from "react-router-dom";
import { useRef, useState } from "react";
import Okul from "./Pages/Okul";
import Anasayfa from "./Pages/Anasayfa";
import Page404 from "./Pages/Page404";

function App() {

  const location = useLocation();
  localStorage.setItem("location",location.pathname);

  // if(location.pathname != "/anasayfa"){
  //   console.log("deneme baladad");
  //   <Navigate to="/anasayfa"/>
  // }

  return (
    <>
      {window.onload = () =>{
        <Navigate to={localStorage.getItem("location")}/>
      }}
      <Routes>
        <Route path="*" element={<Page404 />} />
        <Route path="/" element={<Anasayfa />} />
        <Route index={true} path="/anasayfa" element={<Anasayfa />} />
        <Route path="/okul" element={<Okul />} />
      </Routes>
    </>
  );
}

export default App;
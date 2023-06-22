import { Routes, Route, Navigate, useLocation, Link } from "react-router-dom";
import { useRef, useState } from "react";
import Okul from "./Pages/Okul";
import Anasayfa from "./Pages/Anasayfa";
import Page404 from "./Pages/Page404";

function App() {

  const location = useLocation();
  localStorage.setItem("location", location.pathname);

  const mevcutLokasyon = localStorage.getItem("location");

  // document.getElementById("root").onload = () => {
  //   console.log("deneme App");
  //   <Navigate to={mevcutLokasyon} />
  // }

  const anasayfa = "/anasayfa";

  console.log(mevcutLokasyon)

  const deneme = () => {
    document.body.onload = () => {
      if (mevcutLokasyon != "/anasayfa") {
        <Navigate to={anasayfa} />
        console.log("app kımı çalıştı.")
      } else {
        console.log("app else kısmı çalıştı.")
      }
    }
  }

  return (
    <>
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
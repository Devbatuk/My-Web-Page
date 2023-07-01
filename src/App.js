import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Okul from "./Pages/Okul";
import Anasayfa from "./Pages/Anasayfa";
import Page404 from "./Pages/Page404";

function App() {

  const location = useLocation();
  localStorage.setItem("location", location.pathname);
  // const mevcutLokasyon = localStorage.getItem("location");

  // console.log(mevcutLokasyon);

  useEffect(() => {
    if(location.pathname != localStorage.getItem("location")){
      <Navigate to={localStorage.getItem("location")}/>
    }
  });

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
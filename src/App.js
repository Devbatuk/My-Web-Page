import { Routes, Route } from "react-router-dom";
import Okul from "./Pages/Okul";
import Anasayfa from "./Pages/Anasayfa";
import Page404 from "./Pages/Page404";
import Provider from "./context/SiteContext";
import Header from "./component/Header";
import MainContent from "./component/MainContent";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Page404/>}/>
        <Route path="/" element={<Anasayfa />} />
        <Route index={true} path="/anasayfa" element={<Anasayfa />} />
        <Route path="/okul" element={<Okul />} />
      </Routes>
    </>
  );
}

export default App;
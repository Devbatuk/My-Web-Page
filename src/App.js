import { Routes, Route} from "react-router-dom";
import Okul from "./Pages/Okul";
import Anasayfa from "./Pages/Anasayfa";
import Page404 from "./Pages/Page404";

function App() {

  return (
    <>
      <Routes>
        <Route path="*" element={<Page404 />} />
        <Route path="/" element={<Anasayfa />} />
        <Route path="/anasayfa" element={<Anasayfa />} />
        <Route path="/okul" element={<Okul />} />
      </Routes>
    </>
  );
}

export default App;
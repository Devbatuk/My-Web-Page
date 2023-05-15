import { Routes, Route } from "react-router-dom";
import Okul from "./Pages/Okul";
import Anasayfa from "./Pages/Anasayfa";
import IndexSayfası from "./Pages/IndexSayfası";

function App() {
  return (
    <>
      {/* <div className="App">
        <Header />
        <MainContent />
      </div> */}

      <Routes>
        {/* <Route index element={<Anasayfa />} /> */}
        {/* <Route index element={<IndexSayfası/>}/> */}
        <Route path="/" element={<Anasayfa />} />
        <Route path="/anasayfa" element={<Anasayfa />} />
        <Route path="/okul" element={<Okul />} />
      </Routes>
    </>
  );
}

export default App;
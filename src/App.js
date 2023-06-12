import { Routes, Route } from "react-router-dom";
import Okul from "./Pages/Okul";
import Anasayfa from "./Pages/Anasayfa";
import Page404 from "./Pages/Page404";
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
        <Route path="*" element={<Page404/>}/>
        <Route path="/" element={<Anasayfa />} />
        <Route index={true} path="/anasayfa" element={<Anasayfa />} />
        <Route path="/okul" element={<Okul />} />
      </Routes>
    </>
  );
}

export default App;
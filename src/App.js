import { Routes, Route } from "react-router-dom";
import Okul from "./Pages/Okul";
import Anasayfa from "./Pages/Anasayfa";
import Page404 from "./Pages/Page404";
import WelcomePage from "./Pages/WelcomePage";
import Login from "./component/Login";
import SignUp from "./component/SignUp";
import { signUp } from "./config/firebase";


function App() {

  // signUp("mehmet","mehmet@gmail.com",123456).then(() => {console.log("kayıt olma başarılı")}).catch((err) => {console.log(err)})

  return (
    <>
      <Routes>
        <Route path="*" element={<Page404 />} />
        <Route path="/" element={<WelcomePage />}>
          <Route path="signup" element={<SignUp/>} />
          <Route path="login" element={<Login/>} />
        </Route>
        <Route path="/anasayfa" element={<Anasayfa />} />
        <Route path="/okul" element={<Okul />} />
      </Routes>
    </>
  );
}

export default App;
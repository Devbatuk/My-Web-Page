import MainFoto from "../assets/20230422_173930.jpg";
import BatuhanFoto from "../assets/BatuhanFoto (1).jpg";
import { useContext } from "react";
import SiteContext,{Context} from "../context/SiteContext.js"

export default function MainContent() {

    const {Tema,setTema} = useContext(Context);
    // console.log(localStorage.getItem("siteTema")," Bu MainContentden geliyo");

    return (
        <div className={localStorage.getItem("siteTema") == "light"?"mainDark":"main"}>
            <div className="maincontent">
                {/* <img className="batuFoto" style={{width:300 + "px",height:200 + "px"}} src={BatuhanFoto} alt="resim bulunamadı" /> */}
                <img src={BatuhanFoto} className="batuFoto"></img>

                <div className="mainContent-text">
                    <p className={localStorage.getItem("siteTema") == "light"?"textDark":"text"}>
                        Merhaba, ben Batuhan. 16 yaşındayım, Nevzat Ayaz Anadolu Lisesinde 10.sınıf öğrencisiyim. Yazılım sektörüne ilk olarak
                        2020 yılında adım attım. Yazılıma C# öğrenerek başladım daha sonrasında Cpp, Java dillerinde kısa bir tecrübem oldu. Yaklaşık bir yıl önce
                        Html öğrenerek web tarafına ilk adımımı atmış oldum. Kendimi bu dilde geliştirdikten sonra Css ve Javascripte de gelişmeye ve yeni şeyler
                        öğrenip projeler geliştirmeye devam ettim, o günden bu yana da kendimi eğitmeye ve yeni şeyler öğrenmeye devam ediyorum.
                    </p>
                </div>
            </div>
        </div>
    )
}
import BatuhanFoto from "../assets/BatuhanFoto (1).jpg";
import { useSelector } from "react-redux";

export default function MainContent() {

    const { theme } = useSelector(state => state.theme)

    return (
        <div className={theme == "dark" ? "mainDark" : "main"}>
            <div className="maincontent">
                <img src={BatuhanFoto} className="batuFoto"></img>

                <div className="mainContent-text">
                    <p className={theme == "dark" ? "textDark" : "text"}>
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
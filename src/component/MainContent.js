import BatuhanFoto from "../assets/BatuhanFoto (1).jpg";
import { useSelector } from "react-redux";

export default function MainContent() {

    const { theme } = useSelector(state => state.theme)

    if(!localStorage.getItem("Foto-MainPage")){
        localStorage.setItem("Foto-MainPage",BatuhanFoto)
    }

    return (
        <div className={theme == "dark" ? "mainDark" : "main"}>
            <div className="maincontent">
                <img src={localStorage.getItem("Foto-MainPage")} className="batuFoto"></img>

                <div className="mainContent-text">
                    <p className={theme == "dark" ? "textDark" : "text"}>
                        Merhaba, ben Batuhan. 16 yaşındayım, Nevzat Ayaz Anadolu Lisesinde 10.sınıf öğrencisiyim. Yazılım sektörüne ilk olarak
                        2020 yılında adım attım. Yazılıma C# öğrenerek başladım daha sonrasında Cpp ve Java dillerinde kısa bir tecrübem oldu. Yaklaşık bir yıl önce
                        Html öğrenerek web tarafına ilk adımımı atmış oldum. Kendimi bu dilde geliştirmekle beraber CSS ve Javascripte de öğrenerek kariyerimi hızlı 
                        bir şekilde geliştiriyorum.
                    </p>
                </div>
            </div>
        </div>
    )
}
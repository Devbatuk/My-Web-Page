import MainFoto from "../assets/20230422_173930.jpg";

export default function MainContent() {
    return (
        <div className="mainContent">
            <div className="mainContent-img">
                <img src={MainFoto} alt="resim bulunamadı" />
            </div>
            <div className="mainContent-text">
                Merhaba, ben Batuhan. 16 yaşındayım, Nevzat Ayaz Anadolu Lisesinde 10.sınıf öğrencisiyim. Yazılım sektörüne ilk olarak
                2020 yılında adım attım. Yazılıma C# öğrenerek başladım daha sonrasında Cpp, Java dillerinde kısa bir tecrübem oldu. Yaklaşık bir yıl önce
                Html öğrenerek web tarafına ilk adımımı atmış oldum. Kendimi bu dilde geliştirdikten sonra Css ve Javascripte de gelişmeye ve yeni şeyler
                öğrenip projeler geliştirmeye devam ettim, o günden bu yana da kendimi eğitmeye ve yeni şeyler öğrenmeye devam ediyorum.
            </div>
        </div>
    )
}
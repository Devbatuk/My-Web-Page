import { useState, useRef } from "react";
import profileFoto from "../assets/googleprofilfoto.jpg";
import BatuFoto from "../assets/BatuhanFoto (1).jpg"

export default function ImageSlider() {

    const imgref = useRef()

    const [foto, setFoto] = useState(0)
    console.log(imgref)

    const fotolar = [
        BatuFoto,
        profileFoto
    ]

    setTimeout(() => {
        if (foto < 1) {
            setFoto(foto + 1)
            imgref.current.src = fotolar[foto]
        } else {
            setFoto(0)
            imgref.current.src = fotolar[foto]
        }
    }, 2000)

    return (
        <img id="demo1" ref={imgref}></img>
    )

}
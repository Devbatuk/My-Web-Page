import { createContext,useState } from "react";

export const Context = createContext();

const Provider = ({children}) =>{

    const [Tema,setTema] = useState("dark");

    // const TemaAyarla = () =>{
    //     if(Tema == "dark"){
    //         setTema("light");
    //     } else{
    //         setTema("dark");
    //     }
    // }

    const data = {
        Tema,
        setTema
    }

    return(
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}

export default Provider
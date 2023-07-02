import { createContext,useState } from "react";

export const Context = createContext();

const Provider = ({children}) =>{

    const [Tema,setTema] = useState("dark");

    const [User,setUser] = useState(false);

    const data = {
        Tema,
        setTema,
        User,
        setUser
    }

    return(
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}

export default Provider
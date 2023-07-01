import { useState, useRef, useEffect, useContext } from "react";
import { Context } from "../context/SiteContext";

export default function OkulContent() {

    const [Todos, setTodos] = useState([]);
    const [Todo, setTodo] = useState("");

    const { Tema, setTema } = useContext(Context);

    const submitHandle = (e) => {
        e.preventDefault()
        setTodos([...Todos, Todo])
    }

    const butonRef = useRef();
    const inputRef = useRef();

    // if(Tema == "dark"){
    //     document.body.style.backgroundColor = "white";
    // } else{
    //     document.body.style.backgroundColor = "#111827";
    // }

    // document.getElementById("deneme").style.backgroundColor = "red";

    useEffect(() => {
        if (Todo == false) {
            butonRef.current.disabled = true
        } else {
            butonRef.current.disabled = false
        }
    });

    // if (Todo == false) {
    //     butonRef.current.disabled = true;
    // } else{
    //     butonRef.current.disabled = false;
    // }

    // if (localStorage.getItem("siteTema") == "light") {
    //     document.body.style.backgroundColor = "dark";
    // } else{
    //     document.body.style.backgroundColor = "light";
    // }

    return (
        <div className={localStorage.getItem("siteTema") == "light"?"okulContentDark":"okulContent"}>
            <h1 style={{marginTop:0}}>OKul Component</h1>
            <form onSubmit={submitHandle} id="deneme">
                <input ref={inputRef} type="text" value={Todo} onChange={e => setTodo(e.target.value)} />
                <button ref={butonRef} type="submit">Ekle</button>
            </form>
            <ul style={{margin:0}}>
                {Todos.map((todo, index) => (
                    <li className={localStorage.getItem("siteTema") == "light"?"todoDark":"todo"} key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
}
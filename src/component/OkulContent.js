import { useState, useRef, useEffect, useContext } from "react";
import { Context } from "../context/SiteContext";

export default function OkulContent() {

    const [Todos, setTodos] = useState([]);
    const [Todo, setTodo] = useState("ahmet");

    const { Tema, setTema } = useContext(Context);

    const submitHandle = (e) => {
        e.preventDefault()
        setTodos([...Todos, Todo])
    }

    const butonRef = useRef();
    const inputRef = useRef();

    // document.getElementById("deneme").style.backgroundColor = "red";

    useEffect(() => {
        if (Todo == false) {
            butonRef.current.disabled = true
        } else {
            butonRef.current.disabled = false
        }
    }, null);

    // if (Todo == false) {
    //     butonRef.current.disabled = true;
    // } else{
    //     butonRef.current.disabled = false;
    // }

    if (Tema == "light") {
        document.body.style.backgroundColor = "white";
    }

    return (
        <div>
            <h1>OKul Component</h1>
            <form onSubmit={submitHandle} id="deneme">
                <input ref={inputRef} type="text" value={Todo} onChange={e => setTodo(e.target.value)} />
                <button ref={butonRef} type="submit">Ekle</button>
            </form>
            <ul>
                {Todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
}
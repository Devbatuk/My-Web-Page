import { useState, useRef, useEffect } from "react";
import {  useSelector } from "react-redux";

export default function OkulContent() {

    const [Todos, setTodos] = useState([]);
    const [Todo, setTodo] = useState("");

    const { theme } = useSelector(state => state.theme)

    const submitHandle = (e) => {
        e.preventDefault()
        setTodos([...Todos, Todo])
    }

    const butonRef = useRef();
    const inputRef = useRef();

    useEffect(() => {
        if (Todo == false) {
            butonRef.current.disabled = true
        } else {
            butonRef.current.disabled = false
        }
    });

    return (
        <div className={theme == "dark" ? "okulContentDark" : "okulContent"}>
            <h1 style={{ marginTop: 0 }}>OKul Component</h1>
            <form onSubmit={submitHandle} id="deneme">
                <input ref={inputRef} type="text" value={Todo} onChange={e => setTodo(e.target.value)} />
                <button ref={butonRef} type="submit">Ekle</button>
            </form>
            <ul style={{ margin: 0 }}>
                {Todos.map((todo, index) => (
                    <li className={theme == "dark" ? "todoDark" : "todo"} key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
}
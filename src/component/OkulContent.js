import { isDisabled } from "@testing-library/user-event/dist/utils";
import { useState, useRef, useEffect } from "react";

export default function OkulContent() {

    const [Todos, setTodos] = useState([]);
    const [Todo, setTodo] = useState();

    const submitHandle = (e) => {
        e.preventDefault()
        setTodos([...Todos, Todo])
    }

    const butonRef = useRef();

    // useEffect(() => {
    //     if (Todo == false) {
    //         butonRef.current.disabled = true
    //     } else{
    //         butonRef.current.disabled = false
    //     }
    // },null);

    if (Todo == false) {
        butonRef.current.disabled = true
    } else{
        butonRef.current.disabled = false
    }

    return (
        <div>
            <h1>OKul Component</h1>
            <form onSubmit={submitHandle}>
                <input type="text" onChange={e => setTodo(e.target.value)} />
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
import {useEffect, useState} from "react";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
    const [todo, setTodo] = useState(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => setTodo(json))
    }, []);


    return (
        <div className="row">
            {todo && <h1>{todo.title}</h1>}

        </div>
    )
}

export default App
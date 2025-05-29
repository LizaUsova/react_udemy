import {useState} from "react";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from "./components/Counter.jsx";
import Button from "./components/Button.jsx";
import ResetButton from "./components/ResetButton.jsx";


function App() {
    const [count, setCount] = useState(0)

    const incrementCount = () => {
        setCount(count + 1)
    }

    const resetCount = () => {
        setCount(0)
    }

    return (
        <>
            <div className="container my-4">
                <Counter count={count}/>
            </div>
            <div className="d-flex gap-2">
                <Button onClick={incrementCount} />
                <Button onClick={incrementCount}/>
                <Button onClick={incrementCount}/>
                <Button onClick={incrementCount}/>
            </div>
            {count > 0 && <ResetButton resetCount={resetCount}/>}
        </>
    )
}

export default App
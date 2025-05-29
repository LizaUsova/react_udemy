import {useState} from "react";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "./12-state-via-props/components/Button.jsx";
import Counter from "./12-state-via-props/components/Counter.jsx";

function App() {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1)
    }

    const decrementCount = () => {
        setCount(count - 1)
    }


  return (
      <>
        <Counter count={count} />
        <div className="d-flex flex-wrap gap-2">
          <Button onClick={incrementCount} text="increment" />
          <Button onClick={decrementCount} text="decrement" />
            <Button onClick={incrementCount} text="increment" />
          <Button onClick={decrementCount} text="decrement" />
        </div>
      </>
  )
}

export default App

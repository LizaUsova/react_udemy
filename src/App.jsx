import {useState} from "react";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "./12-map/components/Button.jsx";
import Counter from "./12-map/components/Counter.jsx";

const texts = ['Click me', 'Hit me', 'increment', 'decrement']

function App() {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1)
    }

  return (
      <>
        <Counter count={count} />
        <div className="d-flex flex-wrap gap-2">
            {texts.map((text, index) => {
                return <Button onClick={incrementCount} text={text} key={index}/>
            })}
        </div>
      </>
  )
}

export default App

import './App.css'
import PetInfo from "./using_props/PetInfo.jsx";

function App() {

  return (
    <div>
      <PetInfo animal="cat" age="2" />
      <PetInfo animal="dog" age="5" />
    </div>
  )
}

export default App

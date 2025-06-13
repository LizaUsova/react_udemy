import 'bootstrap/dist/css/bootstrap.min.css';
import UserContext from "./27-context-api/context/UserContext.jsx";
import './App.css'
import {useState} from "react";
import User from "./27-context-api/components/User.jsx";

function App() {
    const [user, setUser] = useState('Liza')

    return(
        <UserContext.Provider value={ user }>
            <div className="App">
                <User />
            </div>
        </UserContext.Provider>
    )
}

export default App
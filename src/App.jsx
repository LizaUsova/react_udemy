import {useEffect, useState} from "react";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Posts from "./21-jsonplaceholder-posts/components/Posts.jsx";


function App() {


    return (
        <div className="row">
           <Posts />
        </div>
    )
}

export default App
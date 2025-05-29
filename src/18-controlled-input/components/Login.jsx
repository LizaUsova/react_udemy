import {useState} from "react";

function Login() {
    const [data, setData] = useState({email:'', password:''})

    const handleFromSubmit = (event) => {
        event.preventDefault()
        console.log(data);
        alert(JSON.stringify(data))
    }

    const handleInputChange = (text, name) => {
        setData({...data, [name]: text.target.value})
    }

    return (
        <>
            <h1>Login Form</h1>
            <form onSubmit={handleFromSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="d-flex form-label" >Email address</label>
                    <input type="email"
                           className="form-control"
                           id="exampleInputEmail1"
                           aria-describedby="emailHelp"
                           value={data.email}
                           onChange={(e) => handleInputChange(e, email)}
                    ></input>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="d-flex form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        value={data.password}
                        onChange={(e) => handleInputChange(e, password)}
                    ></input>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                    <label className="d-flex form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </>
    )
}

export default Login
function Login() {
    const handleFromSubmit = (event) => {
        event.preventDefault()

        const userData = {
            email: event.target.email.value,
            password: event.target.password.value
        }

        console.log(userData);
        alert(JSON.stringify(userData))
    }

    return (
        <>
            <h1>Login Form</h1>
            <form onSubmit={handleFromSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="d-flex form-label" >Email address</label>
                    <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="d-flex form-label">Password</label>
                    <input name="password" type="password" className="form-control" id="exampleInputPassword1"></input>
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
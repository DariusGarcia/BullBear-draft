import "./login.css"

const Login = () => {
    

    return (
        <div>
            <h1>BullBear</h1>
            <form className="login-container">
                <h2>Login</h2>
                <label className="form heading" htmlFor="username" >Username</label>
                <input type="text" name='name' placeholder="username" required /> 

                <label className="form heading" htmlFor="password" >Password</label>
                <input type="text" name='name' placeholder="password" required /> 
            </form>
        </div>
        )
}


export default Login;
import { useAuth0 } from '@auth0/auth0-react'

function Login() {

    const { loginWithRedirect } = useAuth0()

    return (
        <div className="Login">
            <h1>Login</h1>

            <h1>Inicia sesion para ver tu info secreta</h1>

            <button onClick={() => loginWithRedirect()}>Login</button>
        </div>
    );
}

export default Login;
import {useContext, useEffect, useState} from "react";
import {useLocalStorage} from "../../hooks/useLocalStorage";
import Auth from "./Auth";
import AuthContext from "../../context/AuthProvider";
import {useLocation, useNavigate} from "react-router-dom";

function Login(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLogged, setIsLogged] = useState(false)
    const setTokens = useLocalStorage('tokens', {})[1];
    const {auth, setAuth} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname;

    useEffect(() => {
        if (isLogged) {
            navigate(from, {
                replace: true
            })
        }
    }, [auth]);


    async function handleLogin() {
        const response = await fetch('/api/v1/users/token/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        })
        const accessToken = await response.json();
        setTokens({access: accessToken.access, refresh: accessToken.refresh})
        setAuth(accessToken);
        setIsLogged(true);
    }

    return (
        <div>
            <input
                type="text"
                placeholder={'email'}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            <input
                type="text"
                placeholder={'password'}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <button
                type='button'
                onClick={handleLogin}>
                Login
            </button>
        </div>
    );
}

export default Login;
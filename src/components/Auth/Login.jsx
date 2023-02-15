import {useContext, useState} from "react";
import {useLocalStorage} from "../../hooks/useLocalStorage";
import Auth from "./Auth";
import AuthContext from "../../context/AuthProvider";
import {useNavigate} from "react-router-dom";

function Login(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const setTokens = useLocalStorage('tokens', {})[1];
    const {setAuth} = useContext(AuthContext);
    const navigate = useNavigate();

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
        setAuth(accessToken)
        navigate('/')
    }

    return (
        <div>
            <input type="text" placeholder={'email'} value={email}
                   onChange={(event) => setEmail(event.target.value)}
            />
            <input type="text" placeholder={'password'} value={password}
                   onChange={(event) => setPassword(event.target.value)}
            />

            <button type='button' onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;
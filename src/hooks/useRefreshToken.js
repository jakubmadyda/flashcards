import useAuth from "./useAuth";
import axios from "../api/axios";


function useRefreshToken() {
    const {setAuth} = useAuth();

    const refresh = async () => {
        const response = await axios.get('/users/token/refresh/', {
            withCredentials: true
        });

        setAuth(response.data);

        return response.data.access;
    }
    return refresh;
}

export default useRefreshToken;
import useAuth from "./useAuth";
import {axiosPrivate} from "../api/axios";

function useLogout() {

    const {auth, setAuth} = useAuth();

    async function logout() {

        try {
            const response = await axiosPrivate.post('/users/logout/', {
                refresh_token: auth.refresh
            })
            setAuth({});
        } catch (error) {
            console.error(error);
        }
    }

    return logout;
}

export default useLogout;
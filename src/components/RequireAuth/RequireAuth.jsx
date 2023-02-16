import useAuth from "../../hooks/useAuth";
import {Navigate, Outlet, useLocation} from "react-router-dom";

function RequireAuth(props) {

    const {auth} = useAuth();
    const location = useLocation();

    return (
        auth.access
            ? <Outlet/>
            : <Navigate to={'/login'}
                        state={{from: location}}
                        replace
            />

    );
}

export default RequireAuth;
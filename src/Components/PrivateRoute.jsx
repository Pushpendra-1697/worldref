import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
    const { isAuth } = useSelector(store => store.authManager);
    const { pathname } = useLocation();

    if (isAuth) {
        return children;
    } else {
        return (
            <Navigate to={'/login'} state={{ from: pathname }} replace />
        );
    }
};

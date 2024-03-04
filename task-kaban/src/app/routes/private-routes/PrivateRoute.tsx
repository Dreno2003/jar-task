import { FC, PropsWithChildren } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext';

type PrivateRouteProps = PropsWithChildren;
const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
    const auth = useAuth();



    if (auth?.user) {
        return children;
    }
    else {
        return <Navigate to='/auth'  />;
    }


    // return auth?.user ? children : <Navigate to="/auth" replace />;
    // return <Navigate to='/auth' replace />;

}

export default PrivateRoute
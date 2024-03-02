import { FC, PropsWithChildren, useEffect } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext';

type PrivateRouteProps = PropsWithChildren;
const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
    const auth = useAuth();

    if (auth?.user) {
        return children;
    }


    return <Navigate to='/auth' />;

}

export default PrivateRoute
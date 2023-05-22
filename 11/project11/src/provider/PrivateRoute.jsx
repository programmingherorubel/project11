import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import Loading from '../components/Loading'
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    
    if(loading){
        return <Loading />
    }

    if(user?.email){
        return children
    }

    return <Navigate state={{from:location}} to='/login' replace></Navigate>

};

export default PrivateRoute;
import React, { Dispatch, SetStateAction, useContext, useEffect } from 'react'
import { signInUser, firebase, onAuthStateChanged, auth } from '@/services/auth/firebase';
import { UserType } from '@/types/types';
// create an authentication conext
//create the context using the react createContext;
// create the contextProvider that will be used around the app;
// create the auth hook that will be used to access the context 

interface AuthContextProps {
    currentUser: any
    isAuthenticated: boolean
    authUser: () => void
    // saveAuth: any
    user:Record<string, unknown> | null
    signOut?: any
}

//set the current user, 

const AuthContext = React.createContext<AuthContextProps | undefined>(undefined)

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [currentUser, setCurrentUser] = React.useState<any>()
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    const [loading, setLoading] = React.useState(false)
    const [user, setUser] = React.useState<any>()


    const authUser = async () => {

        try {
            const res = await signInUser()
            // console.log(res.user.getIdToken())
            
            setCurrentUser(res.user);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        };
    }, []);


    const authValues: AuthContextProps = {
        currentUser,
        authUser,
        isAuthenticated,
        user,
        // signOut
    }

    return (
        <AuthContext.Provider value={authValues}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === null) {
        throw new Error('user must be authenticted')
    }

    return context;
}


export default AuthContext
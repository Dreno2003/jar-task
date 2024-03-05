import React, { Dispatch, SetStateAction, useContext, useEffect } from 'react'
import { signInUser, onAuthStateChanged, auth } from '@/services/auth/firebase';
// create an authentication conext
//create the context using the react createContext;
// create the contextProvider that will be used around the app;
// create the auth hook that will be used to access the context 

interface AuthContextProps {
    authUser: () => void
    // saveAuth: any
    loading: boolean
    user: Record<string, unknown> | null
    signOut?: any
    profileUrl: string | null,
    fullName: any
}

//set the current user, 

const AuthContext = React.createContext<AuthContextProps | undefined>(undefined)

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [loading, setLoading] = React.useState(false)
    const [profileUrl, setProfileUrl] = React.useState<string | null>('');
    const [fullName, setFullName] = React.useState()
    const [user, setUser] = React.useState<any>()


    const authUser = async () => {

        try {
            await signInUser();
            setLoading(true);


        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);
            setProfileUrl(user?.photoURL);
            setFullName(user?.displayName )
            setLoading(false);
        });

        return () => {
            unsubscribe();
        };

    }, []);


    const authValues: AuthContextProps = {
        authUser,
        user,
        loading,
        profileUrl,
        fullName
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

// this is the root of the application where  all other component lies
import AuthPageMain from '@/app/views/auth-page/AuthPageMain'
import { AuthContextProvider } from '@/context/AuthContext'


function Root() {
    return (
        <>
            <AuthContextProvider>
                <AuthPageMain />,
            </AuthContextProvider>
        </>
    )
}

export { Root }
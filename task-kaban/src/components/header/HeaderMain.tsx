import { useAuth } from '@/context/AuthContext'
import { AvaterMain } from './components/Avater'
import Logo from '../logo/logo'
import { Link } from 'react-router-dom'
function HeaderMain() {
    const auth = useAuth()
    const profileUrl = auth?.user?.photoURL
    const userFullName = auth?.user?.displayName
    console.log(userFullName)
    return (
        <>
            <header className="container flex justify-between py-5 bg-muted">
                <div>
                    <Link to='/'>
                    
                    <Logo width='35' height='35' />
                    </Link>
                </div>
                <AvaterMain fullName={userFullName} imageSrc={profileUrl} />
            </header>
        </>
    )
}

export default HeaderMain
import { useAuth } from '@/context/AuthContext'
import { AvaterMain } from './components/Avater'
function HeaderMain() {
    const auth = useAuth()
    const profileUrl = auth?.user?.photoURL
    return (
        <>
            <div className="container py-6 bg-muted">
                <AvaterMain imageSrc={profileUrl} />
                headers
            </div>
        </>
    )
}

export default HeaderMain
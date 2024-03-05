import { useAuth } from '@/context/AuthContext'
import { AvaterMain } from './components/Avater'
import Logo from '../logo/logo'
import { Link } from 'react-router-dom'
import { ThemeSwitcher } from '../theme-switcher/ThemeSwitcherMain'
import { Input } from '../input/Input'
import { IoIosSearch } from "react-icons/io";

function HeaderMain() {
    const auth = useAuth()
    const profileUrl = auth?.user?.photoURL
    const userFullName = auth?.user?.displayName
    return (
        <>
            <header className="container flex justify-between py-3 px-10 bg-muted">
                <div>
                    <Link to='/'>
                        <Logo width='35' height='35' />
                    </Link>
                </div>
                <div>
                    <div className='!border rounded-md flex w-80 items-center px-3  justify-center border-gray-500'>
                        <IoIosSearch fontSize={18} />
                        <Input type='search' className='border-input py-1  focus-visible:ring-0' />
                    </div>
                </div>
                <div className='flex gap-4'>
                    <ThemeSwitcher />
                    <AvaterMain className='size-2' fullName={userFullName} imageSrc={profileUrl} />
                </div>
            </header>
        </>
    )
}

export default HeaderMain
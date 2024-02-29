import React from 'react'
import { ThemeSwitcher } from '@/components/theme-switcher/ThemeSwitcherMain'
import { signInUser } from '@/services/auth/firebase'
function AuthPageMain() {
    async function handleUserAuth() {
        const authUser = await signInUser();
        
    }


    return (
        <div className='flex justify-center items-center h-screen text-center' >
            <div>
                <h3 className='text-2xl'>

                    Task jar <ThemeSwitcher />
                </h3>

                <p className='text-sm text-muted-foreground'>
                    Organise your task with ease
                </p>

                <button onClick={handleUserAuth}>
                    CLICK TO AUTH
                </button>
            </div>

        </div>
    )
}

export default AuthPageMain
import { ThemeSwitcher } from '@/components/theme-switcher/ThemeSwitcherMain'
import { signInUser } from '@/services/auth/firebase'
import logo from '@/assets/logo/taskjar-light.svg'
import { Button } from '@/components/button/button';
import { FcGoogle } from "react-icons/fc";

function AuthPageMain() {
    async function handleUserAuth() {
        const authUser = await signInUser();

    }


    return (
        <div className='flex bg-background justify-center items-center h-screen text-center' >
            <div>
                <img src={logo} alt="task-jar log" className='mx-auto mb-4' width={50} />
                <h3 className='text-2xl mb-2'>
                    <b>
                        Task jar
                        {/* <ThemeSwitcher /> */}

                    </b>
                </h3>

                <p className='text-sm text-muted-foreground'>
                    Organise your task with ease
                </p>

                <Button size='lg' variant='outline' className=' mt-4 font-medium' onClick={handleUserAuth}>
                    <FcGoogle className='mr-4 text-xl' />
                    Sign In With Gooogle
                </Button>
            </div>

        </div>
    )
}

export default AuthPageMain
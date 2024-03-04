import HeaderMain from '@/components/header/HeaderMain';
import { signOutUser } from '@/services/auth/firebase'

function DashboardMain() {
  const handleSignOut = async () => {
    const signout = await signOutUser()
    return signout;
  }
  return (
    <>
      <HeaderMain />
      {/* <button onClick={handleSignOut}>Sign out</button> */}
    </>
  )
}

// "react-router": "^6.17.0",
export default DashboardMain
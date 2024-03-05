import HeaderMain from '@/components/header/HeaderMain';
import Dashboard from './Dashboard';

function DashboardMain() {

  return (
    <>
      <HeaderMain />

      <main className='container my-4'>
        <Dashboard />
      </main>
    </>
  )
}

// "react-router": "^6.17.0",
export default DashboardMain
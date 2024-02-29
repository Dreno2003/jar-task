import { ThemeProvider } from '@context/ThemeProvider'
import { Root } from './app/routes/Root'
function App() {

  return (
    <>
      <ThemeProvider >
        <Root />
      </ThemeProvider>
    </>
  )
}

export default App

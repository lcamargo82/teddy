import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css';
import Routers from './routes'
import GlobalStyle from './styles/globalStyle'

function App() {
  console.log(import.meta.env.VITE_API_URL)

  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <Routers />
    </>
  )
}

export default App

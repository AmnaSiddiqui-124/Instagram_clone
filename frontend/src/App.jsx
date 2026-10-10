import { RouterProvider } from 'react-router'
import { router } from './app.route'
import './feature/shared/globe.scss'
import { AuthProvider } from './feature/auth/auth.context'



const App = () => {
  return (
<AuthProvider>
    <RouterProvider router={router}/>
</AuthProvider>
  )
}

export default App
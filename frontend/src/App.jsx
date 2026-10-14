import { RouterProvider } from 'react-router'
import { router } from './app.route'
import './feature/shared/globe.scss'
import { AuthProvider } from './feature/auth/auth.context'
import { PostContextProvider } from './feature/post/Post.context'



const App = () => {
  return (
<AuthProvider>
  <PostContextProvider>
    <RouterProvider router={router}/>
  </PostContextProvider>
</AuthProvider>
  )
}

export default App
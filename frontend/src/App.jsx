import React from 'react'
import { RouterProvider } from 'react-router'
import { router } from './app.route'
import './feature/shared/globe.scss'



const App = () => {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
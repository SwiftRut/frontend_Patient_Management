import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Registration from './pages/Registration'

function App() {

  return (
    <>
    <Registration/>
    <Login/>
      {/* <BrowserRouter>
        <Routes>
          <Route path='/registration' element={Registration}/>
          <Route path='/login' element={Login}/>
        </Routes>
      </BrowserRouter> */}
    </>
  )
}

export default App

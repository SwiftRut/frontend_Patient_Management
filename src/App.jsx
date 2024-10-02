import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Registration from './pages/Registration'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'

function App() {

  return (
    <>
    {/* <Login/> */}
    <Registration/>
    
      <BrowserRouter>
        <Routes>
          <Route path='/registration' element={Registration}/>
          <Route path='/login' element={Login}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

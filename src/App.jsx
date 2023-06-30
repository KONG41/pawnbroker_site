import React from 'react'
import Home from './pages/Home.jsx'
import {Route,Routes } from "react-router-dom"
import Layout from './components/Layout.jsx'
import routes from './routes'
import './i18n/config'
const App = () => {
  
  return (
    <Routes>
      <Route element={<Layout />}>
        {
          routes.map((route) => <Route key={route.path} path={route.path} element={route.element}></Route>)
        }
      </Route>
    </Routes>
  )
}

export default App
import React from 'react'
import Home from './pages/Home.jsx'
import {Route,Routes } from "react-router-dom";
import Layout from './components/Layout.jsx'
import routes from './routes'
const App = () => {
  
  return (
    <div>
            <Routes>
                  <Route element={<Layout />}>
                  {
                    routes.map((route) => <Route key={route.path} path={route.path} element={route.element}></Route>)
                  }
                  </Route>
            </Routes>
    </div>
  )
}

export default App
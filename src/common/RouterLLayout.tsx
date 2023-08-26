import React from 'react'
import NavBarApp from './NavBarApp'
import { Outlet } from 'react-router-dom'

const RouterLLayout:React.FC = () => {
  return (
    <>
        <NavBarApp />
        <Outlet />
    </>
  )
}

export default RouterLLayout
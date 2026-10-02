import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import styles from './styles.module.css'
import { Outlet } from "react-router-dom"
import Header from "./components/Header.jsx"
import Sidebar from "./components/Sidebar.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Sidebar/>
      <Outlet />

    </>
  )
}

export default App

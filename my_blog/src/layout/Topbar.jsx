import React from 'react'
import { Link } from 'react-router-dom'

const Topbar = () => {
  return (
    <header>
      <nav>
        <div class="logo">Byte</div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  )
}

export default Topbar
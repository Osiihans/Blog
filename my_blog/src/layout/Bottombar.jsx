import React from 'react'
import { Link } from 'react-router-dom'

const Bottombar = () => {
  return (
    <footer>
      <div class="social">
        <Link to="https://www.instagram.com/c.hloe_del?igsh=MXRqODNucjU2M3hueA=="><i class='bx bxl-instagram-alt' ></i></Link>
        <Link to="https://x.com/DelphinGitonga?t=N24m75rAp1upztmO_jRRCA&s=09"><i class='bx bxl-twitter' ></i></Link>
        <Link to="https://whatsapp.com/dl/"><i class='bx bxl-whatsapp' ></i></Link>
        <Link to="https://pin.it/1FbJJJ9VP"><i class='bx bxl-pinterest' ></i></Link>
      </div>
      <p>&copy; 2024 My Interest Blog</p>
    </footer>
  )
}

export default Bottombar
import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div>
      <header>
        <h2>BUMA</h2>
        <nav>
            <ul>
                <li><a href='#'>Services</a></li>
                <li><a href='#'>Resources</a></li>
                <li><a href='#'>Company</a></li>
                <li><a href='#'>Contact</a></li>
            </ul>
        </nav>

        <div className='headerbuttons'>
            <button className='loginBtn'>Log in</button>
            <button className='SignupBtn'>Sign up</button>
        </div>
<h1 className='menubutton'>=</h1>
      </header>
    </div>
  )
}

export default Header;
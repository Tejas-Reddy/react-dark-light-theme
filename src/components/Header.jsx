import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../theme-context'

export default function Header() {

    const {theme, toggleTheme} = useTheme();
    console.log(theme);

  return (
    <nav>
        <div className='header-con'>
            <Link to="/" className='header-title'>Home</Link>
            <Link to="/about" className='header-title'>About</Link>
            <Link to="/blog" className='header-title'>Blog</Link>
            <label onClick={toggleTheme} className="page-title">{theme === "dark" ? 'Light Mode' : 'Dark Mode'}</label>
        </div>
    </nav>
  )
}

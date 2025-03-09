import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header 
    className="header flex justify-between items-center p-6 font-bold text-white bg-gray"
    >
      <Link 
      to="/" 
      className="header-link hover:text-purple-300"
      >
        Blog aaaaaaaaaaa
      </Link>
      <Link 
      to="/contact" 
      className="header-link hover:text-purple-300"
      >
        お問い合わせ
      </Link>
    </header>
  )
}
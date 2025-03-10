import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header
      className="header flex justify-between items-center p-6 font-bold text-white bg-gray-500"
    >
      <Link
        to="/"
        className="header-link hover:text-purple-300"
      >
        Blog
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
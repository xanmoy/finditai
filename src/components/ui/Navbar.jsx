import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
      <nav className="flex items-center justify-between p-5 lg:px-96 text-xl text-gray-400">
          <h1 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-600"><Link href="/">Synthia AI</Link></h1><p className="text-sm">developed by <Link href="https://twitter.com/xanmoy" className="text-indigo-600">
              Xanmoy
          </Link></p>


      </nav>
  )
}

export default Navbar

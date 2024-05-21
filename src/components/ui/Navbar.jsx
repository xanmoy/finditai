import React from 'react'
import Link from 'next/link'
import { FlaskConical } from 'lucide-react'
const Navbar = () => {
    return (
        <nav className="flex items-center justify-between p-5 lg:px-96 text-xl text-gray-400">
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                <Link href="https://labs.xanmoy.me"><FlaskConical className='text-white' /></Link></span><p className="text-sm">developed by <Link href="https://twitter.com/xanmoy" className="text-blue-600">
                Xanmoy
            </Link></p>


        </nav>
    )
}

export default Navbar

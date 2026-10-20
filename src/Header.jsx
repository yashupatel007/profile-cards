import React from 'react'

const links = ['Browse', 'Rooms', 'Sign in', 'ACcount', 'Join as a freelancer']

const Header = () => {

  return (
    <header className='flex items-center justify-between border-b border-gray-200 px-8 py-3 bg-white '>

      <div className='flex items-center gap-2'>
      <span className='text-white font-bold bg-blue-500 rounded px-2 py-1 text-sm'>FD</span>
      <span className='text-sm font-semibold text-gray-700'>Freelancing Directory</span>
      </div>

      <nav className='hidden gap-6 text-gray-700 text-xs md:flex'>
        {links.map((link)=>(
          <a key={link} href='#' className='hover:text-blue-500'>
            {link}
          </a>
        ))}
      </nav>

    </header>
  )
}

export default Header

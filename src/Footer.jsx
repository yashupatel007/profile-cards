import React from 'react'

const columns = [
  { title: 'HIRE', items: ['How it works', 'Find talent', 'Agencies'] },
  { title: 'DIRECTORY', items: ['Designers', 'Developers', 'Marketers'] },
  { title: 'SUPPORT', items: ['Help center', 'Blog', 'Contact', 'Terms', 'Privacy'] },
]

const Footer = () => {
  return (
    <footer className='mt-16 bg-slate-700 px-8 py-10 text-white'>
    <div className='mx-auto max-w-5xl'>

      {/* 1. logo row, on its own line at the top */}
      <div className='flex items-center gap-2'>
        <span className='rounded bg-blue-500 text-sm font-bold px-2 py-1'>FD</span>
        <span className='text-sm font-semibold'>Freelance Directory</span>
      </div>

      {/* 2. link columns, below the logo */}
      <div className='mt-8 grid grid-cols-2 gap-8 md:grid-cols-3'>
        {columns.map((col) => (
          <div key={col.title}>
            <h4 className='mb-3 text-xs text-gray-300 font-bold tracking-wider'>{col.title}</h4>
            <ul className='space-y-2 text-xs text-gray-400'>
              {col.items.map((item) => (
                <li key={item} className='cursor-pointer hover:text-white'>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </div>
  </footer>
  )
}

export default Footer

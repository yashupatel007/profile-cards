import React from 'react'

const card = ({name,company,role,rate,available,img,skills,about}) => {
  return (
    <div className='w-full h-full flex flex-col  bg-white shadow-md p-6'>
      
    {/* top details */}
    <div className='flex items-center justify-between'>
      <span className={`rounded-full px-3 py-1 text-white text-xs
        ${available?'bg-green-400':'bg-red-400'}`}
        >
        {available?'Available':'Not Available'}

      </span>
      <span className='text-xl text-gray-700 font-semibold'>${rate}/hr</span>
    </div>

    <img
     src={img}
     alt={name}
     className='mx-auto h-36 w-36 rounded-full object-cover shadow-md'
     />

    <div className='mt-4 text-center'>
      <h3 className='text-xl  text-gray-700  font-medium'>{name}</h3>
      <p className='text-sm text-gray-400'>{role}</p>
      <p className='text-sm text-blue-400 mt-1'>● {company}</p>
    </div>


    <div className='mt-4 flex flex-wrap gap-2 justify-center'>
      { skills.map((skill)=>(

        <span key={skill} className='border rounded-full border-gray-300 px-4 py-1 text-sm text-gray-600 bg-gray-200'>
          {skill}
        </span>
        
      ))}
      <span className='border rounded-full px-3 py-1 bg-blue-400 text-white'>+4</span>
    </div>
    
    <p className='mt-4 flex-1 text-center text-sm text-gray-600'>{about}</p>
    <hr className='mx-auto mt-5 w-1/3 border-gray-300'/>
    <button className='mt-4 w-full text-sm font-semibold p-3 text-gray-700 rounded transition-all hover:bg-blue-400 hover:underline hover:text-white hover:cursor-pointer'>View Profile</button>

    </div>
  )
}

export default card

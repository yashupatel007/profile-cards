import React from 'react'
import Card from './Card'
import { profiles } from './Data'
import Header from './Header'
import Footer from './Footer'

const App = () => {
  return (
    <div className='min-h-screen bg-gray-100 p-8'>

      <Header/>

      <main className='mx-auto max-w-4xl px-4 py-6'>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 '>
          { profiles.map((p)=>(
            <Card
              key={p.id}
              name={p.name}
              role={p.role}
              company={p.company}
              rate={p.rate}
              available={p.available}
              img={p.img}
              skills={p.skills}
              about={p.about}
            />
          ))}
      </div>
      </main>
      <Footer/>

    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container mx-auto'>
        <h1 className='text-5xl font-bold text-center p-2 m-2'>Course Registration</h1>
        <div className='flex justify-between items-start'>
          <div className='w-3/4'>
            Courses item
          </div>
          <div className='w-1/4'>
            chart list
          </div>
        </div>
      </div>
    </>
  )
}

export default App

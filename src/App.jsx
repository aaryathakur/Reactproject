import React from 'react'
import Mainroutes from './routes/Mainroutes'
import Navbar from './components/NAvbar'

const App = () => {
  return (
    <div className="py-10 px-[20%] w-screen h-screen bg-gray-500 text-white font-thin x">
      <Navbar/>
      <Mainroutes />
</div>
  )
}

export default App

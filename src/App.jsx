import React from 'react'

import { Route, Routes, Link, useLocation } from 'react-router-dom'
import Home from './components/Home'
import Details from './components/Details'
import Create from './components/Create'
import Edit from './components/Edit'

const App = () => {
  const {search,pathname} = useLocation();
 
  return (
    <div className='h-screen w-screen flex'>
      {
        (pathname != '/' || search.length> 0) &&  <Link to={"/"} className="absolute left-[18%] top-[2%] inline-flex items-center px-8 py-2 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
        <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
        <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">

        </span>
        <span className="relative">Home</span>
      </Link>
      }

     

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/edit/:id' element={<Edit />} />
      </Routes>

    </div>
  )
}

export default App
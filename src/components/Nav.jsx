import React, { useContext } from 'react'
import { ProductContext } from '../utils/Context'
import { Link } from 'react-router-dom';

const Nav = () => {
  // category start ke liye filter kiya hai reduce method ko use krke
  const [products] = useContext(ProductContext);

  let distinct_cat = products && products.reduce((acc, cv) => [...acc, cv.category], []);
  distinct_cat = [...new Set(distinct_cat)]

  // category end

  // random color code
  const color = () => {
    return `rgb(${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed()})`;
  }

  



  return (

    <nav className='w-[15%] h-full bg-zinc-50 flex flex-col items-center pt-5'>
      <a href="/create" className='py-3 px-5  rounded-md border border-blue-200 text-blue-400'>Add New Product</a>
      <hr className='w-[80%] my-3' />
      <h1 className='w-[80%] text-2xl mb-3' >Cateogry Filter</h1>

      <div className='w-[80%]'>

        {distinct_cat.map((c, i) => {
          return <Link to={`/?category=${c}`} key={i} className=' mb-3 flex items-center gap-3'> 
          <span style={{backgroundColor:color()}}  className='w-4 h-4 rounded-full  block'>
            </span>{c}
            </Link>
        })}




      </div>
    </nav>

  )
}

export default Nav
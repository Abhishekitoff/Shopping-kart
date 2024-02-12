import axios from '../utils/Axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Loading from './Loading'
import { ProductContext } from '../utils/Context'
import { toast } from 'react-toastify'


const Details = () => {
  const navigate = useNavigate();
  const [products, setproducts] = useContext(ProductContext);
  const [product, setproduct] = useState(null)
  const {id} = useParams()
 
  // const getSingleProduct = async ()=>{
  //   try {
  //        const {data} = await axios.get(`/products/${id}`)
  //       setproduct(data)
  //   } catch (error) {
  //      console.log(error)
  //   }
  // }

  useEffect(() => {
    if(!product){
      setproduct(products.filter(p=> p.id==id)[0])
    }
  //  getSingleProduct()
  
  }, [])

  const productDelete =(id)=>{
    const filteredProducts = products.filter((p)=>p.id !==id)
    setproducts(filteredProducts);
    localStorage.setItem("products", JSON.stringify(filteredProducts));
    toast.error("Product Deleted")
    navigate("/")

  }
  

  return ( product ?
    <div className='w-[70%] h-full  m-auto p-[10%] flex items-center justify-center gap-20 gap-y-2'>
        
        <img className='h-[80%] w-48 object-contain' src={`${product.image}`} alt="" />
        <div className="content">
            <h1 className='text-3xl font-semibold'>{product.title}</h1>
            <h1 className='text-xl opacity-50 '>{product.category}</h1>
            <h2 className='text-green-600 text-3xl font-bold'>₹ {product.price}</h2>
            <p className='text-sm mb-6'>{product.description}</p>


            <Link to={`/edit/${product.id}`} className='px-5 py-3 text-green-400 border border-green-300 rounded-lg '>Edit</Link>
            <button onClick={()=>productDelete(product.id)} className='px-5 py-3 text-red-400 border border-red-300 rounded-lg ml-3'>Delete</button>
        </div>

    </div> : <Loading/>
  )
}

export default Details
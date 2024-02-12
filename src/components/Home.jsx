import React, { useContext, useEffect, useState } from 'react'
import Nav from '../components/Nav'
import { Link, useLocation } from 'react-router-dom'
import { ProductContext } from '../utils/Context'
import Loading from './Loading'
import axios from '../utils/Axios'

const Home = () => {
    const [products] = useContext(ProductContext)

    const {search} = useLocation()

    const category =decodeURIComponent( search.split("=")[1])


   const [filteredProducts, setfilteredProducts] = useState(null)
    
    const getproductsCategory = async () =>{
        try {
            const {data} = await axios.get(`/products/category/${category}`)
            setfilteredProducts(data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if(!filteredProducts || category == "undefined") setfilteredProducts(products);
      if(category!= "undefined") {
        // getproductsCategory();
        setfilteredProducts(products.filter(p=> p.category == category))
    }
    }, [category,products])

   
    



    return (products ?
        <>
            <Nav />
            <div className='home w-[85%] h-full p-7 pt-[5%] flex flex-wrap gap-4 overflow-x-hidden overflow-y-auto'>

                {
                    filteredProducts && filteredProducts.map((p,i)=>{
                        return <Link to={`/details/${p.id}`} key={i} className="card h-[40vh] p-3 w-[15%] border shadow-lg flex justify-center items-center flex-col">
                        <div className="img h-[80%] bg-contain bg-no-repeat bg-center w-full hover:scale-105" style={{ backgroundImage: `url(${p.image})` }}>
                        </div>
                        <h1 className='text-green-500 font-bold mt-1'>$ {p.price}</h1>
                        <h1 className='leading-tight text-sm'>{p.title}</h1>
                    </Link>
                    })
                }





            </div>


        </> : <Loading />




    )
}

export default Home
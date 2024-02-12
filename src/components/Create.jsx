import React, { useContext, useState } from 'react'
import { ProductContext } from '../utils/Context';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Create = () => {
    const navigate = useNavigate()
    
    const [products, setproducts] = useContext(ProductContext);
    const [image, setimage] = useState('');
    const [title, settitle] = useState('');
    const [category, setcategory] = useState('');
    const [price, setprice] = useState('');
    const [dec, setdec] = useState('');

    const addProduct =(e)=>{
        e.preventDefault();

        if(title.trim().length<5 || image.trim().length<5 ||category.trim().length<5 ||price.trim().length<1 ||dec.trim().length<5 ){
             alert("each any every input must have atleast 4 characters ")
             return;
        }

        const product={
            id: nanoid(),
            image,
            title,
            category,
            price,
            dec
        }
        setproducts([...products, product]);

        localStorage.setItem("products",JSON.stringify([...products, product]))
        toast.success("Product Added Sucessfully")

        navigate("/")
      
    }

    return (
        <div>
            <form onSubmit={addProduct} className='p-[5%] w-screen h-screen flex flex-col items-center'>
                <h1 className='text-3xl font-semibold w-1/2 mb-5'>Add New Product</h1>

                <input type="url" placeholder='Image url' className='text-xl bg-zinc-100  rounded-sm p-1 px-2  w-1/2 mb-3'
                    onChange={(e) => setimage(e.target.value)} value={image} />

                <input type="text" placeholder='Title' className='text-xl bg-zinc-100 rounded-sm p-1 px-2  w-1/2 mb-3'
                    onChange={(e) => settitle(e.target.value)} value={title} />

                <div className='justify-between flex w-1/2'>
                    <input type="text" placeholder='Category' className='text-xl bg-zinc-100 rounded-sm p-1 px-2  w-[48%] mb-3'
                        onChange={(e) => setcategory(e.target.value)} value={category} />

                    <input type="number" placeholder='Price' className='text-xl bg-zinc-100 rounded-sm p-1 px-2  w-[48%] mb-3'
                        onChange={(e) => setprice(e.target.value)}  value={price}/>
                </div>

                <textarea className='text-xl bg-zinc-100 rounded-sm p-1 px-2  w-1/2 mb-3' placeholder='Enter Product Description Here.....'   rows="5"  onChange={(e) => setdec(e.target.value)} value={dec}></textarea>

                <div className='w-1/2'>

                    <button className=' py-3 px-5  rounded-md border border-blue-200 text-blue-400'>Add New Product</button>
                </div>

                

            </form>
        </div>
    )
}

export default Create
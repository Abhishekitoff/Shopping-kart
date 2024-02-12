import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductContext } from '../utils/Context';

const Edit = () => {
    const [products, setProducts] = useContext(ProductContext);
    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState({
        title: "",
        des: "",
        image: "",
        price: "",
        category: "",
    });

    const changeHandler = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    };

    useEffect(() => {
        const selectedProduct = products.find(p => p.id === id);
        if (selectedProduct) {
            setProduct(selectedProduct);
        }
    }, [id, products]);

    const updateProduct = (e) => {
        e.preventDefault();

        if (product.title.trim().length < 5 || product.image.trim().length < 5 || product.category.trim().length < 5 || product.price.trim().length < 1 || product.dec.trim().length < 5) {
            alert("each and every input must have at least 4 characters ");
            return;
        }

        const updatedProducts = products.map(p => {
            if (p.id === id) {
                return { ...product };
            }
            return p;
        });

        setProducts(updatedProducts);

        localStorage.setItem("products", JSON.stringify(updatedProducts));

        navigate(-1);
    };

    return (
        <div>
            <form onSubmit={updateProduct} className='p-[5%] w-screen h-screen flex flex-col items-center'>
                <h1 className='text-3xl font-semibold w-1/2 mb-5'>Update Product</h1>

                <input type="url" placeholder='Image url' className='text-xl bg-zinc-100  rounded-sm p-1 px-2  w-1/2 mb-3'
                    onChange={changeHandler} name='image' value={product.image} />

                <input type="text" placeholder='Title' className='text-xl bg-zinc-100 rounded-sm p-1 px-2  w-1/2 mb-3'
                    onChange={changeHandler} name='title' value={product.title} />

                <div className='justify-between flex w-1/2'>
                    <input type="text" placeholder='Category' className='text-xl bg-zinc-100 rounded-sm p-1 px-2  w-[48%] mb-3'
                        onChange={changeHandler} name='category' value={product.category} />

                    <input type="number" placeholder='Price' className='text-xl bg-zinc-100 rounded-sm p-1 px-2  w-[48%] mb-3'
                        onChange={changeHandler} name='price' value={product.price} />
                </div>

                <textarea className='text-xl bg-zinc-100 rounded-sm p-1 px-2  w-1/2 mb-3' placeholder='Enter Product Description Here.....' rows="5" onChange={changeHandler} name='dec' value={product.dec}></textarea>

                <div className='w-1/2'>
                    <button className='py-3 px-5 rounded-md border border-blue-200 text-blue-400'>Update details</button>
                </div>
            </form>
        </div>
    );
};

export default Edit;

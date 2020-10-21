import React, { useEffect, useState } from 'react'
import { getProducts } from '../../services/admin'


const Products = () => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        let get = async () => {            
           const p = await getProducts()
           setProduct(p.data)
        }

        get();
        
        return () => get = () => {};
    },[])
    return(
        <div>
        <h1> Produtos </h1>
        <ul>
    {product.map((item,i) => (<li key={i}>{item.title}</li>))}
        </ul>



        </div>


    )}

    export default Products

import React, { useContext, useEffect, useState } from 'react'
import Datacontext from '../Context/Datacontext'
import { Link } from 'react-router-dom'
import axios from 'axios'


const ProductCategory = () => {
  
  const money=new Intl.NumberFormat("en-us",{
    currency:"INR",
    style:"currency"
  })
  const{addingtocart,category,categorylist}=useContext(Datacontext)
  
  const[product,setproduct]=useState([])

useEffect(() => {
    if (category && category.length > 0) {
      const fetchImagesAndUpdateProducts = async () => {
        const updatedProducts = await Promise.all(
          category.map(async (product) => {
            try {
              const response = await axios.get(
                `http://localhost:8080/product/image/${product.id}`,
                { responseType: "blob" }
              );
              const imageUrl = URL.createObjectURL(response.data);
              return { ...product, imageUrl };
            } catch (error) {
              console.error(
                "Error fetching image for product ID:",
                product.id,
                error
              );
              return { ...product, imageUrl: "placeholder-image-url" };
            }
          })
        );

        setproduct(updatedProducts);
      };

      fetchImagesAndUpdateProducts();
    }
  }, [category]);

  return (
    <>
    {product.length!=0 ? (
            <div className='px-lg-2 py-2  mt-2 product-container'>
                <h3 >Best in {categorylist}</h3>
                <div className="row row-cols-2 row-cols-sm-3 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-2 px-2">
                {product.map((e)=>{

                    return(
                        <Link to={`/product/${e.id}`} key={e.id} >
                        <div className="col product mt-2 mb-2 " >
                            <div className='card shadow px-2'>                                
                                    <div className='w-100 product-image-container mt-2' >
                                    <img src={e.imageUrl}  width="50" height="50"/>
                                    </div>
                                <div className="mt-2 mb-2">
                                    {e.name.length>50?
                                    <h5 className='product-name p-name text-decoration-none'>{e.name}...</h5>:
                                    <h5 className='product-name'>{e.name}</h5>
                                    }
                                    
                                    <p className='product-brand'>{e.brand.toUpperCase()}</p>
                                    <span className='rupee'>{money.format(e.price).substring(0,1)}</span><span className='price'>{money.format(e.price).substring(1)}<span className='mrp'>MRP</span></span>
                                    <button className='btn mb-2 cart-btn' onClick={()=>addingtocart(e.id)}>
                                        Add to cart
                                    </button>
                                </div>
                                    </div>
                                </div>      
                            </Link>
                    )
                })}   
                </div>
            </div>
        ) :<div className='currently-unavailable'>
            <p className='text-center'>Oops ! Currently unavailable</p>
          </div>}
    </>
  )
}
export default ProductCategory
  
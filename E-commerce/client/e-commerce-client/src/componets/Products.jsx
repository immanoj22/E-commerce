import React, { useEffect, useState } from 'react'
import Datacontext from '../Context/Datacontext';
import '../Style/Product.css'
import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export const Products = () => {
    const {getallproducts,allproduct,addingtocart}=useContext(Datacontext)
    const [isDataFetched, setIsDataFetched] = useState(false);
    const[product,setproduct]=useState([])
    const electronics=product.filter((e)=>e.category.includes('Electronics'))
    const Mobiles=product.filter((e)=>e.category.includes('Mobiles'))
    const Fashion=product.filter((e)=>e.category==='Fashion')
    const Grocery=product.filter((e)=>e.category==='Grocery')
    const home=product.filter((e)=>e.category==='Home & Furniture')
    const Appliances=product.filter((e)=>e.category==='Appliances')
    const beayty=product.filter((e)=>e.category==='Beauty,Toys & More')
  
    const money=new Intl.NumberFormat("en-us",{
        currency:"INR",
        style:"currency"
    })

    useEffect(()=>{
        if(!isDataFetched){
            getallproducts()
            setIsDataFetched(true)
        }
    },[getallproducts,isDataFetched])

    useEffect(() => {
        if (allproduct && allproduct.length > 0) {
          const fetchImagesAndUpdateProducts = async () => {
            const updatedProducts = await Promise.all(
                allproduct.map(async (product) => {
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
      }, [allproduct]);
    
    
  return (
    <>   
        {electronics.length!=0 ? (
            <div className='px-lg-2 py-2 mt-2 product-container'>
                <h3>Best in Electronics</h3>
                <div className="row row-cols-2 row-cols-sm-3 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-2 px-2">
                {electronics.map((e)=>{

                    return(
                        
                        <div className="col product mt-2 mb-2 " key={e.id} >
                            <div className='card shadow px-2'>   
                                    <Link to={`/product/${e.id}`}  >                             
                                    <div className='w-100 product-image-container mt-2' >
                                    <img src={e.imageUrl}  width="50" height="50"/>
                                    </div>
                                    </Link>
                                <div className="mt-2 mb-2">
                                    {e.name.length>50?
                                    <h5 className='product-name text-decoration-none p-name'>{e.name}...</h5>:
                                    <h5 className='product-name'>{e.name}</h5>
                                    }
                                    
                                    <p className='product-brand'>{e.brand.toUpperCase()}</p>
                                    <span className='rupee'>{money.format(e.price).substring(0,1)}</span><span className='price'>{money.format(e.price).substring(1)}<span className='mrp'>MRP</span></span>
                                    <button className='btn mb-2 cart-btn mt-2' onClick={()=>addingtocart(e.id)}>
                                        Add to cart
                                    </button>
                                </div>
                                    </div>
                                </div>      
                            
                    )
                })}   
                </div>
            </div>
        ) :<></>}

        {Mobiles.length!=0 ? (
            <div className='px-lg-2 py-2 mt-2 product-container'>
                <h3>Best in Mobiles</h3>
                <div className="row row-cols-2 row-cols-sm-3 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-2 px-2">
                {Mobiles.map((e)=>{

                    return(
                       
                        <div className="col product mt-2 mb-2 "  key={e.id+1}>
                            <div className='card shadow px-2'>                                
                                    <Link to={`/product/${e.id}`}  >                             
                                    <div className='w-100 product-image-container mt-2' >
                                    <img src={e.imageUrl}  width="50" height="50"/>
                                    </div>
                                    </Link>
                                <div className="mt-2 mb-2">
                                    {e.name.length>50?
                                    <h5 className='product-name text-decoration-none p-name'>{e.name}...</h5>:
                                    <h5 className='product-name'>{e.name}</h5>
                                    }
                                    
                                    <p className='product-brand'>{e.brand.toUpperCase()}</p>
                                    <span className='rupee'>{money.format(e.price).substring(0,1)}</span><span className='price'>{money.format(e.price).substring(1)}<span className='mrp'>MRP</span></span>
                                    <button className='btn mb-2 cart-btn mt-2' onClick={()=>addingtocart(e.id)}>
                                        Add to cart
                                    </button>
                                </div>
                                    </div>
                                </div>      
                          
                    )
                })}   
                </div>
            </div>
        ) : <></>}



        {Fashion.length!=0 ? (
        
            <div className='px-lg-2 py-2 mt-2 product-container'>
                <h3>Best in Fashion</h3>
                <div className="row row-cols-2 row-cols-sm-3 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-2 px-2">
                {Fashion.map((e)=>{

                    return(
                        
                        <div className="col product mt-2 mb-2 "  key={e.id+2}>
                            <div className='card shadow px-2'>                                
                                    <Link to={`/product/${e.id}`} key={e.id} >                             
                                    <div className='w-100 product-image-container mt-2' >
                                    <img src={e.imageUrl}  width="50" height="50"/>
                                    </div>
                                    </Link>
                                <div className="mt-2 mb-2">
                                    {e.name.length>50?
                                    <h5 className='product-name text-decoration-none p-name'>{e.name}...</h5>:
                                    <h5 className='product-name'>{e.name}</h5>
                                    }
                                    
                                    <p className='product-brand'>{e.brand.toUpperCase()}</p>
                                    <span className='rupee'>{money.format(e.price).substring(0,1)}</span><span className='price'>{money.format(e.price).substring(1)}<span className='mrp'>MRP</span></span>
                                    <button className='btn mb-2 cart-btn mt-2' onClick={()=>addingtocart(e.id)}>
                                        Add to cart
                                    </button>
                                </div>
                                    </div>
                                </div>      
                           
                    )
                })}   
                </div>
            </div>
       
        ) : <></>}

        {Grocery.length!=0 ? (
            <div className='px-lg-2 py-2 mt-2 product-container'>
                <h3>Best in Grocery</h3>
                <div className="row row-cols-2 row-cols-sm-3 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-2 px-2">
                {Grocery.map((e)=>{

                    return(
                       
                        <div className="col product mt-2 mb-2 "  key={e.id+3}>
                            <div className='card shadow px-2'>                                
                                    <Link to={`/product/${e.id}`} key={e.id} >                             
                                    <div className='w-100 product-image-container mt-2' >
                                    <img src={e.imageUrl}  width="50" height="50"/>
                                    </div>
                                    </Link>
                                <div className="mt-2 mb-2">
                                    {e.name.length>50?
                                    <h5 className='product-name text-decoration-none p-name'>{e.name}...</h5>:
                                    <h5 className='product-name'>{e.name}</h5>
                                    }
                                    
                                    <p className='product-brand'>{e.brand.toUpperCase()}</p>
                                    <span className='rupee'>{money.format(e.price).substring(0,1)}</span><span className='price'>{money.format(e.price).substring(1)}<span className='mrp'>MRP</span></span>
                                    <button className='btn mb-2 cart-btn mt-2' onClick={()=>addingtocart(e.id)}>
                                        Add to cart
                                    </button>
                                </div>
                                    </div>
                                </div>      
    
                    )
                })}   
                </div>
            </div>
        ) : <></>}

        {home.length!=0 ? (
            <div className='px-lg-2 py-2 mt-2 product-container'>
                <h3>Best in Home & Furniture</h3>
                <div className="row row-cols-2 row-cols-sm-3 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-2 px-2">
                {home.map((e)=>{

                    return(
                        
                        <div className="col product mt-2 mb-2 "  key={e.id+4}>
                            <div className='card shadow px-2'>                                
                                    <Link to={`/product/${e.id}`} key={e.id} >                             
                                    <div className='w-100 product-image-container mt-2' >
                                    <img src={e.imageUrl}  width="50" height="50"/>
                                    </div>
                                    </Link>
                                <div className="mt-2 mb-2">
                                    {e.name.length>50?
                                    <h5 className='product-name text-decoration-none p-name'>{e.name}...</h5>:
                                    <h5 className='product-name'>{e.name}</h5>
                                    }
                                    
                                    <p className='product-brand'>{e.brand.toUpperCase()}</p>
                                    <span className='rupee'>{money.format(e.price).substring(0,1)}</span><span className='price'>{money.format(e.price).substring(1)}<span className='mrp'>MRP</span></span>
                                    <button className='btn mb-2 cart-btn mt-2' onClick={()=>addingtocart(e.id)}>
                                        Add to cart
                                    </button>
                                </div>
                                    </div>
                                </div>      
                    )
                })}   
                </div>
            </div>
        ) : <></>}

        {Appliances.length!=0 ? (
            <div className='px-lg-2 py-2 mt-2 product-container'>
                <h3>Best in Appliances</h3>
                <div className="row row-cols-2 row-cols-sm-3 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-2 px-2">
                {Appliances.map((e)=>{

                    return(
   
                        <div className="col product mt-2 mb-2 "  key={e.id+5}>
                            <div className='card shadow px-2'>                                
                                    <Link to={`/product/${e.id}`} key={e.id} >                             
                                    <div className='w-100 product-image-container mt-2' >
                                    <img src={e.imageUrl}  width="50" height="50"/>
                                    </div>
                                    </Link>
                                <div className="mt-2 mb-2">
                                    {e.name.length>50?
                                    <h5 className='product-name text-decoration-none p-name'>{e.name}...</h5>:
                                    <h5 className='product-name'>{e.name}</h5>
                                    }
                                    
                                    <p className='product-brand'>{e.brand.toUpperCase()}</p>
                                    <span className='rupee'>{money.format(e.price).substring(0,1)}</span><span className='price'>{money.format(e.price).substring(1)}<span className='mrp'>MRP</span></span>
                                    <button className='btn mb-2 cart-btn mt-2' onClick={()=>addingtocart(e.id)}>
                                        Add to cart
                                    </button>
                                </div>
                                    </div>
                                </div>      
                
                    )
                })}   
                </div>
            </div>
        ) : <></>}

        {beayty.length!=0 ? (
            <div className='px-lg-2 py-2 mt-2 product-container'>
                <h3>Beauty,Toys & More</h3>
                <div className="row row-cols-2 row-cols-sm-3 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-2 px-2">
                {beayty.map((e)=>{

                    return(
            
                        <div className="col product mt-2 mb-2  "  key={e.id+6}>
                            <div className='card shadow px-2'>                                
                                    <Link to={`/product/${e.id}`}  >                             
                                    <div className='w-100 product-image-container mt-2' >
                                    <img src={e.imageUrl}  width="50" height="50"/>
                                    </div>
                                    </Link>
                                <div className="mt-2 mb-2">
                                    {e.name.length>50?
                                    <h5 className='product-name text-decoration-none p-name'>{e.name}...</h5>:
                                    <h5 className='product-name'>{e.name}</h5>
                                    }
                                    
                                    <p className='product-brand'>{e.brand.toUpperCase()}</p>
                                    <span className='rupee'>{money.format(e.price).substring(0,1)}</span><span className='price'>{money.format(e.price).substring(1)}<span className='mrp'>MRP</span></span>
                                    <button className='btn mb-2 cart-btn mt-2' onClick={()=>addingtocart(e.id)}>
                                        Add to cart
                                    </button>
                                </div>
                                    </div>
                                </div>      
                       
                    )
                })}   
                </div>
            </div>
        ) : <></>}



    
    </>
  )
}



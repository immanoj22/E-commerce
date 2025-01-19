import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../Style/Cart.css'
import { Link, useNavigate } from 'react-router-dom';
import { Products } from '../componets/Products'

const Cart = () => {

    const [loading, setLoading] = useState(false);
    const [cartproduct,setcartproduct]=useState([])

    async function getcartproductid() {
        
        try {
            const response = await axios.get("http://localhost:8080/getcartproduct");
            if (response.data.length !== 0) {
                getproductfromcartid(response.data);          
            }
        } catch (e) {
            console.error(e);
        }finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        if (!loading) {        
            getcartproductid();
        }
    }, [loading]);
 
    
    const[productwithmiage,setproductwithimage]=useState([])   
    


    async function getproductfromcartid(response) {

        try{
            const prod=response.map(async(product) => {
                const responses=await axios.get(`http://localhost:8080/product/${product.productid}`)
                return responses.data; 
               
                
            });

            const products = await Promise.all(prod);
            setcartproduct(products);

        }catch(e){
            
        }
    }


    let price=0;
    productwithmiage.map((e)=>{
        price+=e.price;
        
    })
    
    const money=new Intl.NumberFormat("en-us",{
        currency:"INR",
        style:"currency"
    })


    async function removeelementcart(id){
        try{
            await axios.delete(`http://localhost:8080/cartdelete/${id}`)
            await getcartproductid()
        }catch(e){

        }
        
    }

    useEffect(()=>{
        const fetchimage=async()=>{
            if(cartproduct.length>0){
                const updatedproducts=await Promise.all(
                    cartproduct.map(async(product)=>{
                        try{
                            const response = await axios.get(
                                `http://localhost:8080/product/image/${product.id}`,
                                { responseType: "blob" }
                            );
                            const imageUrl = URL.createObjectURL(response.data);
                            return{...product,imageUrl}
                        }
                        catch(e){
                            return { ...product, imageUrl: "placeholder-image-url" };
                        }
                    })
                )  
                setproductwithimage(updatedproducts)
            }           
        }       
        fetchimage()
    },[cartproduct])

   

    


  return (
    <div className="container col-xl-10 col-xxl-8 px-4  py-2 mt-3">
          
      <div className="col-md-12 mx-auto col-lg-5">
        <div className='container main-container '>

            <div className='row  align-items-center main-row mb-5 py-3 px-2   border rounded-3 bg-body-tertiary'>
                
                    <div className='col-12 text-center'>
                        <p className=' font-head'><img src='/images/logo.png' className='image-source' width="80" height="55"/>Buybox Cart</p>
                        {productwithmiage.length > 0 ? (
                            <h6 className='text-start mt-1 mb-1'>Subtotal {money.format(price)}</h6>
                        ):<></>}
                        
                    </div>
                
                    

                    {productwithmiage.length > 0 ? (
                    productwithmiage.map((e) => (
                        <div key={e.id} className='col-10 mt-1 row-row cart-list row-secondary'>
                            <div className='cancell' onClick={() => removeelementcart(e.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-square" viewBox="0 0 16 16">
                                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                                </svg>
                            </div>
                            <div className='row'>
                                <div className='col-4 img-cont'>
                                    <Link to={`/product/${e.id}`} className='cart-image img-fluid img-cont-link'>
                                        <img src={e.imageUrl} className='img-fluid cart-image' alt={e.name} />
                                    </Link>
                                </div>
                                <div className='col-8 cart-details'>
                                    {e.name.length >= 60 ? <p className='p-name'>{e.name}...</p> : <p className='p-name'>{e.name}</p>}
                                    <p className='p-brand'>{e.brand.toUpperCase()}</p>
                                    <p className='p-price'>{money.format(e.price)} <span className='mrp'>MRP</span></p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : <p className='text-center'>your cart is empty</p>}

                {productwithmiage.length > 0 ? (
                    <button className='mt-3 btn btn-order'>Proceed to Buy ({productwithmiage.length} item) </button>
                ):<></>}

                
                </div>
        </div>       
    </div>
</div>
        
    
  )
}
export default Cart

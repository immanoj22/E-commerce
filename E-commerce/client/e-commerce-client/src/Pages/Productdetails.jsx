import React, { useContext, useEffect, useState } from 'react'
import Datacontext from '../Context/Datacontext'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import '../Style/Productdeatils.css'
import Updateproduct from './Updateproduct'



export const Productdetails = () => {
  
    const {id}=useParams()
    const{handleupdateproduct}=useContext(Datacontext)
    const[selectedproduct,setselectedproduct]=useState({})
    const[imageurl,setimageurl]=useState("")

    const money=new Intl.NumberFormat("en-us",{
        currency:"INR",
        style:"currency"
    })

    useEffect(()=>{

        const fetchdata=async()=>{
            const response=await axios.get(`http://localhost:8080/product/${id}`)
            setselectedproduct(response.data)
            fetchimg()
        }

        const fetchimg=async()=>{
            const response=await axios.get(`http://localhost:8080/product/image/${id}`,{
                responseType:"blob"
            })
            setimageurl(URL.createObjectURL(response.data))
        }
        fetchdata()

    },[id])

    let description=selectedproduct.description;
    description=description?description.split('\n').filter(point => point !== ''):[];

    const{allproduct,addingtocart}=useContext(Datacontext)
    const electronics=allproduct.filter((e)=>e.category.includes(selectedproduct.category))
    
    const[product,setproduct]=useState([])

    useEffect(() => {
        
        if (electronics && electronics.length > 0) {
          const fetchImagesAndUpdateProducts = async () => {
            const updatedProducts = await Promise.all(
                electronics.map(async (product) => {
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
    <div className='prod-details-cate' id='prod-details-cate'>
        <div className="container-fluid  col-xxl-8 pb-4 pt-3 ">
        <div className="row   pb-4 px-3 pt-4 product-main-cont">

                <div className="col-12 col-sm-6 col-lg-4 product-cointainer px-1 py-1 mb-3 "  >
                    <img src={imageurl} className="d-block mx-lg-auto img-fluid " alt="Bootstrap Themes" width="500" height="500" loading="lazy" />
                </div>

                <div className="col-lg-6 px-lg-5 px-sm-2 px-2 content ">

                    <div className='edit-button'>
                      <button className='button' onClick={()=>handleupdateproduct(selectedproduct.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="currentColor" className="bi bi-pen" viewBox="0 0 16 16">
                          <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z"/>
                        </svg>
                      </button>
                    </div>

                    <p className="lead margin-para category-prod">{selectedproduct.category}</p>
                    <h3 className="lh-1 mb-1">{selectedproduct.name}</h3>
                    <p className="lead brand-prod">{selectedproduct.brand}</p>
                
                    <p className="lead-p">
                        <span >{money.format(selectedproduct.price).substring(0,1)}</span>
                        <span className='money'> {money.format(selectedproduct.price).substring(1)} </span>
                        <span className='MRP'>MRP</span>
                    </p>

                    <p >Availble Quantity: {selectedproduct.quantity}</p>
                    
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start ">

                        <button type="button" className="btn addcart btn-lg px-4 me-md-2" onClick={()=>addingtocart(selectedproduct.id)}>Add to Cart
                        </button>

                        <button type="button" className="btn addcart btn-lg px-4 me-md-2">Buy Now                          
                        </button>
                    </div>
                    

                    <div className='mt-4'>
                        <h6 className='margin-para mb-1'>About this product : </h6>
                        <ul>
                            {description.map((point, index) => ( 
                                <li key={index}>{point}</li> 
                            ))}
                        </ul>
                    </div>
                </div>
                
                
            </div>
            
        </div>
        <Updateproduct/>
    </div>
    
    </>
  )
}

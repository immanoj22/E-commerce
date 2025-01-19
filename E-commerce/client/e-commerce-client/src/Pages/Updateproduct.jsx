import React, { useContext, useEffect, useState } from 'react'
import Datacontext from '../Context/Datacontext'
import '../Style/Updateproduct.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Updateproduct = () => {
    const {updatatedimage,imagefetched,setimagefetched,setupdatedimage,updateimage,selectedproductforupdate,updatetheproduct}=useContext(Datacontext)
    

    async function fetchimage(selectedproductforupdate){
        const response = await axios.get(
            `http://localhost:8080/product/image/${selectedproductforupdate}`,
            { responseType: "blob" }
        );
        const imagefile =await converUrlToFile(response.data,response.data.filename
        )
        setupdatedimage(imagefile)
        setimagefetched(true)
    }
    const converUrlToFile = async(blobData, fileName) => {
        const file = new File([blobData], fileName, { type: blobData.type });
        return file;
      }
    
    useEffect(()=>{
        if(imagefetched!=true){
            fetchimage(selectedproductforupdate.id)
        }     
    },[imagefetched])

    const nav=useNavigate()

    async function Updateingproduct(e){
        e.preventDefault();
  
        let updatedproductes=new FormData();
        updatedproductes.append("imageFile", updatatedimage)
        updatedproductes.append(
            "product",
            new Blob([JSON.stringify(selectedproductforupdate)], { type: "application/json" })
        )
        await axios.put("http://localhost:8080/product/updateproduct",updatedproductes,{
            headers: {
                "Content-Type": "multipart/form-data",
              },
        }).then((response) => {
            console.log("Product updated successfully:", response.data);
            alert("Product updated successfully!");
          })
          .catch((error) => {
            console.error("Error updating product:", error);
            alert(error);
          });
        nav("/")
    }

    async function deleteproduct(id){
        try{
            await axios.delete(`http://localhost:8080/product/delete/${id}`)
            alert("product deleted successfully")
        }catch(e){
            console.log(e)
        }
        nav("/")
    }
    function handleupdatecancell(){
        document.getElementById("update-cont").style.display="none";
    }

  return (
    <div className='container-fluid add-product-container update-cont pb-5 ' id='update-cont'>
      <div className=' add-product-form py-3 px-4 mb-3 updateprod'>
        <div className='cancell' id='cancellbtn' onClick={handleupdatecancell} >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-square" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
            </svg>
        </div>
          <h5 className='text-center mt-2'>Update the Product</h5>
          <form onSubmit={Updateingproduct} >
            <div className='row'>

              <div className="col-12 mb-2 mt-3 ">
                <label>Product Name</label>
                <input type="text" className='input-form'placeholder='Enter your Product name' value={selectedproductforupdate.name || ''}
                onChange={(e)=>updatetheproduct('name',e.target.value)} required ></input>
              </div>

              <div className="col-lg-4 col-sm-6 col-12 mb-2 mt-2 ">
                <label>Product Brand</label>
                <input type="text" className='input-form' placeholder='Enter the Product brand' value={selectedproductforupdate.brand || ''} 
                onChange={(e)=>updatetheproduct('brand',e.target.value)} required ></input>
              </div>

              <div className="col-lg-4 col-sm-6 col-12 mt-2 mb-2 select-div">
                <label>Product Category</label><br/>
                <select className="form-select select-css " value={selectedproductforupdate.category || ''} onChange={(e)=>updatetheproduct('category',e.target.value)} required >
                    <option value="">Choose Category</option>
                    <option value="Grocery" >Grocery</option>
                    <option value="Mobiles">Mobiles</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Home & Furniture" >Home & Furniture</option>
                    <option value="Appliances">Appliances</option>
                    <option value="Beauty,Toys & More">Beauty,Toys & More</option>
                </select>     
              </div>

              <div className="col-lg-4 col-sm-6 col-12 mb-2 mt-2 ">
                <label>Product Price (₹)</label>
                <input type="number" className='input-form' placeholder='Product Price' onChange={(e)=>updatetheproduct('price',e.target.value)} value={selectedproductforupdate.price || ''} required ></input>
              </div>

              

              <div className="col-lg-6 col-sm-6 col-12 col-lg-4 mb-2 mt-2">
                  <label>Stock Quantity</label><br/>
                  <input type="number" className='input-form me-1' required placeholder='Min:1' onChange={(e)=>updatetheproduct('quantity',e.target.value)} value={selectedproductforupdate.quantity || ''}  ></input>  
              </div>

              <div className="col-lg-6 col-sm-12 col-12 mb-2 mt-2 date-picker-container">
                <label>Release Date</label>
                <div className='calender-cont'>
                    <input type="date" className='input-form px-2' required value={selectedproductforupdate.releasedate || ''} onChange={(e)=>updatetheproduct('releasedate',e.target.value)}  />                            
                </div>
              </div>

              <div className="col-lg-6 col-sm-6 col-12 mb-2 mt-2"  >
                  <label className='mb-1'>Product image</label><br/>
                  <div style={{
                        width: "100%",
                        height: "fit-content",
                        objectFit: "cover",
                        padding: "5px",
                        margin: "0",
                        display:"flex",
                        justifyContent:"center"
                    }}>
                    <img
                    src={updatatedimage ? URL.createObjectURL(updatatedimage) : "Image unavailable"}
                    style={{                     
                        objectFit: "cover",
                        padding: "5px",
                        margin: "0",
                    }}
                    width="80"
                    height="80"
                    />
                  </div>
                  
                  <input type="file" className='input-image me-1'   onChange={updateimage} /> 
              </div>

              <div className="col-lg-6 col-sm-6 col-12 mb-1 mt-2 txtarea" >
                  <label>Product description</label>
                  <textarea type="text"  required rows="5"value={selectedproductforupdate.description || ''} onChange={(e)=>updatetheproduct('description',e.target.value)} className='input-formtext custom-textarea mb-2' placeholder='Please share a description to let the customer know more about your product'></textarea>       
              </div>

              <div className="col-12 mb-2  txtarea" >
                  <input type="checkbox" className='me-1' checked={selectedproductforupdate.isporoductavilable ||''} onChange={(e)=>updatetheproduct("isporoductavilable",e.target.checked)}/>  
                  <label>Product Available ?</label>     
              </div>

              

              <div className='add-product-btn mb-1 '>
                <button type='submit' className='btn save-s me-2' >
                  <div className=' btn-container'>
                      <p className='save-draftp me-2'>Update</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14"  fill="currentColor" className="bi bi-chevron-double-right" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"/>
                      <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"/>
                      </svg>
                  </div>
                </button>
                <button type='button' className='btn save-s ' onClick={()=>deleteproduct(selectedproductforupdate.id)} >
                  <div className=' btn-container'>
                      <p className='save-draftp me-2'>Delete</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                        </svg>
                  </div>
                </button>
              </div>

            </div>

          </form>
      </div>
    </div>
  )
}
export default Updateproduct

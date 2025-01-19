import React, { useContext } from 'react'
import Datacontext from '../Context/Datacontext';
import '../Style/Seller.css'

const Seller = () => {
    const {setnewproduct,handleaddingimage,addingnewproduct,newproduct,updatenewproduct}=useContext(Datacontext)

  return (
    <>
    <div className='container-fluid add-product-container '>
      <div className=' add-product-form py-3 px-3 mb-3'>
          <h5 className='text-center mt-2'>Sell your own product</h5>
          <form onSubmit={addingnewproduct} >
            <div className='row'>

              <div className="col-12 mb-2 mt-3 ">
                <label>Product Name</label>
                <input type="text" className='input-form'placeholder='Enter your Product name' value={newproduct.name}
                onChange={(e)=>updatenewproduct('name',e.target.value)} required ></input>
              </div>

              <div className="col-lg-4 col-sm-6 col-12 mb-2 mt-2 ">
                <label>Product Brand</label>
                <input type="text" className='input-form' placeholder='Enter the Product brand' value={newproduct.brand} 
                onChange={(e)=>updatenewproduct('brand',e.target.value)} required ></input>
              </div>

              <div className="col-lg-4 col-sm-6 col-12 mt-2 mb-2 select-div">
                <label>Product Category</label><br/>
                <select className="form-select select-css " value={newproduct.category} onChange={(e)=>updatenewproduct('category',e.target.value)} required >
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
                <input type="number" className='input-form' placeholder='Product Price' onChange={(e)=>updatenewproduct('price',e.target.value)} value={newproduct.price} required ></input>
              </div>

              

              <div className="col-lg-4 col-sm-6 col-12 col-lg-4 mb-2 mt-2">
                  <label>Stock Quantity</label><br/>
                  <input type="number" className='input-form me-1' required placeholder='Min:1' onChange={(e)=>updatenewproduct('quantity',e.target.value)} value={newproduct.quantity}  ></input>  
              </div>

              <div className="col-lg-4 col-sm-6 col-12 mb-2 mt-2 date-picker-container">
                <label>Release Date</label>
                <div className='calender-cont'>
                    <input type="date" className='input-form px-2' required value={newproduct.releasedate} onChange={(e)=>updatenewproduct('releasedate',e.target.value)}  />                            
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 col-12 mb-2 mt-2">
                  <label>Product image</label><br/>
                  <input type="file" className='input-image me-1' required onChange={handleaddingimage}  ></input>  
              </div>

              <div className="col-12 mb-1 mt-2 txtarea" >
                  <label>Product description</label>
                  <textarea type="text"  required rows="3"value={newproduct.description} onChange={(e)=>updatenewproduct('description',e.target.value)} className='input-formtext custom-textarea mb-2' placeholder='Please share a description to let the customer know more about your product'></textarea>       
              </div>

              <div className="col-12 mb-2  txtarea" >
                  <input type="checkbox" className='me-1' checked={newproduct.isporoductavilable} onChange={(e)=>setnewproduct({...newproduct,isporoductavilable:e.target.checked})}/>  
                  <label>Product Available ?</label>     
              </div>

              <div className='add-product-btn mb-1 '>
                <button type='submit' className='btn save-s ' >
                  <div className=' btn-container'>
                      <p className='save-draftp '>Publish</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14"  fill="currentColor" className="bi bi-chevron-double-right" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"/>
                      <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"/>
                      </svg>
                  </div>
                </button>
              </div>

            </div>

          </form>
      </div>
    </div>
    </>
  )
}
export default Seller

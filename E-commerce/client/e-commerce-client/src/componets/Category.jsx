import React, { useContext } from 'react'
import '../Style//Category.css'
import { Link, useNavigate } from 'react-router-dom'
import Datacontext from '../Context/Datacontext'

const Category = () => {
  const{Categorylist}=useContext(Datacontext)

  return (
    <> 
   
    <div className=" category overflow-auto py-2 py-lg-1">
      

      <Link to="/category/Grocery" className='text-dark' onClick={()=>Categorylist("Grocery")}>
        <div className="image-container-category me-3 first-category " >
          <img  alt="Grocery" src="https://rukminim2.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100" />

          <h6>Grocery</h6>

        </div>
      </Link>

      <Link to="/category/Mobiles" className='text-dark' onClick={()=>Categorylist("Mobiles")}>
      <div className="image-container-category me-3 " >
        <img className="_2puWtW _3a3qyb" alt="Grocery" src="https://rukminim2.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png?q=100" />

        <h6>Mobiles</h6>

      </div>
      </Link>

      <Link to="/category/Fashion" className='text-dark' onClick={()=>Categorylist("Fashion")}>
      <div className="image-container-category me-3" >
        <img className="_2puWtW _3a3qyb" alt="Grocery" src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/0d75b34f7d8fbcb3.png?q=100" />

        <h6>Fashion</h6>

      </div>
      </Link>

      <Link to="/category/Electronics" className='text-dark' onClick={()=>Categorylist("Electronics")}>
      <div className="image-container-category me-3 " >
        <img className="_2puWtW _3a3qyb" alt="Grocery" src="https://rukminim2.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100" />

        <h6>Electronics</h6>
      </div>
      </Link>

      <Link to="/category/Home&Furniture" className='text-dark' onClick={()=>Categorylist("Home & Furniture")}>
      <div className="image-container-category me-3 ">
        <img className="_2puWtW _3a3qyb" alt="Grocery" src="https://rukminim2.flixcart.com/flap/64/64/image/ab7e2b022a4587dd.jpg?q=100" />
        <h6>Home & Furniture</h6>
      </div>
      </Link>

      <Link to="/category/Appliances" className='text-dark' onClick={()=>Categorylist("Appliances")}>
      <div className="image-container-category me-3" >
        <img className="_2puWtW _3a3qyb" alt="Grocery" src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/0139228b2f7eb413.jpg?q=100" />
        <h6>Appliances</h6>
      </div>
      </Link>

      <Link to="/category/Beauty&Toys&more" className='text-dark' onClick={()=>Categorylist("Beauty,Toys & More")}>
      <div className="image-container-category me-3 " >
        <img className="_2puWtW _3a3qyb" alt="Grocery" src="https://rukminim2.flixcart.com/flap/64/64/image/dff3f7adcf3a90c6.png?q=100" />
        <h6>Beauty,Toys & more</h6>
      </div>
      </Link>

      

      

      

      

      

      

      

    </div>
  
    </>
  )
}
export default Category

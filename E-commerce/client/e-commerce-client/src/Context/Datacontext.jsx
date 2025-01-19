import React, { Children, useEffect, useState } from 'react'
import { createContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Datacontext=createContext({})

export const DataProvider = ({children}) => {
    const[newproduct,setnewproduct]=useState({
      name:'',
      brand:'',
      category:'',
      price:'',
      quantity:'',
      releasedate:'',
      description:'',
      isporoductavilable:false
    })
    const[productimage,setproductimage]=useState(null)

    function updatenewproduct(name,value){
      setnewproduct({...newproduct,[name]:value})
    }

    const navigate=useNavigate()

    async function addingnewproduct(e){
      e.preventDefault()
      const formdata=new FormData();
      const productblob=new Blob([JSON.stringify(newproduct)],{type:"application/json"})
      formdata.append("imageFile",productimage)
      formdata.append("product",productblob )
      try{
        await axios
      .post("http://localhost:8080/addproduct", formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
       })
       setnewproduct({
        name:'',
        brand:'',
        category:'',
        price:'',
        quantity:'',
        releasedate:'',
        description:'',
        isporoductavilable:false
       })

      }catch(e){
        window.alert("Error happened:"+e)
      }    
      navigate("/")
      getallproducts()

    }
    const[allproduct,setallproduct]=useState([])

    useEffect(()=>{
      getallproducts()
      getcartproductid()
    },[])




    async function getallproducts(){
      try{

        const response=await axios.get("http://localhost:8080/")
        setallproduct(response.data)
        
      }catch(e){

      }
    }

    const[cartprodlength,setcartprodlength]=useState(0)

    async function getcartproductid() {
        
      try {
          const response = await axios.get("http://localhost:8080/getcartproduct");
          const data=response.data;
          setcartprodlength(data.length);
          
      } catch (e) {
          console.error(e);
      }
  }
  useEffect(()=>{
    getcartproductid()
  },[cartprodlength])
   

    function handleaddingimage(e){
      setproductimage(e.target.files[0])
      console.log(e.target.files[0])
    }

    const[category,setcategory]=useState([])
    const [categorylist,setcategorylist]=useState('');
    function Categorylist(category){
      const filteredcategory=allproduct.filter((e)=>e.category.includes(category));
      setcategory(filteredcategory)
      setcategorylist(category)
    }

    useEffect(()=>{
      console.log(category)
    },[category])
    

    async function addingtocart(productids){
      try{
        const response=await axios.post("http://localhost:8080/cartprod",{productid:productids})
        window.alert(response.data)
      }catch(e){
        window.alert(response.data)
      }
        
    }

    const[selectedproductforupdate,setselectedproductforupdate]=useState({})
    const[updatatedimage,setupdatedimage]=useState(null)
    const[imagefetched,setimagefetched]=useState(true)

    function updateimage(e){
      setupdatedimage(e.target.files[0])
    }
    async function handleupdateproduct(selectedproduct){
      const response=await axios.get(`http://localhost:8080/product/${selectedproduct}`)
      setselectedproductforupdate(response.data)

      document.getElementById('update-cont').style.display='flex';
      setimagefetched(false)

    }
    function updatetheproduct(element,value){
      setselectedproductforupdate({...selectedproductforupdate,[element]:value})
    }
 
    
  
   

  return (
    <Datacontext.Provider value={{updatatedimage,imagefetched,setimagefetched,setupdatedimage,updateimage,updatetheproduct,selectedproductforupdate,handleupdateproduct,cartprodlength,addingtocart,categorylist,category,Categorylist,allproduct,getallproducts,allproduct,setnewproduct,handleaddingimage,addingnewproduct,newproduct,updatenewproduct}} >
        {children}
    </Datacontext.Provider>
  )
}
export default Datacontext

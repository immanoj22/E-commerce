import react from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Header from './componets/Header'
import Seller from './Pages/Seller'
import { DataProvider } from './Context/Datacontext'
import { Productdetails } from './Pages/Productdetails'
import ProductCategory from './Pages/ProductCategory'
import Cart from './Pages/Cart'



function App() {
  

  return (
    <>
    <DataProvider>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sell' element={<Seller/>}/>
        <Route path="product/:id" element={<Productdetails/>} />

        <Route path="/category/Grocery" element={<ProductCategory/>} />
        <Route path="/category/Mobiles" element={<ProductCategory/>} />
        <Route path="/category/Fashion" element={<ProductCategory/>} />
        <Route path="/category/Electronics" element={<ProductCategory/>} />
        <Route path="/category/Home&Furniture" element={<ProductCategory/>} />
        <Route path="/category/Appliances" element={<ProductCategory/>} />
        <Route path="/category/Beauty&Toys&more" element={<ProductCategory/>} />

        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </DataProvider>
    
    
      
    </>
  )
}

export default App

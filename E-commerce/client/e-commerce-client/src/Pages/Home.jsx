import React from 'react'
import '../Style/Home.css'
import Heroimage from '../componets/Heroimage'
import Category from '../componets/Category'
import { Products } from '../componets/Products'


const Home = () => {
  return (
    <>
    <div className='main-cont container-fluid py-3 '>
        <Category/>
        <Heroimage/>
        <Products/>
    </div>
           
    </>
  )
}
export default Home
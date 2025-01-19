import React from 'react'
import '../Style/Heroimage.css'

const Heroimage = () => {
  return (
    <>
    <div className='image-outer'>
            <div id="carouselExampleFade" className="carousel slide carousel-fade product-cont  " data-bs-ride="carousel">
                <div className="carousel-inner image-height ">
                    <div className="carousel-item image-height active">
                        <img src="https://m.media-amazon.com/images/G/31/img22/Baby/cnnjpp1/Baby/Consrevamp/premuim_pc._SX3000_QL85_FMpng_.png" className="d-block w-100 img-fluid image-height" alt="..."/>
                    </div>
                    
                    <div className="carousel-item image-height">
                        <img src="https://m.media-amazon.com/images/G/31/img22/Baby/cnnjpp1/Baby/Consrevamp/new-pet_store_pc._SX3000_QL85_FMpng_.png" className="d-block w-100 img-fluid image-height" alt="..."/>
                    </div>
                    
                </div>

                <button className="carousel-control-prev carsoulbtn" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" className="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                    </svg>
                </button>
                
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" className="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                </button>
            </div>
        </div>
        
    </>
  )
}
export default Heroimage

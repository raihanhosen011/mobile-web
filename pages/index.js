import OwlCarousel from 'react-owl-carousel3';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { DesktopComputerIcon } from '@heroicons/react/outline'
import { DeviceMobileIcon,CameraIcon,ClockIcon,PrinterIcon } from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/outline'
import { products,popular } from '../data'

import { useState } from 'react';
import { useRouter } from 'next/router';

import AllProductSlider from '../components/ProductStore'
import Cetegory from '../components/Cetegory'
import BennarSlider from '../components/BennarSlider'
import SingleProduct from '../components/SingleProduct'
import BestSellerCard from '../components/BestSellerCard'
import ProductFilterCard from '../components/ProductFilterCard';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

export default function index() {
  const [responsibeCetegory] = useState({0: {items: 3},600:{items: 4},800:{items: 5},1000: {items: 6},1200: {items: 8}})
  const [responsibeArrivals] = useState({0: {items: 1},700:{items: 3},800:{items: 4},1000: {items: 5}})
  const [responsibeSellers] = useState({0: {items: 1},700:{items: 2},1000: {items: 3}})
  const router = useRouter()

  return (
    <>
     <div className='home' >
       <Header/>

      <section className='hero' >
        <Hero/>
      </section>

       <div className='home_products' >
        {/* Our Product Filter section  */}
         <section className='py-4 mb-5' >
            <div className='max-width px-3 position-relative z-20' >
              <div className='pb-2 border-bottom' >
                <h5>Our Product Filter</h5>
              </div>
              <div className='row justify-content-center' >
                <ProductFilterCard name='Computer & Etc' lName='Buy Now' icon={<DesktopComputerIcon className='w-26 text-primary' />} />
                <ProductFilterCard name='Mobile & accecory' lName='visit' icon={<DeviceMobileIcon className='w-26 text-primary' />} />
                <ProductFilterCard name='Best laptops' lName='see more' icon={<HomeIcon className='w-26 text-primary' />} />
                <ProductFilterCard name='All Cameras' lName='Buy Now' icon={<CameraIcon className='w-26 text-primary' />} />
                <ProductFilterCard name='Smart Clock' lName='visit' icon={<ClockIcon className='w-26 text-primary' />} />
                <ProductFilterCard name='All Brand Printer' lName='see more' icon={<PrinterIcon className='w-26 text-primary' />} />
              </div>              
            </div>
          </section>

          {/* First Product Slider */}
          <AllProductSlider products={products} />
          
          {/* Popular Cetegory Section  */}
          <section className='popular_category max-width px-3 my-4' >
            <h4 className='py-2 mb-2 border-bottom' >Popular Cetegory -</h4>
            <div className='d-flex' >
              <OwlCarousel  responsive={responsibeCetegory} stagePadding={100} navs className="owl-theme" autoplay autoplayTimeout={5000} loop margin={8} >  
                  {popular.map(({name,img}) => 
                    <Cetegory name={name} img={img} />  
                  )}
              </OwlCarousel> 
            </div>
          </section>  

          {/* Offered Bennar with slider component */}
          <BennarSlider/> 

          {/* "Hot New Arrivals" - section  */}
          <section className='best_arriaval max-width px-3 my-5' >
            <div className='navs pb-2 mb-2 d-flex align-items-center justify-content-between border-bottom' >
              <h5 onClick={() => router.push('/wishlist')} >Hot New Arrivals</h5>
              <div className='navs_items d-flex text-secondary' >
                <p className='me-4 pointer mb-0 pb-2 act' >Top 20</p>
                <p className='me-4 pointer mb-0 pb-2' >Audio & Video</p>
                <p className='pointer mb-0 pb-2' >Laptop & computers</p>
              </div>
            </div>
            <div className='best_seler_carousle' >
              <OwlCarousel responsive={responsibeArrivals} items={4} className="owl-theme" autoplay autoplayTimeout={5000} loop margin={8} >  
              {                
                products?.slice(10,products.length).map(({id,title,price,description,category,image}) => 
                  <SingleProduct
                    id={id} key={id} title={title} description={description} price={price} category={category} image={image}
                  /> 
                )
              }
              </OwlCarousel> 
            </div>
          </section>    
          
          {/* "Hot Best Seller" - Section  */}
          <section className='best_sellers position-relative bg-brown py-4 my-5' >
            <div className='max-width px-3 position-relative z-20' >
              <div className='pb-2 border-bottom' >
                <h5>Hot Best Sellers</h5>
              </div>
              <div className='best_seler_carousle' >
                <OwlCarousel responsive={responsibeSellers} className="owl-theme" autoplay autoplayTimeout={5000} loop margin={8} >  
                  <div>
                    {                
                    products?.slice(10,12).map(({id,title,price,category,image}) => 
                      <BestSellerCard
                        id={id} key={id} title={title} price={price} category={category} image={image}
                      /> 
                    )
                    }                    
                  </div>
                  <div>
                    {                
                    products?.slice(13,15).map(({id,title,price,category,image}) => 
                      <BestSellerCard
                        id={id} key={id} title={title} price={price} category={category} image={image}
                      /> 
                    )
                    }                    
                  </div>
                  <div>
                    {                
                    products?.slice(16,18).map(({id,title,price,category,image}) => 
                      <BestSellerCard
                        id={id} key={id} title={title} price={price} category={category} image={image}
                      /> 
                    )
                    }                    
                  </div>
                </OwlCarousel> 
              </div>
            </div>
          </section>

          {/* Footer section */}
          <Footer/>

       </div>
     </div>
    </>
  )
}

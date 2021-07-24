import { CameraIcon, ClockIcon, DesktopComputerIcon, DeviceMobileIcon, HomeIcon, PrinterIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useState } from 'react';
import OwlCarousel from 'react-owl-carousel3';
import BennarSlider from '../components/BennarSlider';
import BestSellerCard from '../components/BestSellerCard';
import Cetegory from '../components/Cetegory';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductFilterCard from '../components/ProductFilterCard';
import AllProductSlider from '../components/ProductStore';
import SingleProduct from '../components/SingleProduct';
import { popular, products } from '../data';

export default function Index() {
  const [ResponsibeCetegory] = useState({0: {items: 3},600:{items: 4},800:{items: 5},1000: {items: 6},1200: {items: 8}})
  const [ResponsibeArrivals] = useState({0: {items: 1},700:{items: 3},800:{items: 4},1000: {items: 5}})
  const [ResponsibeSellers] = useState({0: {items: 1},700:{items: 2},1000: {items: 3}})
  const Router = useRouter()

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
          <h4 className='py-2 mb-2 max-width border-bottom' >Popular Cetegory -</h4>
          <section className='popular_category bg-brown px-3 my-4' >
            <div className='max-width' >
              
              <div className='d-flex popular-cat-bg' >
                <OwlCarousel  responsive={ResponsibeCetegory} stagePadding={100} navs className="owl-theme" autoplay autoplayTimeout={5000} loop margin={8} >  
                    {popular.map(({name,img,id}) => 
                      <Cetegory key={id} name={name} img={img} />  
                    )}
                </OwlCarousel> 
              </div>    
                        
            </div>
          </section>  

          {/* Offered Bennar with slider component */}
          <BennarSlider/> 

          {/* "Hot New Arrivals" - section  */}
          <section className='best_arriaval max-width px-3 my-5' >
            <div className='navs pb-2 mb-2 d-flex align-items-center justify-content-between border-bottom' >
              <h5 onClick={() => Router.push('/wishlist')} >Hot New Arrivals</h5>
              <div className='navs_items d-flex text-secondary' >
                <p className='me-4 pointer mb-0 pb-2 act' >Top 20</p>
                <p className='me-4 pointer mb-0 pb-2' >Audio & Video</p>
                <p className='pointer mb-0 pb-2' >Laptop & computers</p>
              </div>
            </div>
            <div className='best_seler_carousle' >
              <OwlCarousel responsive={ResponsibeArrivals} items={4} className="owl-theme" autoplay autoplayTimeout={5000} loop margin={8} >  
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
                <OwlCarousel responsive={ResponsibeSellers} className="owl-theme" autoplay autoplayTimeout={5000} loop margin={8} >  
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

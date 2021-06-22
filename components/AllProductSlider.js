import OwlCarousel from 'react-owl-carousel3';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import SingleProduct from '../components/SingleProduct'
import SliderNavs from '../components/SliderNavs'
import { useState } from 'react';

export default function AllProductSlider({col,products}) {
    const [state,setState] = useState({
        0: {
            items: 1,
        },
        450: {
            items: 1,
        },
        600: {
            items: 2,
        },
        600: {
            items: 3,
        },
        1200: {
            items: 4,
        },
    })

  return (
    <>
      <div className={`all_product_slider ${col}`} >
        <SliderNavs/>
        <OwlCarousel className="owl-theme" items={4} autoplay responsive={state} autoplayTimeout={7000} loop margin={8} responsiveClass={true} >  
          {                
            products?.slice(1,10).map(({id,title,price,description,category,image}) => 
              <SingleProduct
                id={id} key={id} title={title} price={price} description={description} category={category} image={image}
              /> 
            )
          }
        </OwlCarousel>  
      </div>
    </>
  );
}
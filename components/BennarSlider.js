import OwlCarousel from 'react-owl-carousel3';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import Bennar from '../components/Bennar'

export default function BennarSlider() {
    return (
        <>
         <div className='bennar bg-brown position-relative py-5 my-3' >
         <div className='shape' />
            <OwlCarousel className="owl-theme" items={1} autoplay autoplayTimeout={5000} loop margin={8} >     
              <Bennar/>    
              <Bennar/>    
              <Bennar/>    
            </OwlCarousel> 
          </div>
        </>
    )
}

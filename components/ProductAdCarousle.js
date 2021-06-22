import OwlCarousel from 'react-owl-carousel3';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import ProductAdd from '../components/ProductAdd'

export default function ProductAdCarousle({col}) {
    return (
        <div className={`Product_Ad_Carousle ${col}`}  >
            <OwlCarousel items={1} className="owl-theme" autoplay autoplayTimeout={5000} loop margin={8} >  
                <div><ProductAdd/></div>    
                <div><ProductAdd/></div>    
                <div><ProductAdd/></div>    
                <div><ProductAdd/></div>    
            </OwlCarousel>   
        </div>
    )
}
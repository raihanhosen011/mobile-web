import { ShoppingCartIcon } from '@heroicons/react/outline'
import Images from 'next/image'
import { useDispatch, useSelector } from "react-redux"
import Rating from '../components/Rating'
import { addProducts } from '../slices/BasketSlice'

export default function Wishlist() {
    const fav = useSelector(stat => stat.basket.favo)
    const dispatch = useDispatch()
    
    return (
        <div className='wishlist p-5' >
          <div className='border w-75 mx-auto bg-white p-3' >
          <h5 className='mb-0' >Your Favourite Products</h5>
          <hr/>
          {
            fav.map(({id,title,price,description,category,image}) => 
            <div key={id} className='item d-flex border p-2 mb-2' >
              <div className='item_image w-25 p-2' >
                <Images className='w-100 h-100 object-contain' src={image} width={100} height={100} alt='..' />
              </div>
              <div className='item_info w-75' >
                <p className='mb-0 fs-11 text-secondary' >{category}</p>
                <h5 className='fw-550 text-primary mb-2 text-clamp-1' >{title}</h5>
                <p className='text-clamp-2 mb-1' >{description}</p>
            
                <Rating/>
                
                <div className='d-flex align-items-center justify-content-between' >
                    <p className='fw-bold tomato mb-0 me-1' > ${price}</p>
                    <button onClick={() => dispatch(addProducts({id,title,price,description,category,image}))} className='btn shoping_btn border rounded bg-primary text-white mx-2 d-flex align-items-center text-secondary' >
                      <ShoppingCartIcon className='w-20' />
                    <p className='add_cart mb-0 ms-1 fs-12' >Add to Cart</p>                
                    </button>
                </div>
                
              </div>
            </div>        
             )
            }
          </div>
        </div>
    )
}

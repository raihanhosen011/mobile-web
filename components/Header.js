import { HeartIcon,ShoppingBagIcon } from '@heroicons/react/outline'
import { useSelector } from 'react-redux'
import ShowProducts from '../components/ShowProducts'
import ItemsPopup from '../components/ItemsPopup'
import { useRouter } from 'next/router'

export default function Header() {
   const products = useSelector(stat => stat.basket.items)
   const favourit = useSelector(stat => stat.basket.favo)
   const router = useRouter()

    return (
        <>
          <div className='header px-3 py-3 border-bottom' >
            <div className='max-width d-flex align-items-center justify-content-between' >
              <div onClick={() => router.push('/')} className='header_right pointer' >
                 <img className='image-fluid object-contain' src='https://skybluewaves.com/wp-content/uploads/2017/10/Layer-2d.png' width="120px" alt='...' /> 
              </div>
              <div className='header_left d-flex' >
                <div className='header_wishlist position-relative pointer me-1' >
                  <HeartIcon className='w-26' />
                  <p className='counter mb-0' >{favourit.length}</p>
                  <ItemsPopup/>
                </div>
                <p className='mb-0' >Wishlist</p>
                <div className='Header_basket position-relative pointer ms-4 me-1' >
                  <ShoppingBagIcon onClick={() => router.push('/chackout')}  className='w-26' />
                  <p className='counter mb-0' >{products.length}</p>
                  <ShowProducts/>
                </div> 
                <p className='mb-0' >Basket</p>
             </div>
            </div>

          </div>
        </>
    )
}

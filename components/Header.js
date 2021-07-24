import { HeartIcon, ShoppingBagIcon } from '@heroicons/react/outline'
import Images from 'next/image'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import ItemsPopup from '../components/ItemsPopup'
import ShowProducts from '../components/ShowProducts'

export default function Header() {
   const products = useSelector(stat => stat.basket.items)
   const favourit = useSelector(stat => stat.basket.favo)
   const router = useRouter()

    return (
        <>
          <div className='header px-3 py-3 border-bottom' >
            <div className='max-width d-flex align-items-center justify-content-between' >
              <div onClick={() => router.push('/')} className='header_right pointer' >
                 <Images className='image-fluid object-contain' src='/images/logo.png' width={120} height={30} alt='...' /> 
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

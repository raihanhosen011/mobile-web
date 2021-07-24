import { EyeIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import { HeartIcon, StarIcon } from '@heroicons/react/solid'
import Images from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Currency from 'react-currency-formatter'
import { useDispatch } from 'react-redux'
import { addFavourite, addProducts, remFavourite } from '../slices/BasketSlice'

export default function ProductStore({id,title,price,description,category,image}) {
    const [heart,setHeart] = useState(false)
    const [rating] = useState(Math.floor(Math.random() * (5 - 1 + 1)) + 1)
    const dispatch = useDispatch()
    const router = useRouter()

    const handle_click = () => {
      const produc = {id,title,price,description,category,image} 
      dispatch(addProducts(produc))
    }

    const addHeart = () => {
      const addFav = {id,title,price,description,category,image}

      setHeart(!heart)
      dispatch(heart == false ? addFavourite(addFav) : remFavourite(id))
    }

    return (
      <>
        <div className='arrivals_slider_item mx-auto border rounded p-2 p-1' >
          <div className='image_wrapper image_product p-3 w-100' >
            <Images className='object-contain' src={image} width={100} height={100} alt='...' />
          </div>

          <div className='product_body text-center' >
            <p className='mb-0 fs-11 text-secondary' >{category}</p>
            <h6 className='fw-550 fs-14 mb-2 text-clamp-1' >{title}</h6>

            <div className="product-rating mb-1 justify-content-center color-rating d-flex">
              {Array(rating)
                .fill()
                .map(() => (
                  <StarIcon key={rating} className="w-15" />
              ))}
            </div>

            <div className='prices d-flex align-items-center justify-content-center' >
              <p className='fw-bold tomato me-1' > <Currency quantity={price}  currency="USD" /></p>
              <p className='fs-11 text-secondary text-decoration-line-through' >${Math.floor(price + 34)}</p>
            </div>

            <div className='product_btns pt-2 d-flex justify-content-center text-secondary border-top' >
              <HeartIcon onClick={addHeart} className={`w-20 pointer ${heart && 'red'}`} />
              
              <button onClick={handle_click} className='btn shoping_btn border rounded py-1 mx-2 d-flex text-secondary' >
                <ShoppingCartIcon className='w-20' />
                <p className='add_cart mb-0 ms-1 fs-12' >Add Cart</p>                
              </button>

              <EyeIcon onClick={() => router.push(`/${id}`)} className='w-20 pointer' />
            </div>

          </div>

          <div className='add_cart' >
            
          </div>
        </div>
      </>
   )
}
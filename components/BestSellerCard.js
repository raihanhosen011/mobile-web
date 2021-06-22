import { StarIcon } from '@heroicons/react/solid'
import { useState } from 'react'

export default function BestSeller({id,title,price,category,image}) {
  const [rating] = useState(Math.floor(Math.random() * (5 - 1 + 1)) + 1)

  return <>
    <div className='best_seller my-3 d-flex align-items-center p-2 me-2 bg-white rounded-3' >
      <div className='best_Seller_image' >
         <img className='h-100 w-100 image-fluid' src={image} alt='...' />
      </div>
      <div className='info' >
        <p className='mb-0 fs-11 text-secondary' >{category}</p>
        <h5 className='fw-550 text-clamp-1' >{title}</h5>
        <div className="product-rating mb-2 color-rating d-flex">
           {Array(rating)
             .fill()
             .map(() => (
               <StarIcon className="w-15" />
           ))}
        </div>
        <div className='prices d-flex align-items-center' >
          <p className='fw-bold tomato me-1' >${price}</p>
          <p className='fs-11 text-secondary text-decoration-line-through' >${Math.floor(price + 34)}</p>
        </div>
      </div>
    </div>
  </>
}
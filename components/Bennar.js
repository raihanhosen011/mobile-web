import { StarIcon } from '@heroicons/react/solid'
import Images from 'next/image'
import { useState } from 'react'

export default function Bennar() {
    const [rating] = useState(Math.floor(Math.random() * (5 - 1 + 1)) + 1)

    return (
        <>
            <div className='row z-20 position-relative max-width align-items-center px-3' >
              
              <div className='col-lg-4 col-md-6' >
                <p className='mb-0 fs-12 text-secondary' >Laptops</p>
                <h4 className='fw-bold' >MackBook Air 13</h4>
                <p className='mt-4 mb-3 fs-18 text-secondary' >
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Maecenas fermentum laoreet.
                </p>
                <div className="product-rating mb-3 color-rating d-flex">
                  {Array(rating)
                    .fill()
                    .map(() => (
                      <StarIcon key={rating} className="w-15" />
                  ))}
                </div>
                <button className='btn bg-primary text-white' >Explore</button>
              </div>

              <div className='col-lg-8 col-md-6' >
                <div className='banner_2_image mt-5 mt-md-0' >
                  <Images className='h-100 w-100 image-fluid' src='/images/bennar-2.webp' width={100} height={50} />
                </div>
              </div>
            
            </div>
        </>
    )
}

import { XCircleIcon } from '@heroicons/react/outline'
import Images from 'next/image'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import Rating from '../components/Rating'
import { remProducts } from '../slices/BasketSlice'

export default function WIshlistPopup() {
  const dispatch = useDispatch()
  const stat = useSelector(stat => stat.basket.items)
  const router = useRouter()

  return (
    <>
      <div className='show_product wishlist_popup position-absolute z-200' >
        {stat.length != 0 ? (
          <div className='data p-3 border m-auto bg-white' >
           <h5 className='mb-0 fw-550' >Your Product items</h5>
           <hr/>
            {stat.slice(0,3).map(({id,title,price,image}) => 

                <div key={id} className='item border border m-2 d-flex p-2' >
                  <div className='item_img me-3 w-25' >
                    <Images src={image} width={100} height={100} alt='...' />   
                  </div>
                  <div className='item_data w-75' >
                    <h6 className='text-clamp-1' >{title}</h6>
                    <Rating/>
                    <p className='fw-bold tomato me-1' >${price}</p>
                  </div>
                  <XCircleIcon onClick={() => dispatch(remProducts(id))} className='w-20 circle_icon pointer' />
                </div>
            )}
            {
              stat.length > 1 &&  <div className='d-flex justify-content-center' >
                <button className='btn py-0 w-25 mx-auto border' onClick={() => router.push('/chackout')} >See all</button>              
              </div>
            }

            </div>
          ) : (
            <div className='border bg-white mx-auto m-2' >
              <h6 className='m-2 text-center' >No Product Items found</h6>
            </div>
          )
         }
        </div>
    </>
  )
}

import Rating from './Rating'
import { XCircleIcon } from '@heroicons/react/outline'
import { useDispatch, useSelector } from 'react-redux'
import { remFavourite } from '../slices/BasketSlice'
import { useRouter } from 'next/router'

export default function WIshlistPopup() {
  const dispatch = useDispatch()
  const stat = useSelector(stat => stat.basket.favo)
  const router = useRouter()

  return (
    <>
      <div className='wishlist_popup position-absolute z-200' >
        {stat.length != 0 ? (
          <div className='data p-3 border m-auto bg-white' >
           <h5 className='mb-0 fw-550' >Your favourit items</h5>
           <hr/>
            {stat.slice(0,3).map(({id,title,price,image}) => 

                <div className='item border border m-2 d-flex p-2' >
                  <div className='item_img me-3 w-25' >
                    <img className='w-100 h-100' src={image} alt='...' />   
                  </div>
                  <div className='item_data w-75' >
                    <h6 className='text-clamp-1' >{title}</h6>
                    <Rating/>
                    <p className='fw-bold tomato me-1' >${price}</p>
                  </div>
                  <XCircleIcon onClick={() => dispatch(remFavourite(id))} className='w-20 circle_icon pointer' />
                </div>
            )}
            {
              stat.length > 1 &&  <div className='d-flex justify-content-center' >
                <button className='btn py-0 w-25 mx-auto border' onClick={() => router.push('/wishlist')} >See all</button>              
              </div>
            }

            </div>
          ) : (
            <div className='border bg-white mx-auto m-2' >
              <h6 className='m-2 text-center' >No Favourite Items found</h6>
            </div>
          )
         }
        </div>
       </>
  )
}

import { BadgeCheckIcon, TrashIcon } from '@heroicons/react/solid';
import Images from 'next/image';
import { useRouter } from 'next/router';
import Currency from 'react-currency-formatter';
import { useDispatch, useSelector } from 'react-redux';
import Rating from '../components/Rating';
import { remProducts, subTotal } from '../slices/BasketSlice';

export default function Chackout() {
    const BaskItem = useSelector(stat => stat.basket.items)
    const router = useRouter()
    const dispatch = useDispatch()
    const total = useSelector(subTotal)

    if (BaskItem.length == 0) {
      return <div className='w-100 p-3 m-2 text-center border' >
          <h2> No Items Here </h2>
          <button className='btn bg-primary border rounded text-white' onClick={() => router.push('/')} >Home page</button>
      </div>
    }
    else{
        return (
            <>
              <div className='chackout bg-brown p-4' >
                <div className='row' >
                  <div className='col-lg-9' >
                    <div className='bg-white p-2 py-4 border' >
                    <h5 className='mb-0' >Chackout Item</h5>
                    <hr/>
                    {
                     BaskItem.map(({id,title,price,description,category,image}) => 
                      <div key={id} className='item d-flex border p-2 mb-2' >
                        <div className='item_image d-flex align-items-center justify-content-center w-25 p-2' >
                          <Images className='w-100 h-100 object-contain' src={image} height={100} width={100} alt='..' />
                        </div>
                        <div className='item_info w-75' >
                          <p className='mb-0 fs-11 text-secondary' >{category}</p>
                          <h5 className='fw-550 text-primary mb-2 text-clamp-1' >{title}</h5>
                          <p className='text-clamp-2 mb-1' >{description}</p>

                          <Rating/>
                          
                          <div className='d-flex align-items-center justify-content-between' >
                              <p className='fw-bold tomato mb-0 me-1' > <Currency quantity={price} currency="USD" /></p>
                              <button onClick={() => dispatch(remProducts(id))} className='btn shoping_btn border rounded bg-primary text-white mx-2 d-flex align-items-center text-secondary' >
                                <TrashIcon className='w-20' />
                              <p className='add_cart mb-0 ms-1 fs-12' >Remove from Cart</p>                
                              </button>
                          </div>
                          
                        </div>
                      </div>        
                     )
                    }
                    </div>
    
                  </div>
    
                  <div className='col-lg-3 p-2' >
                    <div className='bg-white border p-2' >
                    <div className='chackout-proceced d-flex flex-column' >
                      <div className='d-flex align-items-start' >
                        <BadgeCheckIcon className='w-36' />
                        <p className="fs-12 mb-2" >Your order qualifies for FREE Shipping. Choose this option at checkout. See details</p>
                      </div>
                      <h6>Subtotal ({BaskItem.length} items):  <Currency quantity={total}  currency="USD" /></h6>
                      <div className='d-flex' >
                        <input className='mt-1 me-2' type='checkbox' />
                        <p className='fs-12' >This order contains a gift</p>
                      </div>
                      <button className='fs-12 button text-white py-1 bg-primary' >proceced to chackout</button>
                    </div>
                    </div>
                  </div>
    
                </div>
              </div>
            </>
        )
    }
}

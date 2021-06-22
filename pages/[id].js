import { useRouter } from 'next/router'
import Rating from '../components/Rating'
import { products } from '../data'
import {GlassMagnifier} from "react-image-magnifiers";

export default function Chackout() {
  const router = useRouter()
  const produc = products[router.query.id - 1] 

  return (
    <>
      <div className='chackout p-5 bg-brown' >
        <div className='chackout_contents bg-white d-flex p-3 rounded-3' >

          <div className='chackout_image me-2' >
            <GlassMagnifier
              className='per-img d-flex align-items-center'
              imageSrc={produc?.image}
              imageAlt="Glass Megnifyrs"
              largeImageSrc={produc?.image} // Optional
            />
          </div>

          <div className='chackout_info w-50 flex-column d-flex justify-content-center' >
            <p className='mb-0 fs-11 text-secondary' >{produc?.category}</p>
            <h3 className='text-primary mb-2' >{produc?.title}</h3>
            
            <p className='mb-1 fs-20' >{produc?.description} </p>

            <div className='my-2 mt-3' >
              <p className="mb-0" ><span className='fw-bold' >Name</span> : {produc?.category}</p>
              <p className='d-flex mb-0 align-items-center' ><span className='fw-bold' >Rating  </span>  :  <Rating/></p>
              <p className='mb-0'><span className='fw-bold' >Company</span> : Ajaira Company</p>
            </div>

            <div className='d-flex justify-content-between align-items-center' >
              <div>
                <p className='fw-bold fs-18 mb-0 tomato me-1' >${produc?.price}</p>
                <p className='fs-11 text-secondary mb-0 text-decoration-line-through' >$100</p>                
              </div>
              <button className='btn bg-primary text-white' >Add to Cart</button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
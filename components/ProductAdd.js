import Images from 'next/image';

export default function ProductAdd() {
  return (
    <>
      <div className="product_add">

        <div className='image image_product mb-2 p-2' >
          <Images className='w-100 h-100' src='/images/product-0.webp' width={100} height={100} alt='..' />
        </div>
        
        <div className="content" >
          
          <div className='d-flex align-items-center justify-content-between mb-2' >
            <div>
              <p className='mb-0 fs-11 text-secondary' >Computer</p>
              <h6 className='fw-550 fs-14 mb-1' >China latest</h6>
            </div>
            <div>
              <p className='fs-11 text-secondary mb-0 text-decoration-line-through' >$100</p>
              <p className='fw-bold tomato mb-0 me-1' >$100</p>
            </div>
          </div>

          <div className='progress_bar d-flex flex-column' >
            <div className='d-flex justify-content-between mb-1' >
              <span className='mb-0 fs-11 text-secondary' >Available : 6</span>
              <span className='mb-0 fs-11 text-secondary ' >Already sold : 28</span>              
            </div>
            <div className="progress ">
               <div className="progress-bar" role="progressbar" style={{width:'25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" />
            </div>
          </div>

          <div className='d-flex align-items-center mt-3 justify-content-between' >
            <div>
              <h6 className='fw-bold fs-13 mb-0' >Hurrey up</h6>
              <p className='mb-0 fs-11 text-secondary' >offer ends in : </p>
            </div>
            <div className='timer border rounded-3 p-1 d-flex fw-bold' >
              <div className='px-2' >15</div>
              <div className='px-2 border border-top-0 border-bottom-0' >52</div>
              <div className='px-2' >18</div>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}

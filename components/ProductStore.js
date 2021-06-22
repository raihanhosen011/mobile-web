import AllProductSlider from '../components/AllProductSlider'
import ProductAdCarousle from '../components/ProductAdCarousle'

export default function ProductStore({products}) {
  console.log(products)
  return (
    <>
      <div className='px-3 max-width' >
        <div className='row p-4 d-flex align-items-center overflow-hidden' >
          <ProductAdCarousle col='col-lg-4 col-md-5 col-xl-3' />
          <AllProductSlider products={products} col='col-lg-8 col-md-7 col-xl-9 mt-sm-4' />
        </div>        
      </div>
    </>
  )
}
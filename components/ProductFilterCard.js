import Link from 'next/link'

export default function ProductFilterCard({name,icon,lName}) {
  return (
    <>
      <div className={`product_filter_card m-2 d-flex align-items-center justify-content-center col-sm-4 col-md-3 p-2`} >
        <div className='product_item bg-white p-2 d-flex' >
         {icon}
          <div className='product_filter_info ms-2' >
            <h6 className='mb-0' >{name}</h6>
            <Link href='/' >{lName}</Link>
          </div>
        </div>
      </div>
    </>
  );
}

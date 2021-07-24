import Images from 'next/image';
import React from "react";

export default function Cetegory({name,img}) {
  return (
    <>
      <div className={`cetegory p-2 px-5 d-flex flex-column align-items-center justify-content-center`} >
        <Images className='w-25' src={img} width={50} height={50} alt='...' />
        <p className='mt-2 mb-0 text-secondary' >{name}</p>
      </div>
    </>
  );
}
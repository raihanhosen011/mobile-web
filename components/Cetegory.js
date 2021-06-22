import React from "react";

export default function Cetegory({name,img}) {
  return (
    <>
      <div className={`cetegory bg-brown p-2 d-flex flex-column align-items-center justify-content-center`} >
        <img className='w-25' src={img} alt='...' />
        <p className='mt-2 mb-0 text-secondary' >{name}</p>
      </div>
    </>
  );
}
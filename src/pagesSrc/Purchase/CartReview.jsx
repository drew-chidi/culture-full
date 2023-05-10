import React from 'react';
import ReviewLicense from '@src/components/Button/ReviewLicense';

const CartReview = () => {
  return (
    <section id='cart-review' className=' mb-[60px]'>
      {/* <h1 className='heading-2 mb-8'>Cart review</h1> */}

      {/* Cart Item List */}
      <div className='flex gap-6'>
        {/* IMAGE AND PLAY ICON */}
        <div className='w-[88px] h-[88px] bg-red-950'></div>

        <div className='flex flex-col gap-3'>
          <h2>Kindergaten drive</h2>
          {/* CLOSE BUTTON */}

          <div className='flex items-center text-xs gap-2'>
            <p>Vocals</p>
            <p>.</p>
            <p>Premium License (mp3 and WAV)</p>
          </div>

          <div className='flex gap-4 items-center'>
            <p>NGN 200,000</p>
            <ReviewLicense />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartReview;

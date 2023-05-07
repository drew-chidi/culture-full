import React from 'react';
import MainContentWrapper from '@src/components/Wrapper/MainContentWrapper';

const PurchaseReview = () => {
  return (
    <MainContentWrapper>
      <div className='pt-20 px-4 sm:px-10 lg:px-24 m-auto'>
        <h1 className='pb-10'>Review</h1>
        <div>
          <div className='flex gap-3 items-start'>
            {/* IMAGE */}
            <div className='w-36 h-36 bg-sky-300 rounded-lg'></div>
            <div>
              <p>Type: Hip Hop</p>
              <p>Wintspread</p>
            </div>
          </div>

          {/* MUSIC PROGRESS BAR */}
        </div>
      </div>

      {/* BUYING OPTIONS */}
      <div>
        <h2 className='heading-2'>Buying Options</h2>
      </div>
    </MainContentWrapper>
  );
};

export default PurchaseReview;
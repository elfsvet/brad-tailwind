import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import headphones from '../../public/images/headphones.jpg';
import headphones2 from '../../public/images/headphones2.png';
import { faFaceRollingEyes, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faScaleBalanced } from '@fortawesome/free-solid-svg-icons';
export default function ProductModal() {
  return (
    // global container
    <div className='flex items-center justify-center min-h-screen bg-slate-100'>
      {/* card container */}
      <div className='flex flex-col p-6 m-3 bg-white rounded-2xl shadow-2xl md:flex-row gap-10 md:m-0 md:p-16'>
        {/* image div*/}
        <div>
          <Image
            src={headphones2}
            alt='headphones'
            width={160}
            className='mx-auto hover:scale-105 duration-200'
          />
        </div>
        {/* content */}
        <div className='flex flex-col gap-6'>
          {/* label and desc container */}
          <div className='flex flex-col mb-4 gap-3 text-center md:text-left'>
            <div>
              <div className='inline-block px-3 py-1 text-sm text-white bg-black rounded-full'>
                Free Shipping
              </div>
            </div>

            {/* Title */}
            <div className='max-w-sm text-2xl font-medium'>
              New Headphones Matching Your Bag and Other Tech Stuff
            </div>
            {/* Price container */}
            <div className='flex flex-col mb-4 gap-3 text-center md:text-left'>
              <p className='line-through'>$799</p>
              <p className='text-5xl font-bold'>$599</p>
              <p className='text-sm font-light text-gray-400'>
                This offer is valid until April 3rd or as long stock lasts!
              </p>
            </div>
            {/* button group */}
            <div className='group'>
              <button className='w-full bg-blue-700 text-white border-b-8 border-b-blue-700 rounded-lg group-hover:border-t-8 group-hover:border-b-0 group-hover:bg-blue-700 group-hover:border-t-blue-700 group-hover:shadow-lg transition-all duration-150'>
                <div className='px-8 py-4 duration-150 group-hover:bg-blue-700 bg-blue-500 rounded-lg'>
                  Add to Cart
                </div>
              </button>
            </div>
            {/* stock */}
            <div className='flex items-center gap-3 group'>
              <div className='w-3 h-3 bg-green-400 rounded-full group-hover:animate-ping'></div>
              <div className='text-sm'>50+ pc in the stock</div>
            </div>
            {/* bottom buttons container */}
            <div className='flex flex-col md:flex-row gap-4'>
              <button className='flex items-center justify-center py-3 px-5 space-x-3 border-2 border-gray-300 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150'>
                <FontAwesomeIcon icon={faScaleBalanced} />
                <span>Add to Cart</span>
              </button>
              <button className='flex items-center justify-center py-3 px-5 space-x-3 border-2 border-gray-300 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150'>
                <FontAwesomeIcon icon={faHeart} />
                <span>Add to Wishlist</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

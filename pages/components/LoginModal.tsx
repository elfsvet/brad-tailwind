import {
  faArrowRight,
  faClose,
  faWindowClose,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import im from '../../public/images/headphones.jpg';
import fb from '../../public/images/fb.png';
import google from '../../public/images/google.png';

export default function LoginModal() {
  return (
    <div
      className='flex items-center justify-center min-h-screen bg-rose-50
 '
    >
      {/* card container */}
      <div className='relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0'>
        {/* Left side  */}
        <div className='p-6 md:p-20'>
          {/* top content */}
          <h2 className='font-mono mb-5 text-4xl font-bold'>Log In</h2>
          <p className='max-w-sm mb-12 font-sans font-light text-gray-600'>
            Log in to your account to upload or download pictures, videos or
            music.
          </p>
          <input
            type='text'
            className='w-full p-6 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light'
            placeholder='Enter your email address'
          />

          {/* middle content */}
          <div className='flex flex-col items-center justify-between mt-6 space-y-6 md:flex-row md:space-y-0'>
            <div className='font-thin text-cyan-700'>Forgot Password</div>
            <button className='w-full md:w-auto flex justify-center items-center p-6 space-x-4 font-bold text-white rounded-md  px-9 bg-cyan-700 shadow-cyan-100 hover:bg-opacity-90 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150'>
              <span>Next</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
          {/* border */}
          <div className='mt-12 border-b border-b-gray-300'></div>

          {/* bottom content */}

          <p className='py-6 text-sm font-thin text-center text-gray-400'>
            or log in with
          </p>
          {/* bottom buttons container */}
          <div className='flex flex-col space-x-0 space-y-6 md:flex-row md:space-x-4 md:space-y-0'>
            <button className='flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2'>
              <Image alt='' src={fb} width={50} className='w-9' />
              <span className='font-thin'>Facebook</span>
            </button>

            <button className='flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2'>
              <Image alt='' src={google} width={50} className='w-9' />
              <span className='font-thin'>Google</span>
            </button>
          </div>
        </div>

        {/* Right side  */}
        <Image alt='' src={im} width={350} className='hidden md:block' />
        {/* close button */}
        <div className='group absolute -top-5 right-4 flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full md:bg-white md:top-4 hover:cursor-pointer hover:-translate-y-0.5 transition duration-150'>
          <FontAwesomeIcon
            icon={faClose}
            className='text-black w-6 h-6 group-hover:text-gray-600'
          />
        </div>
      </div>
    </div>
  );
}

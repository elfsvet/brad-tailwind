import Image from 'next/image';
import stepan from '../../public/images/profile.jpg';

export default function transitionTransform() {
  return (
    <div>
      {/* transition */}
      <button className='px-8 py-2 m-24 text-white bg-blue-500 rounded hover:bg-blue-700 hover:opacity-20 transition duration-500'>
        Click me
      </button>
      {/* translate / transform */}
      <button className='px-8 py-2 m-24 text-white bg-blue-500 rounded hover:bg-blue-700 transition-transform duration-200 hover:rotate-12 '>
        Click me
      </button>

      <Image className='w-48 hover:rotate-180 hover:scale-75 hover:skew-x-12 transition duration-2000' src={stepan} alt='stepan' />
      {/* <Image className='' src={stepan} alt='stepan' /> */}

      <button className='px-8 py-2 m-24 text-white bg-blue-500 rounded hover:bg-blue-700'>
        Click me
      </button>
    </div>
  );
}

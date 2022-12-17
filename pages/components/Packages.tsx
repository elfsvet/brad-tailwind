import checkmark from '../../public/images/check-mark-svgrepo-com.svg';
import Image from 'next/image';

export default function Packages() {
  return (
    // global container
    <div className='flex items-center justify-center min-h-screen bg-slate-800'>
      {/* inner container */}
      <div className='flex flex-col my-6 gap-6 md:flex-row md:my-0'>
        {/* col 1 */}
        <div className='bg-slate-700 rounded-xl text-white'>
          {/* upper container */}
          <div className='p-8 mx-3 mt-3 rounded-t-xl bg-slate-800'>
            <div className='text-center uppercase'>basic</div>
            <h2 className='mt-10 font-serif text-5xl text-center'>100GB</h2>
            <h3 className='mt-2 text-center'>$1.99/Month</h3>
            <div className='flex justify-center'>
              <a
                href='#'
                className='inline-block px-10 py-3 my-6 text-center border border-violet-600 rounded-lg hover:bg-violet-800 hover:border-violet-800 duration-200'
              >
                Purchase
              </a>
            </div>
          </div>
          {/* border */}
          <div className='border-t border-slate-700'></div>
          {/* lower container */}
          <div className='p-8 mx-3 mb-3 rounded-b-xl bg-slate-800'>
            {/* list container */}
            <div className='flex flex-col gap-2'>
              {/* list item 1 */}
              <div className='flex justify-center'>
                <Image alt='checkmark' src={checkmark} width={25} height={25} />

                <span className='text-sm ml-1'>100 GB of storage</span>
              </div>
              {/* list item 2 */}
              <div className='flex justify-center'>
                <Image alt='checkmark' src={checkmark} width={25} height={25} />
                <span className='text-sm ml-1'>Option to add members</span>
              </div>
              {/* list item 3*/}
              <div className='flex justify-center'>
                <Image alt='checkmark' src={checkmark} width={25} height={25} />
                <span className='text-sm ml-1'>Extra member benefits</span>
              </div>
            </div>
          </div>
        </div>
        {/* col 2 */}
        <div className='bg-violet-600 rounded-xl text-white'>
          {/* upper container */}
          <div className='p-8 mx-3 mt-3 rounded-t-xl bg-slate-800'>
            <div className='text-center uppercase'>standard</div>
            <h2 className='mt-10 font-serif text-5xl text-center'>200GB</h2>
            <h3 className='mt-2 text-center'>$3.99/Month</h3>
            <div className='flex justify-center'>
              <a
                href='#'
                className='inline-block px-10 py-3 my-6 text-center border border-violet-600 rounded-lg hover:bg-violet-800 bg-violet-600 hover:border-violet-800 duration-200'
              >
                Purchase
              </a>
            </div>
          </div>
          {/* border */}
          <div className='border-t border-slate-700'></div>
          {/* lower container */}
          <div className='p-8 mx-3 mb-3 rounded-b-xl bg-slate-800'>
            {/* list container */}
            <div className='flex flex-col gap-2'>
              {/* list item 1 */}
              <div className='flex justify-center'>
                <Image alt='checkmark' src={checkmark} width={25} height={25} />

                <span className='text-sm ml-1'>200 GB of storage</span>
              </div>
              {/* list item 2 */}
              <div className='flex justify-center'>
                <Image alt='checkmark' src={checkmark} width={25} height={25} />
                <span className='text-sm ml-1'>Option to add members</span>
              </div>
              {/* list item 3*/}
              <div className='flex justify-center'>
                <Image alt='checkmark' src={checkmark} width={25} height={25} />
                <span className='text-sm ml-1'>Extra member benefits</span>
              </div>
            </div>
          </div>
        </div>
        {/* col 3 */}
        <div className='bg-slate-700 rounded-xl text-white'>
          {/* upper container */}
          <div className='p-8 mx-3 mt-3 rounded-t-xl bg-slate-800'>
            <div className='text-center uppercase'>premium</div>
            <h2 className='mt-10 font-serif text-5xl text-center'>2TB</h2>
            <h3 className='mt-2 text-center'>$8.99/Month</h3>
            <div className='flex justify-center'>
              <a
                href='#'
                className='inline-block px-10 py-3 my-6 text-center border border-violet-600 rounded-lg hover:bg-violet-800 hover:border-violet-800 duration-200'
              >
                Purchase
              </a>
            </div>
          </div>
          {/* border */}
          <div className='border-t border-slate-700'></div>
          {/* lower container */}
          <div className='p-8 mx-3 mb-3 rounded-b-xl bg-slate-800'>
            {/* list container */}
            <div className='flex flex-col gap-2'>
              {/* list item 1 */}
              <div className='flex justify-center'>
                <Image alt='checkmark' src={checkmark} width={25} height={25} />

                <span className='text-sm ml-1'>2 TB of storage</span>
              </div>
              {/* list item 2 */}
              <div className='flex justify-center'>
                <Image alt='checkmark' src={checkmark} width={25} height={25} />
                <span className='text-sm ml-1'>Option to add members</span>
              </div>
              {/* list item 3*/}
              <div className='flex justify-center'>
                <Image alt='checkmark' src={checkmark} width={25} height={25} />
                <span className='text-sm ml-1'>Extra member benefits</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

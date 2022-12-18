import { faBookmark, faCediSign, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import social1 from '../../public/images/social1.jpg'
import social2 from '../../public/images/social2.jpg'
import social3 from '../../public/images/social3.jpg'
import social4 from '../../public/images/social4.jpg'
import social5 from '../../public/images/social5.jpg'
import social6 from '../../public/images/social6.jpg'
import social7 from '../../public/images/social7.jpg'
import social8 from '../../public/images/social8.jpg'
import social9 from '../../public/images/social9.jpg'
import social10 from '../../public/images/social10.jpg'

export default function ImageGallery() {
  return (
    // global container
    <div className='flex items-center justify-center bg-cyan-50 min-h-screen'>
      {/* card container */}
      <div className='bg-white p-6 m-3 space-y-10 rounded-3xl md:p-40 shadow-2xl'>
        {/* menu container */}
        <div className='flex flex-col items-center justify-center space-y-3 md:flex-row md:space-y-0 md:space-x-8 md:mb-24 md:justify-end'>
          {/* menu item 1 */}
          <div className='group'>
            <a href='#'>Vector</a>
            <div className='mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100'></div>
          </div>
          {/* menu item 2 */}
          <div className='group'>
            <a href='#'>Illustration</a>
            <div className='mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100'></div>
          </div>
          {/* menu item 3 */}
          <div className='group'>
            <a href='#'>Images</a>
            <div className='mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100'></div>
          </div>
          {/* menu item 4 */}
          <div className='group'>
            <a href='#'>Icons</a>
            <div className='mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100'></div>
          </div>
        </div>
        {/* search container */}
        <div className='flex flex-col justify-between space-y-5 md:flex-row md:space-y-0'>
          {/* input and Icon container */}
          <div className='flex justify-between border-b'>
            <input
              type='text'
              className='ml-6 border-none md:w-80 placeholder:font-thin focus:outline-none'
              placeholder='Search'
            />
            <button>
              <FontAwesomeIcon icon={faMagnifyingGlass} className='text-gray-300 w-8 duration-200 hover:scale-110'/>
            </button>
          </div>
          {/* upload button */}
          <button className="py-3 px-14 text-lg font-normal text-white bg-black border-black border rounded-md shadow-2xl duration-200 hover:bg-white hover:text-black">Upload</button>
        </div>
        {/* Gallery container */}
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {/* image 1 */}
            <div className="relative group">
                <Image alt='' src={social1} width={300}/>
                <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
                    <div className="flex justify-between w-full">
                        <div className="font-normal">
                            <p className="text-sm">Abstract Painting</p>
                            <p className="text-xs">245 likes - 35 Shares</p>
                        </div>
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faBookmark}/>
                        </div>
                    </div>
                </div>
            </div>
            {/* image 2 */}
            <div className="relative group">
                <Image alt='' src={social2} width={300}/>
                <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
                    <div className="flex justify-between w-full">
                        <div className="font-normal">
                            <p className="text-sm">Abstract Painting</p>
                            <p className="text-xs">245 likes - 35 Shares</p>
                        </div>
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faBookmark}/>
                        </div>
                    </div>
                </div>
            </div>
            {/* image 3 */}
            <div className="relative group">
                <Image alt='' src={social3} width={300}/>
                <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
                    <div className="flex justify-between w-full">
                        <div className="font-normal">
                            <p className="text-sm">Abstract Painting</p>
                            <p className="text-xs">245 likes - 35 Shares</p>
                        </div>
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faBookmark}/>
                        </div>
                    </div>
                </div>
            </div>
            {/* image 4 */}
            <div className="relative group">
                <Image alt='' src={social4} width={300}/>
                <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
                    <div className="flex justify-between w-full">
                        <div className="font-normal">
                            <p className="text-sm">Abstract Painting</p>
                            <p className="text-xs">245 likes - 35 Shares</p>
                        </div>
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faBookmark}/>
                        </div>
                    </div>
                </div>
            </div>
            {/* image 5 */}
            <div className="relative group">
                <Image alt='' src={social5} width={300}/>
                <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
                    <div className="flex justify-between w-full">
                        <div className="font-normal">
                            <p className="text-sm">Abstract Painting</p>
                            <p className="text-xs">245 likes - 35 Shares</p>
                        </div>
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faBookmark}/>
                        </div>
                    </div>
                </div>
            </div>
            {/* image 6 */}
            <div className="relative group">
                <Image alt='' src={social6} width={300}/>
                <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
                    <div className="flex justify-between w-full">
                        <div className="font-normal">
                            <p className="text-sm">Abstract Painting</p>
                            <p className="text-xs">245 likes - 35 Shares</p>
                        </div>
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faBookmark}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

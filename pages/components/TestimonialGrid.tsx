import Image from 'next/image';
import patternQuotation from '../../public/images/testimonial/bg-pattern-quotation.svg';
import daniel from '../../public/images/testimonial/image-daniel.jpg';
import jonathan from '../../public/images/testimonial/image-jonathan.jpg';
import kira from '../../public/images/testimonial/image-kira.jpg';
import jeanette from '../../public/images/testimonial/image-jeanette.jpg';
import patrick from '../../public/images/testimonial/image-patrick.jpg';

type Props = {};
const TestimonialGrid = (props: Props) => {
  return (
    <>
      <div className='bg-gray-200'>
        {/* global container */}
        <div className='container mx-auto max-w-7xl p-2 md:p-10'>
          {/* grid container */}
          <div className='text-white gap-6 grid-1 md:grid-rows-2 md:grid-cols-4 grid'>
            {/* box 1  */}
            <div className='relative md:col-span-2 p-10 rounded-xl bg-purple-700'>
              {/* Quotes image */}
              <Image
                alt=''
                className='absolute top-3 right-10 scale-125 md:top-7 md:right-24 md:scale-150'
                src={patternQuotation}
              />
              {/* Box header  */}
              <div className='flex z-10 gap-4'>
                <Image
                  className='w-10 h-10 rounded-full ring-2 ring-purple-300'
                  alt=''
                  src={daniel}
                />
                <div className='text-sm'>
                  <h4 className='opacity-90'>Daniel Clifford</h4>
                  <p className='opacity-50'>Verified Graduate</p>
                </div>
              </div>
              {/* Large text */}
              <p className='relative z-10 mt-6 text-xl'>
                I received a job offer mid-course, and the subjects I learned
                were current, if not more so, in the company I joined. I
                honestly feel I got every penny's worth.
              </p>
              {/* Small text */}
              <p className='mt-6 opacity-50 line-clamp-6'>
             "   I was an EMT for many years before I joined the bootcamp. I've
                been looking to make a transition and have heard some people who
                had an amazing experience here. I signed up for the free intro
                course and found it incredibly fun! I enrolled shortly
                thereafter. The next 12 weeks was the best - and most grueling -
                time of my life. Since completing the course, I've successfully
                switched careers, working as a Software Engineer at a VR
                startup. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto voluptate et sequi ducimus atque vero alias suscipit, necessitatibus fugiat. Natus maiores, recusandae tenetur earum, praesentium animi soluta nulla iste, porro sint magnam voluptatibus autem qui repellendus neque. Vero enim, quaerat voluptatibus quae nesciunt cupiditate perferendis sed facilis dicta illum illo! "
              </p>
            </div>
            {/* box 2  */}
            <div className=' p-10 rounded-xl bg-gray-600'>
              {/* Box header  */}
              <div className='flex  gap-4'>
                <Image
                  className='w-10 h-10 rounded-full ring-2 ring-purple-300'
                  alt=''
                  src={jonathan}
                />
                <div className='text-sm'>
                  <h4 className='opacity-90'>Jonathan Walters</h4>
                  <p className='opacity-50'>Verified Graduate</p>
                </div>
              </div>
              {/* Large text */}
              <p className=' mt-6 text-xl'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
                consectetur at consequuntur modi quibusdam harum dolore, sequi
                ipsa vero dolor officia dolores est soluta ducimus.
              </p>
              {/* Small text */}
              <p className='mt-6 opacity-50 line-clamp-5'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
                dignissimos maxime voluptate dolor iure modi suscipit cumque
                neque impedit qui animi quod eum numquam possimus voluptas, nemo
                dolorem mollitia quia. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias repellat et perspiciatis, soluta ab modi ex quisquam. Rerum laboriosam quam adipisci distinctio, id enim iusto aspernatur nulla nemo fugit. Consectetur a aut optio commodi, quasi corporis fugit, vitae dignissimos aspernatur possimus laboriosam eaque placeat reiciendis beatae impedit excepturi qui rerum!
              </p>
            </div>
            {/* box 3  */}
            <div className='md:row-span-2 hidden md:block p-10 rounded-xl bg-white text-gray-900'>
              {/* Box header  */}
              <div className='flex  gap-4'>
                <Image
                  className='w-10 h-10 rounded-full ring-2 ring-purple-300'
                  alt=''
                  src={kira}
                />
                <div className='text-sm'>
                  <h4 className='opacity-90'>Kira Walters</h4>
                  <p className='opacity-50'>Verified Graduate</p>
                </div>
              </div>
              {/* Large text */}
              <p className=' mt-6 text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                labore neque id a quaerat saepe?
              </p>
              {/* Small text */}
              <p className='mt-6 opacity-50'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
                dignissimos maxime voluptate dolor iure modi suscipit cumque
                neque impedit qui animi quod eum numquam possimus voluptas, nemo
                dolorem mollitia quia.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
                dignissimos maxime voluptate dolor iure modi suscipit cumque
                neque impedit qui animi quod eum numquam possimus voluptas, nemo
                dolorem mollitia quia.
              </p>
            </div>

            {/* box 4  */}
            <div className=' p-10 rounded-xl bg-white text-gray-900'>
              {/* Box header  */}
              <div className='flex  gap-4'>
                <Image
                  className='w-10 h-10 rounded-full ring-2 ring-purple-300'
                  alt=''
                  src={jeanette}
                />
                <div className='text-sm'>
                  <h4 className='opacity-90'>Jeanette Harmon</h4>
                  <p className='opacity-50'>Verified Graduate</p>
                </div>
              </div>
              {/* Large text */}
              <p className=' mt-6 text-xl'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
                consectetur at consequuntur modi quibusdam harum dolore, sequi
                ipsa vero dolor officia dolores est soluta ducimus.
              </p>
              {/* Small text */}
              <p className='mt-6 opacity-50'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
                dignissimos maxime voluptate dolor iure modi suscipit cumque
                neque impedit qui animi quod eum numquam possimus voluptas, nemo
                dolorem mollitia quia.
              </p>
            </div>
            {/* box 5  */}
            <div className='md:col-span-2 p-10 rounded-xl bg-gray-900'>
              {/* Box header  */}
              <div className='flex  gap-4'>
                <Image
                  className='w-10 h-10 rounded-full ring-2 ring-purple-300'
                  alt=''
                  src={patrick}
                />
                <div className='text-sm'>
                  <h4 className='opacity-90'>Patrick Abrams</h4>
                  <p className='opacity-50'>Verified Graduate</p>
                </div>
              </div>
              {/* Large text */}
              <p className=' mt-6 text-xl'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
                consectetur at consequuntur modi quibusdam harum dolore, sequi
                ipsa vero dolor officia dolores est soluta ducimus.
              </p>
              {/* Small text */}
              <p className='mt-6 opacity-50'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
                dignissimos maxime voluptate dolor iure modi suscipit cumque
                neque impedit qui animi quod eum numquam possimus voluptas, nemo
                dolorem mollitia quia.
              </p>
            </div>
            {/* box 6  */}
            <div className='md:hidden p-10 rounded-xl bg-white text-gray-900'>
              {/* Box header  */}
              <div className='flex  gap-4'>
                <Image
                  className='w-10 h-10 rounded-full ring-2 ring-purple-300'
                  alt=''
                  src={kira}
                />
                <div className='text-sm'>
                  <h4 className='opacity-90'>Kira Walters</h4>
                  <p className='opacity-50'>Verified Graduate</p>
                </div>
              </div>
              {/* Large text */}
              <p className=' mt-6 text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                labore neque id a quaerat saepe?
              </p>
              {/* Small text */}
              <p className='mt-6 opacity-50'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
                dignissimos maxime voluptate dolor iure modi suscipit cumque
                neque impedit qui animi quod eum numquam possimus voluptas, nemo
                dolorem mollitia quia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TestimonialGrid;

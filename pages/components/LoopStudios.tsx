import Image from 'next/image';
import logo from '../../public/images/loopstudios/logo.svg';
import interactive from '../../public/images/loopstudios/desktop/image-interactive.jpg';
import deepEarthDeck from '../../public/images/loopstudios/desktop/image-deep-earth.jpg';
import deepEarthMobile from '../../public/images/loopstudios/mobile/image-deep-earth.jpg';
import nightArcadeDeck from '../../public/images/loopstudios/desktop/image-night-arcade.jpg';
import nightArcadeMobile from '../../public/images/loopstudios/mobile/image-night-arcade.jpg';
import soccerTeamDeck from '../../public/images/loopstudios/desktop/image-soccer-team.jpg';
import soccerTeamMobile from '../../public/images/loopstudios/mobile/image-soccer-team.jpg';
import gridDeck from '../../public/images/loopstudios/desktop/image-grid.jpg';
import gridMobile from '../../public/images/loopstudios/mobile/image-grid.jpg';
import fromAboveDeck from '../../public/images/loopstudios/desktop/image-from-above.jpg';
import fromAboveMobile from '../../public/images/loopstudios/mobile/image-from-above.jpg';
import pocketBorealisDeck from '../../public/images/loopstudios/desktop/image-pocket-borealis.jpg';
import pocketBorealisMobile from '../../public/images/loopstudios/mobile/image-pocket-borealis.jpg';
import curiosityDeck from '../../public/images/loopstudios/desktop/image-curiosity.jpg';
import curiosityMobile from '../../public/images/loopstudios/mobile/image-curiosity.jpg';
import fishEyeDeck from '../../public/images/loopstudios/desktop/image-fisheye.jpg';
import fishEyeMobile from '../../public/images/loopstudios/mobile/image-fisheye.jpg';
import iconFacebook from '../../public/images/loopstudios/icon-facebook.svg';
import iconTwitter from '../../public/images/loopstudios/icon-twitter.svg';
import iconInstagram from '../../public/images/loopstudios/icon-instagram.svg';
import iconPinterest from '../../public/images/loopstudios/icon-pinterest.svg';
import iconHamburger from '../../public/images/loopstudios/icon-hamburger.svg';
import iconClose from '../../public/images/loopstudios/icon-close.svg';
import { useState } from 'react';

export default function LoopStudios() {
  const [isOpen, setIsOpen] = useState('');
  const [hidden, setHidden] = useState('hidden');

  const handleHamburger = () => {
    if (isOpen === '') {
      setIsOpen('open');
      setHidden('flex');
    } else {
      setIsOpen('');
      setHidden('hidden');
    }
  };
  const hamburgerStyle = `${isOpen} z-40 block hamburger md:hidden focus:outline-none`;
  const navBarStyle = `absolute ${hidden} top-0 bottom-0 left-0 flex-col self-end  w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black`;

  // useRef()
  // const btn = document.getElementById('menu-btn');
  // btn!.addEventListener('click', navToggle);

  // function navToggle() {
  //   btn!.classList.toggle('open');
  // }

  // const navBar =
  // 'absolute hidden top-0 bottom-0 left-0 flex-col self-end  w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black';

  return (
    <>
      {/* hero section */}
      <section id='hero'>
        {/* hero container */}
        <div className='container max-w-6xl mx-auto px-6 py-12'>
          {/* nav/logo container */}
          <nav className='flex items-center justify-between font-bold text-white'>
            {/* logo */}
            <Image src={logo} alt='' />
            {/* menu */}
            <div className='hidden h-10 font-alata md:flex md:space-x-8'>
              <div className='group'>
                <a href='#'>About</a>
                <div className='mx-2 group-hover:border-b group-hover:border-blue-50'></div>
              </div>
              <div className='group'>
                <a href='#'>Careers</a>
                <div className='mx-2 group-hover:border-b group-hover:border-blue-50'></div>
              </div>
              <div className='group'>
                <a href='#'>Events</a>
                <div className='mx-2 group-hover:border-b group-hover:border-blue-50'></div>
              </div>
              <div className='group'>
                <a href='#'>Products</a>
                <div className='mx-2 group-hover:border-b group-hover:border-blue-50'></div>
              </div>
              <div className='group'>
                <a href='#'>Support</a>
                <div className='mx-2 group-hover:border-b group-hover:border-blue-50'></div>
              </div>
            </div>

            {/*  hamburger button */}
            <div className='md:hidden'>
              <button
                className={hamburgerStyle}
                id='menu-btn'
                type='button'
                onClick={handleHamburger}
              >
                <span className='hamburger-top'></span>
                <span className='hamburger-middle'></span>
                <span className='hamburger-bottom'></span>
              </button>
            </div>
          </nav>
          {/* todo mobile menu */}

          <div className={navBarStyle} id='menu'>
            <a href='#' className='hover:text-pink-500'>
              About
            </a>
            <a href='#' className='hover:text-pink-500'>
              Careers
            </a>
            <a href='#' className='hover:text-pink-500'>
              Events
            </a>
            <a href='#' className='hover:text-pink-500'>
              Products
            </a>
            <a href='#' className='hover:text-pink-500'>
              Support
            </a>
          </div>

          <div className='max-w-lg mt-32 mb-32 p-4 font-sans text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl'>
            Impressive Experiences That Deliver
          </div>
        </div>
      </section>

      {/* features section  */}
      <section className='feature'>
        {/* feature container */}
        <div className='relative container flex flex-col max-w-6xl mx-auto my-32 md:px-0 px-6 text-gray-900 md:flex-row'>
          <Image alt='' src={interactive} />

          {/* text container */}
          <div className='top-48 pr-0 bg-white md:absolute md:right-0 md:py-20 md:pl-20'>
            <h2 className='max-w-lg mt-10 mb-6 font-sans text-4xl text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left'>
              The leader in interactive VR
            </h2>
            <p className='max-w-md text-center md:text-left'>
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </section>
      {/* creations section */}
      <section id='creations'>
        {/* creation container */}
        <div className='container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0'>
          {/* creations header */}
          <div className='flex justify-center mb-20 md:justify-between'>
            <h2 className='text-4xl text-center uppercase md:text-left md:text-5xl'>
              Our Creations
            </h2>
            <button className='hidden btn md:block'>See All</button>
          </div>

          {/* items container */}
          <div className='item-container'>
            {/* item 1 */}
            <div className='group item'>
              {/* desktop image */}
              <Image
                src={deepEarthDeck}
                alt=''
                className='hidden w-full duration-200 md:block group-hover:scale-110'
              />

              {/* mobile image */}
              <Image
                src={deepEarthMobile}
                alt=''
                className='md:hidden w-full'
              />

              {/* item gradient  */}
              <div className='item-gradient'></div>

              {/* item text */}
              <h5>Deep Earth</h5>
            </div>
            {/* item 2 */}

            <div className='group item'>
              {/* desktop image */}
              <Image
                src={nightArcadeDeck}
                alt=''
                className='hidden w-full duration-200 md:block group-hover:scale-110'
              />
              {/* mobile image */}
              <Image
                src={nightArcadeMobile}
                alt=''
                className='md:hidden w-full'
              />
              {/* item gradient  */}
              <div className='item-gradient'></div>
              {/* item text */}
              <h5>Night Arcade</h5>
            </div>
            {/* item 3 */}

            <div className='group item'>
              {/* desktop image */}
              <Image
                src={soccerTeamDeck}
                alt=''
                className='hidden w-full duration-200 md:block group-hover:scale-110'
              />
              {/* mobile image */}
              <Image
                src={soccerTeamMobile}
                alt=''
                className='md:hidden w-full'
              />
              {/* item gradient  */}
              <div className='item-gradient'></div>
              {/* item text */}
              <h5>Soccer Team VR</h5>
            </div>
            {/* item 4 */}

            <div className='group item'>
              {/* desktop image */}
              <Image
                src={gridDeck}
                alt=''
                className='hidden w-full duration-200 md:block group-hover:scale-110'
              />
              {/* mobile image */}
              <Image src={gridMobile} alt='' className='md:hidden w-full' />
              {/* item gradient  */}
              <div className='item-gradient'></div>
              {/* item text */}
              <h5>The Grid</h5>
            </div>
          </div>
          {/* items container 2 */}
          <div className='item-container mt-10'>
            {/* item 1 */}
            <div className='group item'>
              {/* desktop image */}
              <Image
                src={fromAboveDeck}
                alt=''
                className='hidden w-full duration-200 md:block group-hover:scale-110'
              />

              {/* mobile image */}
              <Image
                src={fromAboveMobile}
                alt=''
                className='md:hidden w-full'
              />

              {/* item gradient  */}
              <div className='item-gradient'></div>

              {/* item text */}
              <h5>From up Above</h5>
            </div>
            {/* item 2 */}

            <div className='group item'>
              {/* desktop image */}
              <Image
                src={pocketBorealisDeck}
                alt=''
                className='hidden w-full duration-200 md:block group-hover:scale-110'
              />
              {/* mobile image */}
              <Image
                src={pocketBorealisMobile}
                alt=''
                className='md:hidden w-full'
              />
              {/* item gradient  */}
              <div className='item-gradient'></div>
              {/* item text */}
              <h5>Pocket Borealis</h5>
            </div>
            {/* item 3 */}

            <div className='group item'>
              {/* desktop image */}
              <Image
                src={curiosityDeck}
                alt=''
                className='hidden w-full duration-200 md:block group-hover:scale-110'
              />
              {/* mobile image */}
              <Image
                src={curiosityMobile}
                alt=''
                className='md:hidden w-full'
              />
              {/* item gradient  */}
              <div className='item-gradient'></div>
              {/* item text */}
              <h5>The Curiosity</h5>
            </div>
            {/* item 4 */}

            <div className='group item'>
              {/* desktop image */}
              <Image
                src={fishEyeDeck}
                alt=''
                className='hidden w-full duration-200 md:block group-hover:scale-110'
              />
              {/* mobile image */}
              <Image src={fishEyeMobile} alt='' className='md:hidden w-full' />
              {/* item gradient  */}
              <div className='item-gradient'></div>
              {/* item text */}
              <h5>Make it Fish Eye</h5>
            </div>
          </div>
          {/* Bottom button container */}
          <div className='flex justify-center mt-10 md:hidden'>
            <button className='btn w-full md:hidden'>See All</button>
          </div>
        </div>
      </section>
      {/* footer */}
      <footer className='bg-black'>
        <div className='container max-w-6xl py-10 mx-auto'>
          {/* footer flex container */}
          <div className='flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start'>
            {/* logo menu*/}
            <div className='flex flex-col items-center mb-8  space-y-8 md:items-start md:space-y-4'>
              {/* logo */}
              <div className='h-8'>
                <Image src={logo} alt='' className='w-44 md:ml-3' />
              </div>
              {/* menu */}
              <div className='flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3'>
                {/* item 1 */}
                <div className='h-10 group'>
                  <a href='#'>About</a>
                  <div className='mx-2 group-hover:border-b group-hover:border-blue-50'></div>
                </div>
                {/* item 2 */}
                <div className='h-10 group'>
                  <a href='#'>Careers</a>
                  <div className='mx-2 group-hover:border-b group-hover:border-blue-50'></div>
                </div>
                {/* item 3 */}
                <div className='h-10 group'>
                  <a href='#'>Events</a>
                  <div className='mx-2 group-hover:border-b group-hover:border-blue-50'></div>
                </div>
                {/* item 4 */}
                <div className='h-10 group'>
                  <a href='#'>Products</a>
                  <div className='mx-2 group-hover:border-b group-hover:border-blue-50'></div>
                </div>
                {/* item 5 */}
                <div className='h-10 group'>
                  <a href='#'>Support</a>
                  <div className='mx-2 group-hover:border-b group-hover:border-blue-50'></div>
                </div>
              </div>
            </div>

            {/* social copy right */}
            <div className='flex flex-col items-start justify-between space-y-4 text-gray-500'>
              {/* icons container */}
              <div className='flex items-center justify-center mx-auto space-x-4 md:mx-0 md:justify-end'>
                {/* icon 1 */}
                <div className='h-8 group'>
                  <a href='#'>
                    <Image src={iconFacebook} alt='' className='h-6' />
                  </a>
                </div>
                {/* icon 2 */}
                <div className='h-8 group'>
                  <a href='#'>
                    <Image src={iconTwitter} alt='' className='h-6' />
                  </a>
                </div>
                {/* icon 3 */}
                <div className='h-8 group'>
                  <a href='#'>
                    <Image src={iconInstagram} alt='' className='h-6' />
                  </a>
                </div>
                {/* icon 4 */}
                <div className='h-8 group'>
                  <a href='#'>
                    <Image src={iconPinterest} alt='' className='h-6' />
                  </a>
                </div>
              </div>
              {/* copy */}
              <div className='font-bold'>
                &copy; {new Date().getFullYear()} Loopstudios. All Rights
                Reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

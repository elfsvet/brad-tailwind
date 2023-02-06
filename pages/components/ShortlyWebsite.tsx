import Image from 'next/image';
import logo from '../../public/images/shortly/logo.svg';
import illustrationWorking from '../../public/images/shortly/illustration-working.svg';
import iconFB from '../../public/images/shortly/icon-facebook.svg';
import iconBrandRecognition from '../../public/images/shortly/icon-brand-recognition.svg';
import iconDetailedRecords from '../../public/images/shortly/icon-detailed-records.svg';
import iconInsta from '../../public/images/shortly/icon-instagram.svg';
import iconPint from '../../public/images/shortly/icon-pinterest.svg';
import iconTwitter from '../../public/images/shortly/icon-twitter.svg';
import iconFullyCustom from '../../public/images/shortly/icon-fully-customizable.svg';
import { ChangeEvent, useRef, useState } from 'react';

export default function ShortlyWebsite() {
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [hidden, setHidden] = useState(true);

  const handleInput = (e) => {
    const input = e.target.value;
    setInputValue(input);
    // console.log(input);
  };
  // const input

  const validURL = (str: string) => {
    const pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
        '((\\d{1,3}\\.){3}\\d{1,3}))' +
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
        '(\\?[;&a-z\\d%_.~+=-]*)?' +
        '(\\#[-a-z\\d_]*)?$',
      'i'
    );
    return !!pattern.test(str);
  };

  const formSubmit = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    // console.log(event.target[0].value);
    const input = event.target[0].value;
    if (input === '') {
      setErrorMessage('Please enter Something');
      //   todo error border in input
    } else if (!validURL(input)) {
      setErrorMessage('Please enter a valid URL');
      //   todo error border in input
    } else {
      setErrorMessage('');
      //   todo remove border
      alert('success');
    }
    // console.log(123);
    // console.log(inputValue)
  };

  const toggleHamburger = () => {
    setHidden(!hidden);
  };
  return (
    <>
      {/* nav container */}
      <nav className='relative container mx-auto p-6'>
        {/* flex container for all items */}
        <div className='flex items-center justify-between'>
          {/* flex container for logo menu */}
          <div className='flex items-center space-x-20'>
            {/* logo */}
            <Image alt='' src={logo} />
            {/* left menu */}
            <div className='hidden space-x-8 font-bold lg:flex'>
              <a
                href='#'
                className='text-grayishViolet hover:text-veryDarkViolet'
              >
                Features
              </a>
              <a
                href='#'
                className='text-grayishViolet hover:text-veryDarkViolet'
              >
                Pricing
              </a>
              <a
                href='#'
                className='text-grayishViolet hover:text-veryDarkViolet'
              >
                Resources
              </a>
            </div>
          </div>
          {/* RIght buttons menu */}
          <div className='hidden lg:flex items-center space-x-6 font-bold text-grayishViolet'>
            <div className='hover:text-veryDarkViolet'>Login</div>
            <a
              href='#'
              className='px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70'
            >
              Sign up
            </a>
          </div>
          {/*  hamburger menu */}
          <button
            onClick={toggleHamburger}
            id='menu-btn'
            className={`${
              !hidden && 'open'
            } block hamburger lg:hidden focus:outline-none`}
            type='button'
          >
            <span className='hamburger-top'></span>
            <span className='hamburger-middle'></span>
            <span className='hamburger-bottom'></span>
          </button>
        </div>
        {/*  mobile menu */}
        <div
          id='menu'
          className={`absolute ${
            hidden ? 'hidden' : 'flex'
          } p-6 rounded-lg bg-darkViolet left-6 right-6 top-20 z-100`}
        >
          <div className='flex flex-col items-center justify-center w-full gap-6 font-bold text-white rounded-sm'>
            <a href='' className='w-full text-center'>
              Features
            </a>
            <a href='' className='w-full text-center'>
              Pricing
            </a>
            <a href='' className='w-full text-center'>
              Resources
            </a>
            <a
              href=''
              className='w-full text-center pt-6 border-t border-gray-400'
            >
              Login
            </a>
            <a href='' className='w-full text-center py-3 rounded-full bg-cyan'>
              Sing Up
            </a>
          </div>
        </div>
      </nav>

      {/* hero section  */}
      <section id='hero'>
        {/* hero container */}
        <div className='flex container flex-col-reverse mx-auto p-6 lg:flex-row'>
          {/* content container */}
          <div className='flex flex-col space-y-10 mb-44 lg:mt-16 lg:mb-52 lg:w-1/2'>
            <h1 className='text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left'>
              More than just shorter links
            </h1>
            <p className='text-2xl text-center text-gray-400 lg:max-w-md lg:text-left'>
              Build your brand's recognition and get detailed insights on how
              your links are performing
            </p>

            <div className='mx-auto lg:mx-0'>
              <a
                href='#'
                className='py-5 px-10 text-2xl font-bold text-white bg-cyan rounded-full lg:py-4 hover:opacity-70'
              >
                Get Started
              </a>
            </div>
          </div>
          {/* image */}
          <div className='mb-24 mx-auto md:w-180 lg:mb-0 lg:w-1/2'>
            <Image src={illustrationWorking} alt='' />
          </div>
        </div>
      </section>

      {/* shorten section */}
      <section id='shorten' className='relative bg-gray-100'>
        {/* shorten container */}
        <div className='max-w-4xl mx-auto p-6 space-y-6'>
          {/* form */}
          <form
            onSubmit={(event) => formSubmit(event)}
            id='link-form'
            className='relative flex flex-col w-full p-10 -mt-20 space-y-4 bg-darkViolet rounded-lg md:flex-row md:space-y-0 md:space-x-3'
          >
            <input
              type='text'
              className='flex-1 p-3 border-2 rounded-lg placeholder-yellow-500  focus:outline-none'
              placeholder='Shorten a link here'
              id='link-input'
              onChange={(event) => handleInput(event)}
              value={inputValue}
            />
            <button
              type='submit'
              className='px-10 py-3 text-white bg-cyan rounded-lg hover:bg-cyanLight focus:outline-none md:py-2'
            >
              Shorten It!
            </button>

            {/* error messages */}
            <div
              id='err-msg'
              className='absolute left-7 bottom-3 text-red text-sm italic'
            >
              {errorMessage}
            </div>
          </form>

          {/* link 1  */}
          <div className='flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row'>
            <p className='font-bold text-center text-veryDarkViolet md:text-left'>
              https://frontendmentor.io
            </p>

            <div className='flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0'>
              <div className='font-bold text-cyan'>https://rel.ink/l4IKyk</div>
              <button className='p-2 px-8 text-white bg-cyan rounded-lg hover:opacity-70 focus:outline-none'>
                Copy
              </button>
            </div>
          </div>
          {/* link 2  */}
          <div className='flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row'>
            <p className='font-bold text-center text-veryDarkViolet md:text-left'>
              https://twitter.com/frontendmentor
            </p>

            <div className='flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0'>
              <div className='font-bold text-cyan'>https://rel.ink/gxOXp9</div>
              <button className='p-2 px-8 text-white bg-darkViolet rounded-lg hover:opacity-70 focus:outline-none'>
                Copy
              </button>
            </div>
          </div>
          {/* link 3  */}
          <div className='flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row'>
            <p className='font-bold text-center text-veryDarkViolet md:text-left'>
              https://linkedin.com/frontend-mentor
            </p>

            <div className='flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0'>
              <div className='font-bold text-cyan'>https://rel.ink/gob3X9</div>
              <button className='p-2 px-8 text-white bg-cyan rounded-lg hover:opacity-70 focus:outline-none'>
                Copy
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* stats section */}
      <section id='stats' className='py-24 bg-gray-100'>
        <div className='container mx-auto px-3'>
          <h2 className='text-4xl mb-6 font-bold text-center'>
            Advanced Statistics
          </h2>
          <p className='max-w-xs mx-auto text-center text-gray-400 md:max-w-md'></p>
        </div>
      </section>
      {/* Feature box Section */}
      <section id='features' className='pb-32 bg-gray-100'>
        <div className='relative container flex flex-col items-start px-6 mx-auto md:flex-row md:space-x-7'>
          {/* horizontal line */}
          <div className=' w-10/12 hidden absolute top-24 left-16 h-3 bg-cyan md:block'></div>
          {/* vertical line */}
          <div className='absolute w-2 h-full -ml-1 bg-cyan md:hidden left-1/2'></div>
          {/* box 1 */}
          <div className='relative flex flex-col p-6 gap-6 bg-white rounded-lg md:w-1/3'>
            {/* image positioning */}
            <div className='absolute -ml-10 -mt-16 md:left-16 left-1/2'>
              {/* image container for bg and center */}
              <div className='flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet'>
                <Image alt='' src={iconBrandRecognition} />
              </div>
            </div>
            <h5 className='pt-6 text-xl font-bold text-center capitalize md:text-left'>
              Brand Recognition
            </h5>
            <p className='text-center text-gray-400 md:text-left'>
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
          {/* box 2 */}
          <div className='relative flex mt-24 md:mt-8 flex-col p-6 gap-6 bg-white rounded-lg md:w-1/3'>
            {/* image positioning */}
            <div className='absolute -ml-10 -mt-16 md:left-16 left-1/2'>
              {/* image container for bg and center */}
              <div className='flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet'>
                <Image alt='' src={iconDetailedRecords} />
              </div>
            </div>
            <h5 className='pt-6 text-xl font-bold text-center capitalize md:text-left'>
              Detailed records
            </h5>
            <p className='text-center text-gray-400 md:text-left'>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          {/* box 3 */}
          <div className='relative flex mt-24 md:mt-16 flex-col p-6 gap-6 bg-white rounded-lg md:w-1/3'>
            {/* image positioning */}
            <div className='absolute -ml-10 -mt-16 md:left-16 left-1/2'>
              {/* image container for bg and center */}
              <div className='flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet'>
                <Image alt='' src={iconFullyCustom} />
              </div>
            </div>
            <h5 className='pt-6 text-xl font-bold text-center capitalize md:text-left'>
              Fully customizable
            </h5>
            <p className='text-center text-gray-400 md:text-left'>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </section>
      {/* CTA section */}
      <section id='cta' className='py-24 bg-darkViolet'>
        <div className='flex flex-col p-2 gap-6'>
          <h5 className='mx-auto gap-10 text-4xl font-bold text-center text-white'>
            Boost your links today
          </h5>
          <button className='px-10 py-5 mx-auto text-2xl font-bold text-white rounded-full bg-cyan hover:bg-cyanLight md:text-base md:py-3 focus:outline-none'>
            Get Started
          </button>
        </div>
      </section>
      <footer className='py-16 bg-veryDarkViolet'>
        <div className='container flex flex-col items-center justify-between mx-auto gap-16 md:flex-row md:items-start'>
          {/* Logo */}
          <Image alt='' src={logo} />
          {/* Menus container */}
          <div className='flex flex-col gap-16 md:gap-20 md:flex-row'>
            {/* menu 1 */}
            <div className='flex flex-col items-center w-full md:items-start'>
              <div className='mb-5 font-bold text-white capatalize'>
                Features
              </div>
              <div className='flex-col flex items-center gap-3 md:items-start'>
                <a
                  href='#'
                  className='capitalize text-grayishViolet hover:text-cyan'
                >
                  Link shortening
                </a>
                <a
                  href='#'
                  className='capitalize text-grayishViolet hover:text-cyan'
                >
                  Branded links
                </a>
                <a
                  href='#'
                  className='capitalize text-grayishViolet hover:text-cyan'
                >
                  Analytics
                </a>
              </div>
            </div>
            {/* menu 2 */}
            <div className='flex flex-col items-center w-full md:items-start'>
              <div className='mb-5 font-bold text-white capatalize'>
                Resources
              </div>
              <div className='flex-col flex items-center gap-3 md:items-start'>
                <a
                  href='#'
                  className='capitalize text-grayishViolet hover:text-cyan'
                >
                  Blog
                </a>
                <a
                  href='#'
                  className='capitalize text-grayishViolet hover:text-cyan'
                >
                  Developers
                </a>
                <a
                  href='#'
                  className='capitalize text-grayishViolet hover:text-cyan'
                >
                  Support
                </a>
              </div>
            </div>
            {/* menu 3 */}
            <div className='flex flex-col items-center w-full md:items-start'>
              <div className='mb-5 font-bold text-white capatalize'>
                Company
              </div>
              <div className='flex-col flex items-center gap-3 md:items-start'>
                <a
                  href='#'
                  className='capitalize text-grayishViolet hover:text-cyan'
                >
                  About{' '}
                </a>
                <a
                  href='#'
                  className='capitalize text-grayishViolet hover:text-cyan'
                >
                  Our Team{' '}
                </a>
                <a
                  href='#'
                  className='capitalize text-grayishViolet hover:text-cyan'
                >
                  Careers
                </a>
                <a
                  href='#'
                  className='capitalize text-grayishViolet hover:text-cyan'
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
          {/* social container */}
          <div className='flex gap-6'>
            <a href='#'>
              <Image alt='' src={iconFB} className='ficon' />
            </a>
            <a href='#'>
              <Image alt='' src={iconTwitter} className='ficon' />
            </a>
            <a href='#'>
              <Image alt='' src={iconPint} className='ficon' />
            </a>
            <a href='#'>
              <Image alt='' src={iconInsta} className='ficon' />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

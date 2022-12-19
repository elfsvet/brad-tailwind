import Head from 'next/head';
import Image from 'next/image';
import logo from '../../public/images/clipboard/logo.svg';
import computer from '../../public/images/clipboard/image-computer.png';
import devices from '../../public/images/clipboard/image-devices.png';
import iconBlackList from '../../public/images/clipboard/icon-blacklist.svg';
import iconText from '../../public/images/clipboard/icon-text.svg';
import iconPreview from '../../public/images/clipboard/icon-preview.svg';
import iconFacebook from '../../public/images/clipboard/icon-facebook.svg';
import iconTwitter from '../../public/images/clipboard/icon-twitter.svg';
import iconInstagram from '../../public/images/clipboard/icon-instagram.svg';
import logoGoogle from '../../public/images/clipboard/logo-google.png';
import logoIBM from '../../public/images/clipboard/logo-ibm.png';
import logoMicrosoft from '../../public/images/clipboard/logo-microsoft.png';
import logoHP from '../../public/images/clipboard/logo-hp.png';
import logoVectorGraphics from '../../public/images/clipboard/logo-vector-graphics.png';

export default function Clipboard() {
  return (
    <>
      <Head>
        <title>Clipboard Website</title>
      </Head>
      {/* // hero section */}
      <section id='hero' className=''>
        <div className='section-container mb-40 pt-16'>
          <Image src={logo} alt='' className='mx-auto my-16' />
          <h3>A history of everything you copy</h3>
          <p className='section-content  mb-10 text-2xl '>
            Clipboard allows you to track and organize everything you copy.
            Instantly access your clipboard on all your devices.
          </p>
          {/* button container */}
          <div className='button-container'>
            <a href='#' className='buttons bg-strongCyan'>
              Download for iOS
            </a>
            <a href='#' className='buttons bg-lightBlue '>
              Download for Mac
            </a>
          </div>
        </div>
      </section>

      {/* snippets section */}
      <section id='snippets'>
        <div className='section-container my-20'>
          <h3>Keep track of your snippets</h3>
          <p className='mb-24 section-content text-xl'>
            Clipboard instantly stores any item you copy in the cloud, meaning
            you can access your snippets immediately on all your devices. Our
            Mac and iOS apps will help you organize everything.
          </p>
        </div>
      </section>
      {/* features section */}
      <section id='features'>
        <div className='section-container my-20'>
          <div className='relative flex flex-col md:flex-row md:space-x-32 '>
            {/* image */}
            <div className='md:w-1/2'>
              <Image
                alt=''
                src={computer}
                className='md:absolute top-0 right-[50%]'
              />
            </div>

            {/* items container */}
            <div className='flex-col flex mt-16 mb-24 space-y-12 text-xl md:mb-60 md:text-left md:pl-16 md:w-1/2'>
              {/* item 1 */}
              <div className=''>
                <h5 className=''>Quick Search</h5>
                <p className='max-w-md text-grayishBlue'>
                  Easily search your snippets by content, category, web,
                  address, application, and more.
                </p>
              </div>
              {/* item 2 */}
              <div className=''>
                <h5 className=''>ICloud sync</h5>
                <p className='max-w-md text-grayishBlue'>
                  Instantly saves and syncs snippets across all your devices.
                </p>
              </div>
              {/* item 3 */}
              <div className=''>
                <h5 className=''>Completely History</h5>
                <p className='max-w-md text-grayishBlue'>
                  Retrieve any snippets from the first moment you started using
                  the app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* access anywhere section */}
      <section id='access'>
        <div className='section-container my-20 '>
          <h3>Access Clipboard anywhere</h3>
          <p className=' section-content text-xl mb-24 '>
            Whether you're on the go or at your computer, you can access all
            your Clipboard snippets in a few simple clicks.
          </p>
          <Image alt='' src={devices} className='mx-auto' />
        </div>
      </section>
      {/* supercharged section */}
      <section id='supercharged'>
        <div className='section-container my-20'>
          <h3>Supercharge your workflow</h3>
          <p className='mb-16 section-content text-xl'>
            We've got the tools to boost your productivity.
          </p>
          {/* items container */}
          <div className='flex flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0 md:space-x-12'>
            {/* item 1 */}
            <div className='flex flex-col items-center space-y-5'>
              <Image className='mb-6' alt='' src={iconBlackList} />
              <h5>Create Blacklist</h5>
              <p className='max-w-md text-grayishBlue'>
                Easily search your snippets by content, category, web address,
                application, and more.
              </p>
            </div>

            {/* item 2 */}
            <div className='flex flex-col items-center space-y-5'>
              <Image className='mb-6' alt='' src={iconText} />
              <h5>Plain Text Snippets</h5>
              <p className='max-w-md text-grayishBlue'>
                Remove unwanted formatting from copied text for a consistent
                look.
              </p>
            </div>

            {/* item 3 */}
            <div className='flex flex-col items-center space-y-5'>
              <Image className='mb-6' alt='' src={iconPreview} />
              <h5>Sneak Preview</h5>
              <p className='max-w-md text-grayishBlue'>
                Quick preview of all snippets on your Clipboard for easy access.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* references section */}
      <section id='references'>
        <div className='flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-44 md:flex-row md:space-y-0'>
          <Image alt='' src={logoGoogle} />
          <Image alt='' src={logoIBM} />
          <Image alt='' src={logoMicrosoft} />
          <Image alt='' src={logoHP} />
          <Image alt='' src={logoVectorGraphics} />
        </div>
      </section>
      {/* bottom cta section */}
      <section id='bottom'>
        <div className='section-container my-20'>
          <h3>Clipboard for iOS and MacOS</h3>
          <p className='section-content text-xl mb-10'>
            Available for free on the App Store. Download for Mac or iOS, sync
            with iCloud and you're ready to start adding to your clipboard.
          </p>
          {/* button container */}
          <div className='button-container'>
            <a href='#' className='buttons bg-strongCyan'>
              Download for iOS
            </a>
            <a href='#' className='buttons bg-lightBlue '>
              Download for Mac
            </a>
          </div>
        </div>
      </section>
      {/* footer */}
      <footer className='bg-gray-50'>
        <div className='section-container'>
          <div className='flex flex-col items-center justify-between md:flex-row'>
            <Image src={logo} alt='' className='scale-50' />
            {/* container for menus and social */}
            <div className='flex flex-col items-center justify-between flex-1 mb-10 space-y-6 md:flex-row md:mb-0 md:space-y-0 text-grayishBlue'>
              {/* menus */}
              <div className='flex-col flex space-y-4 md:flex-row md:space-y-0 md:ml-24 md:space-x-24'>
                {/* MENU 1 */}
                <div className='flex flex-col space-y-4 text-center md:text-left'>
                  <div className=''>
                    <a href='#' className='hover:text-strongCyan'>
                      FAQs
                    </a>
                  </div>
                  <div className=''>
                    <a href='#' className='hover:text-strongCyan'>
                      Contact Us
                    </a>
                  </div>
                </div>
                {/* MENU 2 */}
                <div className='flex flex-col space-y-4 text-center md:text-left'>
                  <div className=''>
                    <a href='#' className='hover:text-strongCyan'>
                      Privacy Policy
                    </a>
                  </div>
                  <div className=''>
                    <a href='#' className='hover:text-strongCyan'>
                      Press Kit
                    </a>
                  </div>
                </div>
                {/* MENU 3 */}
                <div className='flex flex-col space-y-4 text-center md:text-left'>
                  <div className=''>
                    <a href='#' className='hover:text-strongCyan'>
                      Install Guide
                    </a>
                  </div>
                </div>
              </div>
              {/* social icons */}
              <div className='flex justify-between w-32 py-1'>
                <a href='#'>
                  <Image
                    className='duration-200 ficon'
                    alt=''
                    src={iconFacebook}
                  />
                </a>
                <a href='#'>
                  <Image
                    className='duration-200 ficon'
                    alt=''
                    src={iconTwitter}
                  />
                </a>
                <a href='#'>
                  <Image
                    className='duration-200 ficon'
                    alt=''
                    src={iconInstagram}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

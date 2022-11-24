import Image from 'next/image';
import stepan from '../public/images/profile.jpg'

export default function filters() {
  return (
    <div>
      {/* blur */}
      <div className='blur-sm'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, autem?
      </div>
      <div className='blur'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, autem?
      </div>
      <Image className='blur-xl ' src={stepan} alt='stepan' />

      {/* brightness */}
      <Image className='brightness-100 ' src={stepan} alt='stepan' />
      <Image className='brightness-50 ' src={stepan} alt='stepan' />
      <Image className='brightness-75 ' src={stepan} alt='stepan' />
      <Image className='brightness-150 ' src={stepan} alt='stepan' />
      <Image className='brightness-200 ' src={stepan} alt='stepan' />
{/* contrast */}
      <Image className='contrast-50 ' src={stepan} alt='stepan' />
      <Image className='contrast-75 ' src={stepan} alt='stepan' />
      <Image className='contrast-100 ' src={stepan} alt='stepan' />
      <Image className='contrast-150 ' src={stepan} alt='stepan' />
      <Image className='contrast-200 ' src={stepan} alt='stepan' />
      {/* grayscale */}
      <Image className='grayscale  ' src={stepan} alt='stepan' />
      {/* Invert */}
      <Image className='invert  ' src={stepan} alt='stepan' />
      {/* sepia */}
      <Image className='sepia  ' src={stepan} alt='stepan' />
      {/* hue rotation */}
      <Image className='hue-rotate-60' src={stepan} alt='stepan' />
      <Image className='hue-rotate-90 ' src={stepan} alt='stepan' />
      <Image className='hue-rotate-15' src={stepan} alt='stepan' />
      <Image className='hue-rotate-180' src={stepan} alt='stepan' />
    </div>
  );
}

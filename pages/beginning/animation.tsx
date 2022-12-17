import alertLogo from '../../public/images/alert.svg';
import spinner from '../../public/images/spinner-svgrepo-com.svg';
import spinner2 from '../../public/images/spinner.svg';
import Image from 'next/image';

export default function animation() {
  return (
    <div className='flex items-center justify-center min-h-screen bg-slate-900'>
      {/* <img src='/images/alert.svg' alt='alertLogo' /> */}
      <div className='animate-spin-slow'>
        <Image src={spinner2} alt='alert' height={130} width={130} />
      </div>
      <div className='animate-bounce'>
        <Image src={alertLogo} alt='alert' height={130} width={130} />
      </div>
      <div className='animate-spin'>
        <Image src={spinner2} alt='alert' height={130} width={130} />
      </div>
      <div className='animate-pulse'>
        <Image src={alertLogo} alt='alert' height={130} width={130} />
      </div>
      <div className='animate-wiggle'>
        <Image src={spinner2} alt='alert' height={130} width={130} />
      </div>
      <div className='animate-ping'>
        <Image src={alertLogo} alt='alert' height={130} width={130} />
      </div>
    </div>
  );
}

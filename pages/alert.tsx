import Image from 'next/image';
import warning from '../public/images/alert.svg';

export default function alert() {
  return (
    <div className='flex justify-center mx-auto p-6 max-w-sm bg-white rounded-xl shadow-xl space-x-4 mt-12'>
      <Image src={warning} alt='alert' className='h-12 w-12' />
      <div>
        <h1 className='text-xl font-medium text-black'>Are you sure?</h1>
        <p className='text-slate-500'>You about to delete a post</p>
      </div>
    </div>
  );
}

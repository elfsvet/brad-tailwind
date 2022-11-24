import Image from 'next/image';
import stepan from '../public/images/profile.jpg'

export default function layoutPositioning() {
  return (
    <div>
      {/* positioning */}

      <div className='relative h-12 bg-red-200 w-1/2'>
        <p>Parent Element</p>
        <div className='absolute bottom-0 right-0 bg-red-500'>
          <p>Absolute Child</p>
        </div>
      </div>
      <div className='relative h-32 w-32 bg-yellow-100'>
        <div className='absolute left-0 top-0 h-16 w-16 bg-yellow-300'></div>
      </div>
      <div className='relative h-32 w-32 bg-yellow-100'>
        <div className='absolute right-0 top-0 h-16 w-16 bg-yellow-300'></div>
      </div>
      <div className='relative h-32 w-32 bg-yellow-100'>
        <div className='absolute left-0 bottom-0 h-16 w-16 bg-yellow-300'></div>
      </div>
      <div className='relative h-32 w-32 bg-yellow-100'>
        <div className='absolute right-0 bottom-0 h-16 w-16 bg-yellow-300'></div>
      </div>

      {/* span bottom edge */}
      <div className='relative h-32 w-32 bg-yellow-100'>
        <div className='absolute inset-x-0 bottom-0 h-16 bg-yellow-300'></div>
      </div>
      {/* span right edge */}
      <div className='relative h-32 w-32 bg-yellow-100'>
        <div className='absolute inset-y-0 right-0 w-16 bg-yellow-300'></div>
      </div>
      {/* span left edge */}
      <div className='relative h-32 w-32 bg-yellow-100'>
        <div className='absolute inset-y-0 left-0 w-16 bg-yellow-300'></div>
      </div>
      {/* span top edge */}
      <div className='relative h-32 w-32 bg-yellow-100'>
        <div className='absolute inset-x-0 top-0 h-16 bg-yellow-300'></div>
      </div>
      {/* display classes */}
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio,
        laborum{' '}
        <span className='inline font-bold'>
          harum. Inventore obcaecati quisquam eveniet omnis a nam magnam
          praesentium voluptatibus magni, nesciunt laudantium odit soluta
          perferendis{' '}
        </span>
        vero ab accusantium in{' '}
        <span className='inline-block font-bold'>
          corrupti ullam earum. Officia, eos repudiandae
        </span>{' '}
        itaque aliquam{' '}
        <span className='block font-bold'>
          delectus deserunt ratione commodi odit animi veniam
        </span>
        culpa?{' '}
        <span className='hidden font-bold'>
          Amet deserunt nam ducimus aperiam
        </span>{' '}
        omnis magni in, minus, veniam, dolorem porro dicta.
      </div>
    {/* z-index */}
{/* higher number closer to u */}
    <div className="relative h-36">
      <div className="absolute left-10 w-24 h-24 bg-blue-300 z-10">1</div>
      <div className="absolute left-20 w-24 h-24 bg-blue-400">2</div>
      <div className="absolute w-24 left-40 h-24 bg-blue-500 z-10">3</div>
      <div className="absolute w-24 left-60 h-24 bg-blue-600 z-20">4</div>
      <div className="absolute w-24 h-24 left-80 bg-blue-700 z-30">5</div>
    </div>

{/* floats */}
<div className="w-1/2">
  <Image src={stepan} alt="stepan" className="h-48 w-48 float-left m-4"/>
  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quaerat labore dolorem ea nihil dicta vitae, architecto ex odio vero repellat pariatur odit quibusdam tempora! Deserunt possimus adipisci dolor non inventore natus, repudiandae quisquam perferendis ut maiores expedita ad maxime vero praesentium enim numquam impedit nisi quod hic distinctio! Recusandae doloribus, hic eos reprehenderit a debitis facere sunt illo ab!
  </p>
</div>

    </div>
  );
}

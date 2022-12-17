export default function Project() {
  return (
    <div>
      <h1 className=''>Simple Tailwind Starter</h1>
      <h2>Hello World</h2>
      <div className='flex justify-start flex-wrap text-center'>
        <div className='bg-blue-100 border border-blue-300 w-full h-96'>1</div>
        <div className='bg-blue-100 border border-blue-300 w-1/2 h-36'>2</div>
        <div className='bg-blue-100 border border-blue-300 w-1/4 h-36'>3</div>
        <div className='bg-blue-100 border border-blue-300 w-1/4 h-36'>4</div>
        <div className='bg-blue-100 border border-blue-300 w-1/4 h-24'>4</div>
        <div className='bg-blue-100 border border-blue-300 w-1/4 h-24'>4</div>
        <div className='bg-blue-100 border border-blue-300 w-1/4 h-24'>4</div>
        <div className='bg-blue-100 border border-blue-300 w-1/4 h-24'>4</div>
        <div className='bg-gray-100 border border-gray-300 w-1/4 flex flex-cols h-auto'>
          <div className='bg-blue-100 border border-blue-300 w-full h-96'>
            1
          </div>
          <div className='bg-blue-100 border border-blue-300 w-full h-96'>
            1
          </div>
          <div className='bg-blue-100 border border-blue-300 w-full h-96'>
            1
          </div>
        </div>
      </div>
    </div>
  );
}

export default function sizing() {
  return (
    <div>
      hello
      <div className='bg-black text-white w-4'>Hello</div>
      <div className='bg-black text-white w-24'>Hello</div>
      <div className='bg-black text-white w-96'>Hello</div>
      <div className='bg-green-700 text-white w-1/4'>Hello</div>
      <div className='bg-green-700 text-white w-1/3'>Hello</div>
      <div className='bg-green-700 text-white w-1/2'>Hello</div>
      <div className='bg-blue-700 text-white w-screen'>Hello</div>
      <div className='bg-red-700 text-white w-full'>Hello</div>
      <div className='bg-red-500 text-white w-[300px]'>Hello</div>
      <div className='bg-gray-300 max-w-lg mx-auto'>Hello</div>
      {/* height */}
      <div className='flex items-end divide-x divide-black text-center'>
        <div className='bg-orange-500 w-20 h-24'>Hello 1</div>
        <div className='bg-orange-500 w-20 h-32'>Hello 2</div>
        <div className='bg-orange-500 w-20 h-40'>Hello 3</div>
        <div className='bg-orange-500 w-20 h-48'>Hello 4</div>
        <div className='bg-orange-500 w-20 h-64'>Hello 5</div>
        <div className='bg-orange-500 w-20 h-96'>Hello 6</div>
      </div>
      {/* full height */}
      <div className='bg-orange-500  h-screen w-20'>Hello 6</div>
    </div>
  );
}

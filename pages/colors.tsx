export default function colors() {
  return (
    <>
      <p className='text-black'>colors</p>
      <p className='text-white'>colors</p>
      <p className='text-red-500'>colors</p>
      <p className='text-green-500'>colors</p>
      <p className='text-emerald-500'>colors</p>
      <p className='text-zinc-300'>colors</p>
      <p className='text-slate-800'>colors</p>
      <p className='bg-slate-800 text-yellow-200'>colors</p>
      <p className='bg-emerald-400'>colors</p>
      <p className='bg-yellow-300'>colors</p>
      <p className='bg-indigo-800 text-white'>colors</p>
      <p className='underline decoration-red-500'>colors</p>
      <p className='underline decoration-emerald-600'>colors</p>
      <p className='underline decoration-yellow-800'>colors</p>
      <input type='text' className='border border-blue-400'/>
      <input type='text' className='border border-green-400'/>
      <input type='text' className='border border-orange-400'/>

      <div className="divide-y divide-blue-300">
       <div>item 1</div>
       <div>item 2</div>
       <div>item 3</div>
       <div>item 4</div>
       <div>item 5</div>
      </div>

      <button className="outline outline-red-500">Hello</button>
      <button className="outline outline-yellow-500">Hello</button>

      <button className="shadow-lg bg-cyan-500 shadow-cyan-500">subscribe</button>
      <button className="shadow-lg bg-cyan-500 shadow-purple-500/60">subscribe</button>

      <input type="checkbox" checked className="accent-purple-500" />
      <input type="checkbox" checked className="accent-cyan-500" />

      <div className="bg-[#427fab]">Hello</div>
      <div className="bg-[rgb(255,0,0)]">Hello</div>
      <div className="bg-[steelblue]">Hello</div>
    </>
  );
}

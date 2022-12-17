import { useState } from 'react';

export default function darkmode() {
  const [mode, setMode] = useState('');
  return (
    <div className={mode}>
      <div className='container mx-auto mt-10 bg-white dark:bg-slate-900 rounded-xl px-6 py-8 shadow xl'>
        <h3 className='text-slate-900 dark:text-white font-medium tracking-tight'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat,
          voluptates.
        </h3>
        <p className='text-slate-500 dark:text-slate-400 mt-2 text-sm'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
          consequuntur, itaque amet ducimus exercitationem officiis tempora nisi
          omnis eligendi dicta consequatur ipsum! Alias, dolorem quam?
        </p>
      </div>
      <div className='container mx-auto mt-6'>
        <label
          className='inline-flex relative items-center cursor-pointer'
          id='toggle'
          onChange={() => {
            mode === '' ? setMode('dark') : setMode('');
          }}
        >
          <input type='checkbox' value='' className='sr-only peer' />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className='ml-3 text-sm font-medium text-gray-900 dark:text-gray-300'>
            Toggle Dark Mode
          </span>
        </label>
      </div>
    </div>
  );
}

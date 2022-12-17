import React, { useLayoutEffect, useState } from 'react';

export default function breakpoints() {
  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

  function ShowWindowDimensions() {
    const [width, height] = useWindowSize();
    return (
      <span>
        Window size: {width}px
      </span>
    );
  }

  return (
    <div className='bg-black h-screen sm:bg-green-800 md:bg-yellow-400 lg:bg-blue-300 xl:bg-red-500 2xl:bg-purple-800'>
      {/*  */}
      <h1 className='text-white text-xl md:text-3xl xl:text-5xl'>{ShowWindowDimensions()}</h1>
    </div>
  );
}

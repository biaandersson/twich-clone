import React from 'react';
import Image from 'next/image';
import { headphones, mic, paint, remote, trophy } from '../../public/assets';

const IconBar = () => (
  <div className='p-2 md:p-8'>
    <div className='grid sm:grid-cols-3 lg:grid-cols-5 gap-4 border-t border-gray-700 py-8'>
      <div className='w-full h-[50px] bg-purple-700 justify-between items-center flex px-4 rounded'>
        <p className='text-2xl font-bold'>Games</p>
        <Image src={remote} alt='games' />
      </div>
      <div className='w-full h-[50px] bg-purple-700 justify-between items-center flex px-4 rounded'>
        <p className='text-2xl font-bold'>IRL</p>
        <Image src={mic} alt='games' />
      </div>
      <div className='w-full h-[50px] bg-purple-700 justify-between items-center flex px-4 rounded'>
        <p className='text-2xl font-bold'>Music</p>
        <Image src={headphones} alt='games' />
      </div>
      <div className='w-full h-[50px] bg-purple-700 justify-between items-center flex px-4 rounded'>
        <p className='text-2xl font-bold'>Esports</p>
        <Image src={trophy} alt='games' />
      </div>
      <div className='w-full h-[50px] bg-purple-700 justify-between items-center flex px-4 rounded'>
        <p className='text-2xl font-bold'>Creative</p>
        <Image src={paint} alt='games' />
      </div>
    </div>
  </div>
);

export default IconBar;

import React from 'react';
import Image from 'next/image';

const LiveChannelItem = ({ img, user, profile_img, game, title }) => (
  <div className='p-2'>
    <Image src={img} alt='game image' />
    <div className='flex pt-2'>
      <div className='pr-2'>
        <Image
          src={profile_img}
          alt='profile image'
          width={50}
          height={50}
          className='rounded-full cursor-pointer'
        />
      </div>
      <div>
        <p className='font-bold'>{title}</p>
        <p className='text-sm text-gray-500'>{user}</p>
        <p className='text-sm text-gray-500'>{game}</p>
      </div>
    </div>
  </div>
);

export default LiveChannelItem;

import React from 'react';
import { RiMovieLine } from 'react-icons/ri';
import { rec_channels, top_channels } from '../../data/MOCK_DATA';
import Image from 'next/image';
import { BsDot } from 'react-icons/bs';

const SideMenu = () => {
  return (
    <div className='fixed w-14 sm:w-16 xl:w-[15rem] h-screen py-2 bg-[#0e0e10]'>
      <div className=''>
        <p className='hidden xl:flex uppercase font-bold text-sm pb-4'>
          Recommended Channels
        </p>
        <div>
          <RiMovieLine className='xl:hidden justify-center w-full' size={20} />
        </div>
      </div>
      {rec_channels.map((channel, index) => (
        <div key={index} className='inline-flex items-center w-full py-[2px]'>
          <div>
            <Image
              src={channel?.avatar}
              alt={channel.username}
              width={50}
              height={50}
            />
          </div>
          <div className='hidden xl:flex justify-between w-full'>
            <div>
              <p className='text-sm font-bold'>{channel.username}</p>
              <p className='text-xs text-gray-500'>{channel.game_name}</p>
            </div>
            <p className='flex items-center'>
              <BsDot size={40} className='text-red-600' />
              {channel.rank}K
            </p>
          </div>
        </div>
      ))}
      <div className=''>
        <p className='hidden xl:flex uppercase font-bold text-sm pb-4 py-4'>
          Top Channels
        </p>
        <div>
          <RiMovieLine className='xl:hidden justify-center w-full' size={20} />
        </div>
      </div>
      {top_channels.map((top, index) => (
        <div className='inline-flex items-center w-full py-[2px]' key={index}>
          <Image src={top?.avatar} alt={top.username} width={50} height={50} />
          <div className='hidden xl:flex justify-between w-full'>
            <div>
              <p className='text-sm font-bold'>{top.username}</p>
              <p className='text-xs text-gray-500'>{top.game_name}</p>
            </div>
            <p className='flex items-center'>
              <BsDot size={40} className='text-red-600' />
              {top.rank}K
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideMenu;

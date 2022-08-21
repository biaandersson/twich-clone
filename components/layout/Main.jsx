import React from 'react';
import { Categories, Hero, IconBar, LiveChannels } from '../index';

const Main = () => {
  return (
    <div className='absolute left-[64px] xl:left-[220px]'>
      <Hero />
      <LiveChannels />
      <IconBar />
      <Categories />
    </div>
  );
};

export default Main;

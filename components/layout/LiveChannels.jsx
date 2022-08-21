import React from 'react';
import { LiveChannelItem } from '../index';
import {
  live1,
  live10,
  live2,
  live3,
  live4,
  live5,
  live6,
  live7,
  live8,
  live9,
} from '../../public/assets/live';

const LiveChannels = () => (
  <div className='p-2 md:p-8' id='live'>
    <h2 className='text-xl font-bold px-2'>
      <span className='text-[#9147ff]'>Live Channels,</span> we think you like
    </h2>
    <div className='grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-4 py-2'>
      <LiveChannelItem
        img={live1}
        profile_img='https://shorturl.at/cehSZ'
        title='CHARITY STREAM! Any support is ap...'
        user='Natt'
        game='Valorant'
      />
      <LiveChannelItem
        img={live2}
        profile_img='https://shorturl.at/cehSZ'
        title='Deployable shield commin in clutch'
        user='50ZINT'
        game='Call of Duty: Warzone'
      />
      <LiveChannelItem
        img={live3}
        profile_img='https://shorturl.at/cehSZ'
        title='VALORANT WITH NIJI AND FRIENDS!...'
        user='baoo'
        game='Valorant'
      />
      <LiveChannelItem
        img={live4}
        profile_img='https://shorturl.at/cehSZ'
        title='Local Streamer stuck in a cave: sings...'
        user='Jerma985'
        game='One Hand Clapping'
      />
      <LiveChannelItem
        img={live5}
        profile_img='https://shorturl.at/cehSZ'
        title='BIG Mario Kart session'
        user='Bigpuffer'
        game='Mario Kart 8 Deluxe'
      />
      <LiveChannelItem
        img={live6}
        profile_img='https://shorturl.at/cehSZ'
        title='Tripod Man Gains RP | Code: MFAM | @...'
        user='NICKMERCS'
        game='Apex Legends'
      />
      <LiveChannelItem
        img={live7}
        profile_img='https://shorturl.at/cehSZ'
        title='JESUS LOVES YOU!!!'
        user='coletteleclair'
        game='Just Chatting'
      />
      <LiveChannelItem
        img={live8}
        profile_img='https://shorturl.at/cehSZ'
        title='Covert_Muffin teaching Star Wars...'
        user='JamesDoneQuick'
        game='Star Wars: Jedi Knight II - Jedi Outcast'
      />
      <LiveChannelItem
        img={live9}
        profile_img='https://shorturl.at/cehSZ'
        title='Grinding'
        user='shroud'
        game='The Cycle: Frontier'
      />
      <LiveChannelItem
        img={live10}
        profile_img='https://shorturl.at/cehSZ'
        title='GRILLIN / CHILLEN! Steak / Burgers...'
        user='KennyGoodloe'
        game='Just Chatting'
      />
    </div>
  </div>
);

export default LiveChannels;

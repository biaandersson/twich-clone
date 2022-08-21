import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const MobileMenu = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <>
      <div onClick={handleNav} className='block md:hidden z-10 cursor-pointer'>
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>

      <div className={nav ? 'open' : 'close'}>
        <ul className='text-center'>
          <li onClick={() => setNav(false)} className='p-4 text-3xl font-bold'>
            <Link href='/'>Home</Link>
          </li>
          <li onClick={() => setNav(false)} className='p-4 text-3xl font-bold'>
            <Link href='/#live'>Live Channels</Link>
          </li>
          <li onClick={() => setNav(false)} className='p-4 text-3xl font-bold'>
            <Link href='/#categories'>Top Categories</Link>
          </li>
          <li onClick={() => setNav(false)} className='p-4 text-3xl font-bold'>
            <Link href='/account'>Account</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;

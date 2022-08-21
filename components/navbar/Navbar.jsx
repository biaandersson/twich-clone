import React from 'react';
import {
  LeftSideSideNavbar,
  MiddleSectionNavbar,
  MobileMenu,
  RightSideNavbar,
} from '../index';

const Navbar = ({ nav }) => (
  <div className='fixed h-14 w-full flex flex-nowrap items-center p-4 bg-[#0e0e10] mb-[2px] z-10'>
    {/* Left Side */}
    <LeftSideSideNavbar />

    {/* Middle */}
    <MiddleSectionNavbar />

    {/* Right Side */}
    <RightSideNavbar />

    {/* Mobile Menu */}
    <MobileMenu nav={nav} />
  </div>
);

export default Navbar;

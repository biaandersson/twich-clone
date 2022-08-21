import React, { Fragment } from 'react';
import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';
import Image from 'next/image';
import { signOut, useSession } from 'next-auth/react';
import { BsArrowBarRight, BsPersonCircle } from 'react-icons/bs';

const RightSideNavbar = () => {
  const { data: session } = useSession();

  const classNames = (...classes) => classes.filter(Boolean).join(' ');

  return (
    <div className='hidden md:flex grow items-center justify-end'>
      {session ? (
        <div className='flex items-center'>
          <Link href='/account'>
            <div>
              <p className='pr-4 cursor-pointer text-sm font-bold flex flex-row hover:text-purple-500'>
                <BsArrowBarRight size={20} className='mr-2 text-gray-500' />{' '}
                Account
              </p>
            </div>
          </Link>
          <Menu as='div' className='relative text-left'>
            <div className='flex'>
              <Menu.Button>
                <Image
                  src={session.user.image}
                  width='45'
                  height='45'
                  className='rounded-full'
                  alt='git profile'
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'>
              <Menu.Items className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[#0e0e10] ring-1 ring-white ring-opacity-5 focus:outline-none'>
                <div className='py-1'>
                  <Menu.Item>
                    {({ active }) => (
                      <p
                        className={classNames(
                          active
                            ? 'bg-gray-500 text-gray-100'
                            : 'text-gray-200',
                          'block px-4 py-2 text-sm'
                        )}>
                        <Link href='/account'>Account</Link>
                      </p>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <p
                        onClick={() => signOut()}
                        className={classNames(
                          active
                            ? 'bg-gray-500 text-gray-100'
                            : 'text-gray-200',
                          'block px-4 py-2 text-sm'
                        )}>
                        Logout
                      </p>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      ) : (
        <div className='flex items-center'>
          <Link href='/account'>
            <button className='px-4 py-[6px] rounded-lg font-bold bg-[#9147ff] mr-2'>
              Account
            </button>
          </Link>
          <BsPersonCircle size={30} />
        </div>
      )}
    </div>
  );
};

export default RightSideNavbar;

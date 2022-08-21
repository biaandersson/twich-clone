import React from 'react';
import Image from 'next/image';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { signIn, signOut, useSession } from 'next-auth/react';

const Account = () => {
  const { data: session } = useSession();

  return session ? (
    <div className='pt-[100px] flex flex-col max-w-full max-auto p-4 items-center'>
      <h2 className='text-2xl font-bold'>
        Hey, <span className='text-purple-500'>{session.user.name}</span>
      </h2>
      <p className='text-gray-600 py-4'>
        You are signed in with{' '}
        <span className='text-purple-500'>{session.user.email}</span>
      </p>
      <div className='pb-4mb-auto'>
        <Image
          src={session.user.image}
          alt={session.user.name}
          width={100}
          height={100}
          className='rounded-full'
        />
      </div>
      <button
        className='bg-gray-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full'
        onClick={() => signOut()}>
        Sign Out
      </button>
    </div>
  ) : (
    <div className='pt-[100px] flex flex-col max-w-[400px] w-full mx-auto p-4'>
      <h2 className='text-3xl font-bold'>Login</h2>
      <p className='py-4'>Choose the account you want to sign in with.</p>
      <button
        onClick={() => signIn()}
        className='flex items-center justify-center p-3 bg-gray-600 border border-gray-600'>
        <FaGithub className='mr-2' />
        Sign in with <span className='font-bold pl-1'>Github</span>
      </button>
      <button
        onClick={() => signIn()}
        className='flex items-center justify-center p-3 bg-blue-600 border border-blue-600 mt-4'>
        <FaGoogle className='mr-2' />
        Sign in with <span className='font-bold pl-1'>Google</span>
      </button>
    </div>
  );
};

export default Account;

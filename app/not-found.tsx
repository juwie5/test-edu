'use client';
import React from 'react'
import { useRouter } from 'next/navigation';

export default function NotFound() {
    const router = useRouter();
    const handleHome = () => {
       router.push('/')
    }
    return (
      <div className='h-screen place-items-center flex justify-center items-center flex-col space-y-5 bg-[url(/images/error.svg)] relative'>
           <div className='flex justify-end items-end ml-40'>
           <button  onClick={handleHome} className='text-green-600 bg-white font-medium rounded-xl px-20 py-6 absolute bottom-16'
            >
               Back to Home
            </button>
           </div>
      </div>
    );
  }
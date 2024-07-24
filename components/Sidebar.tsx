import Image from 'next/image'
import React from 'react'
import Profilephoto from './shared/Profilephoto'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

const Sidebar = ({user}: {user:any}) => {
  return (
    <div className='hidden md:block w-[20%] h-fit border border-gray-300 rounded'>
      <div className='flex relative flex-col items-center'>
        <div className='w-full h-16 overflow-hidden'>
          {user && (
            <Image 
              src="/banner.png"
              alt="banner"
              width={200}
              height={200}
              className='w-full h-full rounded-t'
            />
          )}
        </div>
        <div className='my-1 absolute top-10'>
          <Profilephoto src={user ? user?.imageUrl!: "/banner.png" }/>
        </div>
        <div className='border-b-gray-300 shadow-sm'>
          <div className='p-2 mt-5 text-center shadow-sm'>
            <h1 className='font-bold cursor-pointer'>
              {user ? `${user.firstName} ${user.lastName}` : <Button className="rounded-full" variant={"secondary"}>
                            <SignInButton/>
                        </Button> }
            </h1>
            <h1 className='cursor-pointer'>
              {user ? `@${user.username}` : "@username"}
            </h1>
          </div>
        </div>
      </div>
      <div className='text-xs font-semibold'>
          <div className='w-full flex justify-between items-center px-3 py-2 gap-2'>
            <p>Post Impressions</p>
            <p className='text-blue-500'>88</p>
          </div>
          <div className='w-full flex justify-between items-center px-3 py-2'>
            <p>Posts</p>
            <p className='text-blue-500'>0</p>
          </div>
        </div>
    </div>
  )
}
export default Sidebar

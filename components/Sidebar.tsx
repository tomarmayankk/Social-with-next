import Image from 'next/image'
import React from 'react'
import Profilephoto from './shared/Profilephoto'
import { SignInButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { getAllPosts } from '@/lib/serveractions';
import { User } from 'lucide-react';

const Sidebar = async ({user}: {user:any}) => {
  const posts = await getAllPosts();
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
          <Profilephoto src={user ? user?.imageUrl!: "/userIcon.png" }/>
        </div>
        <div className='border-b-gray-300 shadow-sm'>
          <div className='p-2 mt-5 text-center shadow-sm mb-5'>
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
    </div>
  )
}
export default Sidebar

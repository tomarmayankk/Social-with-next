"use client"
import React from 'react'
import Profilephoto from './shared/Profilephoto'
import { useUser } from '@clerk/nextjs'
import { Button } from './ui/button'
import { Trash2 } from 'lucide-react'
import { Badge } from './ui/badge'

const Post = () => {
    const user = useUser();
    //const fullName = 
  return (
    <div className='bg-white my-2 rounded-lg border border-gray-300'>
        <div className='flex gap-2 p-4'>
        {/*<Profilephoto src={post?.user?.profilePhoto!} />*/}
        <div className='flex  items-center justify-between w-full'>
            <div>
                <h1 className='text-sm font-semibold'>
                    Full Name
                    <Badge variant="secondary" className='ml-2'>You</Badge>
                    </h1>
                <p className='text-xs text-gray-500'>@username</p>
                <p className='text-xs text-gray-500'>1hr ago</p>  
            </div>
        </div>
        <Button size={'icon'} variant={'outline'} className='rounded-full'>
            <Trash2/>
        </Button>
        </div>
    </div>
  )
}

export default Post
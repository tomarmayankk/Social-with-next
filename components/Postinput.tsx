"use client"
import { useState } from 'react'
import Profilephoto from './shared/Profilephoto'
import { Input } from './ui/input'
import PostDilog from './PostDilog'



const Postinput = ({user} : {user:any}) => {
    const [open, setOpen] = useState<boolean>(false);
    const inputHandler = () => {
        setOpen(true);
    }
  return (
    <div className='bg-white p-4 m-2 md:m-0 rounded-lg border border-gray-300'>  
    <div className='flex items-center gap-3'>
        <Profilephoto src={user?.imageUrl} />
        <Input
        type='text'
        placeholder='Start a Post'
        className='rounded-full hover:bg-gray-100 h-12 cursor-text' 
        onClick={inputHandler} />
        <PostDilog setOpen={setOpen} open={open} src={user?.imageUrl}/>
    </div>
    </div>
  )
}

export default Postinput
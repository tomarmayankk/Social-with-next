import { Info } from 'lucide-react'
import React from 'react'

interface NAVITEMS {
  heading: string,
  subHeading: string
}
const newsItems: NAVITEMS[] = [
  {
    heading: "  Create a Post",
    subHeading: "Shar your thoughts!"
  },
  {
    heading: "Like a post",
    subHeading: "You can like your friend's post"
  },
  {
    heading: "Comment on Post",
    subHeading: "Express your opinions with comments"
  },
]

const News = () => {
  return (
    <div className='hidden md:block w-[25%] bg-white h-fit rounded-lg border border-gray-300'>
      <div className='flex items-center justify-between p-3'>
        <h1 className='font-medium'>Updates</h1>
        <Info size={18} />
      </div>
      <div>
{
  newsItems.map((item, index)=>{
    return (
      <div key={index} className='px-3 py-2 hover:bg-gray-200 hover:cursor-pointer'>
        <h1 className='text-sm font-medium'>{item.heading}</h1>
        <p className='text-xs text-gray-600'>{item.subHeading}</p>
      </div>
    )
  })
}
      </div>
      
    </div>
  )
}

export default News
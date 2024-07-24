import React from 'react'
import Posts from './Posts'
import Postinput from './Postinput'

const Feed = ({user} : {user: any}) => {
  const plainUser = JSON.parse(JSON.stringify(user));
  return (
    <div className='flex-1'>
      <Postinput user = {plainUser}/>
      <Posts/>
    </div>
  )
}

export default Feed
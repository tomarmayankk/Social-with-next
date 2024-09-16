import React, { useState } from 'react'
import { Button } from './ui/button'
import { MessageCircle, Repeat, ThumbsUp } from 'lucide-react'
import { IPostDocument } from '@/models/post.model';
import { useUser } from '@clerk/nextjs';
import CommentInput from './CommentInput';
import Comments from './Comments';


const SocialOptions = ({ post }: { post: IPostDocument }) => {
  const { user } = useUser();
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes);
  const [commentOpen, setCommentOpen] = useState(false);

  const likeOrDislikeHandler = async () => {
      if (!user) throw new Error(' User not athenticated');
      const tempLiked = liked;
      const tempLikes = likes;
      const dislike = likes?.filter((userId) => userId !== user.id);
      const like = [...(likes ?? []), user.id];
      const newLike = liked ? dislike : like;

      setLiked(!liked);
      setLikes(newLike);

      const res = await fetch(`/api/posts/${post._id}/${liked ? '/dislike' : '/like'}`, {
          method: 'POST',
          headers: {
              'Content-Type': "application/json"
          },
          body: JSON.stringify(user.id),
      });
      if (!res.ok) {
          setLiked(tempLiked);
          throw new Error('Failed to like or dislike')
      }

      const fetchAllLikes = await fetch(`/api/posts/${post._id}/like`);
      if (!fetchAllLikes.ok) {
          setLikes(tempLikes);
          throw new Error('Failed to fetch like');
      }

      const likeData = await fetchAllLikes.json();
      setLikes(likeData);
  }
  return (
    <div>
      <div className='flex items-center m-1 justify-between border-b border-gray-300'>
        <Button onClick={likeOrDislikeHandler} variant={'ghost'}className='flex items-center gap-1 rounded-lg text-#222223 hover:text-black'>
          <ThumbsUp className={`${liked && 'fill-[#5271ff]'}`}/>
          {
            (likes && likes.length > 0) && (<p className='text-xm text-#222223 hover:text-blue-500 hover:cursor-pointer'>{likes.length} likes</p>)
          }
        </Button>
        <Button onClick={() => setCommentOpen(!commentOpen)} variant={'ghost'}className='flex items-center gap-1 rounded-lg text-#222223 hover:text-black'>
          <MessageCircle/>
          {
                    (post.comments && post.comments.length > 0) && (<p onClick={()=>setCommentOpen(!commentOpen)} className='text-xm text-#222223 hover:text-blue-500 hover:cursor-pointer'>{post.comments.length} Comments</p>)
                }
        </Button>
      </div>
      {
                commentOpen && (
                    <div className='p-4'>
                        <CommentInput postId = {String(post._id)}/>
                        <Comments post = {post}/>
                    </div>
                )
            }
    </div>
  )
}

export default SocialOptions
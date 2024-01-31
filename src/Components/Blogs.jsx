import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import Spinner from './Spinner';

function Blogs() {
  const { loading, posts } = useContext(AppContext);

  return (
    <div className='my-[90px] flex flex-col gap-8 justify-center content-center m-auto w-[580px]'>
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>
          <h1>No Blogs</h1>
        </div>
      ) : (
        posts.map((post) => (
          <div key={post.id} className='flex flex-col gap-1'>
            <p className='text-xl font-bold'>{post.title}</p>
            <p className='text-sm font-semibold'>
              By <span className='italic'>{post.author}</span> on <span>{post.category}</span>
            </p>
            <p className='text-xs'>Posted on {post.date}</p> {/* Assuming the property is 'date' */}
            <p className='text-sm'>{post.content}</p>

            <div className='text-sm flex gap-[6px] underline text-blue-800 font-semibold cursor-pointer '>
              {post.tags.map((tag, index) => (
                <span key={index}>{`#${tag}`}</span>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
 }

export default Blogs;

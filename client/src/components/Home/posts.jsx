import React from 'react';
import Post from './post';

export default function Posts({posts}) {
  return (
    <div className="flex flex-wrap m-5">
      {posts.map((post, index) => (
        <Post post = {post} key={index}/>
      ))}

    </div>  
  );
}

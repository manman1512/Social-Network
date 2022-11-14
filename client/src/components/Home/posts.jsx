import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axiosClient from '../../axiosClient';
import Post from './post';

export default function Posts({posts}) {
 
  if(posts){
   return  <div className="flex flex-wrap justify-center gap-x-5 gap-y-5 p-4 m-5">
    {posts.map((post, index) => (
      <Post post = {post} key={index}/>
    ))}

  </div>
  }else{
return <div></div>
  }
}

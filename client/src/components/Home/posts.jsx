import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axiosClient from '../../axiosClient';
import Post from './post';

export default function Posts() {
  const [posts, setPosts] = useState(null);
  const { search } = useLocation();
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axiosClient.get('/posts/getAllPost' + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  if(posts){
   return  <div className="flex flex-wrap m-5">
    {posts.map((post, index) => (
      <Post post = {post} key={index}/>
    ))}

  </div>
  }else{
return <div>Div</div>
  }
}

import React, { useContext } from 'react';
import Topbar from './topbar';
import Header from './header';
import Sidebar from './sidebar';
import Posts from './posts';
import axiosClient from '../../axiosClient';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { userApi } from '../../axiosClient/api/user';
import { Context } from '../context/Context';
import { setUser } from '../context/Actions';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [state, dispatch] = useContext(Context)
  const { search } = useLocation();
  console.log(useLocation());
  useEffect(()=>{
    const isLoggedIn = ()=>{
      const accessToken = window.localStorage.getItem('accessToken');
      if(accessToken) return true;
      return false;
    };
      (async ()=>{
        if(isLoggedIn()){
        
          const User = await userApi.getMe();
          console.log(User)
          dispatch(setUser(User))
        }
      })()
  },[])
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axiosClient.get('/posts/getAllPost' + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <div>
      <Topbar />
      <Header />
      <div className="flex justify-around mt-6">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </div>
  );
}

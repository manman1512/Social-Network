import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useLocation } from 'react-router-dom';
import axiosClient from '../../axiosClient';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  // console.log(location)
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const res = await axiosClient.get('/posts/getPostById/' + path);
      setPost(res.data);
    };
    getPost();
  }, [path]);

  return (
    <div className="mr-10 mx-6 mb-10 flex-auto">
      <div>
        {post.photo && (
          <img className="rounded-xl" src={post.photo} alt="day la cai hinhf" />
        )}
      </div>
      <div className="flex items-center">
        <h1 className=" text-xl font-bold mt-3 mb-3">{post.title}</h1>
        <div className="flex ml-auto cursor-pointer">
          <FaEdit className="mr-2" color="#22c55e" />
          <RiDeleteBin6Line color="#dc2626" />
        </div>
      </div>
      <div className="flex justify-between text-amber-600 mb-3 ">
        <span>
          Author:
          <Link to={`/?user=${post.username}`}>
            <b>{post.username}</b>
          </Link>
        </span>
        <span>{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className="leading-6 ml-5">{post.desc}</p>
    </div>
  );
}

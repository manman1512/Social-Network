import React, { useContext } from 'react';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useLocation } from 'react-router-dom';
import axiosClient from '../../axiosClient';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Context } from '../context/Context.js';

export default function SinglePost() {
  const navigate = useNavigate();
  const [state, dispatch] = useContext(Context);
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const [post, setPost] = useState({});

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axiosClient.get('/posts/getPostById/' + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axiosClient.delete(`/posts/deletePostById/${post._id}`, {
        data: { usernamme: state.user.username },
      });
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(post.username === state.user.username)
  const handleSubmit = async () =>{
    try {
      
    } catch (error) {
      
    }
  }

  return (
    <div className="mr-10 mx-6 mb-10 flex-auto">
      <div>
        {post.photo && (
          <img
            className="rounded-xl h-80 w-full object-cover"
            src={`http://localhost:8080/images/${post.photo}`}
            alt="day la cai hinhf"
          />
        )}
      </div>

      {updateMode ? (
        <input
          type="text"
          value={title}
          name="updateTitle"
          className=" text-xl font-bold mt-3 mb-3  items-center "
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />
      ) : (
        <div className="flex items-center">
          <h1 className=" text-xl font-bold mt-3 mb-3">{post.title}</h1>
          {state.user && post.username === state.user.username && (
            <div className="flex ml-auto cursor-pointer">
              <FaEdit
                className="mr-2"
                color="#22c55e"
                onClick={() => setUpdateMode(true)}
              />
              <RiDeleteBin6Line color="#dc2626" onClick={handleDelete} />
            </div>
          )}
        </div>
      )}

      <div className="flex justify-between text-amber-600 mb-3 ">
        <span>
          Author:
          <Link to={`/?user=${post.username}`}>
            <b>{post.username}</b>
          </Link>
        </span>
        <span>{new Date(post.createdAt).toDateString()}</span>
      </div>

      {updateMode ? (
        <textarea
          className="leading-9 "
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      ) : (
        <p className="leading-6">{post.desc}</p>
      )}
      <button
        className="bg-green-400 p-2 mt-4 rounded-lg text-white cursor-pointer flex ml-auto"
        onClick={handleSubmit}
      >
        Update
      </button>
    </div>
  );
}

import React, { useContext } from 'react';
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
// import { RiDeleteBin6Line } from 'react-icons/ri';
import { useLocation } from 'react-router-dom';
import axiosClient from '../../../axiosClient';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../context/Context.js';
import postsApi from '../../../axiosClient/api/posts';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

export default function SinglePost({
  handleSetAuthor,
  handleSetId,
  handleSetTags,
}) {
  const navigate = useNavigate();
  const [state, dispatch] = useContext(Context);
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const [post, setPost] = useState({});

  // const [title, setTitle] = useState('');
  // const [content, setContent] = useState('');
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await postsApi.getPost(path);
      setPost(res.data);
      handleSetAuthor(res.data.author.username);
      handleSetId(res.data._id);
      handleSetTags(res.data.categories);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      const response =  await axiosClient.delete(`/posts/deletePostById/${post._id}`);
      console.log(response)
      if(response.status === 200) {
        alert("Delete success!")
        navigate('/');
      }else{
        alert("Delete fail, check console");
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(state.user.username)
  // console.log(post.author.username === state.user.username)

  console.log(post) 
  // console.log(post._id) 

  console.log(state)
  console.log(state.user.username)

  return (
    <div className="flex-auto my-4">
      {
        // Edit button
        state.user && post && post.author?._id === state.user._id && (
          <button
            className="absolute p-4 
            rounded-full bg-lime-500 text-white right-4 top-16 flex items-center justify-center"
            onClick={() => {
              navigate(`/update/${post._id}`);
            }}
          >
            <FaEdit />
          </button>
        )
      }

      {
        // delete button
        state.user && post && post.author?._id === state.user._id && (
          <button
            className="absolute p-4 
            rounded-full bg-lime-500 text-white right-4 top-32 flex items-center justify-center"
            onClick={handleDelete}
          >
            <AiFillDelete />
          </button>
        )
      }

      <div className=" max-h-[170px] mx-auto mb-4">
        <img
          src="https://picsum.photos/1140"
          alt=""
          className="w-full h-[168px] rounded-lg "
        />
      </div>
      {post !== {} && (
        <div className=" bg-white mx-auto flex flex-col gap-y-4">
          {/* Author's information & Post's created */}
          <div className="flex gap-x-4 items-center">
            <img
              src={post.author?.profilePic || 'https://picsum.photos/48'}
              alt=""
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="text-lg text-lime-500">
                {post.author?.displayName || 'Display Name'}
              </p>
              <p className="text-sm">@{post.author?.username}</p>
            </div>
            <div className="ml-auto">
              <p className="font-bold text-gray-500">
                Da dang vao {new Date(post.createdAt).toDateString()}
              </p>
              {post.createdAt !== post.updatedAt && (
                <p className="text-sm italic text-gray-500">
                  Cap nhat luc {new Date(post.updatedAt).toDateString()}
                </p>
              )}
            </div>
          </div>
          {/* Post */}
          <div>
            <h1 className="text-[2.5rem] font-bold">{post.title}</h1>
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
              {post.content}
            </ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  );
}

import React, { useContext } from 'react';
import Topbar from '../Home/topbar';
import { ImFilePicture } from 'react-icons/im';
import { useState } from 'react';
import axiosClient from '../../axiosClient/index.js';
import { Context } from '../context/Context.js';
import { useNavigate } from 'react-router-dom';

export default function Write() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [file, setFile] = useState(null);
  const [state, dispatch] = useContext(Context);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      title,
      desc,
    };
    console.log(newPost)
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append('name', fileName);
      data.append('file', file);
      newPost.photo = fileName;

      try {
        await axiosClient.post('/upload', data); //folder server: file index.js, line:48
      } catch (error) {}
    }
    try {
      const res = await axiosClient.post('/posts/', newPost);
      navigate(`/post/${res.data.savePost._id}`)
    } catch (error) {
      if(error.response.status === 409) alert("Title bi trung")
      // console.log(error);
    }
  };
  return (
    <div>
      <Topbar />

      <div className="mt-14 ml-36">
        {file && (
          <img
            // className="h-60 w-4/5 rounded-xl object-none"
            className="rounded-xl object-scale-down h-60 w-96"
            src={URL.createObjectURL(file)}
            alt=""
          />
        )}
        <form onSubmit={handleSubmit}>
          <div className="flex items-center">
            <label htmlFor="fileInp">
              <ImFilePicture
                className="cursor-pointer"
                color="green"
                size="1.2rem"
              />
            </label>
            <input
              id="fileInp"
              type="file"
              name="fileInp"
              className="hidden"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <input
              type="text"
              name="title"
              placeholder="Tiêu đề..."
              autoFocus={true}
              className="text-xl border-none p-5 outline-none text-slate-500"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <textarea
              id="desc"
              name="desc"
              placeholder="Câu chuyện của bạn..."
              className=" text-xl w-4/5 bg-slate-100 rounded-xl p-4 outline-none text-slate-400"
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </div>
          <button
            className="position cursor-pointer bg-lime-700 rounded-md p-1 text-white mt-5"
            type="submit"
          >
            Đăng
          </button>
        </form>
      </div>
    </div>
  );
}

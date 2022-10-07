import React, { useContext, useEffect, useState } from 'react';
import Topbar from '../Home/topbar';
import Sidebar from '../Home/sidebar';
import { FaRegUserCircle } from 'react-icons/fa';
import { BsFillPencilFill } from 'react-icons/bs';
import { Context } from '../context/Context';
import axiosClient from '../../axiosClient';
import { userApi } from '../../axiosClient/api/user';
import { setUser } from '../context/Actions';

export default function Setting() {
  const [state, dispatch] = useContext(Context);

  const [file, setFile] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updateUser = {
      userId: state.user._id,
      username,
      password,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append('name', fileName);
      data.append('file', file);
      updateUser.profilePic = fileName;
      try {
        await axiosClient.post('/upload', data);
      } catch (error) {}
    }
    try {
      await axiosClient.put('/users/update/' + state.user._id, updateUser);
      setSuccess(true); 
    } catch (error) {}
  };

  useEffect(() => {
    const token = window.localStorage.getItem('accessToken');
    if (token !== null) {
      (async () => {
        const user = await userApi.getMe();
        dispatch(setUser(user));
      })();
    }
  }, []);
  return (
    <div>
      <Topbar />
      <div className="mt-3">
        <div className=" mx-6 mb-10">
          <div className="flex mb-3 items-center">
            <BsFillPencilFill />
            <span className="text-3xl ml-2 text-lime-500">
              Cập Nhật Tài Khoản Của Bạn
            </span>
          </div>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="flex flex-col items-center border-2 p-4 ">
              <div className="flex items-center p-3">
                <img
                  className="rounded-full w-28 h-28 object-cover"
                  src={state.user.profilePic}
                  alt=""
                />
                <label
                  htmlFor="profileInp"
                  className=" border-2 bg-green-400 rounded-full m-2"
                >
                  <FaRegUserCircle
                    className="w-6 h-6 rounded-full"
                    color="white"
                  />
                </label>
                <input
                  type="file"
                  name="profile"
                  id="profileInp"
                  className="hidden"
                  onchange={(e) => setFile(e.target.file[0])}
                />
              </div>
              <label htmlFor="username" className="mt-3 ">
                Tên đăng nhập
              </label>
              <input
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                name="username"
                id="username"
                placeholder={state.user.username}
                className="outline-none border-1 border border-green-400 p-1 w-1/2"
              />
              <label htmlFor="password" className="mt-3">
                Mật khẩu
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                id="password"
                className="outline-none border-1 border border-green-400 p-1 w-1/2"
              />

              <button
                className=" cursor-pointer rounded-md p-1 mt-5 w-96 border-1 border 
                border-green-400 hover:bg-green-400 bg-gray-400"
                type="submit"
              >
                Cập nhật
                </button>
                {success && (
                  <span className="text-green-500 mt-3">
                    Tài khoản đã được cập nhật!
                  </span>
                )}
            </div>
            <div>
              <span className="mt-3 text-red-500 text-xs cursor-pointer font-bold">
                Xoá tài khoản
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

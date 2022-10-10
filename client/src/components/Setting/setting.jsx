import React, { useContext, useEffect, useState } from 'react';
import Topbar from '../Home/topbar';
import { FaRegUserCircle } from 'react-icons/fa';
import { BsFillPencilFill } from 'react-icons/bs';
import { Context } from '../context/Context';
import axiosClient from '../../axiosClient';
import { userApi } from '../../axiosClient/api/user';
import { setUser } from '../context/Actions';
import { TiTickOutline } from 'react-icons/ti';

export default function Setting() {
  const [state, dispatch] = useContext(Context);
  const PF = process.env.REACT_APP_SERVER_URL;

  const [file, setFile] = useState(null);
  const [username, setUsername] = useState(state.user ? state.user.username:'');
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  useEffect(()=>{
    if(state.user){
      setUsername(state.user.username)
    }
  },[state.user])
  useEffect(()=>{
    console.log(file)
  },[file])
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'UPDATE_START' });
    const updateUser = {
      userId: state.user._id,
      username,
      password,
    };
    // console.log("🚀 ~ file: setting.jsx ~ line 26 ~ handleSubmit ~ updateUser", updateUser)
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append('name', fileName);
      data.append('file', file);
      updateUser.profilePic = fileName;
      try {
        const response = await userApi.updateAvatar(data);
        if (response.status === 200) {
          alert('Update avatar success');
          // const user = await userApi.getMe();
          // dispatch(setUser(user));
        } else {
          throw new Error('Update fail');
        }
      } catch (error) {
        console.log(error);
      }
    }
    try {
      const res = await axiosClient.put(
        '/users/update/' + state.user._id,
        updateUser
      );
      setSuccess(true);
      dispatch({ type: 'UPDATE_SUCCESS', payload: res.data.updateUser });
    } catch (error) {
      dispatch({ type: 'UPDATE_FAILURE' });
    }
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
                  src={
                    file
                      ? URL.createObjectURL(file)
                      : state.user && state.user.profilePic
                      ? `${PF}/images/${state.user.profilePic}`
                      : 'https://picsum.photos/40'
                  }
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
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
              <label htmlFor="username" className="mt-3">
                Tên đăng nhập
              </label>
              <input
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                id="username"
                placeholder={state.user?state.user.username:''}
                value={username}
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
                <span className="text-green-500 mt-3 flex items-center">
                  <div>
                    <b>Tài khoản đã được cập nhật...</b>
                  </div>
                  <div className="border-2 rounded-full ml-3">
                    <TiTickOutline size="2rem" />
                  </div>
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

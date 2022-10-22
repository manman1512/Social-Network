import React, { useContext, useEffect } from 'react';
import { AiFillSetting } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { userApi } from '../../axiosClient/api/user.js';
import { setUser } from '../context/Actions.js';
import { Context } from '../context/Context.js';
import { useState } from 'react';

export default function Topbar() {
  const [state, dispatch] = useContext(Context);
  // const [hideDrop, setHideDrop] = useState(false);

  const PF = process.env.REACT_APP_SERVER_URL;
  // console.log(state.user);

  function handleClick() {
    localStorage.clear();
    window.location.href = '/';
  }

  useEffect(() => {
    const token = window.localStorage.getItem('accessToken');
    if (token !== null) {
      (async () => {
        const user = await userApi.getMe();
        dispatch(setUser(user));
      })();
    }
  }, []);

  // const handleClickDropdown = () => {
  //   setHideDrop(!hideDrop);
  // };

  return (
    <div
      className="w-auto h-12 sticky text-neutral-500 font-bold top-0 flex items-center font-sans bg-zinc-50 px-2 z-[99999]"
      style={{
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
      }}
    >
      <div className="flex-auto">
        <div className="flex">
          <div className="m-5">
            <Link
              to="/"
              className="no-underline text-inherit hover:text-lime-500"
            >
              Trang Chủ
            </Link>
          </div>
          {state.user && (
            <div className="m-5">
              <Link
                to={`/${state.user.username}/posts`}
                className="no-underline text-inherit hover:text-lime-500"
              >
                Bài viết cá nhân
              </Link>
            </div>
          )}
          {state.user && (
            <div className="m-5">
              <Link
                to="/write"
                className="no-underline text-inherit hover:text-lime-500"
              >
                Viết Bài
              </Link>
            </div>
          )}
        </div>
      </div>

      {state.user ? (
        <div className="flex items-center justify-center flex-initial group" >
          {/* <Link to="../Setting"> */}
          <img
            className="w-10 h-10 rounded-full object-cover cursor-pointer"
            src={
              state.user.profilePic
                ? `${PF}/images/${state.user.profilePic}`
                : 'https://picsum.photos/40'
            }
            alt=""
          />
          <p className="mr-3 ml-2 w-20 truncate">{state.user.displayName}</p>
          {/* </Link> */}
          <div className=" absolute invisible group-hover:visible">
              <div className="bg-slate-300 mt-28 p-2 relative mr-3 rounded-lg ">
                <Link to="/setting" className="ml-1 flex items-center">
                  <AiFillSetting size="1.2rem" />
                  <p className="pl-2">Chỉnh sửa</p>
                </Link>
                <Link to="/logout" className="ml-1 flex items-center" onClick={handleClick}>
                  <FiLogOut
                    size="1.2rem"
                  />
                  <p className="pl-2">Đăng xuất</p>
                </Link>
                {/* </div> */}
              </div>
            </div>
        </div>
      ) : (
        <Link
          to="/login"
          className="no-underline text-inherit hover:text-lime-500"
        >
          Đăng nhập
        </Link>
      )}
    </div>
  );
}

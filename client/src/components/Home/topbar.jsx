import React, { useContext, useEffect } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { userApi } from '../../axiosClient/api/user.js';
import { setUser } from '../context/Actions.js';
import { Context } from '../context/Context.js';

export default function Topbar() {
  const [state, dispatch] = useContext(Context);
  // const navigate = useNavigate();
  const PF = process.env.REACT_APP_SERVER_URL;
  console.log(state.user);
  function handleClick() {
    localStorage.clear();
    // dispatch(setUser());
    // navigate('/');
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
                to="/personal"
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
        <div className="flex items-center justify-center flex-initial">
          <Link to="../Setting">
            <img
              className="w-10 h-10 rounded-full object-cover cursor-pointer"
              src={
                state.user.profilePic
                  ? `${PF}/images/${state.user.profilePic}`
                  : 'https://picsum.photos/40'
              }
              alt=""
            />
          </Link>
          <FiLogOut
            size="1.2rem"
            className="m-4 cursor-pointer hover:text-lime-500"
            onClick={handleClick}
          />
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

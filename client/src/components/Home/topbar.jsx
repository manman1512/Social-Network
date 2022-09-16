import React, { useContext } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { setUser } from '../context/Actions.js';
import { Context } from '../context/Context.js';

export default function Topbar() {
  const [state, dispatch] = useContext(Context);
  // console.log("🚀 ~ file: topbar.jsx ~ line 8 ~ Topbar ~ user", state)
  console.log(state);

  const navigate = useNavigate();
  // console.log()
  function handleClick() {
    localStorage.clear();
    dispatch(setUser());
    navigate('/');
  }
  return (
    <div className="w-auto h-12 sticky text-neutral-500 font-bold top-0 flex items-center font-sans bg-zinc-50 px-2">
      <div className="flex-auto">
        <ul className="flex justify-initial">
          <li className="m-5">
            <Link
              to="/"
              className="no-underline text-inherit hover:text-lime-500"
            >
              Trang Chủ
            </Link>
          </li>
          <li className="m-5">Về tôi</li>
          <li className="m-5">Liên Hệ</li>
          {state.user && (
            <li className="m-5">
              <Link
                to="/write"
                className="no-underline text-inherit hover:text-lime-500"
              >
                Viết Bài
              </Link>
            </li>
          )}
        </ul>
      </div>

      {state.user ? (
        <div className="flex items-center justify-center flex-initial">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src={state.user ? state.user.profilePic : ''}
            alt=""
          />
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

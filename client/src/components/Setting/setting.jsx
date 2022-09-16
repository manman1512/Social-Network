import React from 'react';
import Topbar from '../Home/topbar';
import Sidebar from '../Home/sidebar';
import { FaUserAlt } from 'react-icons/fa';
import { BsFillPencilFill } from 'react-icons/bs';

export default function Setting() {
  return (
    <div>
      <Topbar />
      <div className="flex mt-5 ">
        <div className="mr-10 mx-6 mb-10">
          <div className="flex mb-3 items-center">
            <BsFillPencilFill />
            <span className="text-3xl ml-2 text-lime-500">
              Cập nhật tài khoản của bạn
            </span>
          </div>
          <form className="flex flex-col">
            <label className="mb-3">Ảnh đại diện</label>
            <div className="flex items-center">
              <img
                className="rounded-full w-20 h-20 object-cover"
                src="https://thuthuatphanmem.vn/uploads/2018/09/11/hinh-anh-dep-6_044127357.jpg"
                alt=""
                />
              <label htmlFor="profileInp">
                <FaUserAlt className="ml-3" color="green" />
              </label>
              <input
                type="file"
                name="profile"
                id="profileInp"
                className="hidden"
              />
            </div>
            <label htmlFor="username" className="mt-3">
              Tên đăng nhập
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="outline-none border-1 border border-green-500 p-1"
            />
            <label htmlFor="password" className="mt-3">
              Mật khẩu
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="outline-none border-1 border border-green-500 p-1"
            />
            <span className="mt-3 text-red-500 text-xs cursor-pointer font-bold">
              Xoá tài khoản
            </span>

            <button
              className="position cursor-pointer bg-lime-700 rounded-md p-1 text-white mt-5"
              type="submit"
            >
              Cập nhật
            </button>
          </form>
        </div>
        <Sidebar className="pt-8" />
      </div>
    </div>
  );
}

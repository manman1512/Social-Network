import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Topbar() {
  return (
    <div className="w-auto h-12 sticky text-neutral-500 font-bold top-0 flex items-center font-sans bg-zinc-50">
      <div className="flex-auto">
        <ul className="flex justify-initial">
          <li className="m-5">
            <Link
              to="/home"
              className="no-underline text-inherit hover:text-lime-500"
            >
              Trang Chủ
            </Link>
          </li>
          <li className="m-5">Về tôi</li>
          <li className="m-5">Liên Hệ</li>
          <li className="m-5">
            <Link
              to="/write"
              className="no-underline text-inherit hover:text-lime-500"
            >
              Viết Bài
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex items-center justify-center flex-initial">
        <img
          className="w-10 h-10 rounded-full object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCi5tsBuPA8UpWfqM7Rzpez9DVZHSVwMrrlA&usqp=CAU"
        />
        <FiLogOut size="1.2rem" className="m-4" />
      </div>
    </div>
  );
}

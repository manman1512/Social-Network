import React from 'react';
import { IoMdAdd } from 'react-icons/io';
import { BsFacebook } from 'react-icons/bs';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <div className="pb-8 font-sans ml-auto mr-10">
      <div className="p-5 bg-green-100">
        <div className="flex flex-col items-center border-y border-solid border-gray-500">
          <span className="text-neutral-500  border-solid border-gray-500">
            ABOUT ME
          </span>
        </div>
        <div className="flex flex-col items-center border-">
          <img
            className="object-cover h-60 mt-5 mb-5"
            src="https://cdn.alongwalker.co/vn/wp-content/uploads/2022/03/25163323/image-cung-hoc-ngay-cach-tao-dang-chup-hinh-dep-voi-hoa-xin-xo-het-biet-164817560388683.jpg"
          />
          <p className="w-72 break-words">
            Hey there, I’m man. I’m a student living in VietNam. I am a fan of
            travel, writing, and singing. I’m also interested in gaming and
            education.
          </p>
        </div>
        <div className="flex flex-col items-center border-y border-solid border-gray-500 m-8">
          <div className="flex items-center ">
            <p className="text-neutral-500">FOLLOW ME </p>
            <IoMdAdd size="1.2rem" color="green" className="ml-1" />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <BsFacebook color="blue" className="mr-1" />
            <FaInstagramSquare color="red" className="mr-1" />
            <FaTwitterSquare color="aqua" className="mr-1" />
          </div>
        </div>
      </div>
    </div>
  );
}

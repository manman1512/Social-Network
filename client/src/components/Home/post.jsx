import React, { useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { GoComment } from 'react-icons/go';

import { Link } from 'react-router-dom';
import { PreviewContent } from '../PreviewContent';
export default function Post({ post }) {
  const PF = process.env.REACT_APP_SERVER_URL;
  const [previewImage, setPreviewImage] = useState('');
  console.log(previewImage);
  return (
    <div
      className="w-[560px] font-mono rounded-lg"
      style={{
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
      }}
    >
      {previewImage && (
        <img
          className="w-96 h-96 rounded-lg my-1 flex ml-20"
          src={previewImage}
          alt=""
        />
      )}

      <div className="p-2">
        <span className=" mt-2 font-bold text-3xl line-clamp-2 text-center">
          {post.title}
        </span>

        <div className="text-neutral-500 text-xs flex items-center">
          {
            <div className="rounded-full p-1 inline-block mx-1">
              <img
                className="w-6 h-6 rounded-full bg-cover"
                src={`${PF}/images/${post.author.profilePic}`}
                alt=""
              />
            </div>
          }
          <span className="max-w-[120px] truncate">{` by ${post.author.displayName}`}</span>
          |{new Date(post.createdAt).toDateString()}
        </div>
        <div className="flex items-center my-2 gap-x-2 truncate">
          {post.categories.map((cate, index) => (
            <Link to={`/posts?tag=${cate.name}`}>
              {/* {console.log(cate.name)} */}
              <span
                className="leading-3 px-2 py-1 rounded-full italic tags"
                key={index}
              >
                {cate.name}
              </span>
            </Link>
          ))}
        </div>
        <p className="mt-2">
          <PreviewContent
            setPreviewImage={(img) => {
              setPreviewImage(img);
            }}
          >
            {post.content}
          </PreviewContent>
        </p>
        <div className="flex items-center gap-x-2">
          <div className="flex items-center gap-x-1 pt-3 pr-3">
            {/* views */}
            <AiOutlineEye color="green" />0 Lượt xem
          </div>
          <div className="flex items-center gap-x-1 pt-3">
            {/* comments */}
            <GoComment color="green" />0 Bình luận
          </div>

          <Link
            className="ml-auto text-[#7367f0] pt-3"
            to={`/post/${post._id}`}
          >
            Xem thêm
          </Link>
        </div>
      </div>
    </div>
  );
}

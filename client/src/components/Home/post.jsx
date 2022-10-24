import React from 'react';
import { Link } from 'react-router-dom';
import { PreviewContent } from '../PreviewContent';
export default function Post({ post }) {
  const PF = process.env.REACT_APP_SERVER_URL;

  return (
    <div className="mr-10 w-96 mt-0 mx-6 mb-10 font-mono">
      {post.photo && (
        <img
          className="w-full object-cover rounded-lg"
          src={`${PF}/images/${post.photo}`}
          alt=""
        />
      )}
      <div className="flex items-center flex-col">
        <div className="text-red-400 leading-3 mt-4 cursor-pointer">
          {post.categories.map((cate, index) => (
            <span key={index}>{cate.name}</span>
          ))}
        </div>
      </div>
      <div>
        <Link to={`/post/${post._id}`}>
          <span className="cursor-pointer mt-2 font-bold text-2xl line-clamp-2">
            {post.title}
          </span>

          <span className="text-neutral-500 text-xs">
            {new Date(post.createdAt).toDateString()}
          </span>
          <p className="mt-2">
            <PreviewContent>{post.content}</PreviewContent>
          </p>
        </Link>
      </div>
    </div>
  );
}

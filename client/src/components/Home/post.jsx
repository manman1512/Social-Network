import React from 'react';
import { Link } from 'react-router-dom';

export default function Post({ post }) {
  return (
    <div className="mr-10 w-96 mt-0 mx-6 mb-10 font-mono">
      {post.photo && (
        <img className="w-full object-cover rounded-lg" src="{post.photo}" alt="" />
      )}
      <div className="flex items-center flex-col">
        <div className="text-red-400 leading-3 mt-4 cursor-pointer">
          {post.categories.map((cate, index) => (
            <span key={index}>{cate.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`}>
          <span className="cursor-pointer mt-2 font-bold text-2xl">
            {post.title}
          </span>
        </Link>

        <hr />
        <span className="text-neutral-500 text-xs">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="mt-2">{post.desc}</p>
    </div>
  );
}

import React from 'react';

export default function Header() {
  return (
    <div className="">
      <div className="flex flex-col items-center  text-neutral-500">
        <span className="absolute text-8xl font-extralight"><i>Blog</i></span>
      </div>

      <img
        className="w-full h-96 object-cover "
        src="https://hanoispiritofplace.com/wp-content/uploads/2018/03/hinh-anh-mua-thu-dep-nhat-1.jpg"
        alt=""
      />
     </div>
  );
}

import React from 'react';

export default function Header() {
  return (
    <div className="mt-16">
      <div className="flex flex-col items-center font-serif text-neutral-500">
        <span className="absolute text-8xl top-16">Blog</span>
      </div>

      <img
        className="w-full h-96 object-cover "
        src="https://jshopusa.com/wp-content/uploads/2021/09/Checkin-vuon-hoa-cai-trang-tho-mong-tai-Da-Lat-1.jpg"
      />
    </div>
  );
}

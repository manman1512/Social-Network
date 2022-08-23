import React from 'react';

export default function Post() {
  return (
    <div className="mr-10 w-96 mt-0 mx-6 mb-10 font-mono">
      <img className="w-full object-cover rounded-lg" src="https://thuthuatphanmem.vn/uploads/2018/09/11/hinh-anh-dep-6_044127357.jpg" />
      <div className="flex items-center flex-col">
        <div className="text-red-400 leading-3 mt-4 cursor-pointer">
            <span>Hello</span>
            <span>Guys</span>
        </div>
        <span className="cursor-pointer mt-2">Hiiiiiiiiiii</span>
        <hr />
        <span className="text-neutral-500 text-xs">1 hour ago</span>
      </div>
      <p className="mt-2">Hey there, I’m man. I’m a student living in VietNam. I am a fan of
      travel, writing, and singing. I’m also interested in gaming and
      education.</p>
    </div>
  );
}

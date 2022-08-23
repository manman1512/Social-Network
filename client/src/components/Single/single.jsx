import React from 'react';
import Topbar from '../Home/topbar';
import Sidebar from '../Home/sidebar';
import SinglePost from '../SinglePost/singlePost';

export default function Single() {
  return (
    <div>
      <Topbar />
      <div className="flex mt-5">
        <SinglePost />
        <Sidebar />
      </div>
    </div>
  );
}

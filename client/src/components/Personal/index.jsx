import React from 'react';
// import Posts from '../Home/posts';
import Topbar from '../Home/topbar';
import PersonalPost from './personalPosts';
export default function Personal() {
  return (
    <div>
      <Topbar />
      <div className="flex justify-around mt-6">
        <PersonalPost />
      </div>
    </div>
  );
}

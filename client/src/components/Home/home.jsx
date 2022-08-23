import React from 'react';
import Topbar from './topbar';
import Header from './header';
import Sidebar from './sidebar';
import Posts from './posts';

export default function Home() {
  return (
    <div>
      <Topbar />
      <Header />
      <div className="flex justify-around mt-6">
        <Posts />
        <Sidebar />
      </div>
    </div>
  );
}

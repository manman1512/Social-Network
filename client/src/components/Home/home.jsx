import React from 'react';
import Topbar from './topbar';
import Header from './header';
import Posts from './posts';
// import axiosClient from '../../axiosClient';
// import { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { Context } from '../context/Context';

export default function Home() {
  return (
    <div>
      <Topbar />
      <Header />
      <div className="flex justify-start mt-6 ">
        <Posts />
      </div>
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
// import Posts from '../Home/posts';
import Topbar from '../Home/topbar';
// import PersonalPost from './personalPosts';
import postsApi from '../../axiosClient/api/posts.js';
// import { FaFacebook, FaSadCry } from 'react-icons/fa';
import Post from '../Home/post';

export default function Personal() {
  const { username } = useParams();
  const [posts, setPosts] = useState([]);
  const [havePosts, setHavePosts] = useState(false);
  // const PF = process.env.REACT_APP_SERVER_URL;

  useEffect(() => {
    (async () => {
      try {
        const res = await postsApi.getPostByAuthor(username);
        console.log(res);
        setPosts(res.data.posts);
        setHavePosts(false);
      } catch (error) {
        alert('Error');
        console.log(error);
      }
    })();
  }, []);
  
  console.log(posts);

  return (
    <div className="w-full h-full relative">
      <Topbar />
      {
        posts.length === 0 && <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div>Bạn chưa có post nào</div>
        <div>
          <button className="border ">
            <Link to="/write">Nhấn vào để tạo post</Link>
          </button>
        </div>
      </div>
      }
      {
        posts.map((post, index)=><Post post={post} key={index} />)
      }
    </div>
  );
}

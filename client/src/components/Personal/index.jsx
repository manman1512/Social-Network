import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
// import Posts from '../Home/posts';
import Topbar from '../Home/topbar';
import PersonalPost from './personalPosts';
import postsApi from '../../axiosClient/api/posts.js';
import { FaFacebook, FaSadCry } from 'react-icons/fa';
import Post from '../Home/post';

export default function Personal() {
  const { username } = useParams();
  const [posts, setPosts] = useState(null);
  const PF = process.env.REACT_APP_SERVER_URL;

  useEffect(() => {
    (async () => {
      try {
        const res = await postsApi.getPostByAuthor(username);
        console.log(res);
        setPosts(res.data.posts);
      } catch (error) {
        alert('Error');
        console.log(error);
      }
    })();
  }, []);

  return <div>
  <Topbar />
  <div className="flex flex-wrap m-5">
    {posts && posts.map((post, index) => (
      <Post post={post} key={index} />
    ))}
  </div>
</div>
}

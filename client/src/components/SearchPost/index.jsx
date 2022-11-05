import React, { useEffect, useState } from 'react';
import Topbar from '../Home/topbar';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import postsApi from '../../axiosClient/api/posts';
import categoriesApi from '../../axiosClient/api/categories';
import Post from '../Home/post';

export default function SearchPost() {
  // const {} = useQuery();
  const { search } = useLocation();
  const { tag } = queryString.parse(search);
  // console.log(tag);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await categoriesApi.getPostByTag(tag.name);
      // if()
      setPosts(res.data.postByTag)
      // console.log(res.data.postByTag)
    })();
  }, []);

  return (
    <div className="w-full h-full relative bg-[#F5F5F6]">
      <Topbar />
      {posts.map((post, index) => (
        <Post post={post} key={index} />
      ))}
    </div>
  );
}

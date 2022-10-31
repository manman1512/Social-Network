import React, { useEffect } from 'react';
import Topbar from '../Home/topbar';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import postsApi from '../../axiosClient/api/posts';
import categoriesApi from '../../axiosClient/api/categories';
export default function SearchPost() {
  // const {} = useQuery();
  const { search } = useLocation();
  const { tag } = queryString.parse(search);
  console.log(tag);

  useEffect(() => {
    (async () => {
      try {
        const res = await categoriesApi.getPostByTag(tag);
        console.log(res);
        // setPosts(res.data.posts);
        // setHavePosts(false);
      } catch (error) {
        // alert('Error');
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="w-full h-full relative bg-[#F5F5F6]">
      <Topbar />
      SearchPost
    </div>
  );
}

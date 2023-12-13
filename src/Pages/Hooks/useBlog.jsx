import { useEffect } from 'react';
import { useState } from 'react';

const useBlog = () => {
  const [blogs, setBlogs] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('https://blogging-platform-server.vercel.app/blog')
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        console.log(data);
        setLoading(false);
      });
  }, []);
  return [blogs, loading];
};

export default useBlog;

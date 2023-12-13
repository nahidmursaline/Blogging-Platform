import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import MyBlogCard from './MyBlogCard';

const MyBlog = () => {
    const {user} = useContext(AuthContext);
    const [myBlogs, setMyBlogs] = useState();
    const url = `http://localhost:5000/blog?email=${user?.email}`

    useEffect(()=> {
        fetch(url)
        .then(res => res.json())
        .then(data => setMyBlogs(data))
    },[])
    return (
        <div>
          <h2 className="text-3xl font-bold pt-20 text-center pb-14">All My Blogs</h2>
          {!myBlogs && <p>Loading your blogs...</p>}
          {myBlogs?.length === 0 && <p className='flex justify-center text-red-500 font-bold'>You didn't add any blog. Add a blog first then you will see your blogs here.</p>}
          {myBlogs && (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7">
              {myBlogs.map(blog => <MyBlogCard key={blog._id} blog={blog} myBlogs={myBlogs} setMyBlogs={setMyBlogs} />)}
            </div>
          )}
        </div>
      );
};

export default MyBlog;
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
        <div >
             {!myBlogs && <p>Loading your blogs...</p>}
           <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7'>
           {
                
                myBlogs?.map(blog => <MyBlogCard
                key={blog._id}
                blog = {blog}
                ></MyBlogCard>)
            }
           </div>
        </div>
    );
};

export default MyBlog;
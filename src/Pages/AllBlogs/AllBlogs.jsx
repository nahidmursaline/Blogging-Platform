import React from 'react';
// import { useLoaderData } from 'react-router-dom';
import AllBlogsCard from '../AllBlogsCard/AllBlogsCard';
import useBlog from '../Hooks/useBlog';

const AllBlogs = () => {
    // const allBlogs = useLoaderData();
    const [blogs, loading] = useBlog();
    if (loading) {
        return (
          <div className="loading">
            <p>Loading blogs...</p>
          </div>
        );
      }
  
    return (
       <div>
        <h2 className="text-4xl font-extrabold mb-8 pt-24 text-center">All Blogs</h2>
         <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7'>
            
            {
                blogs.map(blog => <AllBlogsCard
                key={blog._id}
                blog = {blog}
                ></AllBlogsCard>)
            }
        </div>
       </div>
    );
};

export default AllBlogs;
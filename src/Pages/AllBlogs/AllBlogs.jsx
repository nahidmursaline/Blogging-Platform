import React, { useState } from 'react';
import AllBlogsCard from '../AllBlogsCard/AllBlogsCard';
import useBlog from '../Hooks/useBlog';

const AllBlogs = () => {
  const [blogs, loading] = useBlog();
  const [searchQuery, setSearchQuery] = useState('');

  if (loading) {
    return (
      <div className="loading">
        <p>Loading blogs...</p>
      </div>
    );
  }

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-3xl font-bold pb-10 pt-16 text-center">Explore All Blogs</h2>
      <input
        type="text"
        placeholder="Search by blog title"
        value={searchQuery}
        onChange={handleSearch}
        className="w-full border border-gray-300 rounded p-2 mb-4"
      />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7">
        {filteredBlogs.map((blog) => (
          <AllBlogsCard key={blog._id} blog={blog}></AllBlogsCard>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;



// import React from 'react';
// // import { useLoaderData } from 'react-router-dom';
// import AllBlogsCard from '../AllBlogsCard/AllBlogsCard';
// import useBlog from '../Hooks/useBlog';

// const AllBlogs = () => {
//     // const allBlogs = useLoaderData();
//     const [blogs, loading] = useBlog();
//     if (loading) {
//         return (
//           <div className="loading">
//             <p>Loading blogs...</p>
//           </div>
//         );
//       }
  
//     return (
//        <div>
//         <h2 className="text-3xl font-bold pb-10 pt-16 text-center">Explore All Blogs</h2>
//          <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7'>
            
//             {
//                 blogs.map(blog => <AllBlogsCard
//                 key={blog._id}
//                 blog = {blog}
//                 ></AllBlogsCard>)
//             }
//         </div>
//        </div>
//     );
// };

// export default AllBlogs;
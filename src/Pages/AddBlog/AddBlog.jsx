import React from 'react';
import { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Providers/AuthProvider';

const AddBlog = () => {
  const {user} = useContext(AuthContext)

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const theme = form.theme.value;
        const author = form.author.value;
        const ratings = form.ratings.value;
        const photo = form.photo.value;
        const date = form.date.value;
        const post = form.post.value;
        const email = user?.email;
    
        const addedPost = {title, theme, author, ratings, post, date, photo, email};
        console.log(addedPost)
    
        fetch('http://localhost:5000/blog',{
          method: 'POST',
          headers: {
            'content-type' : 'application/json'
          },
          body: JSON.stringify(addedPost)
    
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if(data.insertedId){
            event.target.reset();
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your Blog has been added",
              showConfirmButton: false,
              timer: 1500
            });
            
          }
          
        })
    
      }

    return (
        <div>
        <div className="container mx-auto flex justify-center items-center min-h-screen">
  <div className="w-full md:w-3/4 bg-white rounded-lg shadow-md p-8">
    <h1 className="text-3xl font-bold mb-8 text-center">Add a Blog</h1>
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2">
          <label className="form-control">
            <div className="label">
              <span className="label-text">Blog Title</span>
            </div>
            <input
            required
              type="text"
              name="title"
              placeholder="Blog Title"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <div className="w-full md:w-1/2">
          <label className="form-control">
            <div className="label">
              <span className="label-text">Theme</span>
            </div>
            <input
            required
              type="text"
              name="theme"
              placeholder="Theme"
              className="input input-bordered w-full"
            />
          </label>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 mt-4">
        <div className="w-full md:w-1/2">
          <label className="form-control">
            <div className="label">
              <span className="label-text">Author</span>
            </div>
            <input
            required
              type="text"
              name="author"
              defaultValue={user?.displayName}
              placeholder="Author"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <div className="w-full md:w-1/2">
          <label className="form-control">
            <div className="label">
              <span className="label-text">Ratings</span>
            </div>
            <input
            required
              type="text"
              name="ratings"
              placeholder="Ratings"
              className="input input-bordered w-full"
            />
          </label>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 mt-4">
        <div className="w-full md:w-1/2">
          <label className="form-control">
            <div className="label">
              <span className="label-text">Photo URL</span>
            </div>
            <input
            required
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <div className="w-full md:w-1/2">
          <label className="form-control">
            <div className="label">
              <span className="label-text">Date</span>
            </div>
            <input
            required
              type="date"
              name="date"
              
              className="input input-bordered w-full"
            />
          </label>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 mt-4">
        <div className="w-full">
          <label className="form-control">
            <div className="label">
              <span className="label-text">Write your post</span>
            </div>
            <textarea
            required
              type="text"
              name="post"
              placeholder="Write your post here"
              className="input input-bordered w-full "
              rows="5"
            />
          </label>
        </div>
      </div>
      <input
        type="submit"
        value="Add Blog"
        className="btn  btn-error w-full  mt-8"
      />
    </form>
  </div>
</div>
        </div>
    );
};

export default AddBlog;
import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Providers/AuthProvider';

const UpdateBlog = () => {
  const blog = useLoaderData();
  const { title, theme, author, ratings, post, date, photo, _id } = blog;
  const { user } = useContext(AuthContext);

  const handleSubmit = (event) => {
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

    const updatedPost = {
      title,
      theme,
      author,
      ratings,
      post,
      date,
      photo,
      email,
    };
    console.log(updatedPost);

    fetch(`https://blogging-platform-server.vercel.app/blog/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updatedPost),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your Blog has been updated!',
            showConfirmButton: false,
            timer: 1500,
          });
          event.target.reset();
        }
      });
  };
  return (
    <div>
      <div className="container mx-auto flex justify-center items-center min-h-screen">
        <div className="w-full md:w-3/4 bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-extrabold mb-8 text-center">
            Update Blog: {title}
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2">
                <label className="form-control">
                  <div className="label">
                    <span className="label-text">Blog Title</span>
                  </div>
                  <input
                    type="text"
                    name="title"
                    defaultValue={title}
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
                    type="text"
                    name="theme"
                    defaultValue={theme}
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
                    type="text"
                    name="ratings"
                    defaultValue={ratings}
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
                    type="text"
                    name="photo"
                    defaultValue={photo}
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
                    type="date"
                    name="date"
                    defaultValue={date}
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
                    type="text"
                    name="post"
                    defaultValue={post}
                    placeholder="Write your post here"
                    className="input input-bordered w-full "
                    rows="5"
                  />
                </label>
              </div>
            </div>
            <input
              type="submit"
              value="Update Blog"
              className="btn  btn-error w-full  mt-8"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateBlog;

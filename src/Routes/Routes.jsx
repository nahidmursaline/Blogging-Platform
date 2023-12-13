import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import About from '../Pages/About/About';
import AddBlog from '../Pages/AddBlog/AddBlog';
import AllBlogs from '../Pages/AllBlogs/AllBlogs';
import BlogDetails from '../Pages/BlogDetails/BlogDetails';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Login/Login';
import MyBlog from '../Pages/MyBlog/MyBlog';
import SignUp from '../Pages/SignUp/SignUp';
import UpdateBlog from '../Pages/UpdateBlog/UpdateBlog';
import PrivateRoute from './PrivateRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'login',
        element: <Login></Login>,
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>,
      },
      {
        path: 'addBlog',
        element: <AddBlog></AddBlog>,
      },
      {
        path: 'allBlogs',
        element: <AllBlogs></AllBlogs>,
        // loader: () => fetch('https://blogging-platform-server.vercel.app/blog')
      },
      {
        path: 'blogDetails/:id',
        element: <BlogDetails></BlogDetails>,
        loader: ({ params }) =>
          fetch(
            `https://blogging-platform-server.vercel.app/blog/${params.id}`
          ),
      },
      {
        path: 'myBlog',
        element: (
          <PrivateRoute>
            <MyBlog></MyBlog>
          </PrivateRoute>
        ),
      },
      {
        path: 'updateBlog/:id',
        element: <UpdateBlog></UpdateBlog>,
        loader: ({ params }) =>
          fetch(
            `https://blogging-platform-server.vercel.app/blog/${params.id}`
          ),
      },
      {
        path: 'about',
        element: <About></About>,
      },
    ],
  },
]);

import React from 'react';
import AllBlogs from '../../AllBlogs/AllBlogs';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllBlogs></AllBlogs>
        </div>
    );
};

export default Home;
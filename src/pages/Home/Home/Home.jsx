import React from 'react';

const Home = () => {
    console.log(import.meta.env.VITE_apiKey);
    return (
        <div className='min-h-[50vh]'>
            <h3>home</h3>
        </div>
    );
};

export default Home;
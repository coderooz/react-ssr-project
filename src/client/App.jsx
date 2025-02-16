import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
// import ErrorPage from './pages/ErrorPage';
import About from './screens/About';
import Blog from './screens/Blog';


const App = () => {
    return (
        <>
            <Suspense>
                <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path = "/blog" element={<Blog/>}/>

                {/* <Route path="*" element={<ErrorPage />} /> */}
                {/* <Route path="/error/:errorCode" element={<ErrorPage />} /> */}
                </Routes>
            </Suspense>
        
        </>
    );
};

export default App;

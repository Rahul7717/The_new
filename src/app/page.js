'use client';
import './pages.css'
import React, { Suspense, lazy, useState, useEffect } from 'react';
import Link from 'next/link';

const LoadData = lazy(() => import('./LoadData'));

const Page = () => {
  const [showLoadData, setShowLoadData] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Loading ...');
      setShowLoadData(true);
    },0);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <h1 style={{ textAlign: 'center', color: 'black' }}>The News</h1>

      <div className="main">
        <Link className="news" href="/first_news">First News</Link><br />
        <Link className="news" href="/second_news">Explore</Link><br />
        <Link className="news" href="/third_news">Second News</Link>
      </div>
      
      {showLoadData && (
        <Suspense fallback={<h3 style={{textAlign:'center' , fontSize:'80px' , marginTop:'10rem' , marginLeft:'3.5rem'}}> Loading...</h3>}>
          <LoadData />
        </Suspense>
      )}
    </>
  );
};

export default Page;

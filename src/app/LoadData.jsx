'use client'
import React, { useState } from 'react'
import DummyData from './DummyData'
import './pages.css'

const LoadData = () => {
    
const [selectedImage, setSelectedImage] = useState(null);

const handleImageClick = (item) => {
    setSelectedImage(item);
};

  return (
    <>
    <div className="container">

        {!selectedImage ? (DummyData.map((item) => (
                
            <div className="news_list" key={item.id}>
              <p style={{border:'2px solid black',textAlign:'center', width:'100%'}}></p>
              <h1>{item.id}</h1>
                              
              <img src={item.image} alt={item.slug} width={800} height={500} loading='eager'
                
              style={{ cursor: 'pointer' }}
                
              onClick={() => handleImageClick(item)}/>
              <br />
              <div style={{backgroundColor:'#e6e6e6',width:'100%',padding:'25px',marginTop:'1rem'}}>                    
              <h1> : {item.slug} : </h1>
              </div>
            </div>
          ))
        ) : (
          <div className="news_detail">
            
          <button onClick={() => setSelectedImage(null)} style={{ marginBottom: '20px', fontSize:'2.5rem', marginTop:'2rem', backgroundColor:'purple',border:'transparent',color:'white',width:'100%',}}>Back</button>
            
            <h1>{selectedImage.id}</h1>
            
            <img src={selectedImage.image} alt={selectedImage.slug} width={300} height={200} loading="lazy"/>
            <h1> : {selectedImage.slug} : </h1>
            <h1> : {selectedImage.content} :</h1>
          </div>
        )}
      </div>
    </>   
  )
}
export default LoadData
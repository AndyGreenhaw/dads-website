import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import placeholder from "../media/oso_placeholder.JPG";
import { gsap } from 'gsap'; // Import GSAP
import '../css/css.css'; // Assuming your CSS file is here
import images from '../utils/importImages';

const Home = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const imageKeys = Object.keys(images).sort(); // Sort images alphabetically if necessary
    const allImages = imageKeys.map(key => images[key]);

  useEffect(() => {
    if (selectedImage) {
      const pieces = document.querySelectorAll('.triangle-piece');
      gsap.set(pieces, { x: (i) => Math.random() * window.innerWidth - window.innerWidth / 2, y: (i) => Math.random() * window.innerHeight - window.innerHeight / 2, opacity: 0 });
      gsap.to(pieces, {
        duration: 1.5,
        x: 0,
        y: 0,
        opacity: 1,
        stagger: 0.1,
        ease: 'power2.inOut'
      });
    }
  }, [selectedImage]); 

  const handleImageClick = (imageSource) => {
    const imageName = imageSource.split('/').pop().split('.').shift(); // Extract the original image name
    console.log(imageName)
    setSelectedImage(imageSource);
  };

  const closeModal = () => {
    gsap.to('.triangle-piece', {
      duration: 1,
      opacity: 0,
      y: '50%',
      x: '50%',
      ease: 'power2.inOut'
    });
    setSelectedImage(null);
  };

  const renderRows = () => { 
    const rows = []; 
    for (let i = 0; i < allImages.length; i += 3) { 
        rows.push( 
        <div className="row image-row" key={i}> 
        {allImages.slice(i, i + 3).map((image, index) => ( 
            <div className="col-4" key={index}> 
                <img 
                    src={image} 
                    alt="My Imported JPG" 
                    className='gallery-image'
                    style={{ width: '100%', height: 'auto', cursor: 'pointer' }} 
                    onClick={() => handleImageClick(image)} 
                /> 
            </div> ))} 
        </div> ); 
    } 
    return rows; 
  };

  return (
    <>
      <div className="container dark-center-background">
        <div className="row">
          <div className="col home-header-container">
            <h1 className='home-header'>Greenhaw Stained Glass</h1>
            <p className='home-subheader'>Staining Glass in my basement between KU games...</p>
          </div>
        </div>
        {/* Rows of Images */}
        {renderRows()}
      </div>
      {selectedImage && (
        <div className="modal-overlay" id="modal-overlay" onClick={closeModal}>
          <div className="triangle-container">
            {[...Array(8)].map((_, i) => (
              <div key={i} className={`triangle-piece triangle-piece-${i}`} style={{ backgroundImage: `url(${selectedImage})` }}></div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Home;

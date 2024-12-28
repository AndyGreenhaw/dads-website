import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/css.css'; // Ensure your CSS file is here
import images from '../utils/importImages';
import profileImage from '../media/dennis-profile.jpg'
import ContactForm from './ContactForm';

const HomePage = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [openContact, setOpenContact] = useState(false);

    const imageKeys = Object.keys(images).sort(); // Sort images alphabetically if necessary
    const allImages = imageKeys.map(key => images[key]);

    const handleImageClick = (imageSource) => {
        setSelectedImage(imageSource);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setOpenContact(false)
    };

    const renderRows = () => { 
        const rows = []; 
        for (let i = 0; i < allImages.length; i += 3) { 
            rows.push( 
                <div className="row image-row" key={i}> 
                    {allImages.slice(i, i + 3).map((image, index) => ( 
                        <div className="col-md-4" key={index}> 
                            <img 
                                src={image} 
                                alt="My Imported JPG" 
                                className='gallery-image'
                                onClick={() => handleImageClick(image)} 
                            /> 
                        </div> 
                    ))} 
                </div> 
            ); 
        } 
        return rows; 
    };

    const handleContact = () => {
        setOpenContact(!openContact)
    }

    return (
        <>
            <div className="container-fluid dark-center-background">
                <div className="dark-center-background">
                <div className="row">
                    <div className="col">
                        <h1 className='home-header'>
                            Greenhaw Glass
                        </h1>
                    </div>
                </div>
                <div className="row profile-row">
                    <div className="col-xl-4">
                        <img className="profile-image" src={profileImage}></img>
                    </div>
                    <div className='col-xl-8'>
                        <p className='profile-bio-text'>
                             Dennis Greenhaw grew up in Canton, Kansas, and graduated from Kansas Wesleyan University (Salina) and the University of Wisconsin Graduate School of Banking (Madison). learned stained glass art in the early 1980s from a stained glass hobbyist in 
                             Southeast Kansas. His early creations were small suncatchers which he gave as gifts 
                             to family and friends. After completing several slightly more complicated projects, 
                             he set aside his glass cutter and soldering iron to focus on his family and their 
                             activities, including coaching his two sons in youth baseball, basketball and football.
                             Following retirement from a 37-year banking career, he and his wife moved to Lawrence, Kansas, 
                             where their new home offered the perfect space for a glass art studio. In recent years 
                             Dennis has created hundreds of stained glass works of art featuring intricate mosaics, 
                             landscapes, florals, seascapes, and wildlife, as well as 3-D accent art, centerpieces, 
                             and a variety of holiday ornaments. If you ask Dennis how many hours it takes him to complete a specific piece of his stained 
                             glass art work, his answer will most likely be quantified by a listing of the podcasts, 
                             60s and 70s soundtracks, and contemporary jazz that entertained him while working on the project.
                        </p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <div className='contact-row'>
                            <button className='contact-button' onClick={handleContact}>
                                Contact Me
                            </button>
                        </div>
                    </div>
                </div>
                {/* Rows of Images */}
                {renderRows()}
                </div>
                
            </div>
            {selectedImage && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className=".centerpiece-container">
                        <img className="centerpiece" src={selectedImage} alt="Selected" />
                    </div>
                </div>
            )}
            {openContact && (
                <div className='contact-modal'>
                    <ContactForm closeModal={closeModal}/>
                </div>
            )}
        </>
    );
};

export default HomePage;

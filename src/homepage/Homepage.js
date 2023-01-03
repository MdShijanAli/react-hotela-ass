import React from 'react';
import BannerSection from './BannerSection';
import GallerySection from './GallerySection';
import InfoSection from './InfoSection';
import Navbar from './Navbar';

const Homepage = () => {
    return (
        <div className='border-4 border-teal-300'>
            <Navbar></Navbar>
            <BannerSection></BannerSection>
            <GallerySection></GallerySection>
            <InfoSection></InfoSection>
        </div>
    );
};

export default Homepage;
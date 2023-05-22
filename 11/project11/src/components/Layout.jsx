import React from 'react';
import Banner from './Banner';
import Categories from './Categories';
import Subscribe from './Subscribe';
import MarqueeSlider from './MarqueeSlider';
import Gallery from './Gallery';


const Layout = () => {
    return (
        <>
            <Banner/>
            <Gallery/>
            <Categories/>
            <Subscribe/>
            <MarqueeSlider />
            
        </>
    );
};

export default Layout;
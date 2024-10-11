// src/app/page.jsx
import React from 'react';
import Header from '../components/Header.jsx';
import Navigation from '../components/Navigation.jsx';
import HeadingDesc from '../components/HeadingDesc.jsx';

import Footer from '../components/Footer.jsx';
import SliderItemsProduct from '@/components/SliderItemsProduct.jsx';

const HomePage = () => {
    return (
        <div>
            <Header />
            <Navigation />
            <HeadingDesc />
            <SliderItemsProduct/>
            <Footer />
        </div>
    );
};

export default HomePage;

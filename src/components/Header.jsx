// src/components/Header.jsx
import Image from 'next/image';
import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="header-container">
                <div className="logo-container">
                    <Image 
                    src="/images/Logo.png"
                    alt='logo'
                    width={50}
                    height={50}
                    />
                    <h1 className="logo-title">LOGO</h1>
                </div>
                <div class="nav-icons ">
                <Image 
                    src="/images/search-normal.png"
                    alt='icon'
                    width={25}
                    height={25}
                    />
            <Image 
                    src="/images/heart.png"
                    alt='icon'
                    width={25}
                    height={25}
                    />
            <Image 
                    src="/images/shopping-bag.png"
                    alt='icon'
                    width={25}
                    height={25}
                    />
            <Image 
                    src="/images/profile.png"
                    alt='icon'
                    width={25}
                    height={25}
                    />
            <div class="language-selector w-[10%]">
              <select>
                <option value="0">ENG</option>
                <option value="1">TEL</option>
                <option value="2">HIN</option>
              </select>
            </div>
          </div>
            </div>
        </header>
    );
};

export default Header;

import React, { useEffect, useState } from 'react';
import NavbarChild from './NavbarChild';

const Navbar = () => {
  useEffect(() => {
    const navbar = document.querySelector('.nav-fixed');
    const handleScroll = () => {
      if (window.scrollY > 200) {
        navbar?.classList.add('bg-theme');
      } else {
        navbar?.classList.remove('bg-theme');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
       handleScroll();
    };
  }); // Empty dependencies array to run the effect only once

  return (
    <div className={`fixed w-full primary-container font-inter text-white ${window.location.pathname=='/' && 'nav-fixed'} z-20 bg-theme`}>
      <NavbarChild />
    </div>
  );
};

export default Navbar;

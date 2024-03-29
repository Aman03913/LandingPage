import React from 'react';
import { Button } from "@/components/ui/button";

import Image from 'next/image';
import logo from '../../../public/logo.png';

const Header = () => {
  return (
    <header style={{ backgroundColor: "#501A7A", height: '100px', display: 'flex', alignItems: 'center' }}>
      <div className='flex flex-row items-center justify-between' style={{ width: '100%', padding: '0 20px' }}>
        <div style={{ marginRight: '20px' }}>
          <Image src={logo} alt="Block-Pen Logo" style={{ width: '185px', height: '50px' }} />
        </div>
        <a href="https://app.blockpen.xyz" target="_blank" rel="noopener noreferrer">
    <Button className="bg-gradient-to-r from-pink-500 to-gray-800 text-white" style={{ width: '200px', height: '40px' }}>
      Get Started
    </Button>
  </a>
       
      </div>
    </header>
  );
};

export default Header;

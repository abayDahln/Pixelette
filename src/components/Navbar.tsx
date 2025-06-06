import React from 'react';
import { Link } from 'react-scroll';
import icon from '../../public/resource/pixelette_logo.png'

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-70 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img className="h-8 w-8" src={icon}  />
          <span className="text-2xl font-bold bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 bg-clip-text text-transparent">
            Pixelatte
          </span>
        </div>
        
        <div>
          <button className="bg-gradient-to-r from-blue-600 to-purple-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all">
            <Link to='home' smooth={true}>
                Download
            </Link>
            
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
import React from 'react';
import { Download } from 'lucide-react';
import ColorGrid from './ColorGrid';
import element from '../../public/resource/element_color.png'

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-20 pb-20 relative overflow-hidden">
      <div className='pt-20'>
        <ColorGrid position="top-left" colors={['red', 'orange']} />
        <ColorGrid position="top-right" colors={['yellow', 'green']} />
        <ColorGrid position="bottom-left" colors={['blue', 'orange']} />
        <ColorGrid position="bottom-right" colors={['purple', 'green']} />
      </div>
      
      
      <div className="container mx-auto px-12 py-8 sm:py-16 relative z-10 lg:px-28">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          
         
          <div className="w-full lg:max-w-3xl text-start px-14">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 fade-in-up">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-red-500 to-blue-400 bg-clip-text text-transparent">
                Pixelatte
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 fade-in-up fade-in-up-delay-1">
              The color management tool for designers and developers.
              Extract, convert, and manipulate colors with precision and ease.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-start gap-4 fade-in-up fade-in-up-delay-2">
              <a
                href="/download/Pixelatte_Installer.msi"
                download
                className="bg-gradient-to-r from-red-400 to-blue-500 text-white px-5 sm:px-7 py-3 rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2 text-base sm:text-lg font-medium button-hover-effect"
              >
                <Download className="h-5 w-5" />
                Download for Windows
              </a>
            </div>

          </div>

        
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg fade-in-up">
            <img src={element} alt="Pixelatte Preview" className="w-full h-auto" />
          </div>
        </div>
      </div>


    </section>
  );
};

export default Hero;
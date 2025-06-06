import React from 'react';
import { Github, Mail, Heart, Instagram } from 'lucide-react';
import logo from '../../public/resource/pixelette_logo.png'; 

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={logo} className="h-8 w-8" />
              <span className="text-2xl font-bold bg-gradient-to-r from-red-600 via-yellow-400 to-green-400 bg-clip-text text-transparent">
                Pixelatte
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              The ultimate color management tool for designers and developers.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/abayDahln" className="text-gray-400 hover:text-white transition-colors" target="_blank">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/abby_dahln/" className="text-gray-400 hover:text-white transition-colors" target="_blank">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://mail.google.com/mail/u/0/?fs=1&to=abby11dahlan@gmail.com&su&body&tf=cm" className="text-gray-400 hover:text-white transition-colors" target="_blank">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="" className="text-gray-400 hover:text-white transition-colors">Download</a></li>
              <li><a href="" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="" className="text-gray-400 hover:text-white transition-colors">Changelog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="" className="text-gray-400 hover:text-white transition-colors">Tutorials</a></li>
              <li><a href="" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p className="flex items-center justify-center gap-1">
            Made with <Heart className="h-4 w-4 text-red-500" /> by Abby Dahlan Havizh © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
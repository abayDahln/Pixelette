import React from 'react';
import { Palette, Droplet, Pipette, Share2, Image, Copy } from 'lucide-react';
import ColorGrid from './ColorGrid';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 h-full">
      <div className="bg-purple-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4 text-purple-600">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      id: 1,
      icon: <Palette className="w-6 h-6" />,
      title: "Color Converter",
      description: "Instantly convert between HEX, RGB, HSL, and CMYK formats with precision and ease."
    },
    {
      id: 2,
      icon: <Droplet className="w-6 h-6" />,
      title: "Color Harmonies",
      description: "Generate harmonious color schemes like complementary, triadic, and analogous in one click."
    },
    {
      id: 3,
      icon: <Pipette className="w-6 h-6" />,
      title: "Smart Color Picker",
      description: "Pick any color from your screen or images with pixel-perfect accuracy and real-time preview."
    },
    {
      id: 4,
      icon: <Share2 className="w-6 h-6" />,
      title: "Export Palette",
      description: "Export a color theme as a beautiful color palette to share or save in your folder."
    },
    {
      id: 5,
      icon: <Image className="w-6 h-6" />,
      title: "Image Palette Extractor",
      description: "Upload any image to extract its most dominant and beautiful colors automatically."
    },
    {
      id: 6,
      icon: <Copy className="w-6 h-6" />,
      title: "One-Click Copy",
      description: "Quickly copy any color code to your clipboard with a single click - simple and efficient."
    }
  ];



  return (
    <section id="features" className="py-12 bg-gray-50 relative overflow-hidden">
      <ColorGrid position="bottom-left" colors={['purple', 'red']} />
      <ColorGrid position="bottom-right" colors={['purple', 'blue']} />
      <ColorGrid position="top-left" colors={['orange', 'yellow']} />
      <ColorGrid position="top-right" colors={['yellow', 'green']} />
      
      <div className="container mx-auto px-4 relative z-10 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 fade-in-up fade-in-up-delay-3">Powerful Features</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto fade-in-up fade-in-up-delay-3">
            Pixelatte comes packed with essential tools for designers and developers
            who work with colors every day.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {features.map((feature, index) => (
            <div className={`fade-in-up fade-in-up-delay-3`}>
              <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
            </div>
            
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
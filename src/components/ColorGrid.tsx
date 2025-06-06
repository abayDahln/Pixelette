import React, { useCallback, useRef } from 'react';

interface ColorGridProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  colors: string[];
}

const ColorGrid: React.FC<ColorGridProps> = ({ position, colors }) => {
  const gridRef = useRef<HTMLDivElement>(null);

  const getPositionClasses = () => {
    switch (position) {
      case 'top-left':
        return 'top-0 left-0';
      case 'top-right':
        return 'top-0 right-0';
      case 'bottom-left':
        return 'bottom-0 left-0';
      case 'bottom-right':
        return 'bottom-0 right-0';
      default:
        return '';
    }
  };

  const getColorClass = (color: string) => {
    switch (color) {
      case 'red':
        return 'bg-red-600';
      case 'blue':
        return 'bg-blue-600';
      case 'purple':
        return 'bg-purple-400';
      case 'green':
        return 'bg-green-500';
      case 'yellow':
        return 'bg-yellow-500';
        case 'orange':
          return 'bg-orange-500';
      default:
        return 'bg-gray-500';
    }
  };

  const handlePixelHover = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const pixel = event.currentTarget;
    const rect = pixel.getBoundingClientRect();
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    
    const pixelCenterX = rect.left + rect.width / 2;
    const pixelCenterY = rect.top + rect.height / 2;
    
    const directionX = pixelCenterX - mouseX;
    const directionY = pixelCenterY - mouseY;
    
    const length = Math.sqrt(directionX * directionX + directionY * directionY);
    const normalizedX = (directionX / length) * 100;
    const normalizedY = (directionY / length) * 100;
    
    const randomOffset = Math.random() * 20 - 10;
    const translateX = normalizedX + randomOffset;
    const translateY = normalizedY + randomOffset;
    
    pixel.style.setProperty('--translate-x', `${translateX}px`);
    pixel.style.setProperty('--translate-y', `${translateY}px`);
    pixel.style.transform = `translate(${translateX}px, ${translateY}px)`;
  }, []);

  const renderGrid = () => {
    const grid = [];
    const size = window.innerWidth < 640 ? 4 : 6;
    
    for (let i = 0; i < size; i++) {
      const row = [];
      for (let j = 0; j < size; j++) {
        // Calculate distance from center
        const centerX = (size - 1) / 2;
        const centerY = (size - 1) / 2;
        const distanceFromCenter = Math.sqrt(
          Math.pow(i - centerX, 2) + Math.pow(j - centerY, 2)
        );
        
        // More likely to have pixels further from center
        const threshold = 0.3 + (distanceFromCenter / size) * 0.5;
        const hasColor = Math.random() < threshold;
        
        if (hasColor) {
          const colorIndex = Math.floor(Math.random() * colors.length);
          row.push(
            <div 
              key={`${i}-${j}`} 
              className={`w-8 h-8 sm:w-10 sm:h-10 ${getColorClass(colors[colorIndex])} opacity-80 pixel transition-transform duration-500 ease-out`}
              onMouseEnter={handlePixelHover}
            />
          );
        } else {
          row.push(
            <div 
              key={`${i}-${j}`} 
              className="w-8 h-8 sm:w-10 sm:h-10 bg-transparent"
            />
          );
        }
      }
      grid.push(
        <div key={i} className="flex">
          {row}
        </div>
      );
    }
    return grid;
  };

  return (
    <div 
      ref={gridRef}
      className={`absolute ${getPositionClasses()} z-0 hidden sm:block md:block`}
    >
      {renderGrid()}
    </div>
  );
};

export default ColorGrid;
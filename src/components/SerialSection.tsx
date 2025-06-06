import React, { useState, useCallback } from 'react';
import { Key, X } from 'lucide-react';

const SerialSection: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isGenerating] = useState(false);

  function generateRandomNumbers(count: number): number[] {
    const targetSum = count * 3;
    const numbers: number[] = new Array(count).fill(0);

    let remaining = targetSum;

    for (let i = 0; i < count; i++) {
        const left = count - i - 1;

        
        const min = Math.max(0, remaining - left * 9);
        const max = Math.min(9, remaining);

        const rand = Math.floor(Math.random() * (max - min + 1)) + min;
        numbers[i] = rand;
        remaining -= rand;
    }

    return numbers;
}



  function generateSerialNumber(): string {
    function getRandomDigit()
    {
      let a;
      do {
        a = Math.floor(Math.random() * 10);
      }
      while(a == 10)
      return a 

    };

    const randomNumbers = generateRandomNumbers(7);
    let part1 = `${getRandomDigit()}${getRandomDigit()}${getRandomDigit()}${randomNumbers[0]}`;
    let part2 = `${randomNumbers[1]}${randomNumbers[2]}${getRandomDigit()}${randomNumbers[3]}`;
    let part3 = `${getRandomDigit()}${randomNumbers[4]}${randomNumbers[5]}${randomNumbers[6]}`;

    return `${part1}-${part2}-${part3}`;
  }


  
  const openDialog = useCallback(() => {
    setIsDialogOpen(true);
    generateSerialNumber();
  }, [generateSerialNumber()]);

  const closeDialog = useCallback(() => setIsDialogOpen(false), []);

  return (
    <section id="serial" className="py-20 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center py-10">
          <h2 className="text-4xl font-bold mb-4">Ready to Unlock the Full Potential?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get your unique serial number and enjoy unlimited access to all Pixelatte features
          </p>
          
          <button 
            onClick={openDialog}
            disabled={isGenerating}
            className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-opacity-95 transition-all shadow-lg flex items-center justify-center gap-2 mx-auto font-medium disabled:opacity-50"
          >
            <Key className="h-5 w-5" />
            {isGenerating ? 'Generating...' : 'Get Serial Number'}
          </button>
        </div>
      </div>

      {isDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white text-gray-800 rounded-xl p-6 max-w-md w-full shadow-2xl relative animate-fadeIn">
            <button 
              onClick={closeDialog}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="text-center mb-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Key className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold">Your Serial Number</h3>
              <p className="text-gray-600 mt-2">Use this serial number to activate Pixelatte</p>
            </div>
            
            <div className="bg-gray-100 py-4 px-6 rounded-lg text-center mb-6">
              <p className="font-mono text-lg text-purple-700 select-all">
                {generateSerialNumber()}
              </p>
            </div>
            
            <div className="flex gap-3">
              
              <button 
                onClick={closeDialog}
                className="flex-1 bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 rounded-lg hover:shadow-lg transition-all"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SerialSection;
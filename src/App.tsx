import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import SerialSection from './components/SerialSection';
import Footer from './components/Footer';
import { Link as ScrollLink } from 'react-scroll';
import { ChevronUp } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <Hero />
      <Features />
      <SerialSection />
      <Footer />
      
      {/* Scroll to top button */}
      <ScrollLink
        to="home"
        smooth={true}
        duration={500}
        className="fixed bottom-6 right-6 bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition-colors cursor-pointer z-50"
      >
        <ChevronUp className="h-6 w-6" />
      </ScrollLink>
    </div>
  );
}

export default App;
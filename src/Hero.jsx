import { useState, useEffect } from 'react';

function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  
  const titles = [
    'Developer', 
    'Problem Solver', 
    'Creative Thinker',
    'Team Collaborator'
  ];
  
  // Show/hide scroll indicator based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setShowScrollIndicator(true);
      } else {
        setShowScrollIndicator(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Typing effect
  useEffect(() => {
    if (currentIndex < titles.length) {
      const currentTitle = titles[currentIndex];
      let charIndex = 0;
      
      const timer = setInterval(() => {
        if (charIndex <= currentTitle.length) {
          setDisplayText(currentTitle.substring(0, charIndex));
          charIndex++;
        } else {
          clearInterval(timer);
          setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % titles.length);
          }, 2000);
        }
      }, 100);
      
      return () => clearInterval(timer);
    }
  }, [currentIndex]);

  // Scroll handlers
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center relative overflow-hidden">
      
      {/* HIGHLY VISIBLE BURGUNDY GLOW */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-burgundy-500 rounded-full opacity-60 mix-blend-screen filter blur-[120px] animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-burgundy-400 rounded-full opacity-50 mix-blend-screen filter blur-[90px] animate-pulse animation-delay-1500"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-burgundy-600 rounded-full opacity-40 mix-blend-screen filter blur-[60px] animate-pulse animation-delay-3000"></div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
      
      <div className="text-center z-10 px-4 max-w-4xl relative">
        <h1 className="text-5xl md:text-7xl font-elegant font-bold text-white mb-6 tracking-tight">
          Hi, I'm <span className="text-burgundy-400 relative">
            <span className="absolute inset-0 text-black blur-sm opacity-70">Rahma Abdela</span>
            <span className="relative">Rahma Abdela</span>
          </span>
        </h1>
        
        <div className="h-20 mb-8">
          <h2 className="text-2xl md:text-4xl font-sans-elegant text-gray-300 font-light tracking-wide">
            I'm a <span className="text-burgundy-400 relative">
              <span className="absolute inset-0 text-black blur-sm opacity-70 border-r-2 border-black">{displayText}</span>
              <span className="relative border-r-2 border-burgundy-400 animate-pulse">{displayText}</span>
            </span>
          </h2>
        </div>
        
        <p className="text-lg md:text-xl font-sans-elegant text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed tracking-wide">
          Computer Science student passionate about creating elegant solutions 
          to complex problems through code, creativity, and collaboration.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button
            onClick={scrollToProjects}
            className="bg-gradient-to-r from-burgundy-600 to-burgundy-700 hover:from-burgundy-700 hover:to-burgundy-800 text-white px-10 py-4 rounded-lg font-sans-elegant font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 border-black/50 hover:border-black/70 relative overflow-hidden"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-black/5"></div>
          </button>
          
          <button
            onClick={scrollToContact}
            className="border-2 border-burgundy-500 text-burgundy-400 hover:bg-burgundy-500 hover:text-white px-10 py-4 rounded-lg font-sans-elegant font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-black/40 border-2 border-black/60 hover:border-black/80 relative overflow-hidden"
          >
            <span className="relative z-10">Get In Touch</span>
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-black/5"></div>
          </button>
        </div>
      </div>
      
      {showScrollIndicator && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex flex-col items-center text-burgundy-400 drop-shadow-lg">
            <span className="text-sm font-sans-elegant mb-2 opacity-80 text-white drop-shadow-md">Scroll</span>
            <svg className="w-6 h-6 animate-bounce drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      )}
    </section>
  );
}

export default Hero;

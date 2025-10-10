import React from 'react';

function Navbar() {
  const sections = ['about', 'projects', 'contact'];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-sm z-50 shadow-lg">
      <div className="container mx-auto px-4 flex justify-end gap-8 h-16 pt-4 font-sans-elegant text-gray-300">
        {sections.map((sec) => (
          <a
            key={sec}
            href={`#${sec}`}
            className="hover:text-burgundy-400 transition-colors duration-300"
          >
            {sec.charAt(0).toUpperCase() + sec.slice(1)}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;

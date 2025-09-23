function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-6xl">👩‍💻</span>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
            </div>
          </div>

          {/* Right Column - Text */}
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-gray-800">Hi, I'm Rahma!</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a passionate Computer Science student with a love for creating beautiful, 
              functional web applications. I enjoy turning complex problems into simple, 
              intuitive solutions.
            </p>
            
            {/* Skills */}
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">My Skills</h4>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-blue-500 text-white rounded-full">JavaScript</span>
                <span className="px-4 py-2 bg-green-500 text-white rounded-full">React</span>
                <span className="px-4 py-2 bg-red-500 text-white rounded-full">Node.js</span>
                <span className="px-4 py-2 bg-purple-500 text-white rounded-full">Python</span>
                <span className="px-4 py-2 bg-yellow-500 text-white rounded-full">HTML/CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
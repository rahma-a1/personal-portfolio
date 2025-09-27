import { useState } from 'react';

function About() {
  const [activeTab, setActiveTab] = useState('skills');

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      
      {/* Sophisticated background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-burgundy-900/10 via-transparent to-transparent"></div>
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-burgundy-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-10 w-80 h-80 bg-burgundy-500/5 rounded-full blur-3xl"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(122,28,46,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(122,28,46,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Elegant Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-burgundy-600/20 rounded-full mb-6 border border-burgundy-500/30">
            <svg className="w-8 h-8 text-burgundy-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h2 className="text-5xl md:text-6xl font-elegant font-light text-white mb-6 tracking-tight">
            About <span className="text-burgundy-400 font-medium">Me</span>
          </h2>
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-burgundy-500 to-transparent mx-auto mb-8"></div>
          <p className="text-xl font-sans-elegant text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Crafting digital experiences through code, creativity, and meticulous attention to detail
          </p>
        </div>

        {/* Enhanced Content Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-12 items-start">
          
          {/* Profile Section - More Elegant */}
          <div className="xl:col-span-2">
            <div className="relative group">
              {/* Main Profile Card */}
              <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/90 rounded-3xl p-8 border border-gray-700/50 backdrop-blur-sm shadow-2xl">
                
                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-burgundy-500/40 rounded-tl-3xl"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-burgundy-500/40 rounded-br-3xl"></div>
                
                <div className="text-center">
                  {/* Elegant initial circle */}
                  <div className="relative inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-burgundy-600 to-burgundy-800 rounded-full mb-6 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                    <div className="w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center border-2 border-burgundy-500/30">
                      <span className="text-4xl font-elegant font-bold text-burgundy-300">R</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-elegant font-semibold text-white mb-2">Rahma</h3>
                  <p className="text-burgundy-400 font-sans-elegant font-medium mb-4">Computer Science Student</p>
                  
                  {/* Mini stats */}
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="text-center">
                      <div className="text-lg font-bold text-white">10+</div>
                      <div className="text-xs text-gray-400">Technologies</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-white">5+</div>
                      <div className="text-xs text-gray-400">Languages</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-burgundy-500/20 rounded-full border border-burgundy-500/30 backdrop-blur-sm"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-burgundy-600/20 rounded-full border border-burgundy-500/20 backdrop-blur-sm"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="xl:col-span-3 space-y-8">
            
            {/* Enhanced Bio Card */}
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/70 rounded-2xl p-8 border border-gray-700/50 backdrop-blur-sm shadow-xl">
              <h3 className="text-2xl font-elegant font-semibold text-burgundy-400 mb-6 flex items-center">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                My Journey in Tech
              </h3>
              <div className="space-y-4">
                <p className="text-lg font-sans-elegant text-gray-300 leading-relaxed">
                  With a solid foundation in computer science principles and hands-on experience across multiple programming 
                  paradigms, I specialize in creating solutions that are both technically robust and user-centric.
                </p>
                <p className="text-lg font-sans-elegant text-gray-300 leading-relaxed">
                  My approach combines analytical problem-solving with creative design thinking, ensuring that every 
                  project not only functions flawlessly but also delivers an exceptional user experience.
                </p>
              </div>
            </div>

            {/* Enhanced Interactive Tabs */}
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/70 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm shadow-xl">
              <div className="flex flex-wrap gap-3 mb-8">
                {['skills', 'tools', 'soft-skills'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 rounded-xl font-sans-elegant font-medium transition-all duration-300 flex items-center ${
                      activeTab === tab
                        ? 'bg-gradient-to-r from-burgundy-600 to-burgundy-700 text-white shadow-lg'
                        : 'bg-gray-700/30 text-gray-400 hover:bg-gray-700/50 hover:text-gray-300'
                    }`}
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {tab.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </button>
                ))}
              </div>

              {/* Enhanced Tab Content */}
              <div className="min-h-48">
                {activeTab === 'skills' && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {['Python', 'Java', 'JavaScript', 'TypeScript', 'C/C++', 'C#', 'SQL', 'HTML5', 'CSS3', 'Assembly'].map((skill) => (
                      <div key={skill} className="bg-gray-900/40 rounded-lg p-4 text-center border border-gray-700/30 hover:border-burgundy-500/50 hover:bg-gray-900/60 transition-all duration-300 group">
                        <span className="text-gray-300 font-sans-elegant font-medium group-hover:text-white">{skill}</span>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'tools' && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {['React', 'Node.js', 'Next.js', 'Flask', 'JavaFx', 'Git', 'VS Code', 'IntelliJ', 'Azure', 'JUnit', 'Pandas', 'NumPy'].map((tool) => (
                      <div key={tool} className="bg-gray-900/40 rounded-lg p-4 text-center border border-gray-700/30 hover:border-burgundy-500/50 hover:bg-gray-900/60 transition-all duration-300 group">
                        <span className="text-gray-300 font-sans-elegant font-medium group-hover:text-white">{tool}</span>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'soft-skills' && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {['Problem Solving', 'Team Collaboration', 'Communication', 'Adaptability', 'Critical Thinking', 'Time Management', 'Attention to Detail', 'Creativity', 'Leadership'].map((skill) => (
                      <div key={skill} className="bg-gray-900/40 rounded-lg p-4 text-center border border-gray-700/30 hover:border-burgundy-500/50 hover:bg-gray-900/60 transition-all duration-300 group">
                        <span className="text-gray-300 font-sans-elegant font-medium group-hover:text-white">{skill}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
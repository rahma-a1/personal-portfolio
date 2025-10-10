import { useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.send(
      'service_35xfcmp',     
      'template_sp1ynsj',  
      formData,
      'j_x2OWcrBHT-bBd0q'      
    )
    .then(() => {
      setIsSubmitting(false);
      alert("Message sent! I'll get back to you soon.");
      setFormData({ name: '', email: '', message: '' });
    }, (error) => {
      setIsSubmitting(false);
      alert('Oops! Something went wrong.');
      console.error(error);
    });
  };

  const contactInfo = {
    email: 'abdelarahma510@gmail.com',
    linkedin: 'https://linkedin.com/in/rahma-abdela',
    github: 'https://github.com/rahma-a1'
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${contactInfo.email}`;
  };
  const handleLinkedInClick = () => {
    window.open(contactInfo.linkedin, '_blank');
  };
  const handleGitHubClick = () => {
    window.open(contactInfo.github, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-burgundy-600/10 rounded-full mix-blend-soft-light filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-burgundy-500/10 rounded-full mix-blend-soft-light filter blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(122,28,46,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(122,28,46,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-burgundy-600/20 rounded-full mb-6 border border-burgundy-500/30">
            <svg className="w-8 h-8 text-burgundy-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-5xl md:text-6xl font-elegant font-light text-white mb-6 tracking-tight">
            Get In <span className="text-burgundy-400 font-medium">Touch</span>
          </h2>
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-burgundy-500 to-transparent mx-auto mb-8"></div>
          <p className="text-xl font-sans-elegant text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Ready to collaborate or have a question? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/70 rounded-2xl p-8 border border-gray-700/50 backdrop-blur-sm shadow-xl">
              <h3 className="text-2xl font-elegant font-semibold text-burgundy-400 mb-6">Let's Connect</h3>
              
              <div className="space-y-6">
                <div onClick={handleEmailClick} className="flex items-center space-x-4 group cursor-pointer p-3 rounded-lg hover:bg-gray-700/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-burgundy-600/20 rounded-lg flex items-center justify-center group-hover:bg-burgundy-600/30 transition-colors border border-burgundy-500/20">
                    <svg className="w-6 h-6 text-burgundy-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-gray-300 font-medium group-hover:text-burgundy-400 transition-colors">{contactInfo.email}</p>
                  </div>
                </div>

                <div onClick={handleLinkedInClick} className="flex items-center space-x-4 group cursor-pointer p-3 rounded-lg hover:bg-gray-700/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-burgundy-600/20 rounded-lg flex items-center justify-center group-hover:bg-burgundy-600/30 transition-colors border border-burgundy-500/20">
                    <svg className="w-6 h-6 text-burgundy-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">LinkedIn</p>
                    <p className="text-gray-300 font-medium group-hover:text-burgundy-400 transition-colors">linkedin.com/in/rahma-abdela</p>
                  </div>
                </div>

                <div onClick={handleGitHubClick} className="flex items-center space-x-4 group cursor-pointer p-3 rounded-lg hover:bg-gray-700/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-burgundy-600/20 rounded-lg flex items-center justify-center group-hover:bg-burgundy-600/30 transition-colors border border-burgundy-500/20">
                    <svg className="w-6 h-6 text-burgundy-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">GitHub</p>
                    <p className="text-gray-300 font-medium group-hover:text-burgundy-400 transition-colors">github.com/rahma-a1</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Note */}
            <div className="bg-gradient-to-br from-burgundy-600/10 to-burgundy-800/10 rounded-2xl p-6 border border-burgundy-500/20 backdrop-blur-sm">
              <h4 className="text-lg font-elegant font-semibold text-burgundy-400 mb-3">Quick Response</h4>
              <p className="text-gray-400 font-sans-elegant text-sm leading-relaxed">
                I typically respond within 24 hours. For urgent matters, feel free to connect with me on LinkedIn.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/70 rounded-2xl p-8 border border-gray-700/50 backdrop-blur-sm shadow-xl">
            <h3 className="text-2xl font-elegant font-semibold text-burgundy-400 mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-sans-elegant font-medium text-gray-400 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-burgundy-500 focus:ring-1 focus:ring-burgundy-500 transition-colors font-sans-elegant"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-sans-elegant font-medium text-gray-400 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-burgundy-500 focus:ring-1 focus:ring-burgundy-500 transition-colors font-sans-elegant"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-sans-elegant font-medium text-gray-400 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-burgundy-500 focus:ring-1 focus:ring-burgundy-500 transition-colors font-sans-elegant resize-none"
                  placeholder="Tell me about your project or question..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-burgundy-600 to-burgundy-700 hover:from-burgundy-700 hover:to-burgundy-800 text-white py-4 rounded-lg font-sans-elegant font-semibold transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none border-2 border-black/50 relative overflow-hidden"
              >
                <span className="relative z-10">{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-black/5"></div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

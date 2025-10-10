import React from "react";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio built with React and Tailwind CSS to showcase my projects, skills, and achievements.",
      link: "https://github.com/rahma-a1/personal-portfolio",
    },
    {
      title: "Password Manager",
      description:
        "A Java-based password manager that securely stores and manages user credentials using AES encryption and JavaFX interface.",
      link: "https://github.com/rahma-a1/Password-Manager",
    },
    {
      title: "OMG Gaming Platform",
      description:
        "A multiplayer platform featuring Connect 4, Checkers, and Tic Tac Toe with real-time chat, player profiles, and leaderboard system.",
      link: "https://github.com/rahma-a1/OMG-Gaming-Platform",
    },
    {
      title: "Soccer Team Tracker",
      description:
        "A Java program that manages soccer team data, including players, scores, and statistics, for easy tracking.",
      link: "https://github.com/rahma-a1/soccer-team-tracker",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Title with subtle black border */}
        <h2 className="text-5xl md:text-6xl font-serif font-extrabold mb-16 text-burgundy-400 tracking-tight inline-block px-6 py-2 border border-black/40 rounded-md">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl overflow-hidden transition-transform duration-500 hover:scale-105"
            >
              {/* Glow overlay */}
              <div className="absolute inset-0 bg-burgundy-600/10 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>

              {/* Project Title */}
              <h3 className="text-2xl font-serif font-semibold mb-4 text-burgundy-300 relative group-hover:text-burgundy-400 transition-colors duration-300">
                {project.title}
                <span className="block h-0.5 w-0 bg-burgundy-400 mt-1 transition-all duration-500 group-hover:w-full"></span>
              </h3>

              <p className="text-gray-300 text-base leading-relaxed mb-6 font-sans">
                {project.description}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-burgundy-600 to-burgundy-700 text-white px-6 py-2 rounded-full font-medium shadow-lg hover:from-burgundy-700 hover:to-burgundy-800 hover:scale-105 transition-all duration-300"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

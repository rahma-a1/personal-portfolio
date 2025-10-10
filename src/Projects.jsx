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
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-5xl font-serif font-bold mb-16 text-burgundy-400 tracking-tight">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-lg hover:scale-105 hover:shadow-burgundy-600/50 transition-transform duration-500"
            >
              <h3 className="text-2xl font-serif font-semibold mb-4 text-burgundy-300 group-hover:text-burgundy-400 transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-gray-300 text-base leading-relaxed mb-6 font-sans">
                {project.description}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-burgundy-400 border border-burgundy-400 px-6 py-2 rounded-lg font-medium hover:bg-burgundy-500 hover:text-white transition-all duration-300"
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

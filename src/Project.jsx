import React from "react";
import ProjectCard from "./ProjectCard";

function Project() {
  return (
    <div id="project" style={{ textAlign: "left", fontFamily: "PT Sans, sans-serif", fontWeight: "100", color: "#2F2A2A" }}>
      <h1>Projects</h1>
      <hr style={{ border: "1px solid black", backgroundColor: "black", color: "black" }} />
      <ProjectCard 
      Title="Band Name Generator"
      Area="Software Development"
      Year="2024"
      image="./Project image.png"
      description="This Express.js app serves dynamic content with EJS templating. It listens on port 3000, renders index.ejs for the root route, and generates a random name from predefined arrays upon form submission. It also includes dynamic year display in the footer and applies CSS from the public directory."
      link="https://ayomide11233.github.io/Portfolio/project1.html"
      />
      <ProjectCard 
      Title="Simon Says Game"
      Area="Software Development"
      Year="2024"
      image="./Project image 2.png"
      description="This Simon Says game uses HTML, CSS, and JavaScript to create an interactive memory challenge. Players must replicate an increasingly complex sequence of colors and sounds. The game features a start button, score tracking, and visual/audio feedback for correct and incorrect inputs."
      link="https://ayomide11233.github.io/Portfolio/project2.html"
      />
      <ProjectCard 
      Title="Devante's Portfolio"
      Area="Ux/UI Design"
      Year="2025"
      image="./Project image 3.png"
      description="A sleek and modern portfolio website designed to showcase a Client's projects and skills. The site features a clean layout, intuitive navigation, and responsive design to ensure optimal viewing across devices. It includes sections for about, projects, experience, and contact information."
      link="https://ayomide11233.github.io/Portfolio/project4.html"
      />
    </div>
  );
}

export default Project;
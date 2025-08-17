import React from "react";

const customstyles = {
  textAlign: "left",
  fontFamily: "PT Sans, sans-serif",
  fontWeight: "100",
    color: "#2F2A2A",

};


function About() {
  return (
    <div id="about" style={customstyles}>
        <h1>About</h1>
<hr style={{ border: "1px solid black", backgroundColor: "black", color: "black" }} />
        <p style={{fontWeight:"bold"}}>I’m Ayomide D. Sayo-Adeyemi, a Software Engineering student at the University of Calgary (graduating May 2027) with a concentration in Intelligence and Modeling/Simulations.</p>

        <br />
        <p>My passion lies in creating functional, visually appealing, and intuitive digital products — whether it’s through clean, maintainable code or thoughtful UX/UI design.</p>
        <br />
        <p>Alongside my engineering studies, I run fadedvisuals, a freelance graphic design brand specializing in album covers, logos, apparel mockups, lyric videos, DJ visuals, and digital artwork. I work with artists, creators, and brands to bring bold ideas to life through creative visuals and animations, while managing every aspect from design to delivery.</p>
        <br />
        <p>I’ve worked across JavaScript frameworks like React.js and Express.js, combining them with design tools like Figma and Adobe Creative Suite to build projects with engaging transitions, animations, and structured user flows.</p>
        <br />
        <p>Outside academics and business, I contribute as a graphic designer at New Covenant Assembly, leading design efforts for both print and digital media.</p>
        <br />
        <br />
        <ul>
            <li>Software Engineer</li>
            <li>Ux/UI Designer</li>
            <li>Graphic Designer</li>
        </ul>

        <br />
        <p>Connect @</p>
        <button
        style={{
          background: "#8B4513",
          color: "white",
          borderRadius: "16px",
          padding: "16px",
          display: "inline-block",
          fontWeight: "bold",
          fontFamily: "inherit",
          fontSize: "1.1em",
          marginTop: "8px"
        }}
        onClick={() => window.location = "mailto:ay2006.mide@gmail.com"}
      >
    ay2006.mide@gmail.com
      </button>
     <button
  style={{
    background: "#9A8E8E",
    color: "white",
    borderRadius: "16px",
    padding: "16px",
    display: "inline-block",
    fontWeight: "bold",
    fontFamily: "inherit",
    fontSize: "1.1em",
    marginTop: "8px",
    border: "none",
    cursor: "pointer",
    right: "32px",
      // <-- stick to the right
   
  }}
  onClick={() => window.open("https://www.linkedin.com/in/ayomide-sayo-adeyemi-24474b26a/", "_blank")}
>
  Explore LinkedIn
</button>
    </div>
  );
}

export default About;
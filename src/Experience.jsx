import React from "react";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  return (
    <div id="experience" style={{ textAlign: "left", fontFamily: "PT Sans, sans-serif", fontWeight: "100", color: "#2F2A2A", padding: "0 1rem" }}>
      <h1 style={{fontSize: "clamp(28px, 6vw, 40px)"}}>Experience</h1>
      <hr style={{ border: "1px solid black", backgroundColor: "black", color: "black" }} />
          <ExperienceCard
      Title="Founder & Creative Director — fadedvisuals"
      Title2="Graphic Design Brand"
      Year="2023 - Present"
      description="Provide freelance design services including album covers, logos, apparel mockups, lyric videos, DJ visuals, and digital artwork.
      Collaborate with musicians, content creators, and brands to create custom visuals aligned with their vision and brand identity.
      Manage project timelines, client communication, and payment tracking for smooth operations.
      and Expanded offerings to include poster design and apparel mockup sales. "
      position="Graphic Designer"
      location="Calgary, Alberta, Canada"
      industry="Design"
      website="https://www.instagram.com/_fadedvisuals/"
    />
          <ExperienceCard
      Title="Graphic Design Member — New Covenant Assembly"
      Title2="Graphic Designer"
      Year="2024 - Present"
      description="Designed and produced digital and print materials (posters, social media graphics, bulletins) for church communications.
      Ensured brand consistency across multiple platforms. and Coordinated and guided volunteers for creative projects."
      position="Graphic Designer"
      location="Calgary, Alberta, Canada"
      industry="Design"
      website="https://newcovenantassembly.ca/"
    />

        <ExperienceCard
      Title="Sales Associate — JD Sports"
      Title2="Sales"
      Year="2023 - 2024"
      description="Managed stock rotation and restocking to maintain product availability. Prepared and tagged merchandise for the sales floor. and Operated the cash register with accuracy and efficiency."
      position="Sales Associate"
      location="Calgary, Alberta, Canada"
      industry="Sales"
      website="https://www.jdsports.ca"
    />
    </div>
  );
}

export default Experience;
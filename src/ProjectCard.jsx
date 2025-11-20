import React from "react";

function ProjectCard(props) {
    return (
         <div style={{ 
            margin: "20px auto",
            fontFamily: "PT Sans, sans-serif",
            padding: "0 1rem"
        }}>
            <br />
            <h1 style={{ 
                fontSize: "clamp(24px, 5vw, 32px)", 
                fontWeight: "bold", 
                color: "#2F2A2A", 
                margin: "0 0 8px 0" 
            }}>{props.Title}</h1>
            
            <h2 style={{ 
                fontSize: "clamp(16px, 4vw, 20px)", 
                fontWeight: "normal", 
                color: "#2F2A2A", 
                margin: "0 0 8px 0" 
            }}>{props.Area}</h2>
            
            <p style={{ 
                fontSize: "clamp(14px, 3vw, 18px)", 
                fontWeight: "normal", 
                color: "#2F2A2A", 
                margin: "0 0 30px 0" 
            }}>{props.Year}</p>

            <img
                style={{
                    width: "100%",
                    maxWidth: "600px",
                    height: "auto",
                    padding: "10px",
                    margin: "0 auto",
                    display: "block",
                    objectFit: "cover",
                    borderRadius: "12px"
                }}
                src={props.image}
                alt="Project"
                />

                <br />

            <p style={{ 
                fontSize: "clamp(14px, 3vw, 18px)", 
                lineHeight: "1.5", 
                color: "#2F2A2A", 
                margin: "0 0 40px 0",
                textAlign: "justify"
            }}>
                {props.description}
            </p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <a href={props.link} style={{ color: "#2F2A2A", fontSize: "16px", textDecoration: "underline"  }}>Project.com</a>
            </div>

            </div>
    );

}

export default ProjectCard;